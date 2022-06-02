---
title: "Ch2:  What is an API Endpoint and HTTP methods ?"
sidebar_label: "Ch2: What is an API Endpoint and HTTP methods ?"
sidebar_position: 1
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

:::info Discussion
  * 串接某專案API， get_list 該用 GET 全都用 POST ?
  * GET point 的 query parameters 不能 optional ?
:::

## 2.3.2 POST方法

```python
import requests
api_url = "https://www.dating.com/friends/1"
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

## 2.3.3 PUT方法

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
