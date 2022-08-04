---
title: "Ch6: 開發牢固的Web API"
sidebar_label: "Ch6: 開發牢固的Web API"
sidebar_position: 6
---

本章探討「**安全性**」與「**穩定性**」，思考如何開發牢固的Web API

## 6.1 讓Web API更安全
目的：防止第三方將使用者個資洩漏、竄改，以**提升用戶對系統的信任度**。

任何透過網路連線的電腦都有遭受攻擊的可能性。

若沒有仔細理解安全問題的潛在風險，並尋求相對應策略，當發生非法訪問、機密資訊洩漏，只能倉促應對，造成信用及用戶評價下滑。

**資訊安全不斷更新**，務必追蹤安全相關資訊，努力更新知識從容應對。

本章將指明API至少應該採取哪些安全策略。

:::danger API存在哪些安全問題
- 非法獲取伺服器端和客戶端之間資訊
- 利用伺服器端的安全漏洞非法獲取和篡改訊息
- 預設通過瀏覽器訪問的API中的問題
:::
## 6.2 非法獲取伺服器端和客戶端之間的信息
HTTP本身沒有加密，所以任何人都可以截取雙方資訊。

**封包竊聽(Packet Sniffing)**：在公開未設密碼的wifi，用軟體獲取他人封包資訊

**連線劫持(Session Hijacking)**：從中竊聽session。(FireSheep)

### 6.2.1 用HTTPS時對HTTP通信實施加密
HTTPS能對URI路徑、查詢字串、Header&Body等交互數據加密。

通過TLS完成加密 （最新的是TLS1.3）

HTTP嚴格傳輸安全(HTTP Strict Transport Security)：啟用後要求使用者一定要使用HTTPS來進行連線

