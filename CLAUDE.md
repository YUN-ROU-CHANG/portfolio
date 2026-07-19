CLAUDE.md
專案身分
個人求職作品集網站。擁有者：張韻柔（Yun-Rou Chang, Rose）。 國立臺北科技大學互動設計系碩士班，2026 年 8 月畢業。 目標職缺：UX Researcher / Interaction Designer / Product Manager。
技術棧
React 18 + TypeScript + Vite 6 + Tailwind CSS v4 + shadcn/ui

* Framer Motion (motion/react) + react-router-dom，部署於 Vercel。 Tailwind v4 採 CSS-first 設定，無 tailwind.config.js， 所有 token 定義在 src/styles/globals.css 的 @theme 與 @theme inline。

設計 Token（唯一來源）
所有顏色一律使用 semantic token，禁止硬編碼色值。 Primitive：--ink #0C0C0C / --bone #EEEAE0 / --acid #FFE699 全站只有這三個色相，不得引入第四個色相（藍色一律移除）。 中性階由 ink 派生，不得另建灰色系。
字體
標題（英）Space Grotesk，內文（英）Inter，metadata IBM Plex Mono。 中文標題與內文皆用 Noto Sans TC，靠字重 700 對 400 拉開層次。 不使用台北黑體（本專案已定案採 Noto Sans TC 備案）。 全站開啟 font-variant-numeric: tabular-nums。
語氣與文案規則

* 中文文案禁止使用破折號（——）。
* 禁止使用「不是⋯而是⋯」句型。
* 第一人稱、動詞開頭、避免行話。
* 英文採句首大寫，不用 Title Case 濫用。

事實紅線（絕對不可寫錯，也絕對不可自行更動）
姓名與身分

* 中文姓名：張韻柔
* 英文姓名：Yun-Rou Chang
* 學校：國立臺北科技大學 互動設計系碩士班（NTUT / Taipei Tech）
* 指導教授：鄭建文 博士

碩士論文

* 題目：基於雙重歷程理論之在床拖延手機通知介入設計：通知類型與視聽覺元素之探討
* 英文題目：Smartphone Notification Intervention Design for While-in-Bed Procrastination Based on Dual-Process Theory: Exploring Notification Types and Audiovisual Elements
* 口試日期：2026/06/26（已完成）
* 研究方法：controlled experiment（受控實驗）
* 實驗設計：3（訴求類型：威脅／共情／設計摩擦，受測者間） × 3（感官模態：視覺／聽覺／視聽，受測者內）混合設計， 另加 3×2 介入平均 vs. 基線（一般系統通知）對照分析。
* 禁止寫成「3×4 factorial design」。
* 禁止寫成 EMA、ecological momentary assessment、diary study、 longitudinal study、日記研究、縱貫研究。
* 量化樣本數：N=48（每組 16 人）
* 質性訪談樣本數：N=45
* 禁止把 45 寫成量化樣本數，也禁止把 48 寫成訪談人數。
* 分析工具：SPSS
* 關鍵發現可引用：
   * 客觀與主觀分裂：感官與訴求對主觀心理有大效果（η²p .18 到 .29）， 對自動化滑動行為幾乎無影響。
   * 聽覺是黃金通道：三組訴求差異幾乎全集中於純聽覺條件。
   * 介入優於基線：設計摩擦於 PAD 喚起度呈超大效果（d = -1.282）。
   * 意圖與行為連結：唯共情組意圖能轉化為行為（r = +.516）。
   * 個體特質有獨立預測力但不調節介入效果，可採通用設計。

研究產出（三件，彼此獨立，不可合併敘述）

1. 碩士論文（如上）
2. SSIM 2024 最佳論文（Best Paper） 標題：Artificial Intelligence-Assisted Music and Interactive Design for University Students: Exploring Needs and Skill-Based Variations in Music Creation Experience 注意：SSIM 非 IEEE 主辦，禁止寫成 IEEE 論文。
3. IEEE GCCE 2025，日本大阪，口頭發表 標題：An Experimental Study on the Effect of AI Voice Prominence on Users’ Emotional Responses

* 禁止寫「two IEEE papers」或任何等效說法。 正確說法為「two first-author conference papers」（這裡的2篇第一作者是只SSIM & GCCE）。

專案

* Oblivilight：OpenHCI 工作坊作品，7 人團隊，獲 Best Demo， 受邀於 TAICHI 展示。

