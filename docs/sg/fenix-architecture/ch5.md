---
title: 'Ch5: 架構安全性'
tsidebar_label: 'Ch5: 架構安全性'
sidebar_position: 5
---

在軟體系統設計中，如何讓應用能夠在各種環境中安全高效的訪問是個複雜的問題，而計算機系統安全，不只是免於「防禦系統不被駭客攻擊」，並至少包括以下問題的解決方案。

以下皆使用系統安全的標準方案來逐一探討處理方法，並以 [Fenix's Bookstore](http://icyfenix.cn/exploration/projects/) 作為案實踐。

- 認證（Authentication）：系統如何正確分辨出操作用戶的真實身份？
- 授權（ Authorization）：系統如何控制一個用戶該看到哪些數據、能操作哪些功能？
- 憑證（Credential）：系統如何保證它與用戶之間的承諾是雙方當時真實意圖的體現，是準確、完整且不可抵賴的？
- 保密（Confidentiality）：系統如何保證敏感數據無法被包括系統管理員在內的內外部人員所竊取、濫用？
- 傳輸（Transport Security）：系統如何保證通過網絡傳輸的信息無法被第三方竊聽、篡改和冒充？
- 驗證（Verification）：系統如何確保提交到每項服務中的數據是合乎規則的，不會對系統穩定性、數據一致性、正確性產生風險？

## 5.1 [認證](http://icyfenix.cn/architect-perspective/general-architecture/system-security/authentication)（Authentication）

:::info
系统如何正確分辨出操作用戶的真實身份？系統如何辨認“你”？
:::

### 5.1.1 認證標準

此架構安全的經驗原則包含兩部分：

1. 以標準規費為指導、以標準接口實現
2. 內置的 Basic、Digest、Form 和 Client-Cert。四種認證方案分別覆蓋以下三種認證：
   1. 通信信道上的認證：你和我建立通信連接之前，要先證明你是誰。在網絡傳輸（Network）場景中的典型是基於 SSL/TLS 傳輸安全層的認證。
   2. 通信協議上的認證：你請求獲取我的資源之前，要先證明你是誰。在互聯網（Internet）場景中的典型是基於 HTTP 協議的認證。
   3. 通信內容上的認證：你使用我提供的服務之前，要先證明你是誰。在萬維網（World Wide Web）場景中的典型是基於 Web 內容的認證。

#### 1. HTTP 認證

> **認證方案（Authentication Schemes)** ：它是指生成用戶身份憑證的某種方法，這個概念最初源於 HTTP 協議的認證框架（Authentication Framework）。
> **目的**：把「要產生身份憑證」的目的與「具體如何產生憑證」的實現分離開來。

