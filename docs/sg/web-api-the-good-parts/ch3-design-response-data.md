---
title: "Ch3: Design Response Data"
sidebar_label: "Ch3: Design Response Data"
sidebar_position: 3
---

:::info discussion
要使用什麼樣的數據格式，**html**? **xml**? **json**? **or...**?
:::

## 3.1 數據格式

- JSON 已成為世上 API 數據格式的標準
- 越來越多 API 只支持 JSON 一種格式

**在線服務的數據格式**

| Services        |       Data Format        |
| --------------- | :----------------------: |
| Twitter         |           JSON           |
| Facebook        |    JSON(FQL 支持 XML)    |
| Foursquare      |           JSON           |
| GitHub          |           JSON           |
| Tumblr          |           JSON           |
| Flickr          |        JSON、XML         |
| Amazon          |           XML            |
| Open WeatherMap |        XML、JSON         |
| Yahoo! JAPAN    | XML、JSON、PHP serialize |
| Rakuten         |        XML、JSON         |

:::tip
**Amazon 還只支持 XML ?????**
:::

- **JSON Api & XML Api**
  的 [Google Trends 比較](https://trends.google.com.tw/trends/explore?date=all&q=json%20api,xml%20api)
  ![api_format_trends](/img/api_format_trends.png)
- **AJAX** 曾經就是基於 XML 運行的
- <Highlight color="#ff7f08">JSON 比 XML 應用更為廣泛?</Highlight>

  > _JSON 更簡單地表示相同數據、佔用空間小、更好的兼容 JavaScript_

:::tip
**! ! ! 越簡單易懂的東西越容易普及 ! ! !**
:::

#### 其他數據格式

- [MessagePack](https://msgpack.org/)
  - 使用二進位序列化組成
  - 一個類似 JSON 但比 JSON 更快、更小的數據格式(還不流行)

#### 數據格式的指定方法

- 使用查詢參數的方法
  - e.g. `https://{FQDN}/v1/users?format=xml`
- 使用擴展名的方法
  - e.g. `https://{FQDN}/v1/users.json`
- 使用在請求 Header 指定媒體類型的方法
  - e.g.
    ```
    GET /v1/users
    Host: api.example.com
    Accept: application/json
    ```
  - Accept & Content-Type
    - 客戶端可以使用 **Accept** Header field 來告知伺服器可接受的 response 媒體類型
    - **Content-Type** Header field 表示相關的媒體類型
    - [參考資料](https://stackoverflow.com/a/35722727)(以下重點)
      > - The `Accept` header always indicates what kind of response from the server a client can accept.
      > - `Content-type` is about the content of the current request or response,
          depending on which kind of HTTP message it is applied.

**在線服務的數據格式**

| Service      | 指定方法             | 查詢參數名 | HTTP Header |
| ------------ | -------------------- | ---------- | ----------- |
| Youtube      | 查詢參數             | alt        | -           |
| Flickr       | 查詢參數             | format     | -           |
| Twilio       | 擴展名               | -          | -           |
| Linkedin     | 查詢參數/請求 Header | format     | x-li-format |
| Yahoo! JAPAN | 查詢參數             | output     | -           |
| Rakuten      | 查詢參數             | format     | -           |
| Vimeo        | 查詢參數             | output     | -           |
| GitHub       | 請求 Header          | -          | Accept      |

## 3.2 使用 JSONP

> **JSONP** (JSON with Padding) 是一種將 JSON 傳遞給瀏覽器的方法
>
> <font color="black" size="1">你看不到...你看不到...你看不到...(其實沒有很懂 JSONP 的用途 XD)</font>

**形式如下**

```javascript
callback({ id: 123, name: "Saeed" });
```

- 在 JSON 加入填充信息

:::info discussion
在 script 元素中的 callback 定義是一份 js 的資源?如何運作? _(P.S. 看了 3.2.1 好像懂了那麼一點點)_

`<script src="https://api.example.com/v1/users?callback=callback">`
:::

- **XHTTPRequest** 有同源策略的限制
- **script** 元素不屬於同源策略限制範疇

### 3.2.1 支持 JSONP 的操作方法

- 使用全局變量保存的方法
  ```javascript
  var apidata = { id: 123, name: "Saeed" };
  ```
  - Web 頁面在讀取數據之前必須知道全局變量的名稱
  - 沒有使用 `callback function` 方便

**取得 JSONP 的方式**

| Service    | 查詢參數名   | 取得 JSONP 的方法          |
| ---------- | ------------ | -------------------------- |
| Foursquare | callback     | 透過 callback 查詢參數判斷 |
| Linkedin   | callback     | 指定 JSONP 作為數據格式    |
| Instagram  | callback     | 透過 callback 查詢參數判斷 |
| Twitter    | callback     | 透過 callback 查詢參數判斷 |
| Facebook   | callback     | 透過 callback 查詢參數判斷 |
| GitHub     | callback     | 透過 callback 查詢參數判斷 |
| Flickr     | jsoncallback | 返回標準的 JSONP           |

:::note
JSONP 是 javascript 不是 JSON，在設置 HTTP `Content-Type` Header 不能使用 `application/json`，而要使用 `application/javascript`
:::

:::danger 注意
在 Header 設置 `X-Content-Type-Options`: `nosniff`，在較新的瀏覽器中會發生錯誤，還有可能會引發安全漏洞等問題 ❗❗❗
:::

### 3.2.2 JSONP 與錯誤處理

- 在服務器返回錯誤狀態 (4XX、5XX) 時，script 元素會終止腳本載入，客戶端將無法知道發生什麼了。
- 使用 JSONP 時，若發生錯誤，服務器依然必須返回 200，但須回應具體的錯誤內容。

  ```javascript
  {
    status_code: 404,
    error_message: "Not Found"
  }
  ```

**Foursquare 範例**

```json
{
  "meta": {
    "code": 200,
    ...meta信息
  },
  "response": {
    實際數據
  }
}
```

**Linkedin** 採用指定錯誤 callback 函數 (`error-callback`) 的方式

- `http://api.linkedin.com/v1/people/~:(id)?callback=firstNameResponse&error-callback=firstNameError`

:::info discussion
應該支持 JSONP?
:::

## 3.3 數據內部結構與思考方法

> 如何盡可能減少 API 訪問次數

- API 訪問次數增加的缺點
  - 會使用戶困擾(網頁載入慢 ex. teams......噓 🤫)
  - 增加 HTTP 負載
  - 降低應用程序速度
  - 加大服務器負擔
- API 會被如何使用
- 設計更加易用的 API

:::tip
Users 會以你想不到的方式來使用這些 API

想不到吧~~~ 誒~我就這樣亂打亂試
:::

### 3.3.1 讓用戶來選擇 Response 內容

- 盡可能返回更多的數據?
- 數據量越小越好?
- API 調用時透過查詢參數來指定所需字段

  `http://api.exmample.com/v1/users/1234?fields=name,age`

  **通過字段名來指定所需資料**

  | Service | 查詢參數名 | 示例                        | 省略時的行為 |
  | ------- | ---------- | --------------------------- | ------------ |
  | bit.ly  | fields     | cities, lang, url, referrer | 返回所有資料 |
  | Etsy    | fields     | -                           | -            |

- 指定組合名稱。(Amazon Product Advertising API 稱為 Response Group)

### 3.3.2 封裝是否必要

**統一的結構將所有資料包起來**

```json
{
  "header": {
    "status": "success",
    "errorCode": 0
  },
  "response": {
    ...實際數據
  }
}
```

- header 保存 API 狀態
- response 保存有效數據(客戶端所需的數據)

#### 優缺點

- <font color="#009400">更容易進行抽象處理</font>
- <font color="#e13238">可能會使資料變得冗長</font>

  > 例如上述範例裡的 `header`，實際上 HTTP 已經完成封裝了

:::tip
使用 JSONP 時例外，封裝會更加便利，讀取 JSONP 數據時無法取得 HTTP 等資訊
:::

### 3.3.3 數據是否應該扁平化

#### 在對象中嵌套對象

- 使用階層形式的資料

  ```json
  {
    "id": 41234,
    "message": "Hello World!",
    "sender": {
      "id": 51245,
      "name": "Jay"
    },
    "receiver": {
      "id": 62124,
      "name": "Mech"
    },
    ......
  }
  ```

- 使用扁平化形式的資料

  ```json
  {
    "id": 41234,
    "message": "Hello World!",
    "sender_id": 51245,
    "sender_name": "Jay",
    "receiver_id": 62124,
    "receiver_name": "Mech",
    ......
  }
  ```

#### 單純多項彙整

- 使用階層形式的資料

  ```json
  {
    "id": 52352,
    "name": "Jay",
    "profile": {
      "birthday": 1111,
      "gender": "male",
      "languages": ["zh", "en"]
    },
    ...
  }
  ```

- 使用扁平化形式的資料

  ```json
  {
    "id": 52352,
    "name": "Jay",
    "birthday": 1111,
    "gender": "male",
    "languages": ["zh", "en"],
    ...
  }
  ```

### 3.3.4 序列與格式

#### 返回序列

```json
[
  {
    "id": 51235,
    "name": "Jay",
    "profileIcon": "<url>",
    ...
  },
  {
    "id": 42351,
    "name": "Tom",
    "profileIcon": "<url>",
    ...
  }
]
```

#### 作為對象返回

```json
{
  "friends": [
    {
      "id": 51235,
      "name": "Jay",
      "profileIcon": "<url>",
      ...
    },
    {
      "id": 42351,
      "name": "Tom",
      "profileIcon": "<url>",
      ...
    }
  ]
}
```

**優點**

- 更容易理解序列數據表示的是什麼
- 數據透過對象封裝實現了結構統一
- 可以避免安全方面的風險
  - e.g. Facebook
    ![api_response_format](/img/api_response_format.png)

### 3.3.5 如何返回序列的個數以及是否還有後續數據

> 這小節個人覺得比較沒有特別重點

:::info discussion
大家對於 **_如何返回數據數量及後續是否還有數據_** 有什麼想法嗎？
:::

export const Highlight = ({ children, color }) => (
<span
style={{ color: color }}>
{children}
</span>
);
