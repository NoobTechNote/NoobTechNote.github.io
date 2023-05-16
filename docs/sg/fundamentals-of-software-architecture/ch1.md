---
title: "Ch1: 介紹"
tsidebar_label: "Ch1: 介紹"
sidebar_position: 1
---
## 「架構」的定義

> Software architecture is about making fundamental structural choices that are costly to change once implemented
> 軟體架構是關於做出基本結構的選擇，一旦實施，這些選擇的改變成本很高

* 作者認為[Wiki](https://en.wikipedia.org/wiki/Software_architecture)這段敘述是過時的，微服務架構的其中一個目的，就是為了降低架構改變的成本
* 認清軟體架構的動態本質 - 包括定義本身都是動態的


:::info
「架構就是跟重要的東西有關的事，不管他是什麼」 - [Ralph Johnson](https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)) ([Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)的作者)
:::


* Recap: 軟體架構屬於艾斯豪爾矩陣的哪個維度？

![Eisenhower Matrix](./ch1/eisenhower-matrix.png)

Image from: [The Eisenhower Matrix](https://nextlevelgents.com/eisenhower-matrix/)

## 軟體架構的四個面向

當架構師在分析「架構」時，具體而言在分析什麼？

![Arch Rules](./ch1/arch-rules.png)

### 1. 系統結構 Structure

* 架構時使用的「風格」
* 例如：微服務、分層式、微核心

### 2. 架構特性 Arch Characteristics

* 與系統功能無關，但有這些特性才能使系統正確運作
* 可用性、安全性、容錯性...etc.
* 非功能性需求

### 3. 架構決策 Arch Decision

* 系統如何構建的規則，例如只有服務層能夠存取DB
* 是一種被設計出來的限制
* 若需要繞過這些限制，需要架構評議委員會討論

### 4. 設計原理 Design Principles

* 開發系統時的「指導方針」
* 例如，開發微服務時利用非同步呼叫(e.g. 202 response)提高效能

## 對軟體架構師的八個期望

1. 做出決定

    * 指導，而非指定技術
        * 偶爾可能還是得決定某些程度的技術
    * 推遲技術細節的決定時間點 (echo Clearn Arch)

2. 持續分析

    * 持續檢視系統現狀、現今的技術環境
    * 推薦改善方案

3. 跟上趨勢

    * 跟上業界的趨勢
    * 好在人才市場上找得到人才

4. 確保決策的實行

    * 確保架構決策與設計原理得到遵守
    * 例如，阻止有人因為效能因素從呈現層直接存取資料庫

5. 工作經驗的多樣性

    * 架構師的經驗要廣的意思
    * 比起精通單一技術，廣度更重要

6. 擁有業務領域知識

    * 關於業務領域的知識
    * 金融系統的架構師，至少需要了解金融界的術語

7. 處理人際關係

    * 「開發人員與架構師喜歡解決技術問題，而不是人的問題」Gerald Weinberg
        * [Psychology of Computer Programming and Introduction to General Systems Thinking.](https://www.amazon.com/Psychology-Computer-Programming-Silver-Anniversary-ebook/dp/B004R9QACC)的作者
    * 「不管別人告訴你什麼，總是跟人有關的問題」


8. 駕馭政治

    * 「架構師的每個決定幾乎都會受到挑戰」
        * 做出重要、且廣泛的決策，但
    * 了解企業的政治氣氛，並予以駕馭

## 架構與...的交集

### Pets.com的例子

* 新創公司
* 花在吉祥物與行銷的預算遠高於基礎設施
* 到了聖誕節旺季，網站撐不了流量、掉訂單、交貨延宕
* 最後倒閉，將吉祥物賣給競爭對手

### 工程實務

### 程序與實務

* 程序 Development Process
    * 人們如何組織與互動的機制
    * 例如：Scrum
* 工程實務 Engineering Practices
    * 明白、可重複，且與程序無關的實務
    * 例如：CICD


### 架構與工程實務

* 軟體開發實務並不成熟，缺乏成熟的工程學門的特色
* 未知的未知是軟體系統的剋星
    * 沒人知道會發生，卻在無預期中發生的事物
    * 架構師無法對未知的未知進行設計

#### 解法1：正視架構本身就是迭代式 (本書的精神)

* 因為有未知的未知，所有架構都會是迭代式的
* 敏捷開發就是認知這項事實所做的改變 - 從管理流程(程序)去面對工程實務

#### 解法2：找出工程實務與程序的交集

* 「[建立演進式系統架構](https://www.tenlong.com.tw/products/9789865021733)」的精神
    * 以適應度函數 (Fitness Function)為基礎，在變動隨著時間發生時，用以保障、管理架構特性
* 本書會有很多地方呼應這本書的內容

:::info
Fitness Function解決的問題還是有局限性，你所面對的問題本身必須是可貪婪的(Greedable)才能這麼解。 例如，尋找最短路徑

架構角度的另一種說法：你在當下做的最佳解，對最終要去的方向是有幫助的。你才能用這種方法做
:::

## 維運/DevOps

* 傳統認為維運與架構是無關的，可以把維運外包出去省錢。這使得1900~2000年代的系統架構師都無法掌控維運問題。因而在該限制下進行防守性開發
    * SOA(Service Orented Arch)、ESB(Enterprise Service Bus)
    * 這種想法的背後，帶來的是架構中充滿極其複雜的資訊交換

:::info
防守性開發的想法，跟「[恰如其分的軟件架構](https://www.books.com.tw/products/CN11676411)」這本書的主要精神類似
:::

## 程序(Development Process)

* 大部分的軟體架構書籍都對可預測的事物做了一些似是而非的假設 (很敢講)
* 所有架構最終都會變成迭代式的 - 架構本身也會改變，只是時間早晚而已
* 敏捷方法論的一些技巧，在現代也會有幫助
    * [Trunk Base Development](https://trunkbaseddevelopment.com/)與Feature Toggle
    * [Strangler Pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)

## 資料

* 程式本身與資料有共生關係 - 沒有對方就沒有用了
* 資料架構必須納入考量，透過分析關係與復用如何影響應用程式的組合
* Ch3會詳述

## 架構的法則

* 一切都是取捨
    * [Johari Window](https://www.communicationtheory.org/the-johari-window-model/)
    * 「如果架構師找到了不需要取捨的事物，更可能的狀況是他還沒辨識出取捨在哪裡」
* Why比How重要
    * 本書很強調決策時的「為什麼」

## Recap

1. 架構的四個維度為何？
2. 架構決策與設計原理的差異為何？
3. 列出軟體架構師的8個核心期望
4. 軟體架構的第一法則是什麼？