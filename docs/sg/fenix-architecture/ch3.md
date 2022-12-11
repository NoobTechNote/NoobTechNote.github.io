---
title: 'Ch3: 事務處理'
tsidebar_label: 'Ch3: 事務處理'
sidebar_position: 3
---

# 交易處理 (Transaction)
一個應用程式的系統可能遇到的幾種錯誤：
- 資料庫故障
- 應用程式崩潰
- 應用程式與資料庫間的網路連線中斷
- ~~各種鬼故事~~......

資料庫的交易(Transaction)消除資料是否更新的疑慮，修改資料必須滿足定義好的規則，包含資料的完整性、失敗時觸發回滾 (rollback) 等等。

**Transaction(TX):**
- SQL 語句的集合，視為一個工作單元，資料庫處理的邏輯單位
- 週期：Begin → Commit (or Rollback)

:::info目的
保持資料庫中資料狀態的「一致性」**C**onsistency
:::

資料庫的經典理論，TX 具備的特性：
- **原子性**（**A**tomic）: 每個 TX 有兩種可能結果 → 全部執行成功 or 全部失敗不執行(只要其中一個失敗就讓修改的資料全部 rollback 到 TX 開始前的狀態)
- **隔離性**（**I**solation）： 確保每個 TX 在進行時不會互相干擾
- **持久性（D**urability）: TX 保證所有成功被 commit 的資料修改都能夠正確地被永久儲存(成功寫到硬碟或 SSD 上)

:::info補充
儲存點 (save point):

SAVEPOINT 指令定義一個 TX 儲存點，允許取消部份TX，而只提交(commit)剩餘的部份，可以在交易中插入儲存點，有需要時可以 rollback 到儲存點，而不用 rollback 整個 TX。
:::

舉例：
- 銀行轉帳
- 蝦皮購物

TX 的概念延伸到所有需要保證資料一致性的應用場景 e.g. 快取機制、Message Queue、分散式的儲存架構。

上述的應用場景與資料庫的 TX 一致性非完全相同的概念：
- 內部一致性：一個服務使用一個資料源，透過 A、I、D 來確保資料一致性
- 外部一致性：一個服務使用多個資料源、多個服務使用多個不同資料源，涉及多個資料源的 TX 一致性 → 分散式系統遇到的難題

資料一致性分三種特性:
- 強一致性：寫完之後，任何讀取的資料都是最新的值
- 弱一致性：寫完之後，無法保證都能讀取到最新的資料
- 最終一致性(後面談 CAP 理論)：寫完之後，最後一定能讀到最新的值

## 3.1　本地交易(Local Transaction)
又作「Local Transaction」，適用於單個服務使用單個資料源的場景。

