---
title: 'Ch5: 架構安全性'
tsidebar_label: 'Ch5: 架構安全性'
sidebar_position: 6
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

1. Digest：[RFC 7616](https://www.rfc-editor.org/rfc/rfc7616)，HTTP 摘要認證，Basic 認證的改良版本，針對 Base64 明文發送的風險，Digest 認證把用戶名和密碼加鹽（一個被稱為 Nonce 的變化值作為鹽值）後再通過 MD5/SHA 等哈希算法取摘要發送出去。
2. Bearer：[RFC 6750](https://www.rfc-editor.org/rfc/rfc6750)，基於 OAuth 2 規範來完成認證，OAuth2 是一個同時涉及認證與授權的協議，在“授權”小節將詳細介紹 OAuth 2。
3. HOBA：[RFC 7486](https://www.rfc-editor.org/rfc/rfc7486) ，HOBA（HTTP Origin-Bound Authentication）是一種基於自簽名證書的認證方案。

   > 基於數字證書的信任關係主要有兩類模型：
   >
   > 1. 採用 CA（Certification Authority）層次結構的模型，由 CA 中心簽發證書
   > 2. 以 IETF 的 Token Binding 協議為基礎的 OBC（Origin Bound Certificate）自簽名證書模型。

#### 2. **Web 認證**

:::note
**HTTP** (HyperText Transfer Protocol，超文本傳輸協議)：把資源從 Server 端傳輸到 Client 端，資源內容須由 Client 自行解析驅動。
:::

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
     - 認證功能：以 HTTP 協議中定義的各種認證、表單等認證方式確認用戶身份，這是本節的主要話題。
     - 安全上下文：用戶獲得認證之後，要開放一些接口，讓應用可以得知該用戶的基本資料、用戶擁有的權限、角色，等等。
     - 授權功能：判斷並控制認證後的用戶對什麼資源擁有哪些操作許可，這部分內容會放到“授權”介紹。
     - 密碼的存儲與驗證：密碼是燙手的山芋，存儲、傳輸還是驗證都應謹慎處理，我們會放到“保密”去具體討論。

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
5. 操作代理（User Agent）：指用戶用來訪問服務器的工具，對於人類用戶來說，這個通常是指瀏覽器，但在微服務中一個服務經常會作為另一個服務的用戶，此時指的可能就是 HttpClient、RPCClient 或者其他訪問途徑。

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
