# tang yu — 個人作品集

> 莽夫型學生開發者 × AR / 全端探索中

[![GitHub Pages](https://img.shields.io/badge/網站-上線中-brightgreen)](https://candytangsys.github.io/blog/)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)](https://vitejs.dev)

---

## 關於

這是我的個人作品集暨部落格網站，展示技能、經歷、專案與學習筆記，部署於 GitHub Pages。

**技術方向：** XR / Extended Reality · 網站開發 · Linux 系統

## 網站頁面

- **首頁** — 自我介紹、角色輪播
- **Skills** — 技能清單與熟悉度
- **Projects** — 作品集
- **Experience** — 社團與工作經歷時間軸
- **Blog / Notes** — 活動心得與學習筆記（串接 HackMD）
- **Contact** — 聯絡方式

## 技術棧

**前端**
- React 18 + TypeScript 5
- Vite 5（build tool）
- Tailwind CSS v3 + @tailwindcss/typography
- Framer Motion（頁面過場動畫）
- React Router DOM v6（HashRouter）

**套件**
- `react-markdown` + `remark-gfm`（Markdown 渲染）
- `yet-another-react-lightbox`（圖片燈箱）

**部署**
- GitHub Pages（透過 GitHub Actions 自動部署，push to `main` 觸發）

## 在本地執行

```bash
git clone https://github.com/candytangsys/blog.git
cd blog
npm install
npm run dev
```

開啟 `http://localhost:5173`

```bash
# 建置 production
npm run build

# 預覽 production build
npm run preview
```

## 聯絡

- GitHub：https://github.com/candytangsys

## 授權

© 2026 tang yu. All rights reserved.
