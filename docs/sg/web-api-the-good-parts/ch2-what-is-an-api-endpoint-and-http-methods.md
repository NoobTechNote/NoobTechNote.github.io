---
title: "Ch2:  What is an API Endpoint and HTTP methods ?"
sidebar_label: "Ch2: What is an API Endpoint and HTTP methods ?"
sidebar_position: 2
---

## 思考如何設計 open sourse API endpoint

:::info Discussion
設計 API endpoint, 前端常常反應設計不佳, 又要改endpoint。如何提升後端sense ᕦ(ò_óˇ)ᕤ
:::

## 2.1設計通過API公開的功能

設計SNS~~交友~~app時, 如何設計API，

### SNS~~交友~~app 功能
| 功能               |
| ----------------  |
| 用戶注冊            |
| 配對, 添加, 刪除好友 |
| 配對到互相傳訊息     |

* 3個 table
    * User table
    * Match friends table
    * 聊天訊息

如果只是用封裝SQL語句對API設計，一定很難用。還需要業務邏輯，DB存放的資料結構也有資安疑慮。

* 思考 API 所需的功能
    * 圖 2-1
    * 畫頁面切換的圖，列出功能清單。

## 2.2 API endpoint 的設計思考

* endpoint 的基本規範：容易記憶，URL包含的功能一目了然
    1. 短小便於輸入的URL
        * `https://www.dating.com/service/api/match` -> `https://www.dating.com/match`
    2. 好閱讀的URL
       * 別缩寫命名 `https://www.dating.com/sv/u`
       * 用英文單字，別使用羅馬拼音命名。kefu 這變量名我思考很久到底是什麼含義, 直到我唸出來, 深深領悟原來是"客服"這詞彙。
       * 詞彙用API語意常見的。"餘額"這詞彙卻不同命名: Balance, Money, Number, Blance, Menoy(為什麼連Money這單字都拼錯......而且大量單字都拼錯, 讓小弟我懷疑是不是背錯本單字 (｡ŏ_ŏ)
       * 請打開 spell checking，左岸人是用羅馬拼音或打字打到旁邊鍵位。
       * 注意單字的復數和過去式：data能加s嗎？datas
    3. 沒有大小寫混用的URL，不能駝峰式！？
    4. 修改方便的URL

        | ID rnage        | URL                  |
        | --------------- | -------------------- |
        |                 | /v1/items/123456     |
        | 1 ~ 300000      | /v1/items/alpha/:id  |
        | 400001 ~ 500000 | /v1/items/beta/:id   |
        | 500001 ~ 700000 | /v1/items/garmma/:id |
        | 700001          | /v1/items/delta/:id  |
    5. 不會暴露服務器架構的URL `https://www.dating.com/cgi-bin/get_user.php?user=100`
    6. 規則統一的URL
        *  GET  `https://www.dating.com/friends?id=100` ->     `https://www.dating.com/friends/100`
        *  POST `https://www.dating.com/friend/100/message` -> `https://www.dating.com/friends/100/message`

:::info Discussion
API point name: save, update, upload
:::

## 2.3 HTTP方法和端點

| HTTP method | Description                            |
| ----------- | -------------------------------------- |
| GET         | Retrieve an existing resource.         |
| POST        | Create a new resource.                 |
| PUT         | Update an existing resource.           |
| PATCH       | Partially update an existing resource. |
| DELETE      | Delete a resource.                     |

## 2.3.1 GET方法

* GET is a read-only
* 禁止GET修改 server handle

```python
import requests
api_url = "https://www.dating.com/friends"
response = requests.get(api_url)
response.json()
```

```json
[
   {
      "userId":1,
      "id":2,
      "name":"Amber Heard",
      "matched":true
   },
   {
      "userId":1,
      "id":3,
      "name":"Winona Ryder",
      "matched":true
   }
]
```

:::info Discussion
  * 串接某專案API， get_list 該用 GET 全都用 POST ?
  * GET point 的 query parameters 不能 optional ?
:::

## 2.3.2 POST方法

```json
{
   "userId":1,
   "id": 10,
   "questions":"妳覺得男方年收入多少才達到結婚門檻"
}
```

```python
import requests
api_url = "https://www.dating.com/questions"
questions = {"userId":1, "id": 10, "questions":"妳覺得男方年收入多少才達到結婚門檻"}
response = requests.post(api_url, json=questions)
response.json()

response.status_code
```

## 2.3.3 PUT方法

```python
import requests
api_url = "https://www.dating.com/questions/10"
response = requests.get(api_url)
response.json()

questions = {"userId":1, "id": 10, "questions":"妳覺得男方年收入多少才達到結婚門檻?"}
response = requests.post(api_url, json=questions)
response.json()

response.status_code
```

## 2.3.4 DELETE方法

```python
import requests
api_url = "https://www.dating.com/questions/10"
response = requests.delete(api_url)
response.json()

response.status_code
```

## 2.3.5 PATCH方法

* 提問潤色一下
```python
import requests
api_url = "https://www.dating.com/questions/10"
questions = {"questions": "妳覺得對象的理想年收入是多少"}
response = requests.patch(api_url, json=questions)
response.json()

response.status_code
```

:::info Discussion
    * X-HTTP-Method-Override
:::

## 2.4 API端點的設計

| HTTP method | endpoint     |                        |
| ----------- | ------------ | ---------------------- |
| GET         | /v1/users    | Get users list         |
| POST        | /v1/users    | Create a user          |
| GET         | /v1/users:id | Get detail of user id  |
| PUT/PATCH   | /v1/users:id | Update detail of users |
| DELETE      | /v1/users:id | Delete users id        |

:::info Discussion
endpoint 一樣，method 不一樣，即可代表不同業務邏輯？
bad example:
  * /v1/query_users
  * /v1/update_users
:::

## 2.4.1訪問資源的端點設計的注意事項
  * 注意名詞的複數
  * 注意所用的單詞
    * find -> search
    * 多看`https://www.programmableweb.com/`範例
  * 不使用空格及需要編碼的字符
    * Percent Encoding。 %E3%81%82 中文字編碼
  * 使用連接符來連接多個單詞

    |   Brand  |  Rule | URL                                  |
    | -------- | ----- | ------------------------------------ |
    | Twitter  | 蛇形法 | /statuses/user_timeline              |
    | YouTube  | 駝峰法 | /guideCategories                     |
    | Facebook | 點分法 | /me/books.quotes                     |
    | LinkedIn | 脊柱法 | /v1/people-search                    |
    | Bit.ly   | 蛇形法 | /v3/user/popular_earned_by_clicks    |
    | Disqus   | 駝峰法 | /api/3.0/applications/listUsage.json |

## 2-5 搜尋與參數查詢的設計
> 獲取資源列表的 Endpoint 同時具備搜尋功能。

問題：GET 方法裡面，如何滿足較為複雜的搜尋場景？

- 資料量體達到 1 billion 時超過 server 能負擔的上限怎麼辦？
- 用戶實際搜尋依據主要都是透過用戶的 **姓名**, **email** 或 **電話**

查詢參數的設計，滿足較複雜的查詢需求，提供更為彈性的設計方式，如: 
- 分頁機制: 
取得單次查詢資料的上限，避免因為單次過量的請求超過伺服器負擔的上限
- 過濾資料:
只需加上過濾的參數就能實現搜尋用戶的功能


### 查詢參數的使用方式

在 URI 末端加上 `?` ，後面帶上要用的查詢參數

```
GET /users?gender=male
```

:::info Discussion
怎樣的場合適合使用 query parameters? 
:::

## 2.5.1 取得資料量 & 資料取得位置的查詢參數
知名服務的 API 案例

| 服務名稱  | 取得資料量     |    取得位置(相對)     |   取得位置(絕對)      |
| ----------- | ------------ | ---------------------- |  ------------------- |
| GitHub   |  per_page   |   page   |  -  |
| Tumblr   |  limit   |   offset   |  since_id  |
| Twitter   |  count    |  cursor    |  max_id     |
| YouTube   |  max    |  pageToken    |  publish_before/publish_after   |

### 考量到資料規模大的情況

> 採用分頁(Pagination) 的作法，取得部分的數據

分頁所需的查詢參數包含 **指定取得的資料量**、**取得資料的位置** 兩者，相當於資料庫裡 SQL 語句的 `limit`, `offset` 。

參數名稱會因各家服務而異，但代表的意義是類似的。

根據表 2-11：
1. `limit`, `count`, `per_page` 表 **取得的資料量**
2. `page`, `offset`, `cursor` 表 **取得資料的位置**

常見組合: per_page/page; offset/limit;

- per_page/page: 以 **頁數(page)** 為單位計算; page 一般從 1 開始
- offset/limit: 以 **比數(limit)** 為單位計算; offset 從 0 開始

範例: 一頁 50 筆, 取得第三頁的資料 → 從第 101 筆開始
```
per_page=50&page=3
limit=50&offset=100
```

> 統一使用常見組合裡的其中一組，避免產生混淆，讓人難以理解


## 2.5.2 使用相對位置帶來的問題

- 效能考量：每次查詢都是從第一筆資料開始計算 → 隨著資料增長會顯現效能問題
- 支援度：並非所有選擇的儲存引擎都會支援用相對位置取得資料
- 讀取的資料有偏差 (圖 2-5)：更新頻率高的資料，在讀取時可能發生偏差

## 2.5.3 採絕對位置讀取資料

指定讀取資料的位置，即特定的搜尋條件，如：「某個 ID 前」、「某個日期前」。

有別於相對位置的做法(從頭開始計算)，絕對位置事先紀錄當前取得資料的位置訊息(可能是 ID 數值 or 時間點)，再根據條件範圍進行查詢。

範例: 

1. [Twitter](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/guides/working-with-timelines) API 裡的 `max_id`：取得指定 `max_id` 值之前的所有資料
2. [Youtube](https://developers.google.com/youtube/v3/docs/search/list) 的 `publish_before` / `publish_after`：取得指定的發布日期前/後的資料
3. [Tumblr](https://www.tumblr.com/docs/en/api/v2?language=pt_PT) API 的 `since_id` ：透過 `since_id` 判定資料(用戶關注其他用戶的所有動態)是否更新

## 2.5.4 用於過濾的參數

SNS 服務的 API 裡搜尋用戶列表的條件，以用戶名作為參數達成搜尋指定用戶的功能。

:::info Discussion:
未設置過濾條件會使得 API 查詢特定用戶的功能毫無意義，採用回傳 403 錯誤碼處理
→ Why 403? not 400?
:::

常見模式:
- 單純的文字搜尋：用戶的動態消息
- 有多個項目的過濾條件：LinkedIn API 為例，指定過濾的參數名
```
GET /people-search?first-name=Clair
GET /people-search?last-name=Standish
GET /people-search?school-name=Shermer%20High%20School
```
若同個搜尋參數裡包含多個要素，則需要全部指定，如：Tumber API 藉由參數 - **tag** 來搜尋有打上相應標籤的貼文。
```
GET /posts?tag=new+york+yankee 
```
只有單個搜尋項目的情況下，會用 `q` 作為查詢參數，`q`為 query 的縮寫，達到模糊搜尋的功能，搜尋包含指定單詞的文章內容。 

範例: Instagram API 指定用戶名來搜尋用戶資料
```
GET /user/search?q=jack
```

比較以下兩者差異:
```
[1] GET /users?name=jack
[2] GET /users?q=jack 
```
[1] 用戶名 (name) 需完全和 jack 一致才有辦法搜尋到，過濾的目標侷限於名字上。

[2] 用戶資訊只需包含 jack 即可，可作全文搜尋。
如：對文章搜尋時，文章內容只要包含指定的單詞就會出現在搜尋結果裡。

> 知名案例: Google 搜尋 
> 
> 搜尋所有包含 `q` 指定單詞的所有網頁

將參數 `q` 與其他字詞組合進行搜尋

範例: [Twitter API](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets)
```
GET /search/tweets.json?q=%23game&lang=ja
```
利用參數 `q` 來搜尋含有指定單詞的動態內容(含 hashtag)，結合其他參數指定語言、位置資訊。

1. URI 是否應加上 “search” 一詞？search 表 “搜尋”的行為，為 “動詞”，放在表示資源的 URI 裡是否準確？
    
    > 用於搜尋的用途，非條列所有資訊
     
    如： Twitter API 無法取得所有 tweet 資訊，但提供搜尋用的 API 且獨立於其他一般的 API
    
2. 以搜尋為主體的線上服務 API：
    搜尋引擎的 API e.g. Yahoo, Bing，根據搜尋功能的定位有所差異
```
Yahoo
GET https://yboss.yahooapis.com/ysearch/web?q=ipod
GET https://yboss.yahooapis.com/ysearch/news?q=trump
GET https://yboss.yahooapis.com/ysearch/images?q=cat
GET https://yboss.yahooapis.com/ysearch/web,images?web.q=ipod&images.q=mp3

Bing
GET https://api.datamarket.com/Bing/Search/Web?Query=%27New+Xbox%27
```

:::info Discussion
複雜的 query string 處理方式？
:::

## 2.5.5 查詢參數與路徑的使用區別
可附加在查詢參數的資訊也能放置在路徑 e.g. [LinkedIn API](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/company-search?context=linkedin%2Fcompliance%2Fcontext&tabs=http)

```
GET /company/1337:(id,name,description,industry)
```
設計 URI 時，決定 client 端指定參數放置在查詢參數 or 路徑裡的依據：
1. 能否表示唯一資源所需的資訊：
    - 用戶 ID 獲取的資料是唯一的 → 用戶 ID 適合放路徑
    - 用戶驗證的 Access token 用查詢參數來指定
2. 能否省略：
搜尋時用到的參數如: `offset`、`limit`、`page` 若被省略，通常會給定預設值避免出錯 → 適合放在查詢參數

## 2-6 登入與 OAuth 2.0
常見於第三方公開的 API 驗證&授權 e.g. Facebook, Google, GitHub

### 流程：圖 2-6

### 採用 OAuth 驗證的好處：
- 廣泛被接受：經 RFC 6749 訂定標準化，大多程式語言都有相應的函式庫
- 易用

### OAuth 2.0 定義的 4 種模式獲得訪問資源的許可(Grant Type)
| Grant Type  | 用途   |   
| ----------- | ------------ | 
| Authorization Code   |  適用於 Server 端處理大量請求的 Web App   | 
| Implicit Code   |  適用於 Mobile App & Client 端 Javascript 處理請的 App   |  
| Resource Owner Password Credentials   |  適用於不使用第三方服務的  App     |  
| Client Credentials   |  適用於不以用戶為單位做驗證的 App    |  

> 合適的形式: 明確指出採用 OAth2.0 & 類似於 RFC 6749 提出的範例

```
/oauth2/token
```
### Resource Owner Password Credentials 模式
於 request body 以表單的形式(`application/x-www-form-urlencoded`)，進行 UTF-8 編碼後發送。

發送的內容包含以下數據：

| 鍵值(key)  | 內容   |   
| ----------- | ------------ | 
| grant_type   |  password → 表使用 Resource Owner Password Credentials 模式   | 
| username   |  登入的用戶名   |  
| password   |  登入的密碼     |  
| scope  |  (Optional) 指定允許訪問的權限範圍  |  

scope 用於指定允許訪問的權限範圍，可根據服務獨自定義，可達成自外部服務取得 token 的同時限縮權限範圍。

> 案例: Facebook [API](https://developers.facebook.com/docs/facebook-login/web) → scope=email

範例: 來自 Client 端的請求
```
POST /oauth2/token HTTP1.1
Host: api.sample.com
Authorization: Basic <base64_code>
Content-Type: application/x-www-form-urlencoded

grant_type=password&username=tom&password=1234&scope=api
```
Server 端驗證後成功後的回傳範例:
```json
{
	"access_token": "<base64_code>",
	"token_type": "bearer",
	"expires_in": "32434554",
	"refresh_token": "<base64_code>"
}
```
後續訪問 API 時只需附帶 `access_token` 資訊即可，server 端可用 `access_token` 識別身份。

Client 端發送 `bearer  access_token` 給 server 的形式有三類:
- request header: Authorization 帶有 Bearer 作為前綴
```jsx title="Request Header" 
GET /users HTTP1.1
Host: api.sample.com
Authorization: Bearer <base64_code>
```
- request body: 指定 Content-Type
```jsx title="Request Body" 
POST /users HTTP1.1
Host: api.sample.com
Content-Type: application/x-www-form-urlencoded

access_token=<base64_code>
```
- 以查詢參數的方式加到 URI 裡
```jsx title="Parameters in URI" 
GET /users?access_token=<base64_code> HTTP1.1
Host: api.sample.com
```

:::info Discussion
OAuth 如何整合現有的系統驗證流程，如：資料庫內表的結構如何設計？
:::

## 2.6.1 access token 的有效期&更新
`expires_in` 做作為判定 `access_token` 多久之後過期的依據，Server 收到過期的 token 時回傳 `401`。
```json
{
	"error": "invalid_token"
}
```

Client 端透過 `refresh_token` 跟第三方服務申請新的 `access_token` (註：並非每個服務有提供 `refresh_token`)。

申請新 `access_token`，可在 `grant_type` 參數裡指定 `refresh_token`，連同 `refresh_token` 一並發送給 server 端。
```jsx title="Refresh Token" 
POST /oauth2/token HTTP1.1
Host: api.sample.com
Authorization: Basic <base64_code>
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=<base64_code>
```

## 2.6.2 其他 Grant Type
- Authorization Code、Implicit Code 適用的情況:
> 第三方服務希望被允許訪問你的在線服務裡保存的用戶資訊。
- Client Credentials:
> 適用於第三方想要訪問無需得到特定用戶許可的資訊時，無須提供用戶名&密碼

```jsx title="Client Credentials" 
POST /oauth2/token HTTP1.1
Host: api.sample.com
Authorization: Basic <base64_code>
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
```
- (補充) 自身訊息的別名 (alias)：透過 API 取得用戶自己的訊息，不再需要一個個指定用戶的 ID，使用 `self`, `me` 等 key words 表示用戶自己，透過 access token 獲取綁定的用戶資訊。

    | Service  | Key Words   |   Sample   |   
    | ----------- | ------------ | ------------ | 
    | [Instagram](https://www.instagram.com/developer/changelog/)   |  self   |   users/self/media/liked  |  
    | [LinkedIn](https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api)   |  me   |  /me   |  
## 2-7 主機名 & 端點共有的部分
比較表 2-16，主流服務的 API 設計
    
- 域名加入 api → 易於理解
- 路徑加入版本號
- 部分 API 透過關鍵字區分屬性 e.g. openapi, api-public 描述 API 供給第三方使用

對外提供 API，較為合適的網域名:
```
https://api.example.com/v1
```
## 2.8 SSKDs & API 設計
面向 LSUD (Large Set of Unknown Developers) v.s. 面向 SSKD (Small Set of Known Developers)
- 具通用性
- 易於理解&使用
- **終端使用者的體驗**

> 範例： 電商 mobile APP 的 API

## 2.9 HATEOAS & REST Level3 API
Martin Fowler: 達成完美的 REST API 設計前，有下述幾種設計級別
- REST LEVEL 0: 使用 HTTP
- REST LEVEL 1:  引入資源的概念
- REST LEVEL 2:  引入 HTTP 動詞
- REST LEVEL 3: 引入 HATEOAS 概念

HATEOAS (Hypermedia as the Engine of Application State) 最早源自於 Roy Fielding，Hyper-Media 由多個媒體連結而成，表透過 API 處理的資源。

> HATEOAS 回傳的資料裡帶有下一步要執行的行為、要取得的數據等 URI 的資訊

```json title="SNS 範例"
{
	"friends": [
		{ "name": "Tom",
			"link": {
				"uri": "https://api.example.com/v1/users/1",
				"rel": "user/detail"
			}
		},
		{ "name": "Jack",
			"link": {
				"uri": "https://api.example.com/v1/users/2",
				"rel": "user/detail"
			}
		},
        ....
	],
	"link": {
		"uri": "https://api.example.com/v1/users/me/friends?since_id=123"	
		"rel": "next"
	}
}
```
`rel`: 用於表示 URI 與當前數據的關係 
```json title="訪問特定用戶的 URI"
{
	"id": 1,
	"name": "Tom"
	....
	....
	"link": {
		"uri": "https://api.example.com/v1/users/1/messages"	
		"rel": "friends/messages"
	}
}
```

> Client 端只需知道 API endpoint 的進入點，即可取得 API 提供的功能

Q: Client 端如何知道當前訪問的數據類型？
> 藉由 HTTP Header 裡 Content-Type 告知 Client 端訪問的數據類型

## 2.9.1 REST LEVEL 3 API 的優點
- Client 端無需事先知道 URI 資訊也能順利訪問
- 減少 Client 端因 URI 出錯導致 bug 發生的機率
- 減少開發團隊修改上的負擔

:::info Discussion 
HATEOAS 的缺點
:::
## 2.9.2 REST LEVEL 3 API

:::info Discussion 
採用 HATEOAS 的時機點
:::

## 2.10 小結
多參考 [ProgrammableWeb](https://www.programmableweb.com/apis/directory) 的 API  範例，比較其他服務的設計方法，設計出優美、好用的 API。

:::tip Good
- 設計好記、功能一目瞭然的 endpoint
- 使用適合的 HTTP 方法
- 選擇適合的英文單詞、注意單詞的單複數
- 使用 OAuth 2.0 驗證
::: 