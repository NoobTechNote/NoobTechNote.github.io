---
title: "Ch3: 範式概述"
tsidebar_label: "Ch3: 範式概述"
sidebar_position: 3
---

範式(Paradigm)，指設計程式的方式，和語言無關，它告訴你該使用哪些設計結構，以及何時該使用它們

至今為止出現了三種主要的範式，Ch3~Ch6會討論他們的成因，以及為什麼很有可能沒有其他的範式存在


## 三種範式

* 結構化程式設計(Structured Programming)
    * 在直接的控制移轉上加上規範
* 物件導向程式設計(Object-Orient Programmming)
    * 在間接的控制移轉加上規範
* 函數程式設計(Functional Programming)
    * 在賦值加上規範

:::info
範式並沒有對你開發程式的工作加入任何新功能。相反的，他們對開發工作進行了限制
:::

## 範式與架構的關係

事實上全都有關係

* 使用多型作為跨越架構邊界的機制
* 使用函數式程式設計對資料的位置及存取方式做了限制
* 結構化程式設計作為模組的依據

以下是架構設計的三個主要關注點，跟範式有對應關係嗎？

* 函式
* 分離元件
* 資料管理


## GOTO

:::caution GOTO
這三種範式共同刪除了`goto`的使用，這一般來說goto被認為對程式開發工作是有害的
:::

C++的goto長這樣，是一種非結構式的流程控制工具

```cpp {13,20} showLineNumbers title=C++的例子：https://docs.microsoft.com/zh-tw/cpp/cpp/goto-statement-cpp?view=msvc-170
#include <stdio.h>
int main()
{
    int i, j;

    for ( i = 0; i < 10; i++ )
    {
        printf_s( "Outer loop executing. i = %d\n", i );
        for ( j = 0; j < 2; j++ )
        {
            printf_s( " Inner loop executing. j = %d\n", j );
            if ( i == 3 )
                goto stop;
        }
    }

    // This message does not print:
    printf_s( "Loop exited. i = %d\n", i );

    stop:
    printf_s( "Jumped to stop. i = %d\n", i );
}
```


:::caution Go與goto
2009面世的Go Lang身為2022當下的熱門語言之一，它是有goto的功能喔
:::