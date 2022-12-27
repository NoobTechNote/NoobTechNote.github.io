---
title: "Ch4: 透明多級分流系統"
tsidebar_label: "Ch4: 透明多級分流系統"
sidebar_position: 4
---

# 透明多及分流系統(Transparent Multilevel Diversion System)

:::tip
“分布广阔”源于“多级”，“意识不到”谓之“透明”
:::

從瀏覽器發出請求到收到回應的過程當中，會經過許多組件來達成這個回應能夠快速有效的到達客戶端手中，其中經過的不同的设施、部件在系统中有各自不同的價值

- 本地緩存、CDN、反向代理：位於客戶端或網絡的邊緣，能夠迅速響應用戶的請求，避免給後方的 I/O 與 CPU 帶來壓力
- Cluster Service: 有一些組件容易被擴展，可以快速部署到多台機器以乘載與用戶量匹配的併發性能，這樣的組件適合作為系統主要業務邏輯的載體
- 服務註冊中心、配置中心：有一些組件的穩定性會影響多個系統的存活與否，高可用性對於該組建而言至關重要，要不斷進行容錯備份
- 單點部件：只能依靠升級機器本身的存儲與運算效能來提升處理能力，如系統入口的路由、網關或者負載均衡器（它們都可以做集群，但一次網路請求中無可避免至少有一個是單點的部件）、位於請求調用鏈末端的資料庫等，都是典型的單點部件。

在設計系統時可以掌握兩個原則

1. 盡量減少單點組件，應搭配其他分流組件讓實際訪問道單點組件的流量降至最低

   例如：獲得一張儲存在資料庫的使用者照片，則要避免請求大多數都要到資料庫取得資料後返回
   讓系統在大多數的時間都能夠得到預期的結果，且讓單點系統在出現故障時能被迅速補救自，這便是系統架構中多級分流的意義

2. 系統的設計還是要回歸到使用需求，不是每個系統都必須具備乘載高併發與高可用性，同時也必須考量團隊維運的成本，總結而言，奧卡姆剃刀原則可以很精確的說明這個情況:

:::info
在能滿足需求的前提下，**最簡單的系統就是最好的系統**。
:::

## 4.1 客戶端快取 Client Cache

Http 協議在最一開始的設計就是保持 stateless 的特性
由於每次請求都是獨立的，服務端不保存在此之前的請求狀態和資源，導致多次請求與回應中往往都攜帶了重複的資源，這樣的資料傳輸易造成網路性能降低

因此，client cache 便是要解決此問題的，在 Http 從 1.0 到 2.0 的演進中
，有三種常見的緩存機制逐漸形成：

### 狀態快取

定義：不經過 server，直接在客戶端就返回過去請求中留下的結果

例如：

1. 301 永久導向
2. 後來在 RFC6797 中增加了[HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)（HTTP Strict Transport Security）機制，用於避免依賴 301/302 跳轉 HTTPS 時可能產生的降級中間人劫持

### 強制快取

- 定義資源時效性，確保在資源失效以前都會以快取資源返回
- 有效情境：瀏覽器輸入網址發送請求、Hyperlink、新開視窗、切換上一頁與下一頁
- 無效情境：主動刷新頁面會自動失效

Http 協議在 Header 有兩個參數可實現強制快取:

- **Expires** ：

```bash
HTTP/1.1 200 OK
Expires: Wed, 8 Apr 2020 07:28:00 GMT
```

- 在 Http/1.0 就支援，定義方式為截止時間的 timestamp
- Response Header 若攜帶此參數，則代表服務端保證在這個時間點之內該資源不會有變化，瀏覽器則直接保存這個請求資源，下次訪問時就不會將請求導至服務端
- 缺點：

  - 受限於本地時區，若修改了瀏覽器的時區，服務端回傳的截止日期將會失真
  - 私有資源緩存可能會被未有權限的使用者獲取到
  - 無法實現 **不緩存** 的語意（有時需使用 _“xx.js?t=1586359920”_、_“xx.jpg?t=1586359350”_，來保證每次資源都會重新獲取。)

- **Cache Control**：

```bash
HTTP/1.1 200 OK
Cache-Control: max-age=600
```

