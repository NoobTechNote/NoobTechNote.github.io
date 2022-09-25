---
title: "Ch9: LSP - 里氏替換原則"
sidebar_label: "Ch9: LSP - 里氏替換原則"
sidebar_position: 9
---

# Liskov substitution Principle

- 如果類別 T 有一個子類別 S，那麼 T 可以被 S 替換而不會發生任何錯誤。

  > if S is a subtype of T, then objects of type T may be replaced with objects of type S .

- 衍生的子類別必須可以替換成他們繼承的父類別。
  > Derived classes must be substitutable for their base classes .

## Example

- Bad way:

```ts
class Rectangle {
  constructor(private width: number, private length: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setLength(length: number) {
    this.length = length;
  }

  public getArea() {
    return this.width * this.length;
  }
}
```

```ts
class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    // A square must maintain equal sides
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}
```

```ts
const rect: Rectangle = new Square(10); // Can be either a Rectangle or a Square
rect.setWidth(20);
expect(rect.getArea()).toBe(200); // ❌ If rect is a Square, area is 400
```

Ooops

```ts
const rect: Rectangle = new Square(10);
rect.setWidth(20);
if (rect instanceof Square) {
  // ...
} else {
  // ...
}
```

- Good way:

> Type checking a polymorphic value is a good indicator of an LSP violation.

```ts
interface Shape {
  getArea: () => number;
}

interface Rectangle extends Shape {
  width: number;
  length: number;
}

interface Square extends Shape {
  sides: number;
}

// Implementation...
```

# Example 2

- LoadingProvider Component 的 children 參數，符合 LSP

```ts
function LoadingProvider(isLoading: boolean, children: React.ReactNode) {
  return isLoading ? <svg>...</svg> : children;
}

function Button({ text: string }) {
  return <button>{text}</button>;
}

function Image({ url: string }) {
  return <img href={url} />;
}
```

```jsx
<LoadingProvider isLoading={isLoading}>
  <Button text='Click me!' />
</LoadingProvider>

<LoadingProvider isLoading={isLoading}>
  <Image url="https://sample.img.url" />
</LoadingProvider>

```