* 獎項：OpenHCI '25 Best Demo，受邀 TAICHI 展出
* 我負責：主導 11 場使用者訪談與痛點釐清，將色彩心理學轉譯為 10 種情緒光效系統；硬體與 AI 模型由組員負責
* 研究驅動決策：訪談發現使用者「想向 AI 傾訴、卻怕被永久記住」的矛盾，據此推翻原本的 AI 日記方向，改以「主動遺忘」為核心體驗
* 產品切點：回應 AI 產品的核心焦慮，當記憶變成資料，如何把掌控感還給使用者
   * OpenHCI 由多校共同舉辦，禁止加上 NTU 或台大前綴。
   * TAICHI 主辦單位為 Taiwanese Association of Computer Human Interaction， 禁止寫成 ACM SIGCHI Taiwan。
   * TAICHI 是展示邀請，不是論文發表場合，禁止列入論文清單。

* InnoConnect+：萊爾富 Hi-Life 來送禮服務再設計，

* 獎項：2024 全國服務創新跨界共創大賽 萊爾富題金獎（該題金獎僅一隊、決賽共 10 隊；全賽事 186 組），並獲萊爾富邀請進行企業內部提案
* 我負責：服務流程與前端介面設計（顧客旅程、服務藍圖、精實畫布），並提出評審點名的兩項核心創新，心理測驗社群裂變行銷與客製化互動賀卡
* 商業洞察：將「禮物逾期補差價」改為「未使用退回會員點數」，同時移除送禮心理負擔並把價值鎖回萊爾富生態（retention／LTV 思維）
* 成效驗證：SUS 90% 正面、UEQ 三維度皆正向（N=19）；成長迴圈問卷顯示 68% 因心理測驗而使用「來送禮」、73% 願試買 Hi Café，可用性測試 N=19（SUS / UEQ）。
* 合作對象是萊爾富 Hi-Life，不是全家 FamilyMart。

* Mú：台灣瀕危珍貴木材多感官導覽， Rose 負責使用者研究與提案設計，N=23 訪談與問卷。

* 獎項：UX Design Awards 提名
* 我負責：提案發想、使用者研究（N=23 問卷＋訪談）、user journey、persona、pitch 影片與 AI 輔助展場建模
* 研究驅動決策：以問卷與訪談檢驗原始「睡眠艙」構想後，主導方向轉換，聚焦台灣 12 種珍貴木的認知推廣

* ADNEX（凱鈿子公司）實習：社群經營與 KOL 行銷，

* 開發 110+ 位 KOL、全程執行約 15 檔合作（洽談、合約到結案），推動品牌知名度
* 經營品牌 FB／IG，發現主管專訪型短影音互動最佳，策略化後單篇互動率達 10.26%，為經營期間平均 5.09% 的兩倍
* 運用 Nielsen、OpView 進行市場與社群口碑數據分析，支援行銷決策
* 主動建立 KOL 合作交接 SOP；受指派主講企劃部門 AI 生成工具內訓

保密紅線（ADNEX 實習）

* 可公開：工具名稱 Nielsen、OpView。
* 不可公開：客戶名稱、KOL 身分與姓名、報告內容、合約細節、內部數據。
* 若不確定某項資訊是否可寫，一律不寫並回報使用者。

其他事實

* 競賽：時報金犢獎第三名（永慶房屋雇主品牌招募廣告設計獎）、 大數據精準行銷競賽第三名。
* Fulbright workshop 與 Penn State GenAI Design Thinking Workshop 是兩個完全不同的活動，禁止合併或互相替換敘述。
* Python 證照：ITS Python 認證為真實持有。 僅可出現在 Resume 頁的 Certifications 區塊， 禁止出現在首頁、About 技能標語或任何 skill highlight。
* 禁止提及 Arduino。
* 禁止使用 Instagram 24 位追蹤者成長數字。
* Footer 年份 2026，網址 yunrouchang.me。 禁止出現舊網址 roseportfolio-rho.vercel.app。

工作方式

* 先給計畫與 diff，等使用者核可再改。
* 明確列出你要動哪些檔案。
* 不要自行更動任何事實數字，所有數字變動都要先問使用者。
* 不要覆寫既有文字內容，除非該次指令明確要求。
* 不要新增 npm 套件，除非事先說明理由並取得同意。
