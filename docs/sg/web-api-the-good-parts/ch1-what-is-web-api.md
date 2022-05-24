---
title: "Ch1: What is Web API"
sidebar_label: "Ch1: What is Web API"
sidebar_position: 1
---

## 什麼是Web API
* API - Application Programming Interface
    * 給程式看的`介面`
    * 一種封裝 - 外部不需要知道內部實作細節
* Web API
    * 透過HTTP提供的API
    * 因為是HTTP，基本上就是以成對的request/response做資源約定
    * 因為目標是提供`介面`，彼此通常會約定一種共通的的serialization(序列化)方式
    * 幾個常見的Web API serializer
        * JSON
            * [JSON-RPC](https://zh.wikipedia.org/zh-tw/JSON-RPC)
            * [SECS/GEM](https://en.wikipedia.org/wiki/SECS/GEM) ([Example](https://docs.inductiveautomation.com/pages/viewpage.action?pageId=19957137))
        * XML
            * [XML-RPC](https://zh.wikipedia.org/zh-tw/XML-RPC)
            * [SOAP](https://zh.wikipedia.org/zh-tw/%E7%AE%80%E5%8D%95%E5%AF%B9%E8%B1%A1%E8%AE%BF%E9%97%AE%E5%8D%8F%E8%AE%AE)
        * GraphQL
        * [ProtoBuf](https://zh.wikipedia.org/zh-tw/Protocol_Buffers)

:::info Discussion
為什麼YAML好像比較少見？YAML不能拿來搭API嗎？
:::


## 1.1 WebAPI的重要性

你的服務如果只有人類才能用...

* 著名的成功例子
    * Amazon Product Advertising API
        * 2003對外提供服務
        * AWS的發源地
            * 在S3, EC2還未對外公開的時代
            * AWS = Product Advertising API
        * 讓廣告跟廣告營銷聯盟合作
            * 可以簡單地將Amazon的商品透過自己的網站進行銷售
    * Twitter
        * 2006開始對外公開Web API
        * 使用API，幾乎可以完成所有Twitter上的操作
        * 催生了Twitter周邊的生態圈

* 只能透過API使用的SaaS
    * [Twilio](https://www.twilio.com/)
    * [Stripe](https://stripe.com/)
        * 『我們所服務的是開發者』

* 因為其他服務提供了Web API，所以能提供額外的整合性
    * [Pocket](https://getpocket.com/)
    * [Feedly](https://feedly.com/)
    * [IFTTT](https://ifttt.com/)

* 什麼都要做成API
    * Garry Tan: Y-Combinator的老闆之一，在2013年寫的文章
    * [The API-ization of everything](https://blog.garrytan.com/the-api-ization-of-everything)


## 1.2各種各樣的API模式

* ProgrammableWeb
    * 收集一堆公開API並提供搜尋功能的服務
    * https://www.programmableweb.com/

* 製做~~公開~~API時，要以未知的第三方能夠順利為原則進行設計
    1. 好的文件
    2. `介面`本身容易理解
    3. Authentication
    4. Throttling

* 用來讓其他服務嵌入
    * Web Widgets
        * Youtube Embed Player
            * `https://www.youtube.com/embed/<VideoId>`
        * 在這樣的場景中，要注意Cross Domain的support
            * `Access-Control-Allow-Origin`
* Mobile backend
    * 給行動裝置使用的Web backend
        * 就是一種Web API
        * 總不會想要response HTML給mobile device...

* 公司內系統的integration
    * 各種商業解決方案其實都有提供API的能力
        * Jira
        * Confluence
        * Saleforce

* (補充) Web Backend as Service - [Google Firebase](https://firebase.google.com/)
    * 通常拿來做Mobile App backend
        * 但其實做好後提供的介面就是Web API
        * 你要拿來串browser web frontend也可以


## 1.3應該通過API公開什麼

* 最簡潔的方法 - 將所有你提供服務的東西通通提供API存取方式
* 但想一下你的商業本質是什麼
    * 家庭賬單記帳服務具有幣值轉換功能
    * 提供幣值轉換API - Yes or No?
* 提供API是否會帶來風險？
    * 公開API會讓人容易砍站
        * 可以做throttling
        * 總不該希望你的服務沒人用吧
    * 公開API可以凝聚社群
        * Google Map

:::info Discussion
系統對外提供服務了，但只要不提供Web API，內容會比較安全不容易被盜走
:::

:::info Discussion
API設計來是給外部地方三方使用的
:::

## 1.4設計優美的WebAPI的重要性

* 優美的API
    * 易於使用
    * 便於修改
    * 健壯
    * 不怕公之於眾

## 1.5如何美化WebAPI

## 1.6 REST與WebAPI

## 1.7作為目標對象的開發人員數量與API的設計思想

## 1.8小結
