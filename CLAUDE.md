CLAUDE.md
專案身分
個人求職作品集網站。擁有者：張韻柔（Yun-Rou Chang, Rose）。 國立臺北科技大學互動設計系碩士班，2026 年 8 月畢業。 目標職缺：UX Researcher / Interaction Designer / Product Manager。
技術棧
React 18 + TypeScript + Vite 6 + Tailwind CSS v4 + shadcn/ui

* Framer Motion (motion/react) + react-router，部署於 Vercel。 路由用 HashRouter，一律 import 自 `react-router`，路由表在 src/App.tsx。 package.json 雖同時裝了 react-router-dom，程式碼未使用。 Tailwind v4 採 CSS-first 設定，無 tailwind.config.js， 所有 token 定義在 src/styles/globals.css 的 @theme 與 @theme inline。

設計 Token（唯一來源）
所有顏色一律使用 semantic token，禁止硬編碼色值。 Primitive：--ink #0C0C0C / --bone #EEEAE0 / --acid #FFE699 全站只有這三個色相，不得引入第四個色相（藍色一律移除）。 中性階由 ink 派生，不得另建灰色系。

Token 分三層，全部定義在 src/styles/globals.css：

1. Primitive：--ink #0C0C0C、--ink-2 #1A1A18、--ink-bright #E6E1D6、 --bone #EEEAE0、--bone-2 #E3DED1、--bone-3 #F6F2E7、 --acid #FFE699、--acid-ink #7A5C00。
2. Semantic：--background、--surface、--surface-muted、--surface-subtle、 --surface-inverse、--card-glass、--text-primary、--text-secondary、 --text-tertiary、--text-on-inverse、--border、--border-strong、 --accent、--on-accent、--accent-text、--accent-on-inverse。
3. shadcn 相容層：--card、--muted、--primary、--popover、--chart-* 等， 一律指向第 2 層，不得自帶色值。

* 新增顏色一律引用第 2 層 semantic token。 直接引用 primitive（--ink、--bone）會導致暗色模式不翻轉。
* 中性階實際值：亮色 --text-primary #0C0C0C／--text-secondary #4A4A4A／--text-tertiary #616161； 暗色 #E6E1D6／#B5B0A6／#A6A199。
* --color-text-muted 指向 --text-secondary，不指向 tertiary。

亮暗模式
.dark class 加在 html，偏好存 localStorage key `theme`， index.html 內嵌 pre-paint script 防止閃爍，切換鈕在 Layout 膠囊導航內。