- Http/1.1 協議開始支援
- 如與 Expires 有衝突，則以 Cache-Control 為準
- 同時出現於 request 與 response header
-
- 提供多項參數來實現不同的快取機制:
  - max-age: 定義在請求時間多少秒後失效
  - s-maxage: 同 max-age， 差別在於這是定義 CDN 或 Proxy 的快取時效
  - public：定義是否涉及到用戶身份的私有資源，可被 CDN 或 Proxy 快取住
  - private: 同 public，只能在客戶端被快取
  - no-cache: 讓強制快取完圈失效的參數
  - no-store: 同 session 內的請求可被快取，但禁止瀏覽器與 CDN 以任何形式保存資源
  - no-transform: 禁止資源被修改，會讓 CDN 與代理服務的 Gzip 壓縮失效
  - min-fresh: 只有在 request header 會出現，用於建議服務端資源失效的時間(快取時效則會介於 max-age 到 min-fresh 的時間範圍)
  - only-if-cached: 只有在 request header 會出現，告訴服務端不須發送資源內容，讓客戶端強制使用本地快取的內容，如果本地快取不存在，則直接返回 503/Service Unavailable
  - must-revalidate: 資源過期後，必須從服務端重新獲取，也就是在 max-age 時間到後等同 no-cache 的狀態
  - proxy-revalidate: 同 must-revalidate，差別在於是定義給 CDN 或代理服務的快取失效行為

### 協商快取

- 以資源的變化檢查作為快取機制
- 相較於強制快取、效能較差，因會多一次變化檢查的開銷
- 有效情境：瀏覽器輸入網址發送請求、Hyperlink、新開視窗、切換上一頁與下一頁、刷新頁面
- 無效情境：強制刷新(Command/Control + F5)、在 DevTools 設定禁止快取(request header 會帶上 _Cache-Control: no-cache_)
- 主要有兩種實現機制：

1. **Last-Modified、If-Modified-Since**：Last-Modified 由 response header 帶回，下次發送同樣位置的請求時，會在 request header 帶上 If-Modified-Since 

當服務端確認此資源在 If-Modified-Since 的時間後沒有更動過，則以 304/Not Modified 返回

```bash
HTTP/1.1 304 Not Modified
Cache-Control: public, max-age=600
Last-Modified: Wed, 8 Apr 2020 15:31:30 GMT
```

反之，則返回 200/OK ，並攜帶新的資源

```bash
HTTP/1.1 200 OK
Cache-Control: public, max-age=600
Last-Modified: Wed, 8 Apr 2020 15:31:30 GMT

Content
```

2. **Etag、If-None-Match**：Etag 由 response header 提供，Etag 的生成方式可自行定義（Apache 以文件索引、大小與最後修改時間進行 hash 雜湊獲得），下次發送同樣位置的請求時，會在 request header 帶上 If-None-Match 

服務器的比對方式與 Last-Modified 相同
資源沒被更動，返回 304/Not Modified

```bash
HTTP/1.1 304 Not Modified
Cache-Control: public, max-age=600
ETag: "28c3f612-ceb0-4ddc-ae35-791ca840c5fa"
```

反之，則返回 200/OK 與新的資源

```
HTTP/1.1 200 OK
Cache-Control: public, max-age=600
ETag: "28c3f612-ceb0-4ddc-ae35-791ca840c5fa"

Content
```

#### Etag 與 Last-Modified 比較

1. Etag 可以解決 Last-Modified 文件在其支援的時間精度內多次修改資源所造成的資源的一致性問題
2. Etag 由於多了 hash 計算的消耗，因此是 http 中效能最差的緩存機制
3. 當 Etag 與 Last-Modified 同時存在時，會以 Etag 優先檢查，再檢查 Last-Modified 這是為了防止有一些 http 服務器未將修改日期納入雜湊範圍內

#### 快取綜合討論

1. 兩種機制可同時並存
2. 當強制快取的時效性還存在則直接採用強制快取的結果
3. 強制快取失效或是被禁止(no-cache/must-revalidate)，則採用協商快取的比對機制

#### 單一 URL 多資源返回的實現

透過 HTTP 的內容協商機制實現不同版本資源的獲得

- request header: Accept\*（Accept、Accept-Language、Accept-Charset、Accept-Encoding）
- response header: Content-\*（Content-Language、Content-Type、Content-Encoding）
- Vary: 定義快取要返回的內容依據

例子 : 根據 MIME 類型與瀏覽器類型作為資源快取依據

```bash
HTTP/1.1 200 OK
Vary: Accept, User-Agent
```