**IETF [RFC 7235](https://tools.ietf.org/html/rfc7235)**

1. 所有支持 HTTP 協議的服務器，在未授權的用戶意圖訪問服務端保護區域的資源時，應返回 401 Unauthorized 的狀態碼
2. 在響應報文頭里附帶以下兩個分別代表**網頁認證**和**代理認證**的 Header 之一

Response Header

```
WWW-Authenticate: <認證方案> realm=<保護區域的描述信息>
Proxy-Authenticate: <認證方案> realm=<保護區域的描述信息>
```

Request Header

```
Authorization: <認證方案> <憑證內容>
Proxy-Authorization: <認證方案> <憑證內容>
```

![圖 5-1. HTTP 認證框架的工作流程時序圖](./ch5/5-1.png)
_圖 5-1. HTTP 認證框架的工作流程時序圖_

> **HTTP Basic 認證**
> 以演示為目的且應用於一些不要求安全性的場合。（例如：家中路由器登錄等）
> 方法：讓用戶輸入用戶名和密碼，經過 Base64 編碼“加密”後作為身份憑證

```
HTTP/1.1 401 Unauthorized
Date: Mon, 24 Feb 2020 16:50:53 GMT
WWW-Authenticate: Basic realm="example from icyfenix.cn"
```

_上為：請求資源 GET/admin 後瀏覽器收到的 Server Response_

![圖 5-2 HTTP Basic 認證對話框](./ch5/5-2.png)
_圖 5-2 HTTP Basic 認證對話框_

```
GET /admin HTTP/1.1
Authorization: Basic aWN5ZmVuaXg6MTIzNDU2
```

_上為：HTTP Request_

:::warning
注意 Base64 只是一種編碼方式，並非任何形式的加密，因此 Base64 認證是有風險的。
:::

除了 Basic 認證之外，IETF 定義如下三種認證方案：

1. Digest：[RFC 7616](https://www.rfc-editor.org/rfc/rfc7616)，HTTP 摘要認證，Basic 認證的改良版本，針對 Base64 明文發送的風險，Digest 認證把用戶名和密碼加鹽（一個被稱為 Nonce 的變化值作為鹽值）後再通過 MD5/SHA 等哈希算法取摘要發送出去
2. Bearer：[RFC 6750](https://www.rfc-editor.org/rfc/rfc6750)，基於 OAuth 2 規範來完成認證，OAuth2 是一個同時涉及認證與授權的協議，在“授權”小節將詳細介紹 OAuth 2
3. HOBA：[RFC 7486](https://www.rfc-editor.org/rfc/rfc7486) ，HOBA（HTTP Origin-Bound Authentication）是一種基於自簽名證書的認證方案。
   - 採用 CA（Certification Authority）層次結構的模型，由 CA 中心簽發證書
   - 以 IETF 的 Token Binding 協議為基礎的 OBC（Origin Bound Certificate）自簽名證書模型

:::info
何謂“加鹽”？
是指在雜湊之前將雜湊內容（例如：密碼）的任意固定位置插入特定的字串。 這個在雜湊中加入字串的方式稱為「加鹽」。

![加鹽流程](./ch5/salt.jpeg)
:::

#### 2. **Web 認證**

**HTTP (HyperText Transfer Protocol，超文本傳輸協議)**：把資源從 Server 端傳輸到 Client 端，資源內容須由 Client 自行解析驅動。

1. IETF 為 HTTP 認證框架設計“可插拔 (Pluggable) 的認證方案。
2. 依靠內容而不是傳輸協議來實現的認證方案，也稱<mark>表單認證</mark>（Form Authentication）
3. 表單認證與 HTTP 認證可以結合使用
   > 以 Fenix's Bookstore 的登錄功能為例：頁面表單是自行設計的 Vue.js 頁面；認證的整個交互過程遵循 OAuth 2 規範的密碼模式

![圖 5-3 不同瀏覽器上使用 WebAuthn 登錄的對比](./ch5/5-3.png)
_圖 5-3 不同瀏覽器上使用 WebAuthn 登錄的對比_

![圖 5-4 註冊流程步驟](./ch5/5-4.png)
_圖 5-4 註冊流程步驟圖_

**註冊流程步驟**

1. 用戶進入系統的註冊頁面 （此不包含在 WebAuthn 標準定義範圍內)
2. 用戶訊息填完後，點擊送出按鈕後，Server 先暫存用戶所提交的數據生成隨機字串(稱作 Challenge)和用戶的 UserID，並返回 Client 端傳輸到
3. Client 端的 WebAuthn API 接收到 Challenge 和 UserID 後把訊息發送給驗證器 (Authenticator)
4. Authenticator 提示用戶進行驗證，驗證結果生成一個密鑰對，由 Authenticator 儲存私鑰、用戶訊息及當前域名。使用私鑰對 Challenge 進行簽名，並將結果、UserID 和公鑰一起返回 Client 端傳輸到
5. 瀏覽器將 Authenticator 返回結果轉發給 Server
6. Server 檢驗訊息，若註冊通過，由 Server 儲存 UserID 對應的公鑰

**登錄流程步驟**

1. 用戶訪問登錄頁面，填入 UserID 並按下登錄按鈕
2. Server 返回隨機字串 Challenge、UserID
3. 瀏覽器將 Challenge 和 UserID 轉發給 Authenticator
4. Authenticator 提示用戶進行操作
5. Server 接收到瀏覽器轉發來被私鑰加密的 Challenge，與註冊時儲存公鑰進行解密，解密成功及登錄成功

:::info
WebAuthn 採用非對稱加密的公私鑰替代傳統密碼，私鑰是保密的且只有 Authenticator 知道。
:::

### 5.1.2 認證的實現 （介紹在 Java 中如何實現）

1. Java 1.3 時代，由 Sun 公司提出的同時面向代碼級安全和用戶級安全的認證授權服務——<mark>JAAS</mark>（Java Authentication and Authorization Service，Java 認證和授權服務，Java 1.3 處於擴展包中，Java 1.4 時納入標準包）

   - 此時期定義的 API
     - LoginModule （javax.security.auth.spi.LoginModule）
     - LoginContext （javax.security.auth.login.LoginContext）
     - Subject （javax.security.auth.Subject）
     - Principal （java.security.Principal）
     - Credentials（javax.security.auth.Destroyable、javax.security.auth.Refreshable）

2. 現今常用的為兩個私有的（私有的意思是不由 JSR 所規範的，即沒有 java/javax.\*作為包名的）的安全框架：<mark>[Apache Shiro](https://shiro.apache.org/)</mark> 和 <mark>[Spring Security](https://spring.io/projects/spring-security)</mark>
   - 此兩種安全框架所提供的功能
     - 認證功能：以 HTTP 協議中定義的各種認證、表單等認證方式確認用戶身份，這是本節的主要話題
     - 安全上下文：用戶獲得認證之後，要開放一些接口，讓應用可以得知該用戶的基本資料、用戶擁有的權限、角色，等等
     - 授權功能：判斷並控制認證後的用戶對什麼資源擁有哪些操作許可，這部分內容會放到“授權”介紹
     - 密碼的存儲與驗證：密碼是燙手的山芋，存儲、傳輸還是驗證都應謹慎處理，我們會放到“保密”去具體討論

---

## 5.2 授權（Authorization）

:::info
系統如何控制一個用戶該看到哪些數據、能操作哪些功能？
AAAA (Authentication、Authorization、Audit、Account)：認證、授權、審計、帳號
:::

**安全領域中的授權**

1. 確保授權的過程可靠
   - 單一系統：授權過程比較容易控制
   - 多方系統：授權過程較困難，常用授權協議有 <mark>OAuth 2</mark> 和 <mark>SAML 2.0</mark>
2. 確保授權的結果可控：授權的結果用於對程序功能或者資源的[訪問控制](https://en.wikipedia.org/wiki/Access-control_list)（Access Control）
   - 自主訪問控制（Discretionary Access Control，DAC）
   - 強制訪問控制（Mandatory Access Control，MAC）
   - 基於屬性的訪問控制（Attribute-Based Access Control，ABAC）
   - 基於角色的訪問控制（Role-Based Access Control，RBAC）**最常用**

### 5.2.1 RBAC （Role-Based Access Control，基於角色的訪問控制)

**目的：管理垂直和水平權限**

- 垂直權限：功能權限，某個角色完成某項操作的許可
  - 例如：審稿編輯有通過審核的權限、出納有從帳戶提取資金的權限
- 水平權限：數據權限，只能由訊息系統自主完成，不存在通用數據權限框架
  - 例如：A、B 都屬於同一個角色，但各自在系統中產生的數據完全有可能是私有的，A 訪問或是刪除 B 的數據即屬越權

![圖 5-5 RBAC 的主要元素的關係示意圖](./ch5/5-5.png)
_圖 5-5 RBAC 的主要元素的關係示意圖_

> 說明
>
> - 角色：解耦用戶與權限之間的多對多關係
> - 許可：允許何種操作作用於哪些資源之上，解耦操作與資源之間的多對多關係（不同數據都能有增、刪、改等操作)

優點：

- 簡化配置操作
- 滿足計算機安全中的“最小特權原則” (Least Privilege)，角色擁有許可數量根據完成該角色工作職責所需的最小權限來賦予
- 不同角色之間定義關聯與約束關係
  - 繼承關係（RBAC-1 模型)：角色權限繼承關係，例如：開發經理和開發人員一樣有代碼提交權限，開發人員和任何員工都有食堂就餐權限，
  - 互斥關係 (RBAC-1 模型)：角色職責分離關係，例如：不能同時一個人當會計也當出納

![圖 5-6 Spring Security 的訪問控制模型](./ch5/5-6.png)
_圖 5-6 Spring Security 的訪問控制模型_

:::info
角色和權限的核心差異取決於用戶打算如何使用這些特性，在框架層面他們的差別是極小的，基本採用了完全相同的方式來進行處理。
:::

### 5.2.2 OAuth 2 認證授權協議

提出以令牌(Token)代替用戶密碼作為授權憑證，解決把用戶賬號和密碼都告訴 Travis-CI 而產生的密碼洩漏、訪問範圍及授權回收問題

![圖 5-7 加 Token 後的授權流程示意圖](./ch5/5-7.png)
_圖 5-7 加 Token 後的授權流程示意圖_

1. 第三方應用（Third-Party Application）：需要得到授權訪問我資源的那個應用，即此場景中的“Travis-CI”
2. 授權服務器（Authorization Server）：能夠根據我的意願提供授權（授權之前肯定已經進行了必要的認證過程，但它與授權可以沒有直接關係）的服務器，即此場景中的“GitHub”
3. 資源服務器（Resource Server）：能夠提供第三方應用所需資源的服務器，它與認證服務可以是相同的服務器，也可以是不同的服務器，此場景中的“我的代碼倉庫”
4. 資源所有者（Resource Owner）： 擁有授權權限的人，即此場景中的“我”
5. 操作代理（User Agent）：指用戶用來訪問服務器的工具，對於人類用戶來說，這個通常是指瀏覽器，但在微服務中一個服務經常會作為另一個服務的用戶，此時指的可能就是 HttpClient、RPCClient 或者其他訪問途徑

#### 授權碼模式（Authorization Code）

![圖 5-8 授權碼模式的調用時序圖](./ch5/5-8.png)
_圖 5-8 授權碼模式的調用時序圖_

OAuth 2 設計用意：

1. 會不會有其他應用冒充第三方應用騙取授權？
2. 為什麼要先發放授權碼再用授權碼換令牌？
3. 為什麼要設計一個實現較長的刷新令牌和實現較短的訪問令牌？不能直接把訪問令牌時間調長嗎？

#### 隱式授權模式（Implicit）

1. 省略通過授權馬換 Token 的步驟，授權過程中不需要服務端支持
2. 限制第三方應用的 URI 地址必須與註冊時提供的域名一致
3. RFC 6749：Token 必須是“通過 Fragment 帶回” （Fragment, 地址中 “#” 號後面的部分)

![圖 5-9 隱式授權的調用時序圖](./ch5/5-9.png)
_圖 5-9 隱式授權的調用時序圖_

#### 密碼模式（Resource Owner Password Credentials）

**第三方應用拿著用戶名和密碼向授權服務器換取令牌**

1. 認證和授權整合再一起
2. 僅限用戶對第三方應用是高度可性的
3. “如何確保安全” 在此無法由 OAuth 2 承擔，只能由用戶和第三方應用自行保障

![圖 5-10 密碼模式的調用時序圖](./ch5/5-10.png)
_圖 5-10 密碼模式的調用時序圖_

#### 客戶端模式（Client Credentials）

**第三方應用以自己名義，向授權服務器申請資源許可**

![圖 5-11 客戶端模式的調用時序圖](./ch5/5-11.png)
_圖 5-11 客戶端模式的調用時序圖_

![圖 5-12 設備碼模式的調用時序圖](./ch5/5-12.png)
_圖 5-12 設備碼模式的調用時序圖_

---

## 5.3 憑證

### 5.3.1 Cookie-Session

優點：

1. 狀態訊息儲存於服務端，依靠客戶端的同源策略和 HTTP 的傳輸層安全，保證 Cookie 中的鍵值不被竊取而身份被冒用，就可避免訊息在傳輸過程中被洩露和串改
2. 服務端有主動的狀態管理能力，可根據自己的意願隨時修改、清除任意上下文訊息
3. 適合用於單節點的單體服務環境

### 5.3.2 JWT (JSON Web Token)

**定義於 RFC 7519 標準之中，目前廣泛使用的 Token 格式，經常與 OAuth2 配合應用於分佈式的、涉及多方的應用系統中。**

![圖 5-13 JWT 令牌結構](./ch5/5-13.png)
_圖 5-13 JWT 令牌結構_

使用方式：附在 Authorization 的 Header 發送給服務端，前綴在 RFC 6750 中被規定為 Bearer

```
GET /restful/products/1 HTTP/1.1
Host: icyfenix.cn
Connection: keep-alive
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJpY3lmZW5peCIsInNjb3BlIjpbIkFMTCJdLCJleHAiOjE1ODQ5NDg5NDcsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwianRpIjoiOWQ3NzU4NmEtM2Y0Zi00Y2JiLTk5MjQtZmUyZjc3ZGZhMzNkIiwiY2xpZW50X2lkIjoiYm9va3N0b3JlX2Zyb250ZW5kIiwidXNlcm5hbWUiOiJpY3lmZW5peCJ9.539WMzbjv63wBtx4ytYYw_Fo1ECG_9vsgAn8bheflL8
```

_用 JWT 令牌的 HTTP 實際請求_

:::warning
JWT 只解決防篡改的問題，並不解決防洩漏的問題
（圖 5-13 右邊的狀態訊息是對令牌使用 Base64URL 轉碼後得到的明文）
:::

#### JWT 結構

1. 令牌頭(Header)
2. 負載(Payload): 令牌真正需要向服務端傳遞的信息，告知服務端“這個用戶是誰”。可以完全自定義，根據具體要解決的問題不同，設計自己所需要的信息，只是總容量不能太大，受到 HTTP Header 大小的限制

```
{
  "username": "icyfenix",
  "authorities": [
    "ROLE_USER",
    "ROLE_ADMIN"
  ],
  "scope": [
    "ALL"
  ],
  "exp": 1584948947,
  "jti": "9d77586a-3f4f-4cbb-9924-fe2f77dfa33d",
  "client_id": "bookstore_frontend"
}
```

_JWT Payload 的例子_

3. 簽名（Signature）：確保負載中的信息是可信的、沒有被篡改的，也沒有在傳輸過程中丟失任何信息，且只能由認證授權服務器完成（只有它知道 Secret）

```
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload) , secret)
```

優點：

1. 不需要任何一個服務節點保留任何一點狀態信息，就能夠保障認證服務與用戶之間的承諾是雙方當時真實意圖的體現，是準確、完整、不可篡改、且不可抵賴的
2. 可以攜帶少量信息，有利於 RESTful API 的設計，易達成無狀態服務

缺點：

1. 令牌難以主動失效：JWT 令牌一旦簽發，在到期之前就會始終有效，除非服務器部署額外的邏輯去處理失效問題
2. 相對更容易遭受重放攻擊：解決重放攻擊需要付出比較大的代價，無論是加入全局序列號（HTTPS 協議的思路）、Nonce 字符串（HTTP Digest 驗證的思路）、挑戰應答碼（當下網銀動態令牌的思路）、還是縮短令牌有效期強制頻繁刷新令牌

   - 解決方案是在信道層次（譬如啟用 HTTPS）上解決，而不提倡在服務層次（譬如在令牌或接口其他參數上增加額外邏輯）上解決

3. 只能攜帶相當有限的數據：各種服務器、瀏覽器都會有各自約束的大小，因此令牌中存儲過多的數據不僅耗費傳輸帶寬，還有額外的出錯風險
4. 必須考慮令牌在客戶端如何存儲
5. 無狀態也不總是好的

:::info
**指散列消息認證碼(Hash-based Message Authentication Code，HMAC)**
一種帶有密鑰的哈希摘要算法，實現形式上通常是把密鑰以加鹽方式混入，與內容一起做哈希摘要。

| 普通哈希                                       | HMAC 哈希                                                      |
| ---------------------------------------------- | -------------------------------------------------------------- |
| 通過 Hash 函數結果易變性保證了原有內容未被篡改 | 1. 保證了內容未被篡改過; 2. 該哈希確實是由密鑰的持有人所生成的 |

![圖 5-14 HMAC 哈希與普通哈希算法的差別](./ch5/5-14.png)
_圖 5-14 HMAC 哈希與普通哈希算法的差別_

:::

## 5.4 保密（Confidentiality）

:::info
系統如何保證敏感數據無法被包括系統管理員在內的內外部人員所竊取、濫用？
保密是**加密**和**解密**的統稱
:::

### 保密的强度

> 追求越高的安全等級，就要付出越多的工作量與算力消耗
> 保密的安全的强度是有盡頭的
> 一次性密碼（One Time Password）有絕對安全性（需要提前安全地把密碼或密碼列表傳達給對方）

### 客户端加密

> 是否應該從客戶端開始加密?
> **啟用 HTTPS** 對大部分訊息系統足夠
> 真正防禦性的密碼加密存儲確實應該在**服務端**中進行，但這是為了防禦服務端被攻破而批量洩漏密碼的風險，並不是為了增加傳輸過程的安全

“不應把明文傳遞到服務端”

### 密码存储和验证

> **普通安全強度**：在具有一定保密安全性的同時，避免消耗過多的運算資源，驗證起來也相對便捷
> （譬如密碼要求長度、特殊字符等，再配合 HTTPS 傳輸)

---

## 5.5 傳輸Transport Security

:::info
系统如何保证通过网络传输的信息无法被第三方窃听、篡改和冒充？
:::

### 摘要、加密與簽名
什麼是簽名?
為什麼簽名就能讓payload中的訊息變得不可篡改跟不可抵賴呢?
解釋數位簽章(Digital Signature)之前，必須先解釋"摘要"跟"加密"

#### 摘要 Digital Digest
```java
signature = SHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload) , secret)
```

Hash特性:
1. 易變性
   * 輸入端任何一點細微變動，會造成輸出端的結果產生極大的變化 (e.g., 檔案附上hash)

易變性例子
```sh
> echo Tom_is_so_handsome | sha256sum 
10a143d676527916255ba500a5c039ddc492f36de5bba50626ab8e587833a016
> echo T0m_is_so_handsome | sha256sum
4aee6030bd3b165cb42a53d969e1e2664fa1d5120f3978a5f6dd98a72ed76d49
```
2. 不可逆性
   * 不可能從摘要結果逆向推出輸入值，常常聽到有人說破解 SHA1, MD5，指的不是解密，指的是找到碰撞的方法 
   * [Announcing the first SHA1 collision](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html)

Q: Hash 為什麼會產生碰撞 (collisions)?

A: (鴿籠原理)

加密與摘要本質區別在加密是可逆的，逆過程就是解密。以前加密需要保護演算法，現代密碼學加解密算法都完全公開。
安全建立在計算問題的複雜度之上。常見例子就是質因數分解
```python
97667323933 * 128764321253 = 12576066674829627448049
```
如何對大數進行質因數分解，至今沒有找到多項式時間的算法。

根據加密或解密是否採用同一個密鑰，來決定密碼學算法是對稱式加密還是非對稱式加密。

對稱式加密缺點: 通信成員變多，彼此都用獨立的密鑰，數量就會與成員數量成正比。
而更困難的問題是，當通信管道不安全時，如何才能確保拿到正確的鑰匙。
如果假設通道是安全的，為什麼不用這個通道傳訊息就好了
![圖 5-15 雞生蛋，蛋生雞](./ch5/5-15_chicken_egg.png)

解法就是，非對稱式加密!，非對稱式加密算法根據使用方法不同，可以提供兩種功能
* 公鑰加密，私鑰解密: 這種就是加密，大家都可以用公鑰加密，但只有擁有私鑰的人能解開
* 私鑰加密，公鑰解密: 這種就是簽章，只有擁有私鑰的人能產生加密過後的文件，大家都有公鑰可以解開內容確認是某人寫的文件

補充: RSA為什麼公鑰私鑰都可以加解密 [Understanding public/private RSA keys](https://dev.to/dandyvica/understanding-public-private-rsa-keys-3j81)

但是非對稱式的計算效率比對稱式加密差上好幾個量級。而且現行的非對稱式加密不支援分組加密(只能加密不超過密鑰長度的資料)。

在加密方面，一般是對稱與非稱式的結合，用非對稱來傳遞少量訊息，後續再用對稱式加密傳輸數據
在簽名方面，一般是摘要+非對稱式加密的組合，將檔案做摘要，然後加密摘要做傳輸

![三种密码学算法的对比](./ch5/5-16_crypto_comparison.png)

上述方法看似可以解決很多問題，但問題是，公鑰雖然是公開的，但在網路裡，公開到底是一個什麼樣的操作
如果網路是不安全的:
* 攻擊者可以返回自己的公鑰，之後攻擊者都用自己的私鑰簽名，接著大家就會無條件信他的所有行為

### 數字證書 (Digital Signature)
達成信任方法不外乎以下兩種途徑:
* 基於共同私密信息的信任
  * 通關密語, 共同小秘密
* 基於權威公證人的信任
  * Tom過來跟我說，他是 VicOne 的人，我很懷疑，但我信任 Mech，Mech 擔保他確實是 VicOne 的人，那 Tom 很有可能是 VicOne 的人

現實世界不能假設授權伺服器和資源伺服器是互相認識的，所以不會採用第一種方法。

:::info
## 公開金鑰基礎建設
由硬件、软件、参与者、管理政策与流程组成的基础架构，其目的在于创造、管理、分配、使用、存储以及撤销数字证书。
CA (Certificate Authority) 将用户的个人身份跟公开密钥链接在一起，创建过程可由 CA 的各种软件或者在人为监督下完成。
PKI 的确定链接关系的这一角色称为注册管理中心（Registration Authority，RA）。RA 确保公开密钥和个人身份链接，可以防抵赖。
:::
[What is Public Key Infrastructure (PKI) by Securemetric](https://youtu.be/i-rtxrEz_E8)

但是萬一有人假冒 CA 怎麼辦，好險世界上一堆Server的公鑰是不可數的，但 CA 是可數的，所以我們可以預先安裝到瀏覽器或 OS

一個 Digital Signature 包含以下訊息:
1. Version
2. Serial Number
3. Signature Algorithm ID
4. Certificate Signature
5. Issuer Name
6. Validity Period
7. Subject
8. Public-Key

Mac Certificate path: `/System/Library/Security/Certificates.bundle/Contents/Resources/TrustStore.html`


補充: [數位簽章演算法](https://lh5.googleusercontent.com/_JiU4f3pMlOg/TY882fPEFpI/AAAAAAAAAQA/80juTCnWJMs/%E6%95%B8%E4%BD%8D%E7%B0%BD%E7%AB%A0.png)

### 傳輸安全層 Transport Layer Security (TLS)
在计算机科学里，隔离复杂性的最有效手段（没有之一）就是分层，如果一层不够就再加一层。
主流版本為TLS1.2
以TLS 1.2 為例，介紹傳輸安全層是如何
* 保障所有信息都是第三方無法竊聽(加密傳輸)
* 無法篡改(一旦篡改通信算法會立刻發現)
* 無法冒充(證書驗證身分)

![圖 5-17](./ch5/5-17.png)

## 5.6 驗證 (Verification)
* 你是誰 (Authentication)
* 你能做什麼 (Authorization)
* 你做的對不對 (Verification)

```
前  端： 提交一份用户数据（姓名:某, 性别:男, 爱好:女, 签名:xxx, 手机:xxx, 邮箱:null）
控制器： 发现邮箱是空的，抛ValidationException("邮箱没填")
前  端： 已修改，重新提交
安  全： 发送验证码时发现手机号少一位，抛RemoteInvokeException("无法发送验证码")
前  端： 已修改，重新提交
服务层： 邮箱怎么有重复啊，抛BusinessRuntimeException("不允许开小号")
前  端： 已修改，重新提交
持久层： 签名字段超长了插不进去，抛SQLException("插入数据库失败，SQL：xxx")
…… ……
前  端： 你们这些坑管挖不管埋的后端，各种异常都往前抛！
用  户： 这系统牙膏厂生产的？
```

* 在 Controller 层做，在 Service 层不做。理由是从 Service 开始会有同级重用，出现 ServiceA.foo(params)调用 ServiceB.bar(params)时，就会对 params 重复校验了两次。
* 在 Service 层做，在 Controller 层不做。理由是无业务含义的格式校验已在前端表单验证处理过，有业务含义的校验，放在 Controller 层无论如何不合适。
* 在 Controller、Service 层各做各的。Controller 做格式校验，Service 层做业务校验，听起来很合理，但这其实就是上面段子中被嘲笑的行为。
* 还有其他一些意见，譬如还有提在持久层做校验，理由是这是最终入口，把守好写入数据库的质量最重要。

避免对输入数据的防御污染到业务代码，如果你的代码里面如果很多下面这样的条件判断，就应该考虑重构了：
```java
// 一些已执行的逻辑
if (someParam == null) {
	throw new RuntimeExcetpion("客官不可以！")
}
```