實現原理源自於 [ARIES](https://en.wikipedia.org/wiki/Algorithms_for_Recovery_and_Isolation_Exploiting_Semantics) 理論，現代關係型資料庫的理論基礎。
### 3.1.1 實現原子性和持久性
滿足原子性和持久性的最大困難點：
「寫入硬碟」這個動作並非原子的，除了有「寫入」與「未寫入」狀態，還存在「正在寫」偏向中間的狀態。

可能發生幾種情形：

**未提交 TX，寫入後 crash**:

應用程式還沒修改完資料，但資料庫已將部分資料的變動寫入硬碟，發生故障的狀況，經重啟後，資料庫必須要有辦法得知故障前發生過一次「不完整」的操作，將已修改過的資料從硬碟中恢復成沒有改過的樣子，確保原子性。
    
**已提交 TX，寫入前 crash**:

應用程式修改完所有資料並完成 commit，但資料庫還未將所有變動資料寫入硬碟，發生故障時經過重啟，資料庫必須將未完成的資料重新寫入硬碟，滿足持久性。

### Commit Logging 
以「日誌」的形式依序將修改資料的操作包含的所有訊息(e.g. 修改哪筆資料、資料保存在硬碟裡的哪個區塊等)，都先記錄到硬碟裡，保障資料持久性、原子性兩個特性。

只有在 commit log 成功紀錄在硬碟裡，資料庫在日誌中看到代表 TX 成功的提交紀錄（Commit Record）後，才會根據日誌上的訊息對真正的資料進行修改。

修改完成後，在日誌中加入一條“結束記錄” （End Record）表示 TX 滿足持久性。

#### 日誌一旦成功寫入提交紀錄(Commit Record): 

整個 TX 視為成功，即便真正修改資料時發生故障，資料庫重啟後根據已經寫入硬碟的日誌進行恢復、繼續修改資料即可，保證持久性。
#### 日誌沒有成功寫入提交紀錄(Commit Record)就發生故障： 

整個 TX 就是失敗的，資料庫重啟後會看到一部分沒有 commit 紀錄的日誌，標記為 rollback 狀態，退回到 TX 開始之前，保證原子性。

**缺陷：**

影響資料庫的效能。

### Solution: Write-Ahead Logging(WAL)
> 又作「預寫日誌」，允許在 TX commit 之前，提前寫入變動資料。

寫入變動資料的時間點以 TX commit 時為界去劃分，分作 `FORCE` 和 `STEAL` 兩類：
- `FORCE` :  TX commit 之「後」
    - 要求變動資料必須同時完成寫入則稱為 `FORCE`
    - 不強制須同時完成寫入則稱為 `NO-FORCE`
- `STEAL` : TX commit 之「前」
    - 允許變動資料提前寫入稱為 `STEAL`
    - 不允許變動資料提前寫入稱為 `NO-STEAL`

**LSN–Log (Log Sequence Number Log)**
每條 WAL log 都會帶有一串序號，稱作 [LSN] (Log Sequence Number)，紀錄 TX 改動內容。

WAL 提供額外的機制: 增加 **Undo Log** 的日誌類型。
#### Undo Log：
在改動的資料寫入硬碟前，須先記錄 Undo log，後續遇到需要 rollback 或是故障的情況，把這些 Undo log 紀錄內容都抹除掉。

#### Redo Log：
紀錄修改資料的操作內容。遇到故障時，藉由 WAL 寫入的 TX Log 來恢復重做。

#### WAL 故障恢復時會執行三個階段：
- Analysis(分析)：從硬碟裡尋找最後(新)一次的檢查點(已成功地寫入硬碟裡滿足持久化)，開始對日誌進行掃描，找出沒有結束記錄的 TX，組成集合待恢復的 TX。
- Redo(重做)：分析階段中產生的待恢復的 TX 集合來還原狀態。
- Undo(回滾)：經過分析、重做階段後剩餘待恢復的 TX 集合，即需要回滾的 TX，依 Undo Log 內容將提前寫入硬碟的資料改重新寫回去。

![FORCE 和STEAL 的四種組合關係](./Ch3/ch3-1-2.png)

## 3.1.2 實現隔離性
常見手段：加鎖🔒
- 寫鎖（Write Lock; Exclusive Lock -> X-Lock）
- 讀鎖（Read Lock; Shared Lock -> S-Lock）：
- 範圍鎖（Range Lock）

### 常見的隔離層級：
### Read Uncommitted
允許讀取尚未被 committed 的資料，屬於最低層級。
### Read Committed
只允許讀取已被 Commit 的資料，可解決 Dirty Read 的問題。
### Repeatable Read 
讀到的資料只會是 transaction 開始前已經 committed 的資料，不會讀取到尚未 committed 的資料或者在 transaction 期間被其他並行的 transaction 完成 committed 的變更 
### Snapshot
對每個產生的新資料做 snapshot，產生一個新版本，允許 TX 讀取這些 snapshot 的最新版本 => Multi-Version Concurrency Control (MVCC) 的方式實現
- 好處: 不須在資料表裡設置鎖(lock)來避免衝突
- 缺點: 每筆紀錄都需要額外的儲存空間

### Serializable
採序列化，最嚴格的隔離層級，多個 TXs 變成一個個「接續執行」。

**TX 耗時程度:**

SERIALIZABLE > REPEATABLE_READ > READ_COMMITTED > READ_UNCOMMITTED

## 3.2 全局交易
