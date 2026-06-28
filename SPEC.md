# 個人網站規格書

> 本文件為後續開發依據，列出各頁與全域功能的設計內容。

## 0. 技術基底

| 項目 | 決定 |
|---|---|
| 框架 | React + Vite + TypeScript |
| 樣式 | Tailwind CSS |
| 動畫 | Framer Motion |
| 路由 | react-router-dom HashRouter |
| 部署 | Vercel |
| 新增套件 | `swiper`、`yet-another-react-lightbox` |

---

## 1. 頁面架構（7 頁）

| 路徑 | 頁面 | 內容方向 |
|---|---|---|
| `/` | Home | Hero + 自我介紹 + 標籤 + 經歷簡表 + 精選卡片 |
| `/skills` | Skills | 分類技能列表 + Devicons 圖示 |
| `/experience` | Experience | 完整時間軸 |
| `/projects` | Projects | 作品卡片 + 技術分類篩選 |
| `/notes` | Notes | 連到 HackMD 筆記分類 |
| `/activities` | Activities | 活動心得卡片 + 照片輪播 + Lightbox + Accordion |
| `/contact` | Contact | 聯絡方式卡片 + 表單 |

---

## 2. 全域共用功能

### 2.1 Navbar
- 固定頂部，`backdrop-blur` 毛玻璃效果
- 漢堡選單（手機版）
- 深色 / 淺色模式切換按鈕 🌙/☀️，存 `localStorage`

### 2.2 互動小人（Claude Buddy）
[ClaudeBuddy.tsx](src/components/ClaudeBuddy.tsx)
- idle 上下漂浮、呼吸動畫、眨眼
- 點擊顯示隨機問候語
- 依當前路由顯示對應提示語（如技能頁顯示「這些是我會的工具！」），`GREETINGS` 依路由分組
- 滑鼠靠近時眼睛朝游標方向偏移（`onMouseMove` 算角度，小幅 `translate` 眼珠）

### 2.3 照片系統
- Activities 頁：SITCON 2026 照片輪播（Swiper）+ Lightbox（需提供照片素材）
- 其他頁以 Logo／圖示呈現視覺，不額外加照片區

---

## 3. 各頁規格

### 🏠 Home
- 頭像卡片、自我介紹段落、日常標籤、個性標籤、經歷簡表
- Hero 標題下方加文字輪播職稱（學生 / 開發者 / SITCON 參與者），用 Framer Motion 實作切換動畫
- 兩個 CTA 按鈕：「看技能」→ `/skills`、「看作品」→ `/projects`
- 精選卡片區：最新活動心得（SITCON 2026）+ 3 個精選技能 Logo 預覽，皆連結至對應頁面

### ⚡ Skills
- 四分類：程式語言 / 前端 / 後端&資料庫 / 開發工具
- 每項標註熟悉度（有在用 / 學習中 / 接觸過）
- 每個技能項目加 Devicons CDN 圖示（`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/...`），放在名稱左側
- 「現在迷上的東西」區塊

### 🤝 Experience
- 時間軸卡片格式，依時間排序顯示經歷

### 📂 Projects
- 專案卡片（標題/說明/技術標籤/連結）
- 技術分類篩選 Tab（All / Web / Java / 其他），依 `tech` 陣列關鍵字過濾

### 📝 Notes
- 連到 HackMD 的卡片連結（工具筆記、程式語言筆記）

### 🎪 Activities
- 卡片式（標題/日期/標籤/心得段落）
- 照片輪播（Swiper.js，需提供 SITCON 2026 活動照片）
- Lightbox 點擊放大
- 卡片可展開/收合（Accordion），心得內容預設收合摘要、展開全文

### ✉️ Contact
- 5 個聯絡方式卡片
- 表單：串接 Formspree（免後端，真正送出）

---

## 4. 套件清單

| 套件 | 用途 |
|---|---|
| `swiper` | Activities 頁照片輪播 |
| `yet-another-react-lightbox` | 照片放大檢視 |
| Devicons（CDN） | Skills 頁技能 Logo |
| Formspree（外部服務） | Contact 表單送出 |

---

## 5. 實作優先順序

1. Skills 頁加 Devicons Logo
2. Navbar 深色/淺色模式切換
3. Home 頁 Hero 改版（文字輪播 + CTA + 精選卡片）
4. ClaudeBuddy 依路由換話 + 滑鼠跟隨
5. Projects 篩選功能
6. Activities 照片輪播 + Lightbox + Accordion（需先取得照片素材）
7. Contact 表單串接 Formspree

---

## 6. 待提供的素材/資訊

- [ ] SITCON 2026 活動照片（3～5 張，供輪播使用）
- [ ] Formspree 表單 ID（或確認是否仍用 mailto 即可）
