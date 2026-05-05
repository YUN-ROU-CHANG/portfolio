
  # My Portfolio Website

  This is a code bundle for v6 (project 測試)_Portfolio Website. The original project is available at https://www.figma.com/design/yi4H7akMHEjFNgGT6xhywR/v6--project-%E6%B8%AC%E8%A9%A6-_Portfolio-Website.

  # My Portfolio Website 版本紀錄
V1 — 原始版本（GitHub 初版）
技術架構： 靜態 HTML（單一 index.html）
設計風格： 基本的個人介紹頁面
狀態： 起點，你說「用字遣詞還不錯，但整體易讀性有點差」

V2 — Claude Design 重設計版
工具： Claude Design 生成
設計風格： Brutalist research-notebook 美學

骨色紙張底色（#EEEAE0）
Chartreuse 螢光黃綠 accent（#C6F24A）
IBM Plex Mono 字體
大號名字堆疊、lab notebook 數據表格
點點紙張背景
重要元件： Hero data sheet、work-row 橫列、awards 表格、Research/Thesis 深色 section
問題： 易讀性仍需改善，字體大小不一致


V3 — React 多頁架構版（現行版本）
技術架構： React 18 + TypeScript + Vite + React Router
頁面結構：

Home.tsx
About.tsx
Projects.tsx
Resume.tsx
9 個 project 子頁（src/pages/project/）
2 個 Playground 子頁（Photography.tsx、HowIBuiltThis.tsx）

這個版本經歷了大量的迭代，可以細分為幾個子版本：
V3.1 — 視覺設計移植

把 V2 的 brutalist 設計語言移植進 React 架構
加入 Plus Jakarta Sans + DM Sans 字體系統
CSS token 系統（:root custom properties）
Navbar 改成三欄 grid + 膠囊連結 + 實時時鐘

V3.2 — Hero 重設計

名字從普通大字改為 clamp 響應式大字
右側從 Venn diagram → Data sheet 四格（03 IEEE / 14 honors）
最終改為去背人像照片（openhci_me.png）

V3.3 — Selected Works 重排

從卡片 grid 改為 work-row 橫列表格
Project 標題改為敘事句（"Sleep Guardian / interrupting the scroll..."）
調整為 5 個精選項目

V3.4 — 內容與顏色優化

Chartreuse #C6F24A → 金黃 #FFE699
加入 Research/Thesis 深色 section（含通知設計 2×2 矩陣）
加入 Playground & Life（Carousel → 三個獨立連結）
移除 Marquee banner、IDX 03 header 等元素

V3.5 — About 頁面重設計

Hero 從照片 + bio 改為 portrait tile（含旋轉印章）+ skill matrix 表格
加入 "A researcher who codes. / A designer who asks why." 大標題
My Values 從三欄改為 2×2 grid

V3.6 — Projects 與圖片系統

所有 project 封面換成本地圖片
glob 批次載入（Photography.tsx）
8 個 project 子頁照片放置
Projects 頁面順序重排、移除 Bilingual Center

V3.7 — 效能與響應式

手機版 Nav 修復（滑動式膠囊連結）
名字斷行問題修復
Work-row 手機版單欄排版
圖片 objectFit 修正（contain vs cover）
Back to Top 按鈕全站加入
  