:::info
HTTPS會影響SEO：
[Google 搜尋 - 將 HTTPS 納入排名信號 (2014/08/07)](https://developers.google.com/search/blog/2014/08/https-as-ranking-signal)
:::

### 6.2.2 使用HTTPS是否意味著100%安全？
2014年4月Heartbleed安全漏洞事件，加密HTTPS的開源OpenSSL有安全漏洞，直到兩年後才發現。

除了伺服器端須確保安全，**客戶端也需要驗證簽發證書的真偽**，否則會遭到**中間人攻擊**。

[中間人攻擊](https://zh.wikipedia.org/zh-tw/%E4%B8%AD%E9%96%93%E4%BA%BA%E6%94%BB%E6%93%8A)：例如，在一個未加密的Wi-Fi 無線存取點的接受範圍內的中間人攻擊者，可以將自己作為一個中間人插入這個網路

客戶端需檢查：
- 簽證發行方是否可信
- 驗證證書有效日期
- 檢查伺服器端證書提示的通用名稱(Common Name)與實際連線網址是否相符
  - 2014年前Android的Apache HttpComponents HttpClient、HttpAsyncClient未檢驗。

HTTPS會比HTTP耗費更多處理時間，降低訪問速度。


:::info 認證機構遭到攻擊導致發行偽証書案例

此案例會導致客戶端看到的證書看起來是正確無誤。

[HTTP公鑰固定 (HTTP Public Key Pinning)](https://yu-jack.github.io/2020/03/02/ssl-pinning/)
只允許特定正確的公鑰連線，其他的拒絕連線。（銀行App定期升版更換公鑰）
:::

## 6.3 使用瀏覽器訪問API時的問題
### 6.3.1 XSS(Cross Site Scripting)
目的：攻擊者植入惡意程式，來竄改頁面內容，讓使用者誤觸執行。

攻擊方法：接收用戶的輸入內容並嵌入頁面的HTML。不僅HTML，API返回數據時也可能遭嵌入。

（圖6-1 p.170

前端框架doc都有提示小心防範XSS：
* [React: dangerouslySetInnerHTML](https://zh-hant.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
* [vue v-html](https://v3.cn.vuejs.org/api/directives.html#v-html)

防範XSS 舉例
* 用戶輸入的內容，都應仔細檢查（去除一些可疑數據）。
```json
{"data": "<script>alert('xss')</script>"}
```
* API Content-Type要設對(避免Script被直接執行)
  * IE有content Sniffing會自動判斷Content-Type
    * IE8以後：需另加X-Content-Type-Options:nosniff
    * IE7以前：檢查附加的request header & JSON字串轉譯
  * jQuery等JavaScript框架透過XMLHttpRequest須額外發送**X-Requested-With: XMLHTTPRequest**（用來判斷是不是ajax請求）
  * X-Requested-With若透過跨來源資源共用（Cross-Origin Resource Sharing (CORS)機制訪問，需進行預請求(preflight request)

（圖6-2 p.171

:::warning
如果上面的api header剛好又回傳Content-Type: text/html

就會直接在背景執行
:::
* 對JSON進行轉譯。(JSON跳脫字符Escape Character: ”、\)
![](https://www.json.org/img/string.png)
  * script加斜線使script標籤失效
  ```json
    {"data": "<script>alert('xss')<\/script>"}
  ```
  * 把&lt;&gt;轉成unicode
  ```json
  {"data": "\u003Cscript\u003Ealert('xss')\u003C\/script\u003E"}
  ```
  * UTF-7編碼類型的舊版本安全問題，須預先轉譯+(或轉譯成 \u002B)
  ```json
  {"data": "+ADw-script+AD4-alert('xss')+ADw-/script+AD4-"}
  ```

:::info video 19:30
:::

### 6.3.2 XSRF (CSRF)

跨站點請求偽造 (Cross Site Request Forgery)

目的：向另一個不同的站點發送請求，執行非用戶意願的操作。

攻擊方法：當用戶訪問惡意頁面時，XSRF攻擊會透過頁面裡嵌入的連結、IFrame元素、Img元件、JavaScript代碼及表單等攻擊其他網站。

(圖6-4 p.174

* 禁止透過GET方式修改數據，只能使用使用POST、PUT、DELETE方法。
  * 便無法使用IMG等元素來嵌入攻擊腳本。
  * 防範爬蟲程式對伺服器進行惡意操作。
* 防範FORM元素
  * FORM不受同源政策(CORS)政策影響，可透過FORM從A站攻擊B站
  * 防範方法：在每個Session嵌入一次性的XSRF令牌(CSRF Token)
* API只透過ajax或非瀏覽器客戶端發起訪問，在客戶端 Request 加入特殊Header，如果沒有就拒絕訪問。
  * 阻擋在FORM元素使用POST攻擊（無法在發送Request時添加特別的Header)

(圖6-5 p.175

:::info Django對於FORM做了CSRF保護
在POST表單下需放入{% csrf_token %}
會生成一個隱藏欄位放入csrf token
:::

:::info video 1:00:00
:::

### 6.3.3 JSON 劫持
JSON劫持(JSON hijacking)

目的：取得敏感資料。

同源政策(CORS)在ajax的時候會阻擋其他網站無法訪問。

但在JSONP(JSON with Padding)的時候同源政策無效，可以直接使用SCRIPT元素來取得訊息。

範例：
```
https://api.example.com/v1/users/me
```
透過JSONP方式訪問
```HTML
<script src="https://api.example.com/v1/users/me"></script>
```

防止JSON劫持：
* 讓JSON數據無法通過SCRIPT元素讀取
  * 若只允許ajax或非瀏覽器訪問：Header添加X-Requested-With
* 讓瀏覽器準確識別JSON數據
  * Content-Type: application/json
  * IE8以後：需另加X-Content-Type-Options:nosniff
  * IE7以前：檢查附加的request header & JSON字串轉譯
* 讓JSON數據不能使用JavaScript解釋，或在執行時無法讀取數據。
  * 讓該段JSON無法通過語法解析出錯，或讓其執行時陷入無窮迴圈無法讀取數據。
  * JSON的root**使用{} object而不是[] array**。
    * array可以被正常執行，object則會被視為是JavaScript語法而執行出錯。
  * 在JSON文件前面設置一個無窮迴圈，讓瀏覽器無法處理。

例：Facebook的JSON數據如下
  ```javascript
    for(;;); {"t": "heartbeat"}
    {"t": "heartbeat"}
    {"t": "continue", "seq":10039}
  ```
* 先把for(;;); 以字串方式處理掉。
* 一個request包含多個數據減少HTTP請求數。
* 不建議用在允許第三方訪問的API。

:::info 當API不需透過瀏覽器訪問

盡可能做到讓瀏覽器無法輕易訪問API

使用不同的會話管理方式。不要使用cookie來管理會話訊息(將使資訊與瀏覽器共享)
:::

## 6.4 思考防範惡意訪問的對策
企圖採取非法行為：攻擊伺服器漏洞、偽裝app和api進行交互，拉低服務信用、遊戲裡非法獲取大量道具......。

通過用戶認證，且被辨識為合法使用者，任意修改伺服器數據。

用戶自身懷有惡意，難以避免。

(圖6-6 p181

即使不將API設計對外公開，使用者也可透過Console的Network查看處理過程。

我們必須做到即使他人竊取整個數據交互過程，也無法實施非法行為。

### 6.4.1 竄改參數
攻擊者通過隨意更改客戶端發送至服務端的參數，來獲取原本無法得到的訊息，或將數據改為非法值。

:::note 你覺得這個網址打出請求後，可以獲得哪些資訊？
```
https://api.example.com/v1/users/12345?fields=name,email
```
:::

* 應嚴格檢查無法訪問的訊息
* 防止透過修改ID來批次獲取資料（**限速**等機制限制訪問）。
* **檢查參數合理性**，伺服器不能完全信賴客戶端資料，並且需檢查資料一致性。
  * api: item/decrease 3 (API減去3個item)
  * api: item/decrease -100 (API增加100個item?)
  * 如果遊戲勝負交給客戶端判斷，使用者惡意不斷傳送"我方勝利"？

### 6.4.2 請求再次發送
通過再次發送之前的請求，讓伺服器再次進行相同的處理。

* 仔細檢查資料狀態
* 是否存在多次完全一樣的訪問請求

**偽裝支付**

必須提防**沒完成支付**卻**偽裝成已完成支付**的非法請求。
拿相同的支付完成請求再次發送，期望不勞而獲。

（圖6-8 p184

透過收據，向伺服器再次檢查購買過程是否完成，並確保只發放一次積分。

（圖6-9 p185

## 6.5 同安全相關的HTTP首部
強化安全的HTTP Header多以"X-"開頭。
### 6.5.1 X-Content-Type-Options
IE自帶Content Sniffing功能，自動偵測Content-Type，而去忽略API Header的Content-Type。
### 6.5.2 X-XSS-Protection
瀏覽器可以檢測跟防禦XSS攻擊。Chrome和Safari無法禁用。

:::caution p.s. 這個是舊有的屬性，基本上可以被 Content-Security-Policy 取代

[XSS-Protection-MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection)
:::

:::info video 49:35
:::

### 6.5.3 X-Frame-Options
控制頁面是否允許在iFrame裏被嵌入讀取，IE8以後的瀏覽器都支援此功能。

例如：之前有舉例過的Google Login就不能被嵌入。

### 6.5.4 Content-Security-Policy
告知瀏覽器IMG、SCRIPT、LINK元素等指向目標的範圍。

透過Header限定讀取圖像與頁面同源，降低XSS的風險。

告知瀏覽器不去讀取其他資源
```
Content-Security-Policy: default-src 'none'
```

:::info video 49:35
:::

### 6.5.5 Strict-Transport-Security
限定使用者只能透過HTTPS訪問網站，使用HTTP會直接轉向HTTPS。

max-age: 告知瀏覽器應該保持強制HTTPS存取的時間有多長。

:::caution
* **未加密的首次連線**為中間人留下了機會。他們可以使用中間人攻擊將使用者定向至惡意網站而非使用者預期的網站的安全版本。
* 瀏覽器會忽略 **HTTP** 站點所回應的 Strict-Transport-Security 標頭，因為在 HTTP 連線下，該標頭可能是被惡意添加或是竄改的。
:::

### 6.5.6 Public-Key-Pins
HTTP公鑰固定 (HTTP Public Key Pinning)。檢查站點的SSL證書是否偽造。
會寫入散列值與有效期給瀏覽器做檢查。

[Public-Key-Pins - MDM](https://developer.mozilla.org/zh-CN/docs/Web/Security/Certificate_Transparency)

### 6.5.7 Set-Cookie首部和安全性
可以在Set-Cookie中設定Secure 以及 HttpOnly的屬性

* Secure限定在https中才能發送給伺服器。
* HttpOnly只限定用於HTTP通訊，瀏覽器不能使用JavaScript 的Document.cookie訪問，防止XSS。

## 6.6 應對大規模訪問的對策
DDoS阻斷服務攻擊：透過程式機械式不斷訪問，讓伺服器忙於處理大量訪問，耗盡系統資源，而無法繼續服務。

### 6.6.1 限制每個用戶的訪問
限制每個用戶在單位時間內訪問的最大次數(Rate Limit, 限速)

如果用戶超過最大訪問次數，伺服器回直接回應錯誤訊息。

* 用什麼樣的機制來識別用戶
* 如何確定限速的數值
* 以什麼單位來設置限速的數值
* 在什麼時候重置限速的數值

(表6-2 已公布訪問上限次數的API p.193

### 6.6.2 限速的單位

設置訪問限速的初衷是避免短時間遭到大規模訪問不堪重負無法繼續服務。

不能限速到API用戶感到不便，那就失去提供API的意義。

對於數據頻繁查詢的API，~~如果設置1小時只能訪問10次~~，太嚴格，用戶難以增加。

Twitter設置15分鐘為一個時間單位（Window），超過後等15分鐘即可訪問。

Etsy服務使用Progressive rate limit(累進限速)方式。

24小時1萬次，每2小時1個單位，透過單位來管理訪問次數。超過次數後等下2個小時就會重置。

* 限速設置越細緻，需要記錄更多訪問紀錄。
* 限制訪問次數的時間段
  * 從固定時間開始 每個整點
  * 從首次訪問API開始，經過一段時間重置(rolling window)

:::info 訪問限制的緩和
* 對特定的應用和開發人員緩和訪問次數上限值。
* 要求超出訪問次數限制時付費訪問。(ex. Google Map)
:::

### 6.6.3 應對超出上限值的情況
回應429 Too Many Requests，這個Status在2012年4月發布

* 回應訊息中應該要包含錯誤的詳細訊息(SHOULD)
* 告知需要等待多久後再發起下一次請求(MAY)
  * 可以在Header提供Retry-After來提示用戶需要多久再發布新的請求。

**403 Forbidden**

伺服器已理解需求，但拒絕執行。表示此請求不該被重複提交。

但超過請求限制後，應該要可以繼續訪問。此狀態碼不適合。

**413 Request Entity Too Large**

表示客戶端請求過於龐大。不是請求次數過多，此狀態碼不適合。

**503 Service Unavailable**

伺服器當前無法處理請求。可能是自身的原因或是維護而停止。此狀態碼不太適合。

表6-3) 使用429以外狀態碼的例子 p.197

### 6.6.4 向用戶告知訪問限速的信息
* 提供用戶訪問次數限制
* 已經使用的訪問次數
* 何時重置訪問限速訊息

可降低或避免用戶，在限制期間重複訪問API，也將訪問次數與管理的責任交給用戶。

可效仿Google API Console詳細羅列API訪問次數、限速資訊

**透過HTTP回應來傳遞限速訊息**

在Header放置自定義的內容來傳遞限速訊息。

| Header 名稱             | 說明        |
|-----------------------|-----------|
| X-RateLimit-Limit     | 單位訪問次數上限  |
| X-RateLimit-Remaining | 剩餘的訪問次數   |
| X-RateLimit-Reset     | 訪問次數重置的時間 |

:::info 訪問限速的實現
通常會使用Redis來記錄訪問次數

串接第三方管理服務來調整限速：Apigee(Google Cloud), 3SCALE
:::

## 6.7 小結
* 當存在個人訊息等不希望對特定用戶之外的其他人洩漏訊息時，使用HTTPS。
* 防範XSS、XSRF攻擊等普通的Web站點也會遇到的威脅之外，還要注意JSON劫持等API服務特有的安全問題。
* 添加有助於增強安全性的HTTP Header。
* 透過設置訪問限速的方法，避免因部分用戶過量訪問而給伺服器端帶來巨大負擔。