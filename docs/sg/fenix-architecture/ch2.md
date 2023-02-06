---
title: 'Ch2: 存取遠端服務'
tsidebar_label: 'Ch2: 存取遠端服務'
sidebar_position: 2
---
# 存取遠端服務
遠端服務將電腦程式

從**單機**擴展到**網路**

從**本機**延伸到**遠端**

是構建分散式系統的重要基礎。

尤其進入網路時代，不同載具間，都會與其他設備溝通的需求。

## 遠端服務呼叫

### 行程間的通訊
RPC 出現的最初目的：為了讓電腦能夠跟呼叫本機方法一樣去呼叫遠端方法。

```java
// Caller : 调用者，代码里的main()
// Callee ： 被调用者，代码里的println()
// Call Site ： 调用点，即发生方法调用的指令流位置
// Parameter ： 参数，由Caller传递给Callee的数据，即“hello world”
// Retval ： 返回值，由Callee传递给Caller的数据。以下代码中如果方法能够正常结束，它是void，如果方法异常完成，它是对应的异常
public static void main(String[] args) {
    System.out.println(“hello world”);
}
```

* 本機呼叫方法的過程：
    * 傳遞方法参數： hello word 放入記憶體stack
    * 確定方法版本：確定callee println()執行版本
    * 執行被呼叫方法：從記憶體stack把parameter拿出來
    * 返回執行結果：將callee執行結果放入記憶體stack


* 行程間通訊（Inter-Process Communication，IPC）的方法
    * 管道（Pipe）或者具名管道（Named Pipe）
      * 管道典型運用就是命令列中的|操作符號，譬如：
        ```
        ps -ef | grep java
        ```
    * 訊號（Signal）訊號用於通知目標行程某種事件發生，除了用於行程間通訊外，行程還可以發送訊號给行程本身。
      * 訊號的典型運用是kill命令，譬如：
        ```
        kill -9 pid
        ```
    * 號誌（Semaphore）號誌用於两個行程之間同步協作手段，程序可以在上面進行wait()和notify()。

  ------上面傳遞較少訊息------
    * 訊息佇列（Message Queue）克服訊號承載訊息量少，但即時性受限。
    * 共享内存（Shared Memory）

  ------上面只適合單機多行程間的通訊------
    * Socket 是更普適的行程通訊機制，可用於不同機器之間的行程通訊。
### 通訊的成本
* 最初RPC是作為Socket的特例，Socket是作業系統提供的標準通訊埠，完全有可能把呼叫遠端方法的通訊細節隱藏在作業系統底層，從應用層面上看來可以做到**遠端呼叫**與**本機的行程間通訊**在編碼上完全一致。
* 但這種透明的呼叫形式卻反而造成了工程師**誤以為通訊是無成本的假象**，因而被濫用導致降低了分散式系統的效能。
* Andrew Tanenbaum 教授曾發表了論文對透明的RPC範式提出質問：
    * 兩個行程通訊，誰是伺服器端，誰作為客戶端？
    * 如何進行異常處理？異常該如何讓呼叫者得知？
    * 伺服器端出現多線程競爭之後怎麼辦？
    * 如何提高網路利用的效率？譬如連接是否可以被多個請求重複使用以減少開銷？是否支持廣播？
    * 如何保證網路的可靠性？譬如呼叫期間某個連線忽然斷開了怎麼辦？
    * 發送的請求伺服器端收不到回應該怎麼辦？
* 透過網路進行分散式運算的八宗罪：
    * 網路是可靠的
    * 延遲是不存在的
    * 頻寬是無限的
    * 網路是安全的
    * 拓樸結構是一成不變的
    * 總會有一个管理員
    * 不必考慮傳輸成本
    * 網路是同質化的 (沒有不規則的)
### 三個基本問題
* **如何表示數據？**數據包括傳遞方法的参数，以及方法執行後的返回值。即**序列化(serialize)**、**反序列化(deserialize)**
    * gRPC 的Protocol Buffers
    * Web Service 的XML Serialization
    * 眾多輕量級 RPC 支持的JSON Serialization
* **如何傳遞數據？** 指如何透過網路，在兩個個服務的 Endpoint 之間操作、交換數據。
* **如何確定方法？** 「如何表示同一個方法」，「如何找到對應的方法」 -- 介面描述語言（Interface Description Language，IDL）

### 統一的RPC
* DCS/RPC、ONC RPC
    * 不支援物件導向，只能傳遞值，不能傳遞物件
    * ONC RPC 有XDR的序列化器，可以序列化結構
* CORBA
    * v1.0 C、C++
    * v3.0 C、C++、Java、Object Pascal、Python、Ruby
    * 過於囉唆繁鎖，各語言間互不相容
* Web Service (SOAP)
    * 以XML來表示數據，簡單，但是效能很差，1998年成為W3C的推薦標準
    * 希望在一套協議上完全解決分散式運算中可能遇到的所有問題，導致學習成本高
### 分裂的RPC
    * 經歷統一的RPC後，簡單、普適、高效能這三點難以滿足。
    * RPC協議不再追求大而全的「完美」，而是朝「特色」發展。
        * 朝向物件導向發展
            * RMI
            * .NET Remoting
            * CORBA
            * DCOM
        * 朝向效能發展
            * gRPC
            * Thrift
            * RPC 性能：
                * 序列化效率
                  * 輸出結果的容量越小，速度越快，效率自然越高。
                * 信息密度。
                  * 取决於Payload所占傳輸總數據的比例大小，使用傳輸協議的層次越高，訊息密度就越低，SOAP 使用 XML 拙劣的性能表現就是前車之鑑。
        * 朝向簡化發展
            * JSON_RPC：功能弱、速度慢。犧牲功能和效率，得到協議的簡單輕便，介面與格式都更為通用，尤其適合 Web 瀏覽器。

:::info Question
開發一個分散式系統，是不是就一定要用 RPC 呢？
:::

## REST設計風格
* 在思想上差異的核心：抽象的目標不一樣
    * REST: 資源導向
    * RPC: 程序導向
* 概念上的不同：REST不是一種遠端服務呼叫協議，REST是一種風格。
* 使用範圍，REST與RPC，在使用上是確實有重疊，但重疊有多大就見仁見智了。
### 理解REST
* 表現層狀態轉換（英語：Representational State Transfer，縮寫：REST）
    * 資源（Resource）
        * 譬如你現在正在閱讀一篇《REST設計風格》的文章，文章的内容我們稱為**資源**。資源在**各裝置長得不同，但內容不變**，是同一份資源。
    * 表徵（Representation）
        * 當你透過電腦瀏覽此文章，瀏覽器向伺服器發出請求「我需要這個資源的**HTML格式**」，伺服器向瀏覽器回應的這個HTML就被稱之為表徵，**可以是不同種的格式**，指訊息用户交互時的表示形式。
    * 狀態（State）
        * 當你讀完這篇文章，想看後面是什麼内容時，你向伺服器發出請求「給我下一篇文章」但是下一篇是個相對概念，必須仰賴目前你正在閱讀的文章是哪一篇才能正確回應，這類在特定語境中才能產生的上下文(Context)訊息被稱為狀態。
        * 有狀態(Stateful): 伺服器記住用戶狀態。
        * 無狀態(Stateless): 客戶端在請求時告訴伺服器。
    * 轉移（Transfer）
        * 伺服器透過某種方式，把「用戶目前閱讀的文章」轉變成「下一篇文章」，稱為「表徵狀態轉移」。
* URI，Uniform Resource Identifier，統一資源標識符
    *  HTTP 協議中已經提前約定好「統一介面」，包括：GET、HEAD、POST、PUT、DELETE、TRACE、OPTIONS 七種基本操作，對特定的 URI 採取這些操作，伺服器就会觸發相對應的表徵狀態轉移。
* 超文本驅動（Hypertext Driven）：表徵狀態轉移－透過超文本内部的連結到下一篇。由伺服器發出的回應訊息（超文本）來驅動。告訴客戶端有哪些操作可以執行（下一頁、編輯、修改......）。
* 自我描述訊息（Self-Descriptive Messages）：資源的表徵可能存在多種不同型態，在訊息中應有明確的資訊告知客户端，該訊息的類型以及應該如何處理。譬如“Content-Type : application/json; charset=utf-8”。
### RESTFul的系統
* 伺服器與客戶端分離
* 無狀態
* 可快取
* 分層系統
* 統一介面
* 按需代碼
### REST的好處
* 降低服務介面的學習成本：統一介面
* 資源與生俱來集合與層次結構：資源為中心的介面，名詞可以產生集合與層次結構
```
GET /users/icyfenix/cart/2
```
* REST綁定於HTTP協議

### RMM 成熟度
Richardson Maturity Model 將REST分為三級：
0. The Swamp of Plain Old XML
1. Resources：開始加入資源的概念。
2. HTTP Verbs：加入統一介面。
3. Hypermedia Controls：超文本驅動。Hypertext As The Engine Of Application State，HATEOAS。

以醫生預約系統來做範例

查詢醫生在指定時間是否有空，並向醫生預約。

#### 第0級
* 查詢醫生空閒時間

POST /**appointmentService**?action=query HTTP/1.1

預約醫生時間

POST /**appointmentService**?action=confirm HTTP/1.1

#### 第1級
* 開始加入資源概念

查詢醫生空閒時間

POST /doctors/mjones HTTP/1.1
```
[
	{id: 1234, start:"14:00", end: "14:50", doctor: "mjones"},
	{id: 5678, start:"16:00", end: "16:50", doctor: "mjones"}
]
```

* 預約醫生時間
POST /schedules/1234

#### 第2級
加入統一介面

* 查詢醫生空閒時間

**GET** /doctors/mjones/**schedule?date=2020-03-04&status=open**
```
[
	{id: 1234, start:"14:00", end: "14:50", doctor: "mjones"},
	{id: 5678, start:"16:00", end: "16:50", doctor: "mjones"}
]
```

POST /schedules/1234 HTTP/1.1

回應透過HTTP Status Code：
    * 成功：
```
HTTP/1.1 201 Created

Successful confirmation of appointment
```

    * 有人搶先預約：
```
HTTP/1.1 409 Conflict

doctor not available
```

#### 第3級
HATEOAS，物件直接告訴你說可以做哪些事。

GET /doctors/mjones/schedule?date=2020-03-04&status=open HTTP/1.1
```
HTTP/1.1 200 OK

{
	schedules：[
		{
			id: 1234, start:"14:00", end: "14:50", doctor: "mjones",
			links: [
				{rel: "comfirm schedule", href: "/schedules/1234"}
			]
		},
		{
			id: 5678, start:"16:00", end: "16:50", doctor: "mjones",
			links: [
				{rel: "comfirm schedule", href: "/schedules/5678"}
			]
		}
	],
	links: [
		{rel: "doctor info", href: "/doctors/mjones/info"}
	]
}
```

### REST的不足與爭議
筆者所見過懷疑 REST 能否在實踐中真正良好應用的部分爭議問題：
* 資源導向思想只適合做CRUD，程序導向和物件導向才能處理真正複雜的業務邏輯
    * REST不止是CRUD，也支持自定義方法。

:::info
* 程序導向 -> 以算法和處理過程為中心 -> 符合電腦世界中主流的交互方式。
* 物件導向 -> 將數據和行為統一、封装成物件 -> 符合現實世界的主流的交互方式。
* 資源導向 -> 將數據（資源）做為抽象的主體，把行為看作是統一介面 -> 符合網路世界的主流的交互方式。
:::

* REST與HTTP完全綁定，不適合運用要求高性能傳輸的場景中
    * HTTP並不是傳輸層協議，它是應用層協議
* REST不利於交易(Transaction)
    * 如果交易只是指希望保障數據的最終一致性，使用REST肯定不會有什麼阻礙。
* REST沒有傳輸可靠性支持
    * 是的，並沒有。HTTP傳送請求後，無法確定說是訊息沒發出去，或是伺服器沒有回應。
* REST缺乏對資源進行「部分」和「批次」的處理能力
    * 筆者認同，這很可能是未來資源導向的思想和API設計風格的發展方向。
    * REST 你可以直接獲取整個資源 -> 過度獲取 OverFetching
    * 批次修改 1000 個用戶，打了1000個API請求，可能會獲得429 Too Many Requests -> 自定義方法
        * GraphQL