* globals.css 的 .dark 區塊覆寫整套 semantic token，primitive 維持不變。
* --on-accent 在兩個模式固定為 --acid-ink。acid 底元素一律鎖 color: var(--on-accent)。
* --accent-text 亮色為 #7A5C00，暗色為 #FFE699。
* 深底元素（.top-cta、頁尾深色按鈕）用 --surface-inverse 加 --accent-on-inverse，暗色模式會反轉為亮底。
* project 案例頁（src/pages/project/*.tsx）的 mockup 採「色相保留、明度自適應」： 粉彩底用 color-mix(色相 10~22%, var(--surface))， 深色相文字用 color-mix(色相 55%, var(--text-primary))， 白玻璃卡一律 var(--card-glass)。 自帶深底的手機畫面 mockup（--sg-night 等）維持靜態。
* 動 mockup 配色前要先問使用者。

可用性判準

* 文字對比一律符合 WCAG 2.1 AA：一般 ≥ 4.5:1，大字 ≥ 3:1。 全站 31 項對比已於 2026/07/24 重算通過，改動顏色後要重新驗證。
* 漸層只允許出現在非閱讀區（Hero、章節過渡、品牌識別、裝飾背景）。 正文、研究方法、數據圖表、表格一律純底色加 ink 文字。
* acid 只能當強調（重點數字、hover、標記），不得大面積鋪背景或當文字底色。
* 漸層要耐 JPEG 壓縮與低階投影，避免 banding。
* 稽核判定標籤只用【保留】【收斂】【移除】。 理由若只是「好看」就歸收斂或移除。

文案架構（i18n）
文案唯一來源是 src/locales/en.json 與 src/locales/zh.json，各 1,180 個 key，結構相同。 改文案編輯 JSON，不要改 component。

* src/contexts/LanguageContext.tsx 提供 useLanguage() 的 t(key)、setLocale、locale。
* zh 缺值或空字串自動 fallback 到 en，key 不存在時回傳 key 本身。
* 語言偏好存 localStorage key `locale`，並同步 html lang（zh 為 zh-Hant）。
* 語言切換鈕在 Layout 膠囊導航內，顯示目標語言（中／EN）。
* zh.json 目前有 88 個 key 是空字串走 fallback，多數為刻意保留英文的專有名詞（Rose Chang、UX Design Awards 等）。
* 以下刻意未抽成 i18n，補抽會壞版或無意義，禁止改動： aria-label（Layout 手機版 CSS 用 button[aria-label="Go back"] 當選擇器掛樣式）、 email、純符號、Photography 的 Go to slide 模板字串、Clock 的 TPE 前綴。

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
* 前導研究樣本數：N=6（ORID 半結構訪談）
* 三個樣本數彼此獨立：前導 N=6、量化 N=48、質性訪談 N=45。 禁止把 45 寫成量化樣本數，禁止把 48 寫成訪談人數， 也禁止把 6 寫成量化樣本數或質性訪談人數。
* 研究工具：自建 app「Sleep Guardian」，以 React Native / Expo 開發。 禁止寫成現成 app 改裝，禁止改寫 app 名稱。
* 分析工具：SPSS
* 分析架構：三層次驗證（ANOVA／介入 vs. 基線對照／Friedman），另有三模型分離 ANCOVA 逐一加入 BPS、BSCS、REI 共變項。
* 受測者條件：18 至 35 歲、具常態性社群媒體（如 Instagram）使用習慣、具中度至重度在床拖延傾向。
* 排除條件（四項）：輪班工作、確診臨床睡眠障礙、重大精神疾患、有服用安眠或其他睡眠相關藥物習慣。
* 關鍵發現可引用：
   * 客觀與主觀分裂：感官與訴求對主觀心理有大效果（η²p .18 到 .29）， 對自動化滑動行為幾乎無影響。
   * 聽覺是黃金通道：三組訴求差異幾乎全集中於純聽覺條件；視聽整合反而遮蔽差異。
   * 介入優於基線：設計摩擦於 PAD 喚起度呈超大效果（d = -1.282）。
   * 意圖與行為連結：唯共情組意圖能轉化為行為（r = +.516）；共情 vs. 設計摩擦 Fisher z = 2.174（p = .030）達顯著。
   * 個體特質有獨立預測力但不調節介入效果，可採通用設計。

研究問題與假設（共 5 題加 1 項探索性分析，禁止寫成 4 題）

* RQ1／H1 訴求類型的相對成效差異 → 部分支持。關閉耗時顯著（p = .016，惟為處理時間差異）；PostScroll 不顯著。
* RQ2／H2 感官模態對行為與情緒的影響 → 部分支持。PAD-A 顯著（p < .001）、五項主觀依變項感官主效果均顯著；關閉耗時不顯著。
* RQ3／H3 訴求 × 感官交互作用 → 部分支持。五項主觀依變項顯著，客觀不顯著。
* RQ4／H4 介入整體是否優於一般系統通知（基線） → 大致支持。DI／MA／PAD-P／PAD-D 介入優於基線；PAD-A 反向；客觀不顯著。
* RQ5／H5 個體特質是否調節介入成效 → 調節不支持。特質與感官交互全不顯著；BSCS／REI 具獨立預測力。
* 探索性分析 意圖—行為連結之訴求調節 → 探索性發現。
* 網站頁面若列出 RQ，必須五題齊全。過去曾誤把 RQ5 標成 RQ4 並漏掉真正的 RQ4，已於 2026/08/04 修正。

設計實務建議（四項，論文 5.2.3）

1. 聽覺通道優先化：精緻化語氣、語速、節奏；採漸進音量與舒緩音色，避免刺耳音效觸發抗拒。
2. 機制導向之訴求選擇：情感共鳴用共情、認知警覺用威脅、直接打斷用設計摩擦；三者可組合使用。
3. 設計摩擦難度校準：採動態難度或無解之開放式任務，避免過易任務觸發「闖關遊戲化」。
4. 累積觀與多層次強度：長期反覆暴露重塑 System 1；提供鎖機／遊戲化／情境擴展三層強度。

研究限制（四項，可公開書寫）

* 平台與情境侷限：刺激物模擬 Instagram 無限滑動動態牆，未延伸至其他社交或影音平台。
* 模擬原型與硬體限制：採客製化 app 原型，受測者使用個人手機而非統一裝置。
* 自然情境與生理變項未控制：遠端非同步於受測者居家進行，非睡眠實驗室。
* 樣本數與回憶偏誤：量化 N=48、單次短期實驗；質性資料為實驗後 12 至 48 小時內之回溯性訪談。
* 未來研究方向提及 EMA、4 至 12 週縱貫研究、N ≥ 300 SEM，皆屬「未來建議」。 描述本研究時仍禁止使用 EMA／縱貫／日記研究等字眼。

研究產出（三件，彼此獨立，不可合併敘述）

1. 碩士論文（如上）
2. SSIM 2024 最佳論文（Best Paper） 標題：Artificial Intelligence-Assisted Music and Interactive Design for University Students: Exploring Needs and Skill-Based Variations in Music Creation Experience 注意：SSIM 非 IEEE 主辦，禁止寫成 IEEE 論文。
3. IEEE GCCE 2025，日本大阪，口頭發表 標題：An Experimental Study on the Effect of AI Voice Prominence on Users’ Emotional Responses

* 禁止寫「two IEEE papers」或任何等效說法。 正確說法為「two first-author conference papers」（這裡的2篇第一作者是只SSIM & GCCE）。

專案

* Sleep Guardian：碩士論文的研究工具與案例頁。 所有研究方法、實驗設計、樣本數、統計結果一律以上方「碩士論文」為準，不得另行敘述。

* 頁面定位：M.S. Thesis Research，狀態 Completed，2025 到 2026
* 我負責：Lead Researcher、App Developer、Interaction Designer
* 技術：React Native / Expo 自建實驗平台，四個核心模組為 Instagram feed 模擬、 體驗碼與拉丁方格派送（T／E／F 組別對應 R1 到 R4 順序）、行為資料自動記錄、WebView 問卷
* 實驗協定：時間鎖定 20:00 到 04:00、前 3 分鐘沉浸期不發通知、通知間隔 3 分鐘
* 順序平衡：4×4 拉丁方格（三種感官模態加基線共 4 個受測者內條件）
* 客觀行為指標兩項：Notification Dismissal Latency（NDL）、Post-notification Scroll Count（PSC）
* 量表：BPS、BSCS、REI-10、PAD、TAM、UEQ-S
* 理論依據：威脅訴求本於 Witte EPPM（1992）、共情訴求本於 Neff（2003）自我慈悲、 設計摩擦本於 Cox et al.（2016）
* 文獻回顧 50+ 篇同儕審查文獻
* 樣本數推估用 G*Power（Faul et al., 2007）

* Oblivilight：OpenHCI 工作坊作品，7 人團隊，獲 Best Demo， 受邀於 TAICHI 展示。

* 獎項：OpenHCI '25 Best Demo，受邀 TAICHI 展出
* 我負責：主導 12 場使用者訪談與痛點釐清，將色彩心理學轉譯為 10 種情緒光效系統；硬體與 AI 模型由組員負責
* 研究驅動決策：訪談發現使用者「想向 AI 傾訴、卻怕被永久記住」的矛盾，據此推翻原本的 AI 日記方向，改以「主動遺忘」為核心體驗
* 產品切點：回應 AI 產品的核心焦慮，當記憶變成資料，如何把掌控感還給使用者
   * OpenHCI 由多校共同舉辦，禁止加上 NTU 或台大前綴。
   * TAICHI 主辦單位為 Taiwanese Association of Computer Human Interaction， 禁止寫成 ACM SIGCHI Taiwan。
   * TAICHI 是展示邀請，不是論文發表場合，禁止列入論文清單。

* InnoConnect+：萊爾富 Hi-Life 來送禮服務再設計，

* 獎項：2024 全國服務創新跨界共創大賽 萊爾富題金獎（該題金獎僅一隊、決賽共 10 隊；全賽事 186 組），並獲萊爾富邀請進行企業內部提案
* 賽制：該競賽由多家企業各自出題（華航、萊爾富、ASUS 等），**每個企業題目各自頒發金銀銅獎**。Rose 拿的是萊爾富題的金獎。 因此禁止寫成「186 組中的金獎」「186 隊中脫穎而出」或任何暗示贏過全部 186 組的說法。 正確寫法是「萊爾富題金獎」「Gold, Hi-Life track」，需要規模時補「決賽 10 隊」。 186 組只能當作全賽事報名規模的背景數字，且必須與「萊爾富題」「決賽 10 隊」同時出現。
* 我負責：服務流程與前端介面設計（顧客旅程、服務藍圖、精實畫布），並提出評審點名的兩項核心創新，心理測驗社群裂變行銷與客製化互動賀卡
* 商業洞察：將「禮物逾期補差價」改為「未使用退回會員點數」，同時移除送禮心理負擔並把價值鎖回萊爾富生態（retention／LTV 思維）
* 成效驗證：SUS 90% 正面、UEQ 三維度皆正向（N=19）；成長迴圈問卷顯示 68% 因心理測驗而使用「來送禮」、73% 願試買 Hi Café，可用性測試 N=19（SUS / UEQ）。
* 合作對象是萊爾富 Hi-Life，不是全家 FamilyMart。

* Mù：台灣瀕危珍貴木材多感官導覽， Rose 負責使用者研究與提案設計，N=23 訪談與問卷。 專案名稱一律寫 Mù（u 上為第四聲符號 ù）， 禁止寫成 Mú、Mǔ、Mū 或無聲調的 Mu。

* 獎項：UX Design Awards 提名
* 我負責：提案發想、使用者研究（N=23 問卷＋訪談）、user journey、persona、pitch 影片與 AI 輔助展場建模
* 研究驅動決策：以問卷與訪談檢驗原始「睡眠艙」構想後，主導方向轉換，聚焦台灣 12 種珍貴木的認知推廣

* Good Luck Peanut（好韻）：福瑄食品品牌與包裝改造，加上官網改版。

* 獎項：文創畢業展第二名（2nd Place, Creative Culture Graduate Exhibition）。 敘述重點放在畢業展，英文一律寫全 Graduate Exhibition， 禁止簡寫成 Creative Culture Exhibition。
* 時程：品牌 2022；網站 2023 年 7 月到 9 月
* 我負責：品牌視覺規劃、UI/UX 設計
* 客戶：福瑄食品（Fuhshyuan Foods），台灣傳統花生糖製造商。 禁止寫成其他廠商。
* 文化切點：客家「天穿日」，「韻」字諧音「運」， 把花生糖從零食轉為帶祝福意味的禮品
* 三支策略：文化連結、視覺現代化（木刻版畫風格）、 格式創新（單顆隨手包解決黏手問題並適合送禮）
* 網站改版重做資訊架構功能地圖，高保真聚焦三頁： Homepage、About Brand、Product Listing

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
* Arduino 僅可描述為 Oblivilight 的團隊產品技術（硬體由組員負責）， 禁止列為 Rose 的個人技能或個人貢獻。 （2026/07/21 使用者裁決，覆蓋先前的全面禁提規則。）
* 禁止使用 Instagram 24 位追蹤者成長數字。
* 禁止使用 101% IG 成長目標數字，任何 Adnex 文案都不得再出現。 （2026/07/21 已從 Projects.tsx 與 AdnexInternship.tsx 移除。）
* Footer 年份 2026，網址 yunrouchang.me。 禁止出現舊網址 roseportfolio-rho.vercel.app。
* 站上另有 Times Awards、Big Data Cup、HCI Publications、Project Archive、 Photography、How I Built This 等頁面，事實紅線尚未建立。 改動這些頁面的數字、獎項或機構名稱前要先問使用者。

工作方式

* 先給計畫與 diff，等使用者核可再改。
* 明確列出你要動哪些檔案。
* 不要自行更動任何事實數字，所有數字變動都要先問使用者。
* 不要覆寫既有文字內容，除非該次指令明確要求。
* 不要新增 npm 套件，除非事先說明理由並取得同意。
