# 個人網站資料表 — 填寫後丟給 AI 新增內容

## 使用說明
1. 複製下面任一區塊（① ~ ⑤），填好內容。
2. 把填好的內容貼給 AI，並說「請幫我把這份資料新增到我的網站」。
3. 一次可以丟多個區塊、也可以丟多筆同一區塊的資料（例如 3 個專案一次填）。
4. 不確定的欄位可以留空或填「無」，AI 會處理；**不要刪除欄位名稱**，方便比對。

> 對應的實際程式檔案在最下面「欄位對照表」，AI 會依照那份對照表把資料寫進去，你不需要懂程式。

---

## ① 關於我（About）
對應檔案：`src/data/about.ts`（首頁使用）

```
姓名：
暱稱：
標語（中文，首頁大標題）：
標語（英文，目前網站還沒做雙語顯示，先存著未來用）：
頭像圖片檔名（放在 public/ 資料夾，例如 avatar.jpg）：

自我介紹段落（中文，一行一段，可多段）：


一句話願望 / 小備註（顯示在自介下方斜體小字）：

興趣標籤（逗號分隔）：
個性標籤（逗號分隔，例如 #ENTP, #莽夫）：

日常標籤（每行一個，格式：標籤 | 連結，沒有連結留空）：
標籤 | 連結
標籤 | 連結

經歷簡表（每組一個區塊，格式：分組名稱 → 項目1, 項目2）：
分組名稱 → 項目1, 項目2, 項目3
分組名稱 → 項目1, 項目2
```

---

## ② 技能（Skills）
對應檔案：`src/data/skills.ts`（技能頁 Logo 牆使用）
每個技能複製一個區塊填寫

```
技能 ID（英文、無空格，例如 react）：
技能名稱（例如 React）：
分類（程式語言 / 前端框架 / 工具 / 設計，或自訂新分類）：
Devicon ID（到 https://devicons.github.io/devicon/ 查，例如 react、python、git）：
  　若該技能沒有 Devicon，請說「無」，AI 會改用 Simple Icons 或文字標示
相關專案 ID（填 ③ 專案的 id，逗號分隔，沒有就填「無」）：
```

---

## ③ 專案（Projects）
對應檔案：`src/data/projects.ts`（作品集頁使用）
每個專案複製一個區塊填寫

```
專案 ID（英文、無空格，例如 my-website）：
專案名稱：
一句話說明（顯示在卡片上）：
使用技術（逗號分隔，例如 React, TypeScript）：
使用技能 ID（對應 ② 技能的 id，逗號分隔，用於技能頁的「相關專案」連動）：
封面圖片路徑（目前列表頁還沒做圖片顯示，先存著，未來做詳情頁會用到，可留空）：

詳細介紹（支援 Markdown，目前還沒有專案詳情頁，先存著，未來做了會顯示，可留空）：


外部連結（每行一個，格式：標籤 | 網址，可多個）：
GitHub | https://
Live Demo | https://
其他說明頁 | https://
```

---

## ④ 參與活動（Activities）— 長期參與（社團、職務、營隊隊輔等）
對應檔案：`src/data/activities.ts`（「參與活動」頁使用，路由 `/activities`）
每筆活動複製一個區塊填寫

```
活動 ID（英文、無空格，例如 sts-club）：
活動名稱（例如 STS 社團｜副社長）：
日期（例如 2023 - 2024 或 2026 - now）：
地點（例如 淡江大學）：
分類（學校 / 校外）：
標籤（逗號分隔，例如 社團, 文史）：
一句話說明：

主要職責（每行一項，可留空）：



外部連結（每行一個，格式：標籤 | 網址，可留空）：
活動官網 | https://
其他 | https://
```

---

## ⑤ 活動心得（Blog）— 單次活動的心得文章（有詳情頁）
對應檔案：`src/data/blog.ts` + 詳情頁 `src/pages/BlogDetail.tsx`（「活動心得」頁使用，路由 `/blog`，詳情頁 `/blog/:id`）
每筆心得複製一個區塊填寫

```
心得 ID（英文、無空格，例如 sitcon-2026）：
活動名稱：
日期（例如 2026.03）：
地點：
分類（學校 / 校外）：
標籤（逗號分隔，建議加 #，例如 #sitcon, #年會）：
封面圖片路徑（放在 public/blog/ 資料夾，可留空）：

卡片摘要（1～2 句，顯示在列表頁）：

詳細心得（支援 Markdown，顯示在詳情頁，可用 # ## 分段標題）：



活動照片路徑（每行一張，放在 public/blog/ 資料夾，可留空）：



外部連結（每行一個，格式：標籤 | 網址，可留空）：
活動官網 | https://
共筆 | https://
```

### 填寫範例（SITCON 2026）

```
心得 ID：sitcon-2026
活動名稱：SITCON 2026
日期：2026.03
地點：臺灣科技大學
分類：校外
標籤：#sitcon, #年會, #2026

封面圖片路徑：blog/sitcon2026-cover.jpg

卡片摘要：第一次參加 SITCON 年會，聽了許多精彩的技術議程，也認識了很多同好。

詳細心得：
# SITCON 2026 參加心得

今年第一次參加 SITCON...

## 印象最深的議程

...

活動照片路徑：
blog/sitcon2026-1.jpg
blog/sitcon2026-2.jpg

外部連結：
活動官網 | https://sitcon.org
共筆 | https://hackmd.io/...
```

---

## ⑥ 筆記整理（Notes）— 連到外部筆記（HackMD 等）的分類入口
對應檔案：`src/data/notes.ts`（「筆記整理」頁使用，路由 `/notes`）
每個分類複製一個區塊填寫

```
分類 ID（英文、無空格，例如 tools）：
分類名稱（例如 工具筆記）：
Emoji（例如 🛠️）：
一句話說明：
外部連結（例如 HackMD 資料夾網址）：
```

---

## 圖片擺放規則
所有圖片放進 `public/` 資料夾，網站會自動找到。建議分子資料夾管理：
- 頭像：`public/`（直接放根目錄即可）
- 專案封面：`public/projects/`
- 活動心得照片：`public/blog/`

填寫路徑時不用加開頭斜線，例如 `blog/sitcon2026-1.jpg` 即可。

---

## 欄位對照表（AI 內部使用，你不用管這個）

| 區塊 | 程式檔案 | 介面欄位 |
|---|---|---|
| ① 關於我 | `src/data/about.ts` | name, nickname, taglineZh, taglineEn, avatar, bioZh[], noteZh, interestTags[], personalityTags[], dailyTags[]({label,link}), experience[]({label,items}) |
| ② 技能 | `src/data/skills.ts` | id, name, category, icon（由 Devicon ID 組出網址）, relatedProjects[] |
| ③ 專案 | `src/data/projects.ts` | id, title, description, tech[], skillTags[], coverImage?, content?, links[]({label,url}) |
| ④ 參與活動 | `src/data/activities.ts` | id, title, date, location, category, tags[], summary, responsibilities[], links[]({label,url}) |
| ⑤ 活動心得 | `src/data/blog.ts` | id, title, date, location?, category, tags[], summary, coverImage?, content, photos[], links[]({label,url}) |
| ⑥ 筆記整理 | `src/data/notes.ts` | id, title, emoji, description, link |

> 註：③ 的 `coverImage`／`content` 目前資料結構已支援，但網站還沒有「專案詳情頁」會顯示這兩欄，先存著等以後做了再顯示；① 的 `taglineEn` 也是同樣狀況（網站還沒做雙語切換）。
