---
title: "Ch7: SRE - 單一職責原則"
sidebar_label: "Ch7: SRE - 單一職責原則"
sidebar_position: 7
---

# Single Responsibility Principle

- 一個模組應該只對唯一的一個角色負責

軟體開發人員需要講兩者維持在高價值，但往往都會著重其中一個而忽略另一個

- 模組(Module)：
  > 一個原始檔(source file)

## 症狀 1 : 意外重複

![EmployeeClass](./ch7/7.1.EmployeeClass.png)

- calculatePay() 方法由會計部指定，並向 CFO 報告。
- reportHours() 方法由人力資源部指定和使用，並向 COO 報告。
- save() 方法由 DBA 指定，並向 CTO 報告。

#### 共用演算法

![共用演算法](./ch7/7.2.png)

> 分開不同角色所依賴的程式碼(separate the code that different actors depend on)

## 症狀 2 : 合併

![MergeConflict](./ch7/MergeConflict.gif)

> 分離支援不同角色的程式碼(separate code that supports different actors)

## 解決方案

> 避免意外重複(accidental duplication)

![三個類別不相互了解](./ch7/7.3.png)

三個類別不相互了解

![FACADE模式](./ch7/7.4.png)

FACADE 模式

![較少函數的FACADE模式](./ch7/7.5.png)

```ts
class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods

  public saveToFile(): void {
    // some fs.write method to save book to file
  }
}
```

```ts
class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods
}

class Persistence {
  public saveToFile(book: Book): void {
    // some fs.write method to save book to file
  }
}
```
