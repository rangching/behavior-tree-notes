// ============================================================
//  課程內容：《行為樹 Behavior Tree：從零看懂》EP1–EP17
//  欄位說明見 ~/.claude/skills/learning-series-pipeline/references/site_build.md
//  數學式用 KaTeX：行內 $...$，獨立 $$...$$。含反斜線的字串用 R`...`（String.raw）。
//  練習題答案已用 Python 驗算。
// ============================================================
const R = String.raw;

window.SERIES = {
  title: "行為樹 Behavior Tree：從零看懂",
  short: "行為樹",
  brand: '行為樹<b>→?</b><span class="long"> 學習網頁</span>',
  storeKey: "progress-behavior-tree-bt2",
  eyebrow: "Behavior Trees · EP1–EP17 · 5 個階段",
  heroTitle: '機器人<span class="hl">什麼時候</span>該換動作？',
  lead: "行為樹用兩種積木回答這個問題：Sequence（而且）和 Fallback（或者），再靠 tick 從根重新檢查。這個系列跟著 Petter Ögren 的英文課程，從讀懂一棵樹、讓樹從目標自己長出來，一路走到設計陷阱、理論保證、機器學習、可解釋 AI 與實際的機器人專案，全 17 集。每一集先答三題、看動畫、動手算，再答一次。",
  tagline: "成功、失敗、被打斷：三種切換理由，三種結構。",
  heroLabel: "行為樹 tick 模擬：可以拉警報、單步 tick，看狀態怎麼一路往上傳",
  description: "《行為樹 Behavior Tree：從零看懂》學習網頁：全 17 集學習路線，從 Sequence、Fallback、tick、Backward Chaining，到記憶節點、模組化、控制屏障函數、遺傳演算法、強化學習、可解釋 AI 與 BehaviorTree.CPP 實戰。",
  footer: "《行為樹 Behavior Tree：從零看懂》學習網頁 · 進度只存在這台裝置的瀏覽器裡 · 學習路線延續 Petter Ögren（KTH）的 YouTube 課程與 Colledanchise &amp; Ögren 的著作，內容為中文改寫",
  source: {
    name: "Petter Ögren（KTH）YouTube 頻道《Introduction to Behavior Trees》系列",
    url: "https://www.youtube.com/playlist?list=PLFQdM4LOGDr_vYJuo8YTRcmv3FrwczdKg",
    license: ""
  },
  routeIntro: "每一集對應 Ögren 頻道的一到兩支英文影片（點連結可直接看原課程）。建議依階段順序學：第一、二階段是所有人都該會的基礎與設計功；第三階段偏理論，可以先跳過；第四、五階段可依興趣挑著看。",
  sourceLinks: [
    { label: "Ögren《Introduction to Behavior Trees》播放清單", url: "https://www.youtube.com/playlist?list=PLFQdM4LOGDr_vYJuo8YTRcmv3FrwczdKg" },
    { label: "Seminar series on BTs in Robotics", url: "https://www.youtube.com/playlist?list=PLFQdM4LOGDr825mB-YdzzVW8HpoJ6KhME" },
    { label: "書：Behavior Trees in Robotics and AI（arXiv）", url: "https://arxiv.org/abs/1709.00084" }
  ],
  phases: [
    { id: 1, name: "第一階段｜基礎：讀懂並長出行為樹", range: "EP1–EP2", desc: "從生活例子出發，認識積木、tick 與中斷，再用 Backward Chaining 從目標自動長出一棵會反應的樹。" },
    { id: 2, name: "第二階段｜設計方法與陷阱", range: "EP3–EP6", desc: "什麼時候用決策樹、狀態機或行為樹；條件太多跑不動怎麼辦；為什麼記憶節點會害你；Backward Chaining 最常見的四個 bug。" },
    { id: 3, name: "第三階段｜理論保證", range: "EP7–EP9", desc: "用數學說清楚行為樹為什麼最模組化、每棵子樹在什麼狀態下執行、怎麼和控制屏障函數結合保證安全。偏理論，可以先跳過。" },
    { id: 4, name: "第四階段｜學習、效用與可解釋", range: "EP10–EP14", desc: "讓電腦自己學出行為樹（遺傳演算法、強化學習）、用效用重排備案、讓機器人解釋自己在做什麼，以及頂層目標該怎麼選。" },
    { id: 5, name: "第五階段｜工具與實戰", range: "EP15–EP17", desc: "BehaviorTree.CPP 4.0 的新寫法、規劃器如何產生與執行行為樹，以及無人機群與居家服務機器人的完整專案。" }
  ]
};

window.UNITS = [
  // ---------------------------------------------------------- EP1
  {
    no: 1, id: "u01", phase: 1, tier: "Tier 1｜直覺與基本積木",
    title: "行為樹從零看懂：Sequence、Fallback 與 tick",
    hook: "機器人會很多動作，真正難的是：什麼時候該換動作？又該換成哪一個？",
    tags: "Sequence、Fallback、tick、中斷、模組化、Reactive 節點、Nav2",
    src: [{ label: "BT intro part 1", id: "DCZJUvTQV5Q" }, { label: "5 分鐘入門", id: "KeShMInMjro" }],
    status: "done", estDur: "9:47", segWord: "小節",
    sections: [
      { t: 0, title: "開場" },
      { t: 49.5, title: "為什麼要切換任務？" },
      { t: 114.8, title: "積木：節點與 tick" },
      { t: 169.37, title: "Sequence 與 Fallback" },
      { t: 244.5, title: "中斷" },
      { t: 302.57, title: "模組化與階層" },
      { t: 363.27, title: "實務陷阱：有沒有記憶" },
      { t: 455.48, title: "BT 在 2026 年的現場" },
      { t: 547.0, title: "總結" }
    ],
    formula: R`\underbrace{(\text{沒有警報} \lor \text{逃跑})}_{\text{Fallback：或者}} \;\land\; \underbrace{(\text{吃三明治} \lor \text{吃蘋果} \lor (\text{打開香蕉} \land \text{吃香蕉}))}_{\text{Sequence：而且}}`,
    pre: [
      { q: "你正在吃一根香蕉。列出會讓你停下來、改做別的事的情況，並把它們分成幾類。",
        a: "三類：<b>成功</b>（香蕉吃完了，照計畫做下一步）、<b>失敗</b>（香蕉壞了，改用備案，例如吃蘋果）、<b>被打斷</b>（火災警報響了，不管在做什麼都先逃跑）。行為樹把這三類分別變成 Sequence、Fallback，以及「每一輪都從根重新檢查」。" },
      { q: "用有限狀態機（每個狀態之間畫箭頭）寫遊戲角色，現在要加上「火災警報就逃跑」，會遇到什麼麻煩？",
        a: "每一個既有狀態都要多一條箭頭通往「逃跑」，逃完還得記得回到原本哪一個狀態；狀態越多箭頭越多，改一處要動一大片。行為樹只要在原本的子樹左邊加一個「沒有警報 ? 逃跑」的小子樹，原來的部分一個字都不用改。" },
      { q: "「吃蘋果」要花好幾秒。如果系統每秒問它十次「現在狀況如何？」，它在吃完之前應該怎麼回答？",
        a: "回答 <b>RUNNING（執行中）</b>。被 tick 到的節點只能回答成功、失敗、執行中三者之一；要花時間的動作在完成前都回報執行中，吃完才回報成功。執行中會一路往上傳，讓這一輪停在這裡。" }
    ],
    terms: [
      { zh: "行為樹", en: "Behavior Tree (BT)", m: "", d: "用樹狀結構決定「何時換動作、換成哪個」的控制架構，葉子做事、內部節點做決定。" },
      { zh: "tick", en: "tick", m: "", d: "從根節點往下送的訊號（常見每秒約十次），意思是「輪到你了，回報狀況」。" },
      { zh: "回傳狀態", en: "SUCCESS / FAILURE / RUNNING", m: "", d: "被 tick 的節點只能回答三者之一：成功、失敗、執行中。" },
      { zh: "動作節點", en: "Action", m: "", d: "真正做事的葉子，畫成藍色方框；可能花時間，所以可以回報執行中。" },
      { zh: "條件節點", en: "Condition", m: "", d: "只檢查一件事的葉子，畫成紫色橢圓；不改變世界，也不回報執行中。" },
      { zh: "順序", en: "Sequence", m: R`\rightarrow`, d: "從左到右 tick，前一個成功才輪到下一個；讀作「而且」。" },
      { zh: "備案", en: "Fallback (Selector)", m: "?", d: "從左到右 tick，前一個失敗才試下一個；讀作「或者」。py_trees 與 Unreal 叫 Selector。" },
      { zh: "中斷", en: "Interrupt / Preemption", m: "", d: "每次 tick 從根重新檢查，最左邊的高優先條件一失敗，右邊正在跑的動作就被中止。" },
      { zh: "有限狀態機", en: "Finite State Machine (FSM)", m: "", d: "用狀態與箭頭描述行為的做法；加一個中斷就要在每個狀態補箭頭。" },
      { zh: "有記憶的節點", en: "Memory (non-reactive)", m: "", d: "下一輪直接從上次停住的子節點繼續，左邊的檢查不會再被 tick。BehaviorTree.CPP 第四版的普通 Sequence 就是如此。" },
      { zh: "反應式節點", en: "ReactiveSequence / ReactiveFallback", m: "", d: "每一輪都從第一個子節點重新檢查，並中止原本在跑的動作；要隨時能被打斷就用它。" },
      { zh: "Nav2", en: "Nav2 (ROS 2 Navigation)", m: "", d: "ROS 2 的導航系統，預設導航流程就是一棵 BehaviorTree.CPP 行為樹。" }
    ],
    practice: {
      intro: "用數字感受行為樹和狀態機的差別，並練習 Sequence（而且）與 Fallback（或者）的組合。機率題假設各動作互相獨立。",
      items: [
        { q: "一個有限狀態機有 5 個狀態。要加入「逃跑」：每個原狀態都要一條箭頭到逃跑，逃跑也要一條箭頭回到每個原狀態。總共要新增幾條箭頭？",
          a: 10, tol: 0, hint: "每個原狀態 2 條（去 + 回），$5 \\times 2$。" },
        { q: "同樣的需求用行為樹做：在原本的「吃東西」子樹左邊加上「沒有警報 ? 逃跑」，再用一個 Sequence 把兩邊接起來。總共新增幾個節點？",
          a: 4, tol: 0, hint: "Sequence 1 個、Fallback 1 個、條件「沒有警報」1 個、動作「逃跑」1 個。而且不管原本有幾個狀態，數字都一樣。" },
        { q: "Fallback 底下有三個選項，成功機率分別是 0.5、0.6、0.7。整個 Fallback 成功的機率是多少？",
          a: 0.94, tol: 0.005, hint: "Fallback 只有在三個都失敗時才失敗：$1 - 0.5 \\times 0.4 \\times 0.3$。" },
        { q: "把第三個選項換成 Sequence（打開香蕉 0.9，而且吃香蕉 0.8），前兩個選項仍是 0.5、0.6。整個 Fallback 成功的機率是多少？",
          a: 0.944, tol: 0.005, hint: "Sequence 要兩個都成功：$0.9 \\times 0.8 = 0.72$；Fallback：$1 - 0.5 \\times 0.4 \\times 0.28$。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "切換任務有三個理由：<b>成功</b>就照 Sequence 做下一步；<b>失敗</b>就由 Fallback 換備案；<b>中斷</b>靠每一輪從根重新 tick（實務上用 Reactive 節點）。" },
      { h: "兩類積木", b: `<ul>
        <li><b>葉子</b>：動作（藍色方框，真正做事，可以回報執行中）與條件（紫色橢圓，只檢查、不改變世界）。</li>
        <li><b>內部節點</b>：Sequence $\\rightarrow$（而且）與 Fallback $?$（或者），負責決定下一個 tick 誰。</li>
        <li>被 tick 的節點只回答三種狀態：成功、失敗、執行中。</li></ul>` },
      { h: "狀態怎麼往上傳", b: `<ul>
        <li><b>執行中一定往上傳</b>，這一輪停在這裡，讓動作繼續做。</li>
        <li><b>Sequence</b>：子節點失敗 → 立刻回報失敗；全部成功才回報成功。</li>
        <li><b>Fallback</b>：子節點成功 → 立刻回報成功；全部失敗才回報失敗。</li></ul>
        用邏輯讀：$\\rightarrow(A, B) = A \\land B$，$?(A, B) = A \\lor B$。` },
      { h: "中斷不用寫「回到哪裡」", b: "在吃東西的子樹左邊加上「沒有警報 ? 逃跑」，再用 Sequence 接起來。警報一響，左邊的 Fallback 改做逃跑並回報執行中，右邊這一輪沒有被 tick 到，吃蘋果就被中止；警報停了，下一次 tick 條件又成功，樹自然回到吃東西。關鍵是：<b>每次 tick 都從根重新開始，最重要的檢查放在最左邊</b>。" },
      { h: "模組化與階層", b: "加一個「吃薯條」選項，只要在 Fallback 底下插一個節點；把「打開香蕉」換成「用手剝開 ? 用刀切開」的小子樹，其他地方不用改。反過來，每棵子樹也能收合成一個更大的動作，所以可以拉遠看大方向、拉近看細節。Ögren 整理的四個優點：模組化、階層、圖形化、對順序／備案／中斷的明確處理。" },
      { h: "實務陷阱：這個節點有沒有記憶？", b: `<ul>
        <li>BehaviorTree.CPP 第四版的普通 <code>Sequence</code> 會記住進度，下一輪從上次停住的子節點繼續 → 左邊的警報檢查不會被 tick，角色照樣吃蘋果。</li>
        <li>要隨時可被打斷，改用 <code>ReactiveSequence</code>／<code>ReactiveFallback</code>。</li>
        <li>py_trees 用 <code>memory</code> 參數決定要不要記住進度；Unreal 用 Decorator 的 Observer Aborts 來中斷；Fallback 在 py_trees 與 Unreal 叫 Selector。</li></ul>` },
      { h: "BehaviorTree.CPP 的 XML 長什麼樣子", b: `縮排就是層級，每個標籤是一個節點；葉子名稱對應你用 C++ 註冊的條件與動作。以下為示意：
<pre class="mono" style="background:var(--bg);padding:12px;border-radius:8px;overflow-x:auto;font-size:13px;line-height:1.55">&lt;root BTCPP_format="4"&gt;
  &lt;BehaviorTree ID="Main"&gt;
    &lt;ReactiveSequence&gt;
      &lt;ReactiveFallback&gt;
        &lt;NoAlarm/&gt;
        &lt;Flee/&gt;
      &lt;/ReactiveFallback&gt;
      &lt;Fallback&gt;
        &lt;EatSandwich/&gt;
        &lt;EatApple/&gt;
        &lt;Sequence&gt;
          &lt;OpenBanana/&gt;
          &lt;EatBanana/&gt;
        &lt;/Sequence&gt;
      &lt;/Fallback&gt;
    &lt;/ReactiveSequence&gt;
  &lt;/BehaviorTree&gt;
&lt;/root&gt;</pre>搭配 Groot2 可以拖拉編輯，執行時即時看到每個節點的狀態。` },
      { h: "2026 年的現場", b: `<ul>
        <li><b>機器人</b>：ROS 2 Nav2 的預設導航就是一棵行為樹——主線像 Sequence（重新規劃路徑、沿路徑走），卡住就用 Fallback 輪流試恢復動作（清除障礙地圖、原地轉、等待、後退），再回頭重試主計畫。C++ 的 BehaviorTree.CPP 與 Python 的 py_trees 是兩大主流。</li>
        <li><b>遊戲</b>：Unreal 內建行為樹編輯器，第五代另有結合狀態機的 StateTree；Unity 6 有官方 Unity Behavior 套件；Godot 有 LimboAI、Beehave 等外掛。</li>
        <li><b>研究前線</b>：讓大型語言模型把自然語言指令轉成行為樹。行為樹看得懂、可先檢查與模擬，失敗時也知道是哪個節點出錯——它是語言模型與真實機器人之間一層看得見的介面。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>本集理論骨架延續 Petter Ögren 教授的行為樹入門課。</li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，Ch. 1–3（基本節點、與狀態機比較）：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>BehaviorTree.CPP 官方文件：<a href="https://www.behaviortree.dev/" target="_blank" rel="noopener">behaviortree.dev ↗</a>；py_trees：<a href="https://py-trees.readthedocs.io/" target="_blank" rel="noopener">py-trees.readthedocs.io ↗</a>；Nav2：<a href="https://docs.nav2.org/" target="_blank" rel="noopener">docs.nav2.org ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "Sequence 從左到右 tick 子節點。下列哪一種讀法最貼切？",
        o: ["「或者」：任一個成功就好", "「而且」：前一個成功才輪到下一個", "「同時」：所有子節點一起執行", "「重複」：直到成功為止"], a: 1,
        w: "Sequence 只有前一個成功才往右走，任何一個失敗就立刻回報失敗，所以讀作「而且」。" },
      { q: "Fallback（吃三明治、吃蘋果、Sequence(打開香蕉, 吃香蕉)）。這一輪三明治沒了、吃蘋果回報執行中。Fallback 這一輪回報什麼？右邊的香蕉子樹會被 tick 嗎？",
        o: ["失敗；會", "成功；不會", "執行中；不會", "執行中；會"], a: 2,
        w: "Fallback 遇到不是失敗的結果就停下；執行中一路往上傳，香蕉子樹這一輪不會被 tick。" },
      { q: "下列哪一種節點「不可能」回報 RUNNING？",
        o: ["吃蘋果（動作）", "沒有警報？（條件）", "Sequence", "Fallback"], a: 1,
        w: "條件只檢查一件事，不改變世界，也不會說還在進行中，只會回報成功或失敗。" },
      { q: "照 Ögren 課程的理論版本，行為樹為什麼能處理中斷、又不必寫「回到哪裡」？",
        o: ["每個動作都會定時檢查警報", "每次 tick 都從根重新開始，最重要的檢查放在最左邊", "警報會產生一個例外，跳出整棵樹", "Fallback 會記住上一次執行到哪裡"], a: 1,
        w: "每一輪從根重新 tick，最左邊的條件永遠最先被看到；條件恢復成功後，樹自然回到原本的子樹。" },
      { q: "在 BehaviorTree.CPP 第四版用普通 Sequence 接「警報檢查」與「吃蘋果」，警報響了角色卻繼續吃。原因與修法是？",
        o: ["tick 頻率太低；改成每秒 100 次", "普通 Sequence 會記住進度，從正在跑的子節點繼續；改用 ReactiveSequence", "條件節點不能放在 Sequence 裡；改放在 Fallback", "XML 縮排錯誤；重新排版"], a: 1,
        w: "有記憶的 Sequence 下一輪直接從吃蘋果繼續，左邊的檢查沒被 tick。ReactiveSequence 每輪從第一個子節點重新檢查。" },
      { q: "py_trees 和 Unreal 裡的 Selector，對應到這部影片的哪一種節點？",
        o: ["Sequence", "Fallback", "Condition", "Decorator"], a: 1,
        w: "Fallback 又叫 Selector；不同工具名字不同，看到圖時記得多問一句「有沒有記憶」。" },
      { q: "Nav2 導航卡住時，輪流試清除障礙地圖、原地轉、等待、後退，再回頭重試主計畫。這體現了哪一種結構的精神？",
        o: ["Sequence：一步接一步", "Fallback：主計畫失敗就換備案", "有限狀態機：每個恢復動作一個狀態", "Parallel：同時執行所有恢復動作"], a: 1,
        w: "主計畫失敗就換備案，正是 Fallback 的精神。" },
      { q: "為什麼研究者讓大型語言模型「產生行為樹」，而不是直接控制機器人？",
        o: ["行為樹執行速度比語言模型快一萬倍", "行為樹看得懂、能先檢查與模擬，失敗時知道是哪個節點出錯", "語言模型無法輸出文字以外的東西", "行為樹不需要感測器"], a: 1,
        w: "行為樹是語言模型與真實機器人之間一層看得見、可以檢查的介面；目前仍以研究為主。" }
    ],
    next: "EP2：這棵樹是怎麼來的？只給目標和一份「我會做哪些動作」的清單，用 Backward Chaining 讓行為樹自己長出來。"
  },
  // ---------------------------------------------------------- EP2
  {
    no: 2, id: "u02", phase: 1, tier: "Tier 2｜從目標自動長出樹",
    title: "用 Backward Chaining 讓行為樹自己長出來",
    hook: "只給目標和一份動作清單，行為樹能不能自己長出來？",
    tags: "Backward Chaining、PPA、後置條件、前置條件、衝突、GOAP、LLM",
    src: [{ label: "BT intro part 2", id: "dB7ZSz890cw" }],
    status: "done", estDur: "11:16", segWord: "小節",
    sections: [
      { t: 0, title: "開場" },
      { t: 45.47, title: "倒著想" },
      { t: 99.93, title: "一個目標的積木：PPA" },
      { t: 209.4, title: "把條件換成子樹" },
      { t: 291.03, title: "跑一次看看" },
      { t: 388.33, title: "衝突：目標互相打架" },
      { t: 479.76, title: "2026 年的現場" },
      { t: 624.15, title: "總結" }
    ],
    formula: R`\text{PPA}(C) \;=\; C \;\lor\; (P_1 \land A_1) \;\lor\; (P_2 \land A_2) \;\lor\; \cdots`,
    pre: [
      { q: "你想離開這個房間。倒著想，從目標一路推回「現在就做得到的事」，寫出你的計畫。這種計畫有什麼弱點？",
        a: "離開房間 ← 穿過門 ← 門打開 ← 握住門把 ← 伸出手；倒過來念就是計畫。弱點有兩個：門把轉不動時只有一條路、不知道怎麼辦；有人剛好幫你開了門，計畫還是照念，做一堆不需要的事。行為樹版的 Backward Chaining 補上「失敗有備案」與「情況變好就自動跳過」。" },
      { q: "目標是「門開著」。如果門早就開著，一棵好的行為樹應該怎麼做？要怎麼設計才會這樣？",
        a: "什麼動作都不做。做法是把目標本身寫成條件，放在 Fallback 的最左邊：門已開，這個條件直接成功，整個 Fallback 立刻滿意。開鎖做到一半有人開了門，下一次 tick 也會先看到它，開鎖動作就被中止。" },
      { q: "保全攝影機有兩個目標：看得到小偷，而且小偷看不到攝影機。各自用「開燈」和「關燈」達成，會發生什麼事？怎麼辦？",
        a: "衝突：開燈破壞「小偷看不到攝影機」，關燈又破壞「看得到小偷」，樹在開燈、關燈之間無限來回。辦法：找不會破壞舊目標的動作（燈開著、把攝影機藏起來）；只是順序錯了就調整順序（把新子樹往左移、提早執行）；目標本質上矛盾就只能修改目標。" }
    ],
    terms: [
      { zh: "反向鏈結", en: "Backward Chaining", m: "", d: "從目標出發倒著往回推；在行為樹裡的規則只有一條：把條件換成能達成它的 PPA 子樹。" },
      { zh: "PPA", en: "Postcondition–Precondition–Action", m: R`C \lor (P_1 \land A_1) \lor \cdots`, d: "一個目標的固定積木：Fallback 最左放目標條件，右邊每個備案是「前置條件 而且 動作」。" },
      { zh: "後置條件", en: "Postcondition", m: "C", d: "動作做完後會成立的條件，也就是目標；放在 PPA 最左邊，成立了就什麼都不做。" },
      { zh: "前置條件", en: "Precondition", m: "P", d: "動作執行前必須成立的條件；它本身也可以再展開成 PPA。" },
      { zh: "動作", en: "Action", m: "A", d: "能讓後置條件成立的行為，只有前置條件成立時才會被執行。" },
      { zh: "能力清單", en: "Action library", m: "", d: "每個動作的前置條件與做完會達成什麼；Backward Chaining 靠它查「誰能達成這個條件」。" },
      { zh: "衝突", en: "Conflict", m: "", d: "為了達成新目標的動作，破壞了已經達成的舊目標，樹會一直來回切換。" },
      { zh: "規劃與執行交錯", en: "Blended planning and acting", m: "", d: "先只放目標去執行，只展開真正失敗、且尚未展開的條件；有衝突就把子樹往左移（Ögren 團隊 2019）。" },
      { zh: "GOAP", en: "Goal-Oriented Action Planning", m: "", d: "遊戲業的近親：從目標倒推出一串動作；情況一變就得重新規劃。" },
      { zh: "_successIf", en: "_successIf", m: "", d: "BehaviorTree.CPP 第四版的前置條件寫法，只在節點開始時檢查一次，執行中途不會再看，不能取代 PPA。" }
    ],
    practice: {
      intro: "練習數 PPA 與 Backward Chaining 展開後的節點數。節點包含 Sequence、Fallback、條件與動作。",
      items: [
        { q: "「門開著」的 PPA：目標條件「門開著」，三個方法——附近有人 → 請人開門；有鑰匙 → 用鑰匙開門；門很薄、有撬棍 → 撬開門（兩個前置條件）。整個 PPA 共有幾個節點？",
          a: 12, tol: 0, hint: "Fallback 1 ＋ 目標條件 1 ＋ 三個 Sequence（各自 1 個 Sequence 節點＋其下葉子）：3 ＋ 3 ＋ 4。" },
        { q: "一般化：某個目標有 4 個動作可以達成，每個動作各有 1 個前置條件。它的 PPA 有幾個節點？",
          a: 14, tol: 0, hint: "Fallback＋目標條件＝2；每個動作貢獻 Sequence、P、A 三個節點：$2 + 3 \\times 4$。" },
        { q: "一開始樹是 Sequence(不冷, 不餓)，共 3 個節點。「不冷」換成 PPA（穿外套／前提有暖外套；進屋／前提門開著），「不餓」換成 PPA（吃蘋果／有蘋果；吃香蕉／有香蕉）。展開後整棵樹共有幾個節點？",
          a: 17, tol: 0, hint: "每個 PPA 有 $2 + 3 \\times 2 = 8$ 個節點，取代原本 1 個條件：$3 - 2 + 8 + 8$。" },
        { q: "接著把「門開著」這個條件換成第 1 題的 PPA（12 個節點）。整棵樹現在共有幾個節點？",
          a: 28, tol: 0, hint: "拿掉 1 個條件、插進 12 個節點：$17 - 1 + 12$。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "每個目標寫成一塊 <b>PPA</b>；Backward Chaining 只有一條規則：<b>把條件換成能達成它的 PPA，一層一層往下展開</b>。得到的樹天生會反應，但要小心衝突。" },
      { h: "倒著想，但不要死板", b: "古典的 Backward Chaining 從目標推回「現在做得到的事」，倒過來念就是計畫；可是它失敗了沒有備案，情況變好了也不會跳過步驟。行為樹版本補上這兩件事：<b>失敗了有備案；情況變好就自動跳過</b>。" },
      { h: "PPA 的形狀", b: `目標條件放 Fallback 最左邊，右邊每個備案是 Sequence（前置條件，而且動作）：
        $$C \\;\\lor\\; (P_1 \\land A_1) \\;\\lor\\; (P_2 \\land A_2) \\;\\lor\\; \\cdots$$
        <ul><li>最左邊的「或者」保證：目標已經達成就什麼都不做。</li>
        <li>中間的「而且」保證：前提成立了，動作才會被執行。</li>
        <li>開鎖到一半有人開了門：下一次 tick 目標條件先成功，開鎖直接被中止。</li></ul>` },
      { h: "一層一層長出來", b: "從 Sequence(不冷, 不餓) 開始：不冷換成「穿外套 或 進屋」的 PPA，不餓換成「吃蘋果 或 吃香蕉」的 PPA。新長出來的有暖外套、門開著、有蘋果、有香蕉都是條件，可以再展開；門開著換成剛做好的 PPA，有鑰匙又換成「翻腳踏墊 或 去花園找」……每一塊形狀都一樣。" },
      { h: "跑起來：改變心意不用額外寫", b: "沒有鑰匙就去翻腳踏墊；有人經過，「附近有人」變成功，角色改請人開門；那人走掉了，又回到找鑰匙；都沒有就撬門；撬到一半撿到外套，「有暖外套」成功，撬門被中止。<b>每一次 tick 都從根重新檢查，左邊的條件一成立，右邊的努力就自動放下</b>，不需要重新規劃。" },
      { h: "衝突與三種解法", b: `<ul>
        <li><b>換一個動作</b>：找不會破壞舊目標的方法（燈繼續開著，把攝影機藏起來）。</li>
        <li><b>調整順序</b>：拿著方塊卻遇到障礙，要清障礙手得放空——Ögren 團隊 2019 年 ICRA 的演算法偵測到衝突時，把新子樹往左移，讓它提早執行。</li>
        <li><b>修改目標</b>：兩個目標本質上互相矛盾（燈同時開又關），沒有任何順序救得了。</li></ul>` },
      { h: "邊執行邊長", b: "2019 年的做法：先只放目標去執行；樹回報失敗時，找出失敗且還沒展開過的條件，只把它換成 PPA；有衝突就往左移，然後繼續執行。樹只長出真正需要的部分，環境變了再長一點——規劃與執行混在一起。" },
      { h: "實作：一定要 Reactive", b: `<ul>
        <li>BehaviorTree.CPP 的官方測試裡有一個「保持溫暖」的 PPA 範例：外層 Fallback 先檢查「不冷」，裡面的 Sequence 是「手上有外套，而且穿上外套」，兩者都用 Reactive 版本。</li>
        <li>第四版的普通 Fallback 有記憶：動作還在跑時下一輪直接從它繼續，有人幫你開了門機器人也不會發現。所以寫 PPA 要用 <code>ReactiveFallback</code>／<code>ReactiveSequence</code>。</li>
        <li><code>_successIf</code> 看起來像捷徑，但只在節點開始時檢查一次，執行中途不會再看。</li>
        <li>2026 年 BehaviorTree.CPP 與 py_trees 都還沒有內建自動展開，PPA 要自己組，或自己寫規劃器。</li></ul>` },
      { h: "近親與研究前線", b: `<ul>
        <li><b>GOAP</b>：遊戲業從 2005 年的《F.E.A.R.》開始使用，從目標倒推出一串動作；差別是情況一變就得重新規劃。</li>
        <li><b>BETR-XP-LLM</b>（KTH 與 ABB）：規劃器沿用 2019 年的展開演算法；動作失敗、清單又找不到原因時，才請語言模型推測缺了哪個前置條件，補上後交給規劃器展開並永久保留。模型呼叫次數少，結果仍是一棵看得懂、能檢查的樹。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>本集理論骨架延續 Petter Ögren 教授的行為樹課程。</li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，PPA 與 Backward Chaining 相關段落：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>M. Colledanchise, D. Almeida, P. Ögren，“Towards Blended Reactive Planning and Acting using Behavior Trees”，ICRA 2019：<a href="https://arxiv.org/abs/1611.00230" target="_blank" rel="noopener">arXiv:1611.00230 ↗</a></li>
        <li>BehaviorTree.CPP 官方文件：<a href="https://www.behaviortree.dev/" target="_blank" rel="noopener">behaviortree.dev ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "在 PPA 裡，目標條件（後置條件 C）放在哪裡？為什麼？",
        o: ["最右邊，等所有方法都失敗再檢查", "Fallback 最左邊，目標已達成就什麼都不做", "每個 Sequence 的最後，確認動作做完", "不放進樹裡，由規劃器另外檢查"], a: 1,
        w: "最左邊的「或者」保證目標已經成立時，整個 Fallback 立刻成功，不會做任何多餘的動作。" },
      { q: "門關著、附近沒人、但有鑰匙。這一輪 tick 時 PPA 的結果是？",
        o: ["失敗，因為沒人幫忙", "成功，因為有鑰匙", "執行中：前兩個選項失敗，開始用鑰匙開門", "所有動作同時執行"], a: 2,
        w: "目標條件失敗、請人開門的前提失敗，Fallback 試到第三個選項，用鑰匙開門回報執行中。" },
      { q: "Backward Chaining 在行為樹裡的唯一規則是？",
        o: ["把動作換成條件", "把一個條件換成能達成它的 PPA 子樹", "把所有 Sequence 換成 Fallback", "每次 tick 重新產生整棵樹"], a: 1,
        w: "條件被換成子樹，子樹又帶來新的條件，一層一層往下長。" },
      { q: "角色正在翻腳踏墊找鑰匙，有人經過。下一次 tick 會發生什麼？",
        o: ["繼續找鑰匙，直到找到為止", "「附近有人」變成功，角色停下翻找、改請人開門", "整棵樹重新規劃", "回報失敗，等待下一個目標"], a: 1,
        w: "每次 tick 從根重新檢查，更左邊的選項一成立，右邊正在做的努力就自動放下，不需要重新規劃。" },
      { q: "下列哪一個是「衝突」？",
        o: ["兩個動作的名字一樣", "為了達成新目標的動作，破壞了已經達成的舊目標", "條件節點回報執行中", "Fallback 底下有太多選項"], a: 1,
        w: "例如開燈讓攝影機看得到小偷，卻也讓小偷看得到攝影機；樹會一直來回切換。" },
      { q: "機器人拿著方塊要送過去，途中要先清除障礙（手得放空）。2019 年 Ögren 團隊的演算法怎麼處理？",
        o: ["放棄送方塊的目標", "把新的子樹往左移，讓清障礙提早執行", "改用狀態機", "請大型語言模型重寫整棵樹"], a: 1,
        w: "這類衝突只是順序錯了：先清障礙，再回來拿方塊。真正矛盾的目標才需要修改目標。" },
      { q: "為什麼在 BehaviorTree.CPP 第四版寫 PPA 要用 ReactiveFallback？",
        o: ["比較省記憶體", "普通 Fallback 有記憶，動作在跑時不會再檢查最左邊的目標條件", "普通 Fallback 不能放條件節點", "Reactive 版本支援 XML，普通版不支援"], a: 1,
        w: "有記憶的 Fallback 會直接從正在跑的動作繼續；有人幫你開了門，機器人也不會發現。" },
      { q: "GOAP 和行為樹版 Backward Chaining 最大的差別是？",
        o: ["GOAP 不使用目標", "GOAP 從目標倒推出一串動作，情況一變就得重新規劃", "GOAP 只能用在機器人", "GOAP 每次 tick 都從根重新檢查"], a: 1,
        w: "行為樹版本長出的樹本身就會反應：失敗換方法、有人幫忙就跳過，不需要重新規劃。" },
      { q: "BETR-XP-LLM 什麼時候才請語言模型幫忙？",
        o: ["每一次 tick", "一開始產生整棵樹時", "動作失敗、清單又找不到原因時，推測缺了哪個前置條件", "從不使用語言模型"], a: 2,
        w: "補上的條件插進樹裡交給規劃器展開並永久保留，所以模型呼叫次數少。" }
    ],
    next: "EP3：同一個問題，可以用決策樹、有限狀態機或行為樹來寫。三者各有什麼好處與代價？什麼時候該選哪一個？"
  },
  // ---------------------------------------------------------- EP3
{
    no: 3, id: "u03", phase: 2, tier: "Tier 2｜設計方法與陷阱",
    title: "決策樹、狀態機與行為樹：三種設計怎麼選",
    hook: "同一個機器人，可以用決策樹、狀態機或行為樹來寫。它們差在哪裡？什麼時候該選哪一種？",
    tags: "決策樹、有限狀態機、行為樹、單向控制轉移、雙向控制轉移、模組化、反應性、HFSM",
    status: "planned", estDur: "約 13 分", segWord: "小節",
    src: [
      { label: "BT intro part 3", id: "L9KTzZO3C8s" },
      { label: "BT intro part 4", id: "gXrKGTPwfO8" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 45, title: "決策樹：一連串是非題" },
      { t: 140, title: "把決策樹搬進行為樹" },
      { t: 245, title: "搬家時的一個陷阱" },
      { t: 320, title: "狀態機：狀態加箭頭" },
      { t: 430, title: "單向轉移與雙向轉移" },
      { t: 540, title: "怎麼選：一張檢查表" },
      { t: 720, title: "總結" }
    ],
    formula: R`\underbrace{\text{if } C \text{ then } T_1 \text{ else } T_2}_{\text{決策樹的一個節點}} \;\Longrightarrow\; ?\big(\rightarrow(C,\,T_1),\; T_2\big) \;=\; (C \land T_1) \lor T_2`,
    pre: [
      { q: "掃地機器人要決定下一步：電量低嗎？是→回充電座；否→地上有髒污嗎？是→清掃；否→巡邏。這種「一連串是非題」的設計叫什麼？它少了什麼？",
        a: "這是<b>決策樹</b>（Decision Tree）：從根一路回答是非題，走到哪片葉子就做哪個動作。它很好讀，但葉子只是「做這個」，沒有說動作<b>失敗了怎麼辦</b>、<b>做到一半情況變了怎麼辦</b>。行為樹可以直接收下決策樹的結構，再補上這兩件事。" },
      { q: "用狀態機寫一個遊戲守衛：巡邏、追擊、搜尋、回崗四個狀態。如果每個狀態都可能直接切到其他任一狀態，最多要畫幾條箭頭？",
        a: "四個狀態兩兩之間各兩個方向：$4 \\times 3 = 12$ 條。狀態機的每條箭頭都是「跳過去就不回來」的<b>單向轉移</b>，狀態一多，箭頭會以平方成長。" },
      { q: "寫程式時，<code>goto</code> 和「呼叫函式」有什麼不同？這跟行為樹有什麼關係？",
        a: "<code>goto</code> 跳過去就不會自動回來，要回到哪裡得另外寫；函式呼叫做完會<b>把結果交回呼叫者</b>，由呼叫者決定下一步。狀態機的箭頭像 <code>goto</code>（單向控制轉移），行為樹的 tick 與回傳狀態像函式呼叫（雙向控制轉移），這就是行為樹比較模組化的根本原因。" }
    ],
    terms: [
      { zh: "決策樹", en: "Decision Tree (DT)", m: "", d: "從根開始回答一連串是非題，走到哪片葉子就執行哪個動作的結構。" },
      { zh: "述詞", en: "Predicate", m: "C", d: "決策樹內部節點問的是非題，搬進行為樹後變成條件節點。" },
      { zh: "有限狀態機", en: "Finite State Machine (FSM)", m: "", d: "用狀態與轉移箭頭描述行為；一次只在一個狀態，事件觸發箭頭換到下一個狀態。" },
      { zh: "階層式狀態機", en: "Hierarchical FSM (HFSM)", m: "", d: "把幾個狀態包成一個超狀態，共用往外的轉移，用來減少箭頭數量。" },
      { zh: "轉移", en: "Transition", m: "", d: "狀態機裡從一個狀態到另一個狀態的箭頭，附帶觸發條件。" },
      { zh: "單向控制轉移", en: "One-way control transfer", m: "", d: "控制權交出去就不回來，像 goto；狀態機的轉移就是這種。" },
      { zh: "雙向控制轉移", en: "Two-way control transfer", m: "", d: "交出控制權後，子節點會把結果交回來，像函式呼叫；行為樹的 tick 就是這種。" },
      { zh: "反應性", en: "Reactivity", m: "", d: "情況一變就能立刻改變行為的能力；在狀態機裡要靠更多箭頭換來。" },
      { zh: "模組化", en: "Modularity", m: "", d: "一塊行為可以單獨設計、測試、搬到別處重用，而不必改動其他部分。" },
      { zh: "強制成功", en: "ForceSuccess", m: "", d: "把子節點的失敗改報成功的裝飾節點；可以用來避免動作失敗時誤跑到 else 分支。" }
    ],
    practice: {
      intro: "用節點數與機率比較三種設計。決策樹節點搬進行為樹時，一律用 Fallback(Sequence(C, T₁), T₂)。",
      items: [
        { q: "一棵深度 2 的完整決策樹：3 個是非題、4 個動作葉子。每個是非題換成「Fallback ＋ Sequence ＋ 條件」三個節點，動作葉子照搬。搬成行為樹後共有幾個節點？",
          a: 13, tol: 0, hint: "內部節點 $2^2 - 1 = 3$ 個，每個變 3 個節點；葉子 $2^2 = 4$ 個：$3 \\times 3 + 4$。" },
        { q: "同樣做法，深度 3 的完整決策樹（7 個是非題、8 個動作）搬成行為樹後共有幾個節點？",
          a: 29, tol: 0, hint: "$3 \\times (2^3 - 1) + 2^3$。節點數仍只跟決策樹的大小成正比。" },
        { q: "一個狀態機有 6 個狀態，設計上任兩個狀態之間都要能雙向直接切換。共要畫幾條轉移箭頭？",
          a: 30, tol: 0, hint: "每個狀態要連到其他 5 個：$6 \\times 5$。狀態數加倍，箭頭大約變成四倍。" },
        { q: "決策樹節點「if C then 抓取 else 呼叫支援」直接搬成 Fallback(Sequence(C, 抓取), 呼叫支援)。C 成立的機率 0.7，C 成立時抓取失敗的機率 0.2。在決策樹裡不該發生、卻因為搬法而「C 成立但還是跑去呼叫支援」的機率是多少？",
          a: 0.14, tol: 0.005, hint: "要 C 成立而且抓取失敗：$0.7 \\times 0.2$。抓取失敗讓 Sequence 失敗，Fallback 就往右試 else 分支。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "決策樹適合<b>一連串是非題</b>，可以原封不動搬進行為樹；狀態機的箭頭是<b>單向的 goto</b>，行為樹的 tick 是<b>雙向的函式呼叫</b>——這是模組化差異的根源。" },
      { h: "決策樹什麼時候好用", b: "如果問題能拆成一層一層的是非題（電量低嗎？有髒污嗎？），決策樹就是很好的設計：好讀、好檢查、每一片葉子對應一個明確情境。它的限制是只回答「現在該做什麼」，不處理動作失敗與執行中。" },
      { h: "搬進行為樹的對應", b: `決策樹的一個節點「if $C$ then $T_1$ else $T_2$」對應：
        $$?\\big(\\rightarrow(C, T_1),\\; T_2\\big)$$
        <ul><li>$C$ 成立：Sequence 往右 tick $T_1$。</li>
        <li>$C$ 不成立：Sequence 失敗，Fallback 改 tick $T_2$。</li>
        <li>子樹 $T_1$、$T_2$ 本身也可以是決策樹節點，一層一層照搬；因為每一輪都從根 tick，搬過來的樹天生會反應。</li></ul>` },
      { h: "搬家陷阱：then 分支失敗", b: `在決策樹裡，$C$ 成立就只會做 $T_1$；但在上面的行為樹裡，<b>$T_1$ 回報失敗時 Fallback 會跑去試 $T_2$</b>。這有時正是你要的（多一個備案），有時不是。若要和決策樹完全一致，可以：
        <ul><li>把 else 分支寫成 $\\rightarrow(\\lnot C, T_2)$，讓 $C$ 成立時 else 一定不會被執行；或</li>
        <li>用 ForceSuccess 之類的裝飾節點包住 $T_1$。</li></ul>（這是本系列整理的注意事項，選哪一種看你要的行為。）` },
      { h: "狀態機的優點", b: `<ul>
        <li>非常普遍，幾乎每個工程師都看得懂；實作簡單。</li>
        <li>「現在在哪個狀態」一清二楚，適合模式明確、彼此切換不多的系統（例如通訊協定、介面流程、少數幾個運作模式）。</li></ul>` },
      { h: "狀態機的代價", b: `<ul>
        <li><b>反應性與模組化互相拉扯</b>：想要隨時能反應，就要從很多狀態畫箭頭出去；箭頭越多，任何一個狀態越難單獨搬走或重用。</li>
        <li>轉移是單向的：狀態 A 跳到 B 後，B 不知道「做完要回 A」，這個資訊得寫進 B 的箭頭裡。</li>
        <li>階層式狀態機（HFSM）可以讓一群狀態共用往外的箭頭，減輕問題，但內外之間仍是單向轉移。</li></ul>` },
      { h: "怎麼選：一張檢查表", b: `<ul>
        <li>問題是固定的一串是非題、動作很少失敗 → <b>決策樹</b>（之後要加備案，可以直接搬進行為樹）。</li>
        <li>只有少數幾個模式、模式之間的切換規則清楚 → <b>狀態機</b>。</li>
        <li>動作會失敗、要有備案、要能被打斷、子行為要重用 → <b>行為樹</b>。</li>
        <li>實務上也常混用：行為樹的某個動作內部是小狀態機，或狀態機的某個狀態裡跑一棵行為樹。Unreal Engine 5 的 StateTree 就是把兩者結合的例子。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 3（決策樹與行為樹）：<a href="https://www.youtube.com/watch?v=L9KTzZO3C8s" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>Petter Ögren，BT intro part 4（狀態機與行為樹的優缺點）：<a href="https://www.youtube.com/watch?v=gXrKGTPwfO8" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，Ch. 2（行為樹與狀態機、決策樹等既有架構的關係）：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "哪一種問題最適合直接用決策樹設計？",
        o: ["可以拆成一層一層是非題、動作很少失敗的問題", "需要大量備案與中斷的長任務", "需要記住過去很多步驟的對話流程", "多個機器人同時協作的任務"], a: 0,
        w: "決策樹擅長「一串是非題決定做什麼」；動作失敗、被打斷這類需求要靠行為樹補上。" },
      { q: "決策樹節點「if C then T₁ else T₂」最直接的行為樹寫法是？",
        o: ["Sequence(C, T₁, T₂)", "Fallback(C, T₁, T₂)", "Fallback(Sequence(C, T₁), T₂)", "Sequence(Fallback(C, T₁), T₂)"], a: 2,
        w: "C 成立時 Sequence 往右做 T₁；C 不成立時 Sequence 失敗，Fallback 改做 T₂。" },
      { q: "照上一題的搬法，C 成立但 T₁ 執行失敗，下一步會發生什麼？",
        o: ["整棵樹立刻停止", "Fallback 往右 tick T₂", "重新檢查 C，直到 T₁ 成功", "回報執行中"], a: 1,
        w: "Sequence 失敗會讓 Fallback 試下一個子節點 T₂；這和原本的決策樹不同，要不要這樣得自己決定。" },
      { q: "狀態機的轉移最像程式語言裡的哪一種東西？",
        o: ["函式呼叫", "迴圈", "例外處理", "goto"], a: 3,
        w: "轉移把控制權交出去就不回來，是單向控制轉移，像 goto。" },
      { q: "行為樹的 tick 為什麼被比喻成函式呼叫？",
        o: ["因為行為樹一定要用 C++ 寫", "子節點執行後把成功／失敗／執行中交回父節點，由父節點決定下一步", "因為每個節點都有回傳值的型別宣告", "因為行為樹不能有迴圈"], a: 1,
        w: "控制權交出去還會帶著結果回來，這是雙向控制轉移，讓子樹不必知道自己被放在哪裡。" },
      { q: "狀態機的「反應性與模組化互相拉扯」是指？",
        o: ["要隨時能反應，就得從很多狀態畫箭頭出去，狀態因此更難單獨重用", "狀態越多執行越慢", "反應太快會讓狀態機當機", "模組化的狀態機無法顯示在畫面上"], a: 0,
        w: "每多一個要隨時處理的事件，就多一批箭頭；狀態彼此綁得越緊，越難拆出來重用。" },
      { q: "階層式狀態機（HFSM）主要解決什麼問題？",
        o: ["讓狀態機能回報執行中", "讓動作可以並行", "讓一群狀態共用往外的轉移，減少箭頭數量", "讓狀態機自動產生備案"], a: 2,
        w: "把狀態包成超狀態可以共用轉移，但內外之間仍是單向轉移。" },
      { q: "一個機器人只有「待機、運作、維修」三個模式，切換規則固定且很少變動。比較合理的選擇是？",
        o: ["一定要用行為樹，狀態機已經過時", "用決策樹，因為它最快", "用大型語言模型即時決定", "用狀態機就很清楚；需要備案與中斷的部分再交給行為樹"], a: 3,
        w: "模式少、切換清楚時狀態機簡單好懂；三種工具不是互斥的，實務上常混用。" }
    ],
    next: "EP4：行為樹每秒 tick 十次、每次都要檢查一堆條件，會不會太慢？用信念位元向量、事件驅動 tick 與主動感測，讓檢查幾乎不花時間。"
},
  // ---------------------------------------------------------- EP4
{
    no: 4, id: "u04", phase: 2, tier: "Tier 2｜設計方法與陷阱",
    title: "不必一直檢查所有條件：信念位元向量、事件驅動 tick、主動感測",
    hook: "行為樹每秒 tick 十次、每次重新檢查所有條件。如果一個條件要跑一次影像辨識，樹還跑得動嗎？",
    tags: "信念、位元向量、事件驅動 tick、主動感測、感知與決策分離、Blackboard、tick 頻率",
    status: "planned", estDur: "約 11 分", segWord: "小節",
    src: [
      { label: "BT intro part 5A", id: "UHUBYFal0DM" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 40, title: "問題：條件檢查很貴" },
      { t: 120, title: "把相信的事存成位元" },
      { t: 220, title: "誰負責更新信念？" },
      { t: 310, title: "事件驅動 tick" },
      { t: 410, title: "主動感測" },
      { t: 520, title: "在工具裡怎麼做" },
      { t: 610, title: "總結" }
    ],
    formula: R`b(t) = \big(b_1(t), \dots, b_n(t)\big) \in \{0,1\}^n, \qquad \text{Condition}_i \;=\; b_i(t), \qquad \text{tick} \iff b(t) \neq b(t^-) \;\lor\; \text{動作狀態改變}`,
    pre: [
      { q: "機器人的行為樹有一個條件「前方通道是空的嗎？」，每次檢查都要跑一次影像辨識，約 50 毫秒。樹每秒 tick 十次，樹裡還有其他十幾個類似的條件。會出什麼問題？",
        a: "光檢查條件就要花掉比 tick 間隔（100 毫秒）還多的時間，樹根本來不及每秒 tick 十次，反應變慢。問題出在<b>「判斷」和「感知」綁在一起</b>：每檢查一次條件就重新感知一次。" },
      { q: "如果把每個條件「目前相信是真還是假」先存成一個 0 或 1，條件節點只讀這個位元，會變快多少？代價是什麼？",
        a: "讀一個位元幾乎不花時間，所以檢查所有條件變得非常快。代價是：樹讀到的是<b>信念</b>，不是當下的真相；信念由另外的程序在背景更新，可能已經過時一小段時間。" },
      { q: "如果所有條件都沒變、正在跑的動作也還沒結束，這一輪 tick 會得到和上一輪不同的結果嗎？",
        a: "不會。樹的決定只取決於條件的值與動作的狀態，兩者都沒變，結果就一樣。所以可以改成<b>只在信念或動作狀態改變時才 tick</b>，這就是事件驅動 tick。" }
    ],
    terms: [
      { zh: "信念", en: "Belief", m: "b_i", d: "智能體目前「相信」某個條件為真或假；可能和真實世界有落差或稍微過時。" },
      { zh: "信念位元向量", en: "Belief bit vector", m: R`b \in \{0,1\}^n`, d: "把所有條件的信念各存成一個位元，條件節點只讀對應的位元。" },
      { zh: "感知與決策分離", en: "Separating sensing from deciding", m: "", d: "感知程序在背景更新信念，行為樹只負責根據信念做決定。" },
      { zh: "更新頻率", en: "Update rate", m: "", d: "每個信念各自用合理的間隔更新：電量可以慢，障礙物要快。" },
      { zh: "週期 tick", en: "Periodic ticking", m: "", d: "不管有沒有變化，固定每隔一段時間從根 tick 一次，例如每秒十次。" },
      { zh: "事件驅動 tick", en: "Event-based ticking", m: "", d: "只在信念向量改變或動作狀態改變時才 tick，沒有變化就不浪費計算。" },
      { zh: "主動感測", en: "Active sensing", m: "", d: "遇到重要決定、而相關信念不夠可靠時，主動去收集資料更新信念，再做決定。" },
      { zh: "信念年齡", en: "Belief age (staleness)", m: "", d: "信念上次被更新到現在經過的時間；越老越可能和真實世界不符。" },
      { zh: "Blackboard", en: "Blackboard", m: "", d: "BehaviorTree.CPP 等工具裡節點共享資料的地方，可以用來存放背景程序更新的信念。" }
    ],
    practice: {
      intro: "用數字感受「每輪重新感知」與「讀信念位元」的差別。假設 tick 一次的時間等於所有條件檢查時間的總和。",
      items: [
        { q: "一棵樹有 20 個條件，每個條件每次檢查都要重新感知，平均 5 毫秒。每次 tick 都要檢查全部條件，這棵樹每秒最多能 tick 幾次？",
          a: 10, tol: 0, hint: "一輪要 $20 \\times 5 = 100$ 毫秒，$1000 / 100$。如果要每秒 20 次就不夠了。" },
        { q: "把 12 個條件的信念存成 12 位元的向量。這個向量總共可能有幾種不同的值？",
          a: 4096, tol: 0, hint: "每個位元 0 或 1：$2^{12}$。行為樹對每一種值都有一個確定的決定。" },
        { q: "原本固定每秒 tick 20 次；改成事件驅動後，平均每秒只有 3 次信念或動作狀態改變。一分鐘內少做了多少比例的 tick？（填小數）",
          a: 0.85, tol: 0.005, hint: "週期：$20 \\times 60 = 1200$ 次；事件驅動：$3 \\times 60 = 180$ 次；$1 - 180 / 1200$。" },
        { q: "「路口淨空」這個信念由背景程序每 2 秒更新一次，機器人以每秒 0.5 公尺前進。最壞情況下，機器人依據這個信念做決定時，從上次更新到現在已經走了幾公尺？",
          a: 1.0, tol: 0.005, hint: "最壞情況信念剛好過了 2 秒：$2 \\times 0.5$。這就是要在穿越路口前主動感測的理由。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "讓條件節點<b>只讀信念位元</b>，感知交給背景程序；樹只在<b>信念或動作狀態改變時</b>才 tick；重要決定前信念不夠可靠，就<b>主動感測</b>。" },
      { h: "問題從哪裡來", b: "EP1 說行為樹每一輪都從根重新檢查，所以會反應。可是如果每個條件都要跑一次感知（影像辨識、定位、查資料庫），檢查本身就變得很貴：條件一多，tick 一次的時間可能比 tick 間隔還長。" },
      { h: "信念位元向量", b: `把 $n$ 個條件的信念存成一個向量：
        $$b = (b_1, b_2, \\dots, b_n) \\in \\{0,1\\}^n$$
        <ul><li>條件節點 $i$ 只回報 $b_i$：1 就成功，0 就失敗。</li>
        <li>讀位元幾乎不花時間，檢查全部條件變得非常快。</li>
        <li>樹的決定變成「信念向量 → 動作」的函數，容易測試：把向量設成某個值，看樹選了什麼。</li></ul>` },
      { h: "誰更新信念？", b: `<ul>
        <li>每個信念由獨立的程序在背景更新，各自用合理的頻率：電量每幾秒看一次就夠，前方障礙物要很快。</li>
        <li>樹讀到的是<b>信念</b>，可能稍微過時；設計時要問：這個信念多老還能接受？</li>
        <li>好處是感知程式和決策程式分開，各自可以單獨修改、測試。</li></ul>` },
      { h: "事件驅動 tick", b: "既然樹的決定只取決於信念向量與動作狀態，兩者都沒變時重新 tick 只會得到一樣的結果。改成<b>只在信念位元翻轉、或某個動作回報成功／失敗時才 tick</b>，就能省下大量計算，反應卻不會變慢——改變一發生就 tick。" },
      { h: "主動感測", b: "有些信念平常更新得慢，或本來就不確定。當樹要做一個重要決定（例如穿越路口、抓起易碎物品），而相關信念太老或不可靠時，可以先觸發一次資料收集（轉頭再看一次、停下來重新掃描），把信念更新好再決定。換句話說：<b>感知也可以是樹裡的一個動作</b>，在需要時才做。" },
      { h: "在工具裡怎麼做", b: `<ul>
        <li><b>BehaviorTree.CPP</b>：可以讓背景程序把信念寫進 Blackboard，條件節點只讀 Blackboard 的值；tick 的時機由你的主迴圈決定，可以改成有變化才 tick。</li>
        <li><b>Unreal Engine</b>：官方文件說明它的行為樹是事件驅動的，搭配 Decorator 監看 Blackboard 的值，值改變時才觸發中斷。</li>
        <li>不管哪個工具，關鍵設計都一樣：<b>條件要便宜，感知放在別處</b>。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 5A（信念位元向量、事件驅動 tick 與主動感測）：<a href="https://www.youtube.com/watch?v=UHUBYFal0DM" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>BehaviorTree.CPP 官方文件（Blackboard 與 ports）：<a href="https://www.behaviortree.dev/" target="_blank" rel="noopener">behaviortree.dev ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "為什麼「每輪 tick 都重新檢查所有條件」可能讓行為樹變慢？",
        o: ["因為 tick 訊號在樹裡傳遞很慢", "因為條件數量一多，Fallback 就無法運作", "因為很多條件每次檢查都要重新感知，計算很貴", "因為條件節點會回報執行中"], a: 2,
        w: "問題在於判斷和感知綁在一起：每檢查一次條件就要跑一次感知程式。" },
      { q: "使用信念位元向量後，條件節點做的事是？",
        o: ["讀對應的位元，1 回報成功、0 回報失敗", "啟動感測器重新量測", "等待背景程序更新完才回報", "把結果寫回位元向量"], a: 0,
        w: "條件節點只讀信念，感知由背景程序負責，所以檢查幾乎不花時間。" },
      { q: "信念位元向量的主要代價是？",
        o: ["需要更多的條件節點", "樹讀到的是信念，可能和當下真實世界有落差或稍微過時", "無法再使用 Fallback", "每個 tick 都要重新建立整棵樹"], a: 1,
        w: "信念由背景程序以各自的頻率更新，所以在兩次更新之間可能已經過時。" },
      { q: "事件驅動 tick 什麼時候才 tick 這棵樹？",
        o: ["固定每秒十次", "只在機器人開機時一次", "每當使用者按下按鈕", "信念向量改變，或某個動作狀態改變時"], a: 3,
        w: "樹的決定只取決於信念與動作狀態，兩者都沒變時重新 tick 只會得到同樣結果。" },
      { q: "下列哪一個情況最需要主動感測？",
        o: ["電量信念剛更新、而且電量充足", "機器人準備穿越路口，但「路口淨空」的信念已經好幾秒沒更新", "機器人在充電座上待機", "所有信念都剛更新完"], a: 1,
        w: "重要決定前，相關信念又老又關鍵，就該先收集資料更新信念再做決定。" },
      { q: "為什麼不同的信念可以用不同的頻率更新？",
        o: ["因為位元向量只能存少數信念", "因為更新越慢越準確", "因為世界的不同部分變化速度不同，例如電量變得慢、障礙物變得快", "因為行為樹規定每個條件只能更新一次"], a: 2,
        w: "每個信念用「合理的間隔」更新就好，不必全部跟著 tick 的頻率跑。" },
      { q: "把感知與決策分開，對工程上還有什麼好處？",
        o: ["感知程式與決策程式可以分別修改與測試；樹的決定可以直接用設定好的信念向量測試", "可以不必寫任何感知程式", "可以讓行為樹不需要 tick", "可以讓所有動作都不會失敗"], a: 0,
        w: "把信念向量設成某個值，就能檢查樹會選什麼動作，不必真的架好感測器。" },
      { q: "在 BehaviorTree.CPP 裡實作「條件只讀信念」，常見做法是？",
        o: ["把感知程式寫進每個條件節點", "改用 SequenceWithMemory", "把條件節點全部刪掉", "背景程序把信念寫進 Blackboard，條件節點只讀 Blackboard 的值"], a: 3,
        w: "Blackboard 是節點共享資料的地方，很適合放背景程序維護的信念。" }
    ],
    next: "EP5：EP1 提過「有沒有記憶」的陷阱。這一集用倉儲機器人的例子，正面比較有記憶與無記憶的節點，並看它們在表達能力上到底差多少。"
},
  // ---------------------------------------------------------- EP5
{
    no: 5, id: "u05", phase: 2, tier: "Tier 2｜設計方法與陷阱",
    title: "有記憶 vs 無記憶節點：倉儲模擬與表達能力",
    hook: "記住「做到第幾步」看起來很方便，為什麼 Ögren 卻說記憶節點在行為樹裡是個壞主意？",
    tags: "記憶節點、Sequence*、反應式節點、倉儲機器人、表達能力、輔助變數、ReactiveSequence、py_trees memory",
    status: "planned", estDur: "約 14 分", segWord: "小節",
    src: [
      { label: "BT intro part 5B", id: "W7p34qhBux8" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 45, title: "兩種 Sequence" },
      { t: 150, title: "倉儲任務：有記憶好寫" },
      { t: 260, title: "箱子掉了怎麼辦？" },
      { t: 380, title: "無記憶版本：用條件記住進度" },
      { t: 500, title: "表達能力的階層" },
      { t: 640, title: "在各工具裡怎麼選" },
      { t: 780, title: "總結" }
    ],
    formula: R`\underbrace{\text{pBT} = \text{pDT} = \text{pTR}}_{\text{反應式（無記憶）}} \;\subsetneq\; \underbrace{\text{mBT}}_{\text{加記憶節點}} \;\subsetneq\; \underbrace{\text{uBT} = \text{FSM}}_{\text{加輔助變數}}`,
    pre: [
      { q: "倉儲機器人要做：走到貨架、抓起箱子、走到出貨區、放下箱子。用一個「會記住做到第幾步」的 Sequence 來寫，有什麼好處？",
        a: "非常好寫：四個動作排成一列就好。抓起箱子成功後，下一輪直接從「走到出貨區」繼續，<b>不需要寫任何條件來描述進度</b>。這就是記憶節點方便的地方。" },
      { q: "同一個有記憶的 Sequence，機器人走到一半箱子掉了。接下來會發生什麼？",
        a: "Sequence 記得「抓起箱子」已經成功，不會再回頭看，於是繼續走到出貨區、對著空手做「放下箱子」。<b>記憶讓樹看不到已經完成的步驟被破壞了</b>，失去反應能力。" },
      { q: "如果改用每輪都從第一個子節點重新 tick 的無記憶 Sequence，要讓機器人不會每輪都重新走回貨架，需要補上什麼？",
        a: "要補上描述進度的<b>條件</b>，例如「手上有箱子嗎？」「箱子在出貨區嗎？」。也就是 EP2 的 PPA：每一步都先問目標是否已成立，成立就跳過。這樣多寫了條件，但箱子掉了也會自動回去撿。" }
    ],
    terms: [
      { zh: "有記憶的 Sequence", en: "Sequence with memory (Sequence*)", m: R`\rightarrow^{*}`, d: "記住已成功的子節點，下一輪直接從還沒完成的子節點繼續，不再 tick 前面的。" },
      { zh: "有記憶的 Fallback", en: "Fallback with memory (Fallback*)", m: R`?^{*}`, d: "記住已失敗的子節點，下一輪直接從還沒試完的子節點繼續。" },
      { zh: "無記憶節點", en: "Memoryless (reactive) node", m: "", d: "每一輪都從第一個子節點重新 tick，已完成的步驟被破壞也看得到。" },
      { zh: "重置", en: "Reset", m: "", d: "記憶節點整體回報成功或失敗、或被上層中止時，把記住的進度清掉，下次從頭開始。" },
      { zh: "反應性", en: "Reactivity", m: "", d: "環境一變（包括已完成的步驟被破壞），下一輪 tick 就改變行為的能力。" },
      { zh: "表達能力", en: "Expressiveness", m: "", d: "一種架構能寫出哪些「輸入歷史 → 動作」的行為；能寫的越多，表達能力越強。" },
      { zh: "輔助變數", en: "Auxiliary variables", m: "", d: "樹可以讀寫的額外記憶（例如 Blackboard 上的計數器），加上後表達能力和狀態機一樣。" },
      { zh: "反應式架構", en: "Reactive architecture", m: "", d: "決定只取決於當下輸入的架構；無記憶的行為樹、決策樹、Teleo-reactive 程式都屬於這一類。" },
      { zh: "ReactiveSequence", en: "ReactiveSequence (BehaviorTree.CPP)", m: "", d: "BehaviorTree.CPP 的無記憶 Sequence，每輪都從第一個子節點重新檢查。" },
      { zh: "SequenceWithMemory", en: "SequenceWithMemory (BehaviorTree.CPP)", m: "", d: "BehaviorTree.CPP 裡記憶最強的 Sequence：子節點失敗後也不會從頭開始。" }
    ],
    practice: {
      intro: "倉儲機器人的數字練習：比較有記憶與無記憶節點的計算量、反應時間與需要的記憶。",
      items: [
        { q: "一個無記憶 Sequence 前面有 5 個條件，最後是一個要跑 4 秒的動作，樹每秒 tick 10 次。動作執行期間，5 個條件總共被檢查幾次？（有記憶的版本只在開始時檢查 5 次）",
          a: 200, tol: 0, hint: "4 秒共 $4 \\times 10 = 40$ 次 tick，每次 5 個條件：$40 \\times 5$。這就是 EP4 要把條件做得很便宜的原因。" },
        { q: "接上題：每個條件檢查 2 毫秒。無記憶版本在這 4 秒內，檢查條件佔用了多少比例的時間？（填小數）",
          a: 0.1, tol: 0.005, hint: "每輪 $5 \\times 2 = 10$ 毫秒，tick 間隔 100 毫秒：$10 / 100$。若改成讀信念位元，幾乎是 0。" },
        { q: "有記憶的 Sequence*(安全檢查, 走到貨架 6 秒, 抓取 4 秒, 走到出貨區 10 秒)。「安全檢查」只在開始時看一次。出發後第 3 秒出現危險，要等到整個 Sequence 做完、下次從頭開始才會再檢查。危險出現後多少秒才被發現？",
          a: 17, tol: 0, hint: "整個 Sequence 在 $6 + 4 + 10 = 20$ 秒結束：$20 - 3$。無記憶版本每 0.1 秒就會再檢查一次。" },
        { q: "想用輔助變數模擬一個有 5 個子節點的 Sequence*：用一個整數記住「現在做到第幾個子節點」（0 到 4）。最少需要幾個位元？",
          a: 3, tol: 0, hint: "要能表示 5 種值：$\\lceil \\log_2 5 \\rceil$。記憶節點本質上就是把這個計數器藏在節點裡。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "記憶節點讓<b>依序做完一串事</b>很好寫，卻讓樹<b>看不到已完成的步驟被破壞</b>；要反應就用無記憶節點，再用條件（PPA）描述進度。" },
      { h: "兩種 Sequence 差在哪", b: `<ul>
        <li><b>無記憶</b> $\\rightarrow$：每一輪從第一個子節點重新 tick，已成功的步驟也會再檢查一次。</li>
        <li><b>有記憶</b> $\\rightarrow^{*}$：記住哪些子節點已成功，下一輪直接從下一個繼續；整體成功、失敗或被中止時才清掉記憶。</li>
        <li>Fallback 也有對應的兩種：$?^{*}$ 記住哪些子節點已經失敗。</li></ul>` },
      { h: "倉儲任務：記憶的方便與危險", b: "Sequence*(走到貨架, 抓起箱子, 走到出貨區, 放下箱子) 只要四個節點就寫完；但走到一半箱子掉了，它不會回頭看「抓起箱子」，而是繼續走、對著空手放下。同樣地，放在最前面的安全檢查也只會在開始時看一次，中途出現危險要等整串做完才會發現。" },
      { h: "無記憶版本：讓條件記住進度", b: `把每一步寫成 EP2 的 PPA：
        <ul><li>「箱子在出貨區？」或者（「手上有箱子？」而且「走到出貨區、放下」）</li>
        <li>「手上有箱子？」或者（「在貨架前？」而且「抓起箱子」）……</li></ul>
        世界本身就是記憶：箱子在哪裡、手上有沒有東西，由條件每輪重新讀出來。節點多了幾個，但箱子掉了，下一輪「手上有箱子？」就失敗，機器人自動回去撿。` },
      { h: "表達能力的階層", b: `Biggar、Zamani 與 Shames（IEEE RA-L 2021）用形式化的方式比較幾種架構能表達的行為：
        <ul><li>無記憶的行為樹、決策樹、Teleo-reactive 程式<b>一樣強</b>，都只看當下輸入（反應式）。</li>
        <li>加上記憶節點的行為樹<b>嚴格更強</b>，但仍然比不上狀態機。</li>
        <li>允許輔助變數（可讀寫的額外記憶）後，行為樹和狀態機<b>一樣強</b>。</li></ul>
        論文的結論是：行為樹的設計在<b>可讀性與表達能力之間有取捨</b>。多出來的表達能力，換來的是要追蹤藏在節點或變數裡的狀態。` },
      { h: "那記憶節點完全不能用嗎？", b: "不是。真的「只能做一次、不必回頭檢查」的步驟（例如開機時的一串初始化），用記憶節點很自然。問題在於把它當成預設：大部分機器人任務都需要在中途發現事情變了，這時無記憶節點加上好的條件，設計起來直接得多。" },
      { h: "在各工具裡怎麼選", b: `<ul>
        <li><b>BehaviorTree.CPP 4</b>：<code>Sequence</code> 遇到執行中會從同一個子節點繼續（不再 tick 前面的），失敗才從頭開始；<code>SequenceWithMemory</code> 連失敗後也不從頭開始；<code>ReactiveSequence</code>／<code>ReactiveFallback</code> 才是每輪從頭檢查的無記憶版本。</li>
        <li><b>py_trees</b>：<code>Sequence</code> 與 <code>Selector</code> 用 <code>memory</code> 參數決定，<code>memory=False</code> 就是無記憶。</li>
        <li><b>Unreal Engine</b>：Sequence／Selector 會從正在跑的節點繼續，要反應得靠 Decorator 的 Observer Aborts 去中止。</li>
        <li>不管用哪個工具，看到一棵樹先問：<b>這個節點有沒有記憶？</b></li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 5B（Why Memory Nodes is a Bad Idea in Behavior Trees）：<a href="https://www.youtube.com/watch?v=W7p34qhBux8" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>O. Biggar, M. Zamani, I. Shames，“An Expressiveness Hierarchy of Behavior Trees and Related Architectures”，IEEE RA-L 2021：<a href="https://arxiv.org/abs/2104.07919" target="_blank" rel="noopener">arXiv:2104.07919 ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，Ch. 1（有記憶的控制節點）：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>BehaviorTree.CPP 官方文件（Sequence 的三種版本）：<a href="https://www.behaviortree.dev/" target="_blank" rel="noopener">behaviortree.dev ↗</a>；py_trees：<a href="https://py-trees.readthedocs.io/" target="_blank" rel="noopener">py-trees.readthedocs.io ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "有記憶的 Sequence 下一輪 tick 時，從哪裡開始？",
        o: ["永遠從第一個子節點", "從還沒完成的那個子節點繼續，前面已成功的不再 tick", "從最後一個子節點往回", "隨機選一個子節點"], a: 1,
        w: "記憶節點記住已成功的子節點，直接跳過它們；這讓排一串步驟很好寫，但也看不到它們被破壞。" },
      { q: "倉儲機器人用 Sequence*(走到貨架, 抓起箱子, 走到出貨區, 放下箱子)，途中箱子掉了。會發生什麼？",
        o: ["機器人立刻回去撿", "整棵樹回報失敗並停止", "Sequence 不回頭檢查，繼續走到出貨區並對空手放下", "機器人改用備案"], a: 2,
        w: "「抓起箱子」已被記為成功，不會再被 tick，所以箱子掉了也沒人發現。" },
      { q: "改用無記憶節點後，要怎麼避免機器人每輪都重新走回貨架？",
        o: ["用條件描述進度，例如「手上有箱子？」成立就跳過抓取（PPA 的寫法）", "把 tick 頻率降到每分鐘一次", "把所有動作改成條件", "在每個動作裡加一個計時器"], a: 0,
        w: "世界本身就是記憶：條件每輪重新讀出箱子在哪裡，已達成的步驟自動跳過。" },
      { q: "照 Biggar 等人 2021 年的結果，下列哪一組的表達能力一樣強？",
        o: ["有記憶的行為樹與狀態機", "無記憶的行為樹與狀態機", "有記憶的行為樹與決策樹", "無記憶的行為樹、決策樹與 Teleo-reactive 程式"], a: 3,
        w: "三者都只看當下輸入，屬於反應式架構；加記憶節點後更強，加輔助變數後才和狀態機一樣。" },
      { q: "行為樹加上什麼之後，表達能力可以和狀態機一樣？",
        o: ["更多的 Fallback", "可以讀寫的輔助變數", "更快的 tick 頻率", "更多的條件節點"], a: 1,
        w: "輔助變數讓樹可以記住任意的過去資訊；只加記憶節點仍比狀態機弱。" },
      { q: "論文對這個表達能力階層下的結論是？",
        o: ["表達能力越強越好，應該全部加輔助變數", "記憶節點應該被禁止", "設計行為樹時，可讀性與表達能力之間有取捨", "狀態機已經沒有用處"], a: 2,
        w: "多出來的表達能力來自藏起來的狀態，代價是樹變得比較難讀、難檢查。" },
      { q: "在 BehaviorTree.CPP 4 裡，哪一個節點是每輪都從第一個子節點重新檢查的無記憶 Sequence？",
        o: ["Sequence", "SequenceWithMemory", "Parallel", "ReactiveSequence"], a: 3,
        w: "普通 Sequence 遇到執行中會從同一個子節點繼續；只有 ReactiveSequence 每輪從頭檢查。" },
      { q: "下列哪一個情境最適合使用記憶節點？",
        o: ["開機時只需執行一次、不必回頭檢查的一串初始化步驟", "途中可能掉落物品的搬運任務", "需要隨時注意火災警報的任務", "會被人打斷的導航任務"], a: 0,
        w: "步驟一旦完成就不會被破壞時，記憶節點的方便沒有代價；需要反應的任務則用無記憶節點。" }
    ],
    next: "EP6：用 Backward Chaining 長出來的樹，一定能達成所有頂層目標嗎？不一定。下一集整理 4 個常見 bug，以及保證達成目標必須檢查的 4 個設計條件。"
},
  // ---------------------------------------------------------- EP6
{
    no: 6, id: "u06", phase: 2, tier: "Tier 2｜設計方法與陷阱",
    title: "Backward Chained 行為樹的 4 個常見 bug：保證達成所有目標的設計條件",
    hook: "照著 Backward Chaining 一層層長出來的樹，每一塊 PPA 都對，為什麼機器人還是會卡在原地來回打轉？",
    tags: "Backward Chaining、收斂、有限時間成功、ACC、不變集、可逆動作、重啟失敗子樹、And-Or 樹、抖動",
    status: "planned", estDur: "約 14 分", segWord: "小節",
    src: [{ label: "BT intro part 6", id: "sETuC2Mr6D8" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "局部都對，整體卡住" },
      { t: 140, title: "bug 1：動作做不完" },
      { t: 250, title: "bug 2：破壞上層已達成的條件" },
      { t: 390, title: "bug 3：做了就回不去" },
      { t: 500, title: "bug 4：放棄的子樹又被叫醒" },
      { t: 600, title: "And-Or 樹與收斂保證" },
      { t: 740, title: "總結" }
    ],
    formula: R`\underbrace{S^{\text{AO}}_0}_{\text{And-Or 樹成立}} \;\subseteq\; \underbrace{S_0 \cup R'_0}_{\text{已成功，或一定會走到成功}}, \qquad \bar\tau_0 \;\le\; \sum_i \bar\tau_i`,
    pre: [
      { q: "EP2 長出的樹有兩個頂層目標：「在安全區」與「物體在目標」。現在火警讓整棟大樓（物體和目標都在裡面）都變成危險區。機器人會怎麼動？",
        a: "它先離開大樓回到安全區，接著開始「走向物體」；一踏出安全區，最左邊的「在安全區」失敗，樹立刻切回「移到安全區」……於是在安全區邊界<b>來回抖動</b>，永遠不會結束。問題有兩層：這個情境本來就無解；而且「走向物體」根本不知道自己必須守住「在安全區」。" },
      { q: "「走向目標」這個動作執行時，除了自己的前置條件（手上有物體），還有哪些條件必須一直成立？",
        a: "所有在它左邊、早已達成的上層條件，例如「在安全區」。這類條件叫 <b>ACC（Active Constraint Conditions）</b>。它和前置條件不同：放下物體時「手上有物體」本來就會變假，這是允許的；但動作不應該讓自己的 ACC 變假，否則就會把別人的成果打掉。" },
      { q: "機器人發現往目標的路被堵住，就放下物體、請別的代理去送；一放下又看到「物體不在手上」，於是再撿起來……會發生什麼？怎麼避免？",
        a: "<b>無窮迴圈</b>。已經回報失敗的子樹（自己送），被另一個動作（放下物體）的副作用重新叫醒。Ögren 的建議是調整 Fallback 備案的順序，讓失敗最少的選項排第一優先，避免剛放棄的方法又被啟動。" }
    ],
    terms: [
      { zh: "收斂", en: "Convergence", m: "", d: "從某個區域出發的狀態，一定會在有限時間內進入根節點的成功區域 $S_0$。" },
      { zh: "有限時間成功", en: "Finite Time Successful (FTS)", m: R`\tau_i \le \bar\tau_i`, d: "從吸引區出發，在一個有上界的時間內抵達自己的成功區，途中不離開吸引區。" },
      { zh: "吸引區", en: "Region of attraction", m: R`R'_i`, d: "保證動作會做完的起始狀態集合，通常就是它的前置條件同時成立的區域。" },
      { zh: "主動約束條件", en: "Active Constraint Conditions (ACC)", m: R`\mathrm{ACC}(i)`, d: "除了前置條件之外，動作 $A_i$ 要被執行時必須為真的條件，也就是左邊早已達成、不能被破壞的成果。" },
      { zh: "不變集", en: "Invariant set", m: "", d: "從集合裡出發，在某個控制器作用下永遠留在集合裡。" },
      { zh: "不衝突的行為樹", en: "Non-conflicting BT", m: "", d: "每個動作都 FTS，而且執行時讓「吸引區或成功區，且所有 ACC 為真」這個集合保持不變。" },
      { zh: "And-Or 樹", en: "And-Or tree", m: "", d: "把行為樹的動作全部拿掉，Sequence 換成 AND、Fallback 換成 OR；它成立就代表問題有解。" },
      { zh: "可逆動作假設", en: "Reversible actions", m: "", d: "動作不會讓 And-Or 樹由真變假，例如堵死唯一的路，或把物體弄丟到再也拿不到。" },
      { zh: "不重啟失敗子樹", en: "Restarting failed subtrees", m: "", d: "某條件的子樹已經回報失敗後，不會因為別處動作的副作用又開始執行。" },
      { zh: "抖動", en: "Chattering", m: "", d: "狀態在兩個區域的邊界上快速來回切換控制器，看起來在動，實際上沒有進展。" },
      { zh: "深度優先編號", en: "Depth-first numbering", m: "", d: "證明中把節點從根開始深度優先、由左到右編號；滿足條件時，切換只會走向編號更大的動作。" },
      { zh: "控制屏障函數", en: "Control Barrier Function (CBF)", m: "", d: "設計「讓某個集合保持不變」的控制器的通用方法，正好用來守住 ACC（EP9 的主題）。" }
    ],
    practice: {
      intro: "用數字練習收斂定理的各個部分：時間上界、找出 ACC、And-Or 樹成立的機率，以及違反 ACC 的代價。機率題假設各條件互相獨立。",
      items: [
        { q: "一棵不衝突的 Backward Chained 樹有 5 個動作，各自的完成時間上界是 4、6、3、5、2 秒。依收斂定理，整棵樹完成時間的保證上界是幾秒？",
          a: 20, tol: 0, hint: "證明裡每個動作最多只執行一次，所以把上界全部加起來：$4 + 6 + 3 + 5 + 2$。" },
        { q: "根節點 Sequence 依序是三個 PPA：「安全」、「不冷」、「不餓」。「不餓」的動作是 Sequence(手乾淨的 PPA, 有香蕉的 PPA, 吃香蕉)；「有香蕉」的動作是 Sequence(在廚房的 PPA, 拿香蕉)；「在廚房」的動作是 Sequence(門開著, 走到廚房)。動作「走到廚房」的 ACC 有幾個條件？",
          a: 3, tol: 0, hint: "沿著「走到廚房」往根走，看每個 Sequence（不算它的父節點）左邊的兄弟：根節點左邊有「安全」「不冷」兩個 PPA，取它們最左邊的條件；「不餓」的 Sequence 左邊有「手乾淨」。「門開著」是前置條件，不算 ACC。" },
        { q: "某棵樹的 And-Or 樹是 AND(OR(在安全區, 有路到安全區), OR(物體在目標, AND(有路到物體, 有路到目標)))。五個條件在開始時成立的機率依序是 0.6、0.9、0.2、0.8、0.7。開始時就落在保證成功區域的機率是多少？",
          a: 0.622, tol: 0.005, hint: "OR：$1 - 0.4 \\times 0.1 = 0.96$；AND：$0.8 \\times 0.7 = 0.56$；第二個 OR：$1 - 0.8 \\times 0.44 = 0.648$；最後 $0.96 \\times 0.648$。" },
        { q: "「走向牛」沒有把 ACC「遠離火源」納入設計，每次嘗試有 0.3 的機率太靠近火而被切去「逃離火場」，之後得從頭再走。假設每次嘗試獨立，平均要嘗試幾次才會成功走到牛旁邊？",
          a: 1.43, tol: 0.005, hint: "每次成功機率 $0.7$，嘗試次數是幾何分布，平均 $1 / 0.7$。若 ACC 被設計成不變集，次數就是 1。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "Backward Chaining 長出的樹<b>每一塊都是局部正確的</b>，但要保證達成所有頂層目標，還得檢查四件事：<b>動作做得完、不破壞 ACC、不做無法挽回的事、放棄的子樹不會被重新叫醒</b>。" },
      { h: "局部都對，整體卡住", b: `EP2 的 PPA 只保證「這個條件我知道怎麼達成」，沒有保證不同層的目標彼此相容：
        <ul><li><b>最壞情況</b>：頂層目標本身互斥（同時要「在安全區」和「不在安全區」），任何設計都救不了。</li>
        <li><b>不明顯的耦合</b>：火警讓物體所在的大樓都變危險，機器人在安全區邊界來回抖動。</li></ul>
        以下四個條件整理自 Ögren 2020 年的收斂分析，每一條都對應一種典型的 bug。` },
      { h: "條件 1：每個動作都要做得完（FTS）", b: "動作若只是「越來越接近」目標、卻永遠到不了（例如指數收斂但成功區只是一個點），Sequence 後面的子節點就永遠輪不到。所以要求每個動作是<b>有限時間成功</b>：從它的吸引區出發，在 $\\bar\\tau_i$ 秒內抵達成功區，途中不離開吸引區。實務上做法是把成功區畫成一個小鄰域，而不是一個點。" },
      { h: "條件 2：不能破壞上層已達成的條件（ACC）", b: `<ul>
        <li><b>ACC 怎麼找</b>：從動作往根走，經過的每個 Sequence（不含動作的父節點）左邊的兄弟都必須成功；這些兄弟是條件，或是以條件開頭的 PPA，就把那個條件記下來。</li>
        <li><b>例子</b>：「移到安全區」沒有 ACC；「走向物體」要守住「在安全區」；「走向目標」要守住「在安全區」與「手上有物體」。</li>
        <li><b>和前置條件的差別</b>：放下物體會讓前置條件「手上有物體」變假，這是允許的；ACC 不行。</li>
        <li>要求是：$(R'_i \\cup S_i) \\cap \\bigcap_{j \\in \\mathrm{ACC}(i)} S_j$ 非空，而且在動作 $i$ 的控制器下保持不變。</li></ul>` },
      { h: "條件 3 與 4：別做無法挽回的事、別叫醒放棄的子樹", b: `<ul>
        <li><b>可逆動作</b>：拿物體時把唯一通往目標的路堵死，或把物體掉到拿不到的地方，And-Or 樹就由真變假，整個任務再也無解。</li>
        <li><b>不重啟失敗子樹</b>：「自己送」失敗 → 放下物體請別人送 → 「手上沒物體」又觸發「自己撿起來」→ 再失敗……這是無窮迴圈。調整 Fallback 備案的順序，讓失敗最少的選項優先，就能避開。</li></ul>` },
      { h: "And-Or 樹：一眼看出有沒有解", b: `把所有動作拿掉、Sequence 換成 AND、Fallback 換成 OR，得到一棵只有條件的樹。例如「有路到安全區 AND 有路到物體 AND 有路到目標」就足以完成任務。
        <ul><li>定理：如果樹是不衝突的，而且滿足上面兩個假設，那麼 And-Or 樹成立的狀態，一定已經成功，或一定會在有限時間內成功。</li>
        <li>證明的直覺：把節點深度優先編號，切換只會走向編號更大的動作，每個動作最多執行一次，所以總時間 $\\le \\sum_i \\bar\\tau_i$。</li></ul>` },
      { h: "為什麼不直接攤平成一層 Fallback？", b: "更早的收斂證明假設樹長成 Fallback(Sequence($C_1$, $A_1$), …, Sequence($C_N$, $A_N$))，每個動作負責滿足左邊某個動作的前置條件。Backward Chained 樹可以改寫成這種形式，但結構會被打散：一個前置條件可能由好幾個條件組成、由不同動作分別達成，ACC 也看不出該放在哪裡。所以 Ögren 直接在原本的樹形上做分析。" },
      { h: "設計時的檢查清單", b: `<ul>
        <li>列出每個動作的 ACC，當成它的<b>設計規格</b>：走向目標要選一條留在安全區內的路，而且動作要夠平順，免得物體從夾爪滑掉。</li>
        <li>動態障礙或移動的危險區，需要能保持集合不變的控制器；通用工具是控制屏障函數（EP9）。</li>
        <li>動作改用強化學習訓練時，可以把 ACC 違規寫成負獎勵（Ögren 團隊 2021 年的做法，EP12 會再談）。</li>
        <li>實作上仍要用 Reactive 節點（EP1、EP5），否則左邊的條件根本不會被重新檢查。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 6：<a href="https://www.youtube.com/watch?v=sETuC2Mr6D8" target="_blank" rel="noopener">youtube.com/watch?v=sETuC2Mr6D8 ↗</a></li>
        <li>P. Ögren，“Convergence Analysis of Hybrid Control Systems in the Form of Backward Chained Behavior Trees”，IEEE Robotics and Automation Letters, 2020：<a href="https://doi.org/10.1109/LRA.2020.3010747" target="_blank" rel="noopener">doi:10.1109/LRA.2020.3010747 ↗</a></li>
        <li>A. Kartašev, J. Salér, P. Ögren，“Improving the Performance of Backward Chained Behavior Trees that use Reinforcement Learning”：<a href="https://arxiv.org/abs/2112.13744" target="_blank" rel="noopener">arXiv:2112.13744 ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "每一塊 PPA 都正確的 Backward Chained 樹，為什麼仍可能無法達成所有頂層目標？",
        o: ["因為 PPA 的 Fallback 順序是隨機的", "因為 tick 頻率太低", "因為不同層的目標之間有全域耦合，局部正確不代表整體相容", "因為 Backward Chaining 不能處理兩個以上的目標"], a: 2,
        w: "PPA 只保證「這個條件我知道怎麼達成」，沒有保證達成它的動作不會破壞別處的成果。" },
      { q: "為什麼要求每個動作「有限時間成功」，而不只是漸近收斂？",
        o: ["動作若永遠到不了成功區，Sequence 後面的子節點就永遠輪不到", "漸近收斂的控制器比較耗電", "BehaviorTree.CPP 不支援漸近收斂", "有限時間成功才能用 XML 描述"], a: 0,
        w: "Sequence 要等左邊成功才往右走；永遠「快到了」等於永遠卡住。" },
      { q: "動作「走向目標」的 ACC 是「在安全區」與「手上有物體」。下列哪一個不是它的 ACC 的性質？",
        o: ["它們是動作執行時必須為真的條件", "它們來自動作左邊、早已達成的上層條件", "動作應該讓它們保持為真", "它們就是這個動作的前置條件"], a: 3,
        w: "ACC 明確排除前置條件：有些動作本來就會讓前置條件變假（放下物體），但不應破壞 ACC。" },
      { q: "火警讓整棟大樓變危險，機器人在安全區邊界來回切換。這種現象叫做？",
        o: ["Backward Chaining", "抖動（chattering）", "有限時間成功", "模組分解"], a: 1,
        w: "狀態在兩個區域的邊界上快速切換控制器，看起來在動，其實沒有進展。" },
      { q: "And-Or 樹是怎麼從行為樹得到的？",
        o: ["把條件全部拿掉，只留動作", "把 Sequence 換成 OR、Fallback 換成 AND", "把動作全部拿掉，Sequence 換成 AND、Fallback 換成 OR", "把整棵樹攤平成一層 Fallback"], a: 2,
        w: "只剩條件的樹，成立時就代表有一條可行的路，能用來描述保證成功的起始區域。" },
      { q: "拿物體的過程中把唯一通往目標的路堵死，違反了哪一個條件？",
        o: ["有限時間成功", "可逆動作假設", "不重啟失敗子樹", "Reactive 節點"], a: 1,
        w: "動作讓 And-Or 樹由真變假，任務從「有解」變成「無解」，這是可逆動作假設要排除的情況。" },
      { q: "收斂證明的核心想法是？",
        o: ["深度優先編號後，切換只會走向編號更大的動作，每個動作最多執行一次", "每次 tick 都重新規劃整棵樹", "所有動作同時執行，取最快的一個", "只要 tick 頻率夠高就一定收斂"], a: 0,
        w: "所以總時間的上界是各動作上界的總和 $\\sum_i \\bar\\tau_i$。" },
      { q: "「放下物體請別人送」之後又觸發「自己撿起來」，陷入迴圈。依 Ögren 的建議該怎麼處理？",
        o: ["把 tick 頻率加倍", "刪掉所有 Fallback", "調整 Fallback 備案的順序，讓失敗最少的選項優先", "改用有記憶的 Sequence"], a: 2,
        w: "這是「放棄的子樹被重新叫醒」；重排備案順序可以避免剛失敗的方法再被啟動。" }
    ],
    next: "EP7：大家都說行為樹比狀態機「模組化」，這句話能不能用數學證明？用決策結構、模組分解與本質複雜度，看行為樹為什麼是最模組化的反應式架構。"
},
  // ---------------------------------------------------------- EP7
{
    no: 7, id: "u07", phase: 3, tier: "Tier 3｜理論保證",
    title: "為什麼行為樹「最模組化」：本質複雜度與模組分解",
    hook: "大家都說行為樹比狀態機模組化。這句話能不能變成一個可以計算、可以證明的數字？",
    tags: "模組化、決策結構、模組、模組分解、商圖、循環複雜度、本質複雜度、k-BT、Teleo-Reactive、局部驗證",
    status: "planned", estDur: "約 14 分", segWord: "小節",
    src: [
      { label: "BT intro part 7", id: "IBFEt_ZdpeU" },
      { label: "研討會 #2 Oliver Biggar", id: "IcYyIwuYQdg" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 55, title: "狀態機的 N² 問題" },
      { t: 140, title: "共同語言：決策結構" },
      { t: 250, title: "模組：像一次函式呼叫" },
      { t: 360, title: "模組分解與商圖" },
      { t: 470, title: "循環複雜度與本質複雜度" },
      { t: 590, title: "本質複雜度 1 恰好就是行為樹" },
      { t: 690, title: "模組化的回報：局部驗證" },
      { t: 790, title: "總結" }
    ],
    formula: R`V(Z) = a + s - n + 1, \qquad \mathrm{EC}(Z) = \max_{Q \,\in\, \text{模組分解}} V(Q), \qquad Z \simeq k\text{-BT} \iff \mathrm{EC}(Z) = 1`,
    pre: [
      { q: "一個有限狀態機有 N 個狀態，最多可能有幾種狀態之間的轉移？這為什麼會傷害模組化？",
        a: "每個狀態都可能轉到其他 N − 1 個，共 N(N − 1) 種，數量級是 N²。而且轉移寫在狀態<b>裡面</b>，每個模組都得知道別的模組存在、能做什麼。行為樹的子樹只要回報「成功、失敗、執行中」，由父節點決定下一步，不必認識鄰居。" },
      { q: "寫程式時，什麼樣的一段程式碼可以乾淨地抽成一個函式？",
        a: "<b>只有一個入口</b>，而且離開之後接下來去哪裡<b>只看回傳值</b>，不看是從裡面哪一行離開的。Biggar 等人在決策結構裡定義「模組」，用的正是這個想法。" },
      { q: "把 Fallback(Sequence(A, B), C) 改畫成流程圖：每個葉子是一個節點，箭頭寫「回傳什麼就接著 tick 誰」。共有幾條箭頭？",
        a: "3 條：A 成功 → B、A 失敗 → C、B 失敗 → C。B 成功時整棵樹成功，C 不論結果都結束，沒有往外的箭頭。這張圖就是這棵樹的<b>決策結構</b>，下面所有的計算都在這種圖上做。" }
    ],
    terms: [
      { zh: "模組化", en: "Modularity", m: "", d: "系統由介面固定的小零件組成，可以單獨修改、重用、重組，而不牽動其他部分。" },
      { zh: "決策結構", en: "Decision Structure (DS)", m: "Z", d: "有唯一源頭的有向無環圖，節點是動作、箭頭標著回傳值；每次都從源頭沿箭頭走，走不下去的節點就是被選中的動作。" },
      { zh: "動作選擇機制", en: "Action Selection Mechanism (ASM)", m: "", d: "給定世界的狀態，選出現在要執行哪一個動作的規則；BT、決策樹、TR 都是。" },
      { zh: "模組", en: "Module", m: "", d: "一組節點：外面進來的箭頭都指向它的源頭，同一種回傳值離開時都去同一個地方，就像一次函式呼叫。" },
      { zh: "質結構", en: "Prime structure", m: "", d: "只有平凡模組（整體與單一節點）的決策結構，沒辦法再拆成更簡單的零件。" },
      { zh: "模組分解", en: "Module decomposition", m: "", d: "把決策結構一層層拆成模組的唯一分解，可以在多項式時間內算出來。" },
      { zh: "商圖", en: "Quotient graph", m: "Z/P", d: "把每個模組縮成一個節點後得到的圖；分解中的每一層都是一張商圖。" },
      { zh: "循環複雜度", en: "Cyclomatic complexity", m: R`V = a + s - n + 1`, d: "McCabe 提出的程式複雜度：獨立的無向迴圈數加 1；$a$ 是箭頭數、$s$ 是終點數、$n$ 是節點數。" },
      { zh: "本質複雜度", en: "Essential complexity", m: R`\mathrm{EC}(Z)`, d: "模組分解中，所有商圖的循環複雜度的最大值；衡量「最難拆的那一塊有多複雜」。" },
      { zh: "k-BT", en: "Generalised Behavior Tree", m: "", d: "把回傳值從成功、失敗兩種推廣到 $k$ 種的行為樹；一般行為樹就是 2-BT。" },
      { zh: "Teleo-Reactive 程式", en: "Teleo-Reactive program (TR)", m: "", d: "Nilsson 提出的反應式架構：一串由上而下檢查的「條件 → 動作」規則。" },
      { zh: "結構等價", en: "Structural equivalence", m: "", d: "兩個架構不論動作是什麼，選動作的方式都一樣；對決策結構而言等於圖同構。" }
    ],
    practice: {
      intro: "把行為樹畫成決策結構：每個葉子一個節點，箭頭表示「回傳成功／失敗之後接著 tick 誰」，沒有往外箭頭的節點是終點（sink）。循環複雜度 $V = a + s - n + 1$。",
      items: [
        { q: "一個有限狀態機有 6 個狀態，任兩個狀態之間都可能互相轉移（不算轉回自己）。總共有幾種可能的轉移？",
          a: 30, tol: 0, hint: "每個狀態可以轉到另外 5 個：$6 \\times 5$。數量級是 $N^2$。" },
        { q: "把 Fallback(Sequence(A, B), Sequence(C, D), E) 畫成決策結構，它的循環複雜度是多少？",
          a: 3, tol: 0, hint: "箭頭：A 成功→B、A 失敗→C、B 失敗→C、C 成功→D、C 失敗→E、D 失敗→E，共 $a = 6$；只有 E 沒有往外的箭頭，$s = 1$；$n = 5$。$V = 6 + 1 - 5 + 1$。" },
        { q: "EP1 的樹：Sequence(Fallback(沒有警報, 逃跑), Fallback(吃三明治, 吃蘋果, Sequence(打開香蕉, 吃香蕉)))。畫成決策結構後，循環複雜度是多少？",
          a: 2, tol: 0, hint: "6 條箭頭：沒有警報 成功→三明治、失敗→逃跑；逃跑 成功→三明治；三明治 失敗→蘋果；蘋果 失敗→打開香蕉；打開香蕉 成功→吃香蕉。只有吃香蕉是終點：$6 + 1 - 6 + 1$。它的本質複雜度仍是 1。" },
        { q: "某個決策結構的模組分解有兩張商圖：第一張有 4 個節點、3 條箭頭、1 個終點；第二張有 4 個節點、5 條箭頭、1 個終點。它的本質複雜度是多少？",
          a: 3, tol: 0, hint: "第一張 $3 + 1 - 4 + 1 = 1$（是一條路徑）；第二張 $5 + 1 - 4 + 1 = 3$。取最大值。不是 1，所以它不能寫成行為樹。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "把各種反應式架構都畫成<b>決策結構</b>，拆成<b>模組</b>，再量「最難拆的那一塊」的循環複雜度——行為樹恰好是這個<b>本質複雜度等於 1</b>的那一類，也就是最模組化的反應式架構。" },
      { h: "狀態機的 N² 問題", b: `<ul>
        <li>狀態機的轉移寫在狀態<b>裡面</b>：每個模組都要知道別的模組存在、能做什麼，還要知道上層的目的。</li>
        <li>N 個模組最多有 $N(N-1)$ 種轉移，每一條都是兩個模組之間的相依。</li>
        <li>行為樹的模組只需要回報自己成功、失敗或執行中，下一步交給父節點決定。</li>
        <li>表達能力不是重點：帶內部變數的行為樹和狀態機一樣強；差別在設計過程順不順。</li></ul>` },
      { h: "共同語言：決策結構", b: `Biggar、Zamani、Shames 定義的<b>決策結構</b>是一張有唯一源頭的有向無環圖：節點是動作，箭頭標著回傳值。執行方式是每次都從源頭出發，依目前的回傳值沿箭頭走，走到沒有對應箭頭的節點，就選它來執行。
        <ul><li>和狀態機最大的不同：<b>每次都從源頭重新開始</b>，跟上一次選了誰無關，所以天生是反應式的。</li>
        <li>行為樹、決策樹、Teleo-Reactive 程式、k-BT 都能唯一地翻成決策結構，於是可以放在同一個尺上比較。</li></ul>` },
      { h: "模組：像一次函式呼叫", b: `一組節點 $X$ 是模組，要滿足兩個條件：
        <ul><li><b>單一入口</b>：外面進來的箭頭，全都指向 $X$ 的源頭。</li>
        <li><b>出口只看回傳值</b>：如果有一條標著 $r$ 的箭頭從 $X$ 指到外面的 $v$，那 $X$ 裡每個節點回傳 $r$ 時，不是留在 $X$ 裡，就是去 $v$。</li></ul>
        這正是函式呼叫：從同一個地方進去，回來後接著做什麼只看回傳值。在行為樹裡，模組恰好一一對應到子樹。` },
      { h: "循環複雜度與本質複雜度", b: `<ul>
        <li><b>循環複雜度</b>（McCabe）：獨立的無向迴圈數加 1。對決策結構可直接算：$V(Z) = a + s - n + 1$。一條直線路徑是 1，分岔越多越大；它和程式有多難測試有關。</li>
        <li><b>本質複雜度</b>：先做模組分解，把每個模組縮成一個點，取所有商圖的循環複雜度的<b>最大值</b>。拆得越乾淨，數字越小。</li>
        <li>例子：論文中一個太陽能無人機任務的決策結構，循環複雜度 10，本質複雜度只有 2。</li></ul>` },
      { h: "定理：本質複雜度 1 恰好就是行為樹", b: `<ul>
        <li>一個有 $k$ 種回傳值的決策結構，<b>等價於某棵 k-BT，若且唯若它的本質複雜度是 1</b>；等價的說法是：模組分解中每一張商圖都是一條路徑。</li>
        <li>$k = 2$（成功、失敗）就是一般的行為樹：行為樹正是「最低複雜度」的決策結構，也就是最模組化的那一類。</li>
        <li>反過來也能用：給一個決策結構，可以在多項式時間內判斷它能不能改寫成行為樹、決策樹或 TR。</li>
        <li>注意 Fallback(Sequence(A, B), C) 的循環複雜度是 2，但本質複雜度是 1：Sequence(A, B) 先縮成一個點，剩下的就是直線。</li></ul>` },
      { h: "模組化的回報：局部驗證", b: "論文證明：修改一個模組，對整體的影響不會比修改一個單一動作更大。所以形式驗證（例如用線性時序邏輯 LTL）可以<b>局部、分層</b>地做：整體驗證一次之後，把某個模組換成另一個也通過驗證的模組，只需要重新檢查被換掉的部分。論文用太陽能無人機偵察任務示範這一點。" },
      { h: "和結構化程式設計的對照", b: "1968 年 Dijkstra 主張不受限制的 goto 會帶來錯誤，結構化程式設計因此只用少數幾種固定結構（循序、分支、迴圈）組合程式。行為樹之於狀態機，很像結構化程式之於 goto：限制組合方式，換來可以一塊一塊理解、測試與替換的系統。EP8 會把這份模組化再往前推，用在收斂分析上。" },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 7：<a href="https://www.youtube.com/watch?v=IBFEt_ZdpeU" target="_blank" rel="noopener">youtube.com/watch?v=IBFEt_ZdpeU ↗</a></li>
        <li>Oliver Biggar，行為樹研討會 #2：<a href="https://www.youtube.com/watch?v=IcYyIwuYQdg" target="_blank" rel="noopener">youtube.com/watch?v=IcYyIwuYQdg ↗</a></li>
        <li>O. Biggar, M. Zamani, I. Shames，“On modularity in reactive control architectures, with an application to formal verification”，ACM Transactions on Cyber-Physical Systems, 2022：<a href="https://arxiv.org/abs/2008.12515" target="_blank" rel="noopener">arXiv:2008.12515 ↗</a></li>
        <li>P. Ögren &amp; C. I. Sprague，“Behavior Trees in Robot Control Systems”，Annual Review of Control, Robotics, and Autonomous Systems, 2022（含本集定理的整理）：<a href="https://arxiv.org/abs/2203.13083" target="_blank" rel="noopener">arXiv:2203.13083 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "狀態機難以模組化的主要原因是？",
        o: ["狀態機的表達能力比行為樹弱", "轉移寫在狀態裡面，每個模組都得知道其他模組", "狀態機不能有超過 10 個狀態", "狀態機無法用圖形表示"], a: 1,
        w: "N 個模組最多 $N(N-1)$ 種轉移，每條都是一個跨模組的相依；表達能力其實相同。" },
      { q: "決策結構的執行方式和有限狀態機最大的差別是？",
        o: ["決策結構每次都從源頭重新出發，與上一次選了誰無關", "決策結構只能有兩個節點", "決策結構的箭頭沒有標籤", "決策結構會同時執行所有節點"], a: 0,
        w: "每次從源頭重新走，所以天生是反應式的；狀態機則從目前所在的狀態繼續。" },
      { q: "下列哪一項「不是」決策結構中模組的條件？",
        o: ["外面進來的箭頭都指向模組的源頭", "同一種回傳值離開模組時都去同一個地方", "模組裡的節點數必須是偶數", "整體可以看成一次函式呼叫"], a: 2,
        w: "模組只要求單一入口、出口只看回傳值，和節點數無關。" },
      { q: "決策結構有 n 個節點、a 條箭頭、s 個終點，它的循環複雜度是？",
        o: ["$a - n$", "$a + n + s$", "$n - a + 1$", "$a + s - n + 1$"], a: 3,
        w: "相當於加一個共同終點後套用 McCabe 公式；一條直線路徑算出來是 1。" },
      { q: "本質複雜度怎麼算？",
        o: ["整張圖的循環複雜度", "模組分解中所有商圖循環複雜度的最大值", "模組的個數", "最長路徑的長度"], a: 1,
        w: "它量的是「最難拆的那一塊」有多複雜，而不是整張圖有多大。" },
      { q: "Fallback(Sequence(A, B), C) 的循環複雜度是 2。它的本質複雜度是？",
        o: ["0", "2", "3", "1"], a: 3,
        w: "Sequence(A, B) 是一個模組，縮成一點後剩下一條路徑；所有行為樹的本質複雜度都是 1。" },
      { q: "Biggar 等人的定理說，有 k 種回傳值的決策結構等價於 k-BT，若且唯若？",
        o: ["本質複雜度等於 1", "循環複雜度等於 1", "節點數小於 k", "沒有任何模組"], a: 0,
        w: "等價的說法是：模組分解中的每一張商圖都是一條路徑。" },
      { q: "「修改一個模組的影響，不比修改一個動作更大」這個結果最直接的好處是？",
        o: ["行為樹執行得更快", "不需要感測器", "形式驗證可以局部、分層地做，換掉模組只要重驗被換的部分", "可以自動產生 XML"], a: 2,
        w: "論文以太陽能無人機任務示範：整體驗證一次後，逐步替換模組也能保持正確性。" }
    ],
    next: "EP8：把行為樹當成不連續動態系統，在狀態空間裡畫出每個子樹的 operating region，看它何時收斂到目標、何時陷入無窮迴圈。"
},
  // ---------------------------------------------------------- EP8
{
    no: 8, id: "u08", phase: 3, tier: "Tier 3｜理論保證",
    title: "把行為樹當不連續動態系統：子樹什麼時候在執行？",
    hook: "一棵樹有幾十個子樹，能不能直接在狀態空間裡畫出「這一塊由誰控制」，再證明它一定會走到終點、不會繞圈？",
    tags: "不連續動態系統、混合系統、成功／失敗／執行中區域、影響區域、operating region、收斂、無窮迴圈、抖動、Filippov 解",
    status: "planned", estDur: "約 15 分", segWord: "小節",
    src: [{ label: "BT intro part 9", id: "A74NZI3sZv0" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 55, title: "行為樹是一個切換控制器" },
      { t: 150, title: "每個子樹的三個區域" },
      { t: 260, title: "影響區域：輪不輪得到你" },
      { t: 360, title: "Operating region：誰在控制" },
      { t: 480, title: "收斂定理：只往前走、不久留" },
      { t: 610, title: "無窮迴圈與抖動" },
      { t: 720, title: "例子：恆溫器與倒立擺" },
      { t: 830, title: "總結" }
    ],
    formula: R`\Omega_i = I_i \cap R_i, \qquad I_{\text{右}} = \begin{cases} I_{\text{左}} \cap S_{\text{左}} & \text{Sequence} \\ I_{\text{左}} \cap F_{\text{左}} & \text{Fallback} \end{cases}, \qquad x \in \Omega_i \;\Rightarrow\; \dot x = f\big(x, u_i(x)\big)`,
    pre: [
      { q: "恆溫器：溫度 x 不高於設定值 T 就開暖氣（$\\dot x = +1$），高於 T 就關掉（$\\dot x = -1$）。在 x = T 附近會發生什麼事？",
        a: "兩邊的箭頭都指向 T，控制在 T 處<b>不連續</b>地跳動。理想的連續時間模型裡，狀態會沿著 T 滑動、停在那裡；實際以離散 tick 執行時，就是在 T 附近快速開、關。這種「控制律依狀態所在區域切換」的系統，就是<b>不連續動態系統</b>，行為樹的執行正是其中一種。" },
      { q: "Sequence(A, B)：狀態 x 落在哪裡時，真正在控制機器人的是 B？",
        a: "三件事同時成立：整個 Sequence 本身被輪到（在它的影響區域裡）、A 已經成功（$x \\in S_A$）、B 回報執行中（$x \\in R_B$）。寫成 $\\Omega_B = I \\cap S_A \\cap R_B$。這塊區域就是 B 的 <b>operating region</b>。" },
      { q: "想證明一棵樹一定會走到成功，最直覺的論證是什麼？",
        a: "把所有 operating region 排好順序。如果狀態離開某一塊時，只會進到<b>排在後面</b>的那一塊或直接到成功區，而且在每一塊都待不超過 $\\tau$ 秒，那 N 塊最多切換 N 次，總時間不超過 $N\\tau$。難處在於：設計每個控制器，讓「後面的區域加上成功區」這個集合保持不變。" }
    ],
    terms: [
      { zh: "不連續動態系統", en: "Discontinuous Dynamical System (DDS)", m: R`\dot x = f(x, u_0(x))`, d: "控制律依狀態落在哪一塊區域而切換，因此右手邊不連續的動態系統；是混合系統的一個子類。" },
      { zh: "混合動態系統", en: "Hybrid dynamical system", m: "", d: "同時有連續動態（控制器）與離散切換（選哪個控制器）的系統。" },
      { zh: "行為樹（狀態空間版）", en: "BT as a pair", m: R`T_i = (u_i, r_i)`, d: "每個子樹是一對函數：控制器 $u_i(x)$，以及回報執行中／成功／失敗的 $r_i(x)$。" },
      { zh: "成功／失敗／執行中區域", en: "Success / Failure / Running regions", m: R`S_i, F_i, R_i`, d: "依 $r_i(x)$ 把狀態空間切成三塊，彼此不重疊、合起來是全部；只看子樹內部。" },
      { zh: "影響區域", en: "Influence region", m: R`I_i`, d: "子樹 $i$ 會被輪到的區域，由父節點與左邊兄弟決定；在這塊以外，怎麼改 $T_i$ 都不影響整棵樹。" },
      { zh: "操作區域", en: "Operating region", m: R`\Omega_i = I_i \cap R_i`, d: "子樹 $i$ 被輪到、而且回報執行中的區域；在這裡整棵樹的控制就是 $u_i$。" },
      { zh: "抽象層", en: "Level of abstraction", m: "", d: "一組彼此不重疊的子樹，它們的操作區域加上 $S_0$、$F_0$ 蓋滿整個狀態空間；根節點和全部葉子都是。" },
      { zh: "不變集", en: "Invariant set", m: "", d: "從集合內出發，在某控制器作用下永遠留在集合內；收斂定理要求每個控制器守住自己的 $C_i$。" },
      { zh: "Filippov 解", en: "Filippov solution", m: "", d: "右手邊不連續時的解的概念；可用來談不連續動態系統解的存在與唯一。" },
      { zh: "抖動", en: "Chattering", m: "", d: "狀態卡在兩個操作區域的邊界，控制器快速來回切換。" },
      { zh: "無窮迴圈", en: "Infinite loop", m: "", d: "狀態在幾個操作區域之間反覆循環，永遠到不了成功區；違反「只往後走」的順序就可能發生。" },
      { zh: "Prepares graph", en: "Prepares graph", m: "", d: "以操作區域為節點、可能的轉移為箭頭的圖；無環且所有終點都在成功區，就代表會收斂。" }
    ],
    practice: {
      intro: "一台機器人在直線上，位置 $x \\in \\{0, 1, \\dots, 10\\}$，電量 $b \\in \\{0, 1, \\dots, 10\\}$，共 121 個狀態。行為樹是 Sequence(Fallback(電量 $b \\ge 3$, 充電), Fallback(在終點 $x = 10$, 前進))。「充電」在 $b < 10$ 時回報執行中、每個 tick 讓 $b + 1$；「前進」在 $x < 10$ 時回報執行中、每個 tick 讓 $x + 1$。",
      items: [
        { q: "「充電」的 operating region 包含幾個狀態？",
          a: 33, tol: 0, hint: "充電要被輪到，Fallback 左邊的條件必須失敗（$b < 3$）；它在 $b < 10$ 時回報執行中，交集是 $b < 3$。位置不限：$11 \\times 3$。" },
        { q: "「前進」的 operating region 包含幾個狀態？",
          a: 80, tol: 0, hint: "第一個 Fallback 要成功（$b \\ge 3$，8 種），第二個 Fallback 的條件要失敗、前進回報執行中（$x < 10$，10 種）：$8 \\times 10$。剩下 8 個狀態是成功區 $S_0$。" },
        { q: "從 $x = 0, b = 0$ 出發，前進不耗電。每個 tick 依目前狀態執行一個動作。幾個 tick 後第一次到達成功區？",
          a: 13, tol: 0, hint: "先充電 3 個 tick 到 $b = 3$（注意：充電只做到交出控制權為止，不會充到 10），再前進 10 個 tick：$3 + 10$。正好等於 $\\tau_1 + \\tau_2$，只切換 1 次。" },
        { q: "改成每前進一步耗 1 格電，其餘相同。從 $x = 0, b = 0$ 出發，幾個 tick 後第一次到達成功區？",
          a: 23, tol: 0, hint: "充 3 次後，每前進一步電量掉到 2，又得充 1 次：$3 + 10 \\times 2$。到 $x = 10$ 時 $b = 2$ 還要再充一次才成功，最後一次充電剛好算在 $10 \\times 2$ 裡。前進的 $C_i$ 不再是不變集，狀態一直退回編號較小的區域。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "行為樹的執行就是一個<b>不連續動態系統</b>：把狀態空間切成一塊塊 <b>operating region</b> $\\Omega_i = I_i \\cap R_i$，每一塊由一個控制器負責；只要狀態只往「後面」的區域走、而且每塊都不久留，就一定會到成功區。" },
      { h: "行為樹是一對函數", b: `在 Ögren 與 Sprague 的控制理論表述裡，每個子樹 $T_i = (u_i, r_i)$：
        <ul><li>$u_i(x)$：執行時送出的控制量。</li>
        <li>$r_i(x)$：回報執行中、成功、失敗，把狀態空間切成 $R_i, S_i, F_i$ 三塊。</li>
        <li>條件節點就是 $R_i = \\varnothing$ 的子樹，它的控制器永遠不會被用到。</li></ul>
        組合規則：Sequence 在 $x \\in S_1$ 時交給第二個子樹，否則交給第一個；Fallback 在 $x \\in F_1$ 時交給第二個，否則交給第一個。於是 Sequence 的 $S_0 = S_1 \\cap S_2$，Fallback 的 $F_0 = F_1 \\cap F_2$。` },
      { h: "影響區域：輪不輪得到你", b: `<ul>
        <li>根節點：$I_0$ 是整個狀態空間。</li>
        <li>最左邊的孩子：繼承父節點的影響區域。</li>
        <li>Sequence 裡的其他孩子：$I_i = I_{b(i)} \\cap S_{b(i)}$，哥哥（左邊最近的兄弟）要成功才輪到你。</li>
        <li>Fallback 裡的其他孩子：$I_i = I_{b(i)} \\cap F_{b(i)}$，哥哥要失敗才輪到你。</li></ul>
        注意 $I_i$ 完全由子樹<b>外面</b>決定，$S_i, F_i, R_i$ 完全由子樹<b>裡面</b>決定——這正是模組化（EP7）在狀態空間的樣子。` },
      { h: "Operating region：誰在控制", b: `<ul>
        <li>$\\Omega_i = I_i \\cap R_i$：被輪到，而且回報執行中。在這塊裡，整棵樹的控制就等於 $u_i$。</li>
        <li>同一個父節點底下，孩子們的操作區域彼此不重疊，合起來正好是父節點的操作區域；一路往下，所有葉子的操作區域就把根節點的執行中區域切乾淨。</li>
        <li>練習題裡「充電」自己的成功區是 $b = 10$，但它在 $b = 3$ 就離開了自己的操作區域——控制權何時交出，是由<b>樹的結構</b>決定，不是由動作自己決定。</li></ul>` },
      { h: "收斂定理：只往前走、不久留", b: `選一個抽象層，把其中的 N 個子樹重新編號。如果對每個 $i$：
        $$C_i = \\Big(\\bigcup_{j \\ge i} \\Omega_j \\cup S_0\\Big) \\cap \\bar C$$
        在 $u_i$ 作用下保持不變，而且狀態在任何 $\\Omega_i$ 都待不超過 $\\tau$，那麼從 $C_1$ 出發，最多 $N$ 次切換、$N\\tau$ 時間內一定到達 $S_0$。
        <ul><li>可以在不同的抽象層做分析：把幾塊合起來當成一塊，或拆開看葉子。</li>
        <li>Sequence 的編號由左到右；「implicit sequence」（每個 Fallback 備案負責滿足左邊某個備案的前提）則由右到左編號。</li>
        <li>Sprague 與 Ögren 的連續時間版本把「全序」放寬成偏序（prepares graph）：圖無環、終點都在成功區，就會收斂。</li></ul>` },
      { h: "無窮迴圈與抖動從哪裡來", b: `<ul>
        <li><b>往回走</b>：某個控制器把狀態推回編號更小的區域，例如前進耗電、又掉回充電（練習第 4 題）。這次電量會回來，所以還是會到；但若退回的區域又把狀態推回來，就成了無窮迴圈。</li>
        <li><b>邊界抖動</b>：兩個控制器在邊界上互相把狀態推向對方，例如 EP6 的安全區邊界。</li>
        <li>收斂定理是<b>充分條件</b>：違反它不一定不收斂，但就失去了保證。若轉移有隨機性，Ögren 與 Sprague 也給了「不想要的轉移機率有上限時」的期望轉移次數界限。</li></ul>` },
      { h: "例子：恆溫器與倒立擺", b: `<ul>
        <li><b>恆溫器</b>：Sequence(Fallback(溫度 > T, 開暖氣), 關暖氣)。溫度不高於 T 時由開暖氣控制，高於 T 時由關暖氣控制，兩個向量場在 T 相撞，形成一條滑動面。</li>
        <li><b>倒立擺</b>：Sequence(能量控制器, 線性控制器)。能量控制器把擺甩到接近直立（只會週期性經過直立點，留不住）；一進入直立附近的小區域，就交給線性控制器穩住。兩個區域依序前進，$N = 2$，時間上界 $\\tau_1 + \\tau_2$。</li>
        <li>把行為樹寫成不連續動態系統的好處：連續時間控制理論的工具（存在唯一性、滑動模式、穩定性分析）都能直接拿來用。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 9：<a href="https://www.youtube.com/watch?v=A74NZI3sZv0" target="_blank" rel="noopener">youtube.com/watch?v=A74NZI3sZv0 ↗</a></li>
        <li>C. I. Sprague &amp; P. Ögren，“Continuous-Time Behavior Trees as Discontinuous Dynamical Systems”：<a href="https://arxiv.org/abs/2109.01575" target="_blank" rel="noopener">arXiv:2109.01575 ↗</a></li>
        <li>P. Ögren &amp; C. I. Sprague，“Behavior Trees in Robot Control Systems”，Annual Review of Control, Robotics, and Autonomous Systems, 2022：<a href="https://arxiv.org/abs/2203.13083" target="_blank" rel="noopener">arXiv:2203.13083 ↗</a></li>
        <li>C. I. Sprague &amp; P. Ögren，“An Extended Convergence Result for Behaviour Tree Controllers”：<a href="https://arxiv.org/abs/2308.08994" target="_blank" rel="noopener">arXiv:2308.08994 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "為什麼行為樹的執行可以看成「不連續」動態系統？",
        o: ["因為 tick 之間沒有時間", "因為整棵樹送出的控制量依狀態落在哪個 operating region 而切換", "因為行為樹只能用在離散的遊戲世界", "因為條件節點會回報執行中"], a: 1,
        w: "每塊區域由不同的控制器負責，邊界上控制量會跳動，所以動態方程式的右手邊不連續。" },
      { q: "子樹 i 的 operating region 是？",
        o: ["$S_i \\cup F_i$", "$I_i \\cup R_i$", "$R_i$", "$I_i \\cap R_i$"], a: 3,
        w: "要被輪到（影響區域），而且回報執行中，兩者同時成立才是它在控制。" },
      { q: "在 Fallback 裡，第二個孩子的影響區域是？",
        o: ["第一個孩子的影響區域與失敗區域的交集", "第一個孩子的成功區域", "整個狀態空間", "第一個孩子的執行中區域"], a: 0,
        w: "Fallback 要哥哥失敗才輪到弟弟：$I_2 = I_1 \\cap F_1$；Sequence 則是 $I_1 \\cap S_1$。" },
      { q: "影響區域 $I_i$ 和 $S_i, F_i, R_i$ 最大的差別是？",
        o: ["$I_i$ 一定比較大", "兩者完全相同", "$I_i$ 只由子樹外面（父節點與兄弟）決定，$S_i, F_i, R_i$ 只由子樹裡面決定", "$I_i$ 只對條件節點有定義"], a: 2,
        w: "這種內外分離正是模組化的表現：改子樹內部不會改到它何時被輪到。" },
      { q: "收斂定理的核心條件是？",
        o: ["所有控制器都是線性的", "狀態只往編號更大的區域或成功區走，且在每塊區域停留時間有上限", "樹的深度不超過 3", "每秒 tick 至少 10 次"], a: 1,
        w: "要求 $C_i$ 在 $u_i$ 下不變、並在 $\\tau$ 內離開 $\\Omega_i$，就得到最多 $N$ 次切換、$N\\tau$ 時間的保證。" },
      { q: "練習題裡，「充電」自己的成功條件是 b = 10，但它在 b = 3 就不再控制機器人。原因是？",
        o: ["充電動作故障了", "電池有上限", "tick 頻率不夠", "Fallback 左邊的條件 b ≥ 3 成立後，充電就不在影響區域裡了"], a: 3,
        w: "交出控制權的時機由樹的結構決定，而不是由動作自己的成功條件決定。" },
      { q: "倒立擺的例子為什麼要用 Sequence(能量控制器, 線性控制器)？",
        o: ["能量控制器只會讓擺週期性經過直立點，需要線性控制器在附近接手穩住", "線性控制器可以從任何姿態把擺甩上來", "兩個控制器要同時執行", "能量控制器需要先學習"], a: 0,
        w: "能量控制器負責「到附近」，線性控制器負責「留下來」；兩個區域依序前進，所以 $N = 2$。" },
      { q: "違反收斂定理的條件，會怎樣？",
        o: ["一定會陷入無窮迴圈", "樹會自動重新規劃", "失去保證：可能仍收斂，也可能抖動或無窮迴圈", "機器人會立刻停止"], a: 2,
        w: "定理是充分條件。練習第 4 題就是違反了卻仍會到達的例子，但換個情境就可能繞圈。" }
    ],
    next: "EP9：用控制屏障函數（CBF）守住不能被破壞的條件，讓安全區真的成為不變集；當兩個要求互相衝突時，讓機器人有原則地犧牲比較不重要的那一個。"
},
  // ---------------------------------------------------------- EP9
{
    no: 9, id: "u09", phase: 3, tier: "Tier 3｜理論保證",
    title: "行為樹＋控制屏障函數（CBF）：守住安全，再取捨目標",
    hook: "機器人好不容易待在安全區、連上了 wifi，下一個動作卻把它帶出去——有沒有辦法讓後面的動作「不准」破壞前面的成果？",
    tags: "控制屏障函數、CBF、不變集、二次規劃、最小干擾控制、目標取捨、優先順序",
    status: "planned", estDur: "約 14 分", segWord: "步驟",
    src: [{ label: "BT intro part 10", id: "sgEBj6vNQVU" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 60, title: "問題：後面的動作破壞前面的子目標" },
      { t: 160, title: "安全集合與屏障函數" },
      { t: 280, title: "把 CBF 變成速度上限" },
      { t: 400, title: "最小干擾：二次規劃只改一點點" },
      { t: 520, title: "左邊的條件變成右邊的約束" },
      { t: 640, title: "衝突：wifi 與充電站" },
      { t: 760, title: "總結" }
    ],
    formula: R`u^\ast = \arg\min_{u}\ \|u - k(x)\|^2 \quad \text{s.t.}\quad \frac{\partial h_i}{\partial x} f(x,u) \;\ge\; -\alpha\big(h_i(x)\big),\ \ i = 1,\dots,j`,
    pre: [
      { q: "掃地機器人要去房間另一頭打掃，但它也必須「一直待在 wifi 範圍內」。用 EP1 的行為樹寫法，最左邊放「在 wifi 範圍內 ? 回到 wifi 範圍」，右邊放「去打掃」。這樣夠不夠？會發生什麼事？",
        a: "不夠。行為樹只在條件<b>已經失敗</b>後才補救：「去打掃」會把機器人帶出 wifi 範圍，下一輪左邊的條件失敗，改去「回到 wifi 範圍」，回來後又去打掃……在邊界上來回抖動。我們真正想要的是：去打掃的過程中<b>根本不准</b>離開 wifi 範圍，也就是讓左邊已達成的條件在右邊動作執行時保持成立。" },
      { q: "開車時離懸崖邊還有 10 公尺，你可以開得很快；只剩 1 公尺時，你會怎麼調整朝懸崖方向的速度？寫出一條簡單的規則。",
        a: "越靠近邊界，朝邊界方向的速度上限越低，例如「朝懸崖的速度不超過 <b>某個係數 × 剩下的距離</b>」。這樣距離會越來越小，但永遠不會變成負的——這正是控制屏障函數的核心想法：$\\dot h \\ge -\\alpha h$。" },
      { q: "機器人電量快沒了，充電站卻在 wifi 範圍外面。「保持連線」和「不要沒電」只能顧一個，你會選哪個？要怎麼讓機器人自動做這個選擇？",
        a: "先顧比較重要的（通常是不要沒電）。做法是把需求<b>排出優先順序</b>：所有約束能同時滿足就都滿足；滿足不了時，從最不重要的那一個開始放掉，保留最重要的。行為樹由左到右的順序剛好就是現成的優先順序。" }
    ],
    terms: [
      { zh: "控制屏障函數", en: "Control Barrier Function (CBF)", m: R`h(x)`, d: "一個狀態的函數，$h(x) \\ge 0$ 代表安全；搭配速度限制，能保證安全集合不會被離開。" },
      { zh: "安全集合", en: "Safe set", m: R`\mathcal{C} = \{x : h(x) \ge 0\}`, d: "所有被認為安全的狀態，例如 wifi 範圍內、離障礙物夠遠。" },
      { zh: "不變集", en: "Invariant set", m: "", d: "一旦進入就不會離開的狀態集合；CBF 讓安全集合變成不變集。" },
      { zh: "Class-K 函數", en: "Class-K function", m: R`\alpha`, d: "通過原點、嚴格遞增的函數；最簡單的選擇是 $\\alpha(h) = c\\,h$，$c$ 越大越敢靠近邊界。" },
      { zh: "CBF 條件", en: "CBF condition", m: R`\dot h \ge -\alpha(h)`, d: "允許 $h$ 下降，但下降速度不能超過 $\\alpha(h)$；越靠近邊界，允許的下降越小。" },
      { zh: "可行控制集合", en: "Admissible control set", m: R`K_i`, d: "滿足第 $i$ 個 CBF 條件的所有控制輸入。" },
      { zh: "名目控制器", en: "Nominal controller", m: R`k(x)`, d: "動作原本想做的控制，例如「全速開向充電站」，還沒考慮安全約束。" },
      { zh: "最小干擾控制", en: "Minimally disturbing control", m: R`\min \|u - k(x)\|^2`, d: "在滿足約束的前提下，選一個最接近名目控制的輸入。" },
      { zh: "二次規劃", en: "Quadratic Program (QP)", m: "", d: "目標是二次式、約束是線性不等式的最佳化問題；控制輸入是速度時，CBF 條件通常是線性的，可以每個控制週期快速求解。" },
      { zh: "優先順序的取捨", en: "Prioritized constraints", m: R`\hat K`, d: "約束依行為樹由左到右排優先順序；全部交集為空時，只保留最長的一段可同時滿足的前段約束，放掉最不重要的。" }
    ],
    practice: {
      intro: "一維的小練習：機器人在直線上移動，位置 $x$（公尺），速度就是控制輸入 $u$（$\\dot x = u$，正值往右）。wifi 範圍到 $x = 10$ 為止，屏障函數 $h(x) = 10 - x$，CBF 條件取 $\\dot h \\ge -0.5\\,h$。",
      items: [
        { q: "機器人在 $x = 6$。依 CBF 條件，它往右的速度最多可以是多少（公尺／秒）？",
          a: 2, tol: 0, hint: "$\\dot h = -u$，所以 $-u \\ge -0.5(10 - x)$，即 $u \\le 0.5 \\times (10 - 6)$。" },
        { q: "動作「去充電站」原本想用 $3$ 公尺／秒往右開（名目控制）。機器人走到 $x = 9$ 時，最小干擾的二次規劃會給出多少速度？",
          a: 0.5, tol: 0.005, hint: "上限 $0.5 \\times (10 - 9) = 0.5$，比 3 小；離 3 最近、又不超過上限的速度就是上限本身。" },
        { q: "從 $x = 6$ 出發，每一刻都用剛好等於上限的速度往右開，2 秒後機器人在哪裡？（提示：$h$ 以指數衰減）",
          a: 8.528, tol: 0.01, hint: "取等號時 $\\dot h = -0.5 h$，$h(t) = 4 e^{-0.5 t}$；$t = 2$ 時 $h = 4e^{-1} \\approx 1.47$，$x = 10 - h$。" },
        { q: "電量快沒了，新增一個更重要的約束「往右速度至少 1.5」（才來得及趕到 wifi 外的充電站）。在 $x = 8$、名目控制 $1.2$ 時，兩個約束無法同時滿足；放掉較不重要的 wifi 約束後，二次規劃給出的速度是多少？",
          a: 1.5, tol: 0.005, hint: "wifi 約束是 $u \\le 0.5 \\times 2 = 1$，和 $u \\ge 1.5$ 沒有交集。只留 $u \\ge 1.5$，離 1.2 最近的可行速度是 1.5。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "行為樹左邊已經達成的條件，用<b>控制屏障函數</b>改寫成右邊動作的<b>速度約束</b>：右邊的動作照常往目標走，但不准把左邊的成果弄壞；真的顧不了全部時，依由左到右的順序，放掉<b>最不重要</b>的那一個。" },
      { h: "問題從哪裡來", b: "EP2 的 PPA 與 EP8 的 operating region 告訴我們：左邊的條件失敗時，樹會切去補救。但「失敗了再補救」代表機器人會先踏出安全區、再被拉回來，在邊界上來回抖動。對碰撞、掉出 wifi、超出工作空間這類條件，我們希望它們<b>根本不會失敗</b>。Ögren 的說法是：常常希望一個動作不要破壞前面動作已達成的子目標。" },
      { h: "屏障函數：用一個數字量「還有多安全」", b: `<ul>
        <li>選一個函數 $h(x)$，安全時 $h \\ge 0$，例如離 wifi 邊界的距離、離障礙物的距離減去安全半徑。</li>
        <li>CBF 條件：$\\dot h \\ge -\\alpha(h)$。$h$ 可以變小，但越靠近 0，允許變小的速度越慢。</li>
        <li>結果：$h$ 最快也只會像 $e^{-ct}$ 那樣趨近 0，永遠不會變成負的——安全集合成為<b>不變集</b>。</li></ul>` },
      { h: "最小干擾：只改一點點", b: `每個動作原本有自己的控制器 $k(x)$（例如「全速開向充電站」）。加上 CBF 後，每個控制週期解一個小型二次規劃：
        $$u^\\ast = \\arg\\min_u \\|u - k(x)\\|^2 \\quad \\text{s.t. 所有 CBF 條件}$$
        離邊界很遠時約束不起作用，動作照原樣做；靠近邊界時才被「剎住」。動作的設計者不必知道安全規則，安全規則也不必知道動作在做什麼——兩邊仍然模組化。` },
      { h: "左邊的條件，自動成為右邊的約束", b: `<ul>
        <li>每個條件 $C_i$ 對應一個屏障函數：$C_i = (h_i(x) \\ge 0)$。</li>
        <li>執行某個動作時，所有位在它左邊、優先權較高的條件，都變成它的 CBF 約束：$\\bar K_j = K_1 \\cap \\cdots \\cap K_j$。</li>
        <li>例：水下載具的任務樹裡，「執行覆蓋掃描」要同時遵守「不碰撞」「還回得了充電站」「保持通訊」；巢狀子樹也把父節點的約束一路往下傳。</li></ul>` },
      { h: "目標衝突：犧牲最不重要的那一個", b: `wifi 範圍與充電站的例子：電量夠時，所有約束都能同時滿足；電量低、充電站又在 wifi 外面時，「保持連線」與「趕去充電」沒有交集。這時演算法取<b>最長的一段可同時滿足的前段約束</b>：
        $$\\hat K = \\bar K_j,\\quad \\bar K_j \\ne \\varnothing,\\ \\bar K_{j+1} = \\varnothing$$
        也就是從最右邊、最不重要的約束開始放掉，保住較重要的。行為樹由左到右的排列，在這裡直接成為取捨的依據。` },
      { h: "保證與前提", b: `<ul>
        <li>論文給出的有限時間保證有前提：每一層的約束都要能同時滿足，而且在這些約束下仍存在能讓下一個條件 $h_i$ 以至少某個正速率增加的控制。</li>
        <li>前提不成立（例如上面的衝突）時，就沒有「全部達成」的保證，只剩「依優先順序放掉」的行為。</li>
        <li>實務上還要能寫出 $h(x)$ 與系統模型 $f(x,u)$；這比單純的條件檢查要求更多。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 10（CBF 與行為樹）：<a href="https://www.youtube.com/watch?v=sgEBj6vNQVU" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>S. Özkahraman &amp; P. Ögren，“Combining Control Barrier Functions and Behavior Trees for Multi-Agent Underwater Coverage Missions”：<a href="https://arxiv.org/abs/2008.09427" target="_blank" rel="noopener">arXiv:2008.09427 ↗</a></li>
        <li>P. Ögren，“On the similarities between Control Barrier Functions (CBFs) and Behavior Control Lyapunov Functions (BCLFs)”：<a href="https://arxiv.org/abs/2109.01343" target="_blank" rel="noopener">arXiv:2109.01343 ↗</a></li>
        <li>P. Ögren &amp; C. Sprague，“Behavior Trees in Robot Control Systems”（控制理論觀點的回顧，含安全保證）：<a href="https://arxiv.org/abs/2203.13083" target="_blank" rel="noopener">arXiv:2203.13083 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "只用一般行為樹處理「待在 wifi 範圍內」，而右邊的動作會把機器人帶出範圍，最可能出現什麼現象？",
        o: ["機器人永遠不會離開 wifi 範圍", "在邊界附近來回抖動：出去、被拉回、又出去", "整棵樹回報失敗並停機", "右邊的動作永遠不會被 tick"], a: 1,
        w: "行為樹只在條件失敗後才補救，所以會先越界再被拉回；CBF 讓條件在執行右邊動作時就不會失敗。" },
      { q: "控制屏障函數條件 $\\dot h \\ge -\\alpha(h)$ 的直覺是？",
        o: ["$h$ 永遠不能變小", "$h$ 必須越來越大", "$h$ 可以變小，但越靠近 0，允許變小的速度越慢", "$h$ 每一刻都要等於 0"], a: 2,
        w: "離邊界遠時可以大步靠近，靠近邊界就被剎住，$h$ 永遠不會掉到 0 以下。" },
      { q: "「最小干擾」的二次規劃，目標函數在最小化什麼？",
        o: ["實際控制與動作原本想要的控制之間的差距", "到達目標的時間", "屏障函數的值", "電池消耗"], a: 0,
        w: "$\\min \\|u - k(x)\\|^2$：在滿足所有安全約束的前提下，盡量照動作原本的意思做。" },
      { q: "在 CBF-BT 裡，某個動作要遵守哪些約束？",
        o: ["只有它自己的前置條件", "樹裡所有條件，不分左右", "位在它左邊、優先權較高的條件", "位在它右邊的條件"], a: 2,
        w: "左邊已經達成、更重要的子目標，正是不准被這個動作破壞的東西。" },
      { q: "充電站在 wifi 範圍外，電量又快沒了，兩個約束沒有交集。演算法怎麼做？",
        o: ["停在原地等使用者決定", "隨機選一個約束放掉", "兩個都放掉，直接用名目控制", "保留最長的一段可同時滿足的前段約束，放掉最不重要的"], a: 3,
        w: "依由左到右的優先順序，從最不重要的約束開始放掉，保住較重要的需求。" },
      { q: "一維例子 $h = 10 - x$、$\\dot x = u$、條件 $\\dot h \\ge -0.5h$。在 $x = 8$ 時往右的速度上限是？",
        o: ["0.5", "1", "2", "4"], a: 1,
        w: "$-u \\ge -0.5 \\times 2$，所以 $u \\le 1$。" },
      { q: "為什麼說加上 CBF 後，行為樹仍然保持模組化？",
        o: ["每個動作都要重寫成知道所有安全規則", "動作只管自己的名目控制器，安全規則由二次規劃統一加上", "CBF 會把整棵樹合成一個動作", "CBF 取代了所有條件節點"], a: 1,
        w: "動作設計者不必知道安全規則；安全約束依樹的結構自動收集、在二次規劃裡統一處理。" },
      { q: "CBF-BT 的「保證所有約束在有限時間內滿足」需要什麼前提？",
        o: ["沒有任何前提", "只要 tick 頻率夠高", "每一層的約束能同時滿足，且仍有控制能讓下一個條件以正速率改善", "機器人必須是一維系統"], a: 2,
        w: "前提不成立（例如目標衝突）時，只剩依優先順序取捨的行為，沒有全部達成的保證。" }
    ],
    next: "EP10：前面的樹都是人設計的。能不能讓電腦自己「演化」出一棵會玩遊戲的行為樹？用遺傳演算法學行為樹，以及樹越長越大的 bloat 問題。"
},
  // ---------------------------------------------------------- EP10
{
    no: 10, id: "u10", phase: 4, tier: "Tier 4｜學習、效用與可解釋",
    title: "用遺傳演算法學出行為樹：Mario 與越長越大的 bloat",
    hook: "不畫任何一個節點，只給一堆積木和一個分數，電腦能不能自己演化出一棵會玩 Mario 的行為樹？",
    tags: "遺傳演算法、遺傳程式設計、適應度、交配、突變、選擇、Mario AI、bloat、剪枝",
    status: "planned", estDur: "約 12 分", segWord: "步驟",
    src: [{ label: "BT intro part 8", id: "NZbJawgZu4U" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "遺傳演算法快速複習" },
      { t: 150, title: "行為樹為什麼適合演化" },
      { t: 250, title: "交配與突變：交換子樹、替換節點" },
      { t: 350, title: "Mario：積木與適應度" },
      { t: 450, title: "bloat：樹越長越大" },
      { t: 560, title: "三種對付 bloat 的思路" },
      { t: 660, title: "總結" }
    ],
    formula: R`\text{演化一代：}\ \mathcal{P}_{g+1} = \text{突變}\Big(\text{交配}\big(\text{選擇}(\mathcal{P}_g,\ F)\big)\Big),\qquad F'(T) = F(T) - c\,|T|`,
    pre: [
      { q: "你要教一群不懂規則的人玩 Mario，但你只能看他們的「得分」，不能告訴他們怎麼玩。你會怎麼一代一代改進他們的玩法？",
        a: "讓很多人各自玩（<b>族群</b>），依得分決定誰的玩法比較值得保留（<b>選擇</b>）；把兩個好玩家的招式混在一起（<b>交配</b>），偶爾隨機改一點（<b>突變</b>）；新一代再玩、再打分數。這就是遺傳演算法：只需要一個能打分數的方法（<b>適應度函數</b>），不需要知道正確答案。" },
      { q: "兩棵行為樹要「交配」。如果把它們寫成一長串文字再從中間剪開拼接，常常會得到無法執行的東西。行為樹有什麼結構，讓交配變得簡單又安全？",
        a: "行為樹的每一棵<b>子樹本身就是一個完整的行為</b>，而且對外介面一樣（被 tick、回報成功／失敗／執行中）。所以只要從兩棵樹各挑一棵子樹互換，結果一定還是合法的行為樹。這正是 EP1 講的模組化帶來的好處。" },
      { q: "演化了 100 代，分數越來越好，但樹從 20 個節點長到好幾百個，裡面很多子樹根本不會被執行到。這有什麼問題？可以怎麼辦？",
        a: "這叫 <b>bloat</b>：樹變得又大又難懂，執行與評估都變慢，也失去行為樹「看得懂」的優點。對策包括限制樹的大小、演化後把<b>拿掉也不影響分數的子樹剪掉</b>，以及讓<b>比較大的樹拿比較低的適應度</b>。" }
    ],
    terms: [
      { zh: "遺傳演算法", en: "Genetic Algorithm (GA)", m: "", d: "模仿天擇的搜尋方法：一群候選解經過選擇、交配、突變，一代一代改進。" },
      { zh: "遺傳程式設計", en: "Genetic Programming (GP)", m: "", d: "遺傳演算法的一支，演化的對象是程式或樹狀結構，正好適合行為樹。" },
      { zh: "族群", en: "Population", m: R`\mathcal{P}_g`, d: "第 $g$ 代的所有候選行為樹。" },
      { zh: "適應度", en: "Fitness", m: R`F(T)`, d: "給一棵樹打的分數；Mario 的例子綜合考慮前進距離、擊倒的敵人、受傷次數與剩餘時間。" },
      { zh: "選擇", en: "Selection", m: "", d: "依適應度決定誰能當父母；分數越高越容易被選中，但低分者也保留一點機會以維持多樣性。" },
      { zh: "交配", en: "Crossover", m: "", d: "從兩棵樹各挑一棵子樹互換，得到新的樹；子樹介面一致，所以結果一定合法。" },
      { zh: "突變", en: "Mutation", m: "", d: "把某個節點換成同類的另一個節點（動作換動作、控制節點換控制節點），保證樹仍可執行。" },
      { zh: "Mario AI 競賽", en: "Mario AI benchmark", m: "", d: "以超級瑪利歐關卡為測試平臺的 AI 競賽，常用來比較遊戲角色的控制策略。" },
      { zh: "感受野", en: "Receptive field", m: "", d: "Mario 周圍的一塊格子，每格可檢查「有沒有敵人」「有沒有障礙物」，這些就是條件節點。" },
      { zh: "bloat", en: "Bloat", m: "", d: "遺傳程式設計常見的現象：演化過程中樹越長越大，多出來的部分常常對分數沒有貢獻。" },
      { zh: "剪除無效子樹", en: "Pruning ineffective subtrees", m: "", d: "逐一試著拿掉子樹，若適應度沒有下降就真的拿掉，直到沒有可拿掉的為止。" },
      { zh: "簡約壓力", en: "Parsimony pressure", m: R`F - c\,|T|`, d: "讓較大的樹拿較低的適應度，在演化過程中就抑制樹變大。" }
    ],
    practice: {
      intro: "用數字感受遺傳演算法的幾個關鍵量。第 1 題出自 Mario 的條件設計；其他題目的數值是為了練習而設定的。",
      items: [
        { q: "Mario 周圍取 5 × 5 的格子當感受野，每一格有兩個條件：「有敵人」與「有障礙物」。條件節點一共有幾個？",
          a: 50, tol: 0, hint: "$5 \\times 5 \\times 2$。再加上走右、走左、蹲下、發射、跳 5 個動作，就是演化可以用的全部積木。" },
        { q: "族群有 4 棵樹，適應度 40、30、20、10，用「依適應度比例」的方式選父母，兩個父母獨立各選一次。兩個父母都是最高分那棵的機率是多少？",
          a: 0.16, tol: 0.005, hint: "被選中的機率 $40 / 100 = 0.4$；兩次都中：$0.4 \\times 0.4$。" },
        { q: "加上簡約壓力 $F' = F - 0.5 \\times$ 節點數。樹 A 適應度 120、40 個節點；樹 B 適應度 112、20 個節點。加上壓力後，B 比 A 高多少？",
          a: 2, tol: 0, hint: "$F'_A = 120 - 20 = 100$，$F'_B = 112 - 10 = 102$，相差 $102 - 100$。原本 A 比較高，加上壓力後換成 B 勝出。" },
        { q: "假設沒有任何防 bloat 措施，族群平均樹大小從 20 個節點開始，每一代增加 8%。30 代之後平均約有幾個節點？",
          a: 201.25, tol: 0.5, hint: "$20 \\times 1.08^{30}$。指數成長讓「只多一點點」很快變成十倍。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "行為樹的<b>每棵子樹都是完整的行為</b>，所以「交換子樹」與「替換同類節點」天生就安全，很適合用遺傳演算法演化；代價是樹會越長越大（<b>bloat</b>），需要限制大小、剪除無效子樹或讓大樹扣分。" },
      { h: "遺傳演算法需要什麼", b: `<ul>
        <li><b>表示法</b>：候選解長什麼樣子——這裡就是一棵行為樹。</li>
        <li><b>適應度函數</b>：怎麼打分數——讓樹實際去玩、去模擬，再計分。</li>
        <li><b>選擇、交配、突變</b>：怎麼從這一代產生下一代。</li></ul>
        不需要環境模型，也不需要知道正確答案；只需要能評估「這棵樹做得多好」。這也是它的代價：每一棵候選樹都要實際跑一次，評估次數很多。` },
      { h: "交配與突變：模組化的紅利", b: `<ul>
        <li><b>交配</b>：在兩棵父母樹裡各隨機挑一棵子樹（可以在任何一層）互換。子樹的介面都一樣（被 tick、回報三種狀態），換完一定能執行。</li>
        <li><b>突變</b>：把一個節點換成<b>同類</b>的節點：動作換動作、條件換條件、Sequence 換 Fallback，不會把葉子換成控制節點。</li>
        <li>論文裡突變的節點數隨世代逐漸減少（類似模擬退火），前期大膽探索、後期細修。</li></ul>` },
      { h: "Mario：積木與分數", b: `<ul>
        <li><b>動作</b>（5 個）：往右走、往左走、蹲下、發射、跳。</li>
        <li><b>條件</b>（50 個）：Mario 周圍 5 × 5 的格子，每格檢查有沒有敵人、有沒有障礙物。</li>
        <li><b>適應度</b>：前進距離、擊倒的敵人、受傷次數、抵達終點時的剩餘時間，以非線性方式組合。</li>
        <li>論文從沒有敵人的關卡、到有走動的敵人、再到有飛行敵人與懸崖的關卡逐步測試，學出能過關的樹。</li></ul>` },
      { h: "先貪婪、再演化", b: "Colledanchise、Parasuraman 與 Ögren 的做法不是一開始就盲目演化：先試著用簡單的貪婪搜尋，找一個能讓分數變好的動作或條件加上去；卡住了才交給遺傳程式設計。這樣通常比純粹演化更快，也讓樹比較小。" },
      { h: "bloat 與對策", b: `演化時，加一棵不會被執行到的子樹，不會讓分數變差，卻常在交配時「搭便車」被保留下來，樹就越長越大。常見的對策思路：
        <ul><li><b>限制大小</b>：直接設定節點數或深度的上限。</li>
        <li><b>事後剪枝</b>：演化完成後，逐一拿掉子樹，只要適應度沒有下降就拿掉（論文採用的 anti-bloat 步驟）。</li>
        <li><b>簡約壓力</b>：讓較大的樹拿較低的適應度，$F' = F - c\\,|T|$。這是影片說明欄補充的做法。</li></ul>
        影片介紹了三種避免 bloat 的方法；細節以影片與論文為準，這裡整理的是各方法背後的共通思路。` },
      { h: "演化出來的樹看得懂嗎？", b: "剪枝之後的樹通常小到可以讀：例如「前面有敵人 → 發射；前面有障礙 → 跳；否則往右走」這類結構。這是用行為樹當表示法、而不是用神經網路的好處——學出來的東西仍是一棵能檢查、能手動修改的樹。EP12 會再談：當一部分改用強化學習時，怎麼保住這個優點。" },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 8（用遺傳演算法學行為樹）：<a href="https://www.youtube.com/watch?v=NZbJawgZu4U" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>M. Colledanchise, R. Parasuraman, P. Ögren，“Learning of Behavior Trees for Autonomous Agents”（後來刊於 IEEE Transactions on Games）：<a href="https://arxiv.org/abs/1504.05811" target="_blank" rel="noopener">arXiv:1504.05811 ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，Genetic Programming 相關段落：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "為什麼行為樹特別適合用遺傳程式設計來演化？",
        o: ["行為樹的節點數一定很少", "每棵子樹都是完整的行為、介面一致，交換子樹後仍是合法的樹", "行為樹不需要適應度函數", "行為樹本身就是神經網路"], a: 1,
        w: "模組化讓交配只要「換子樹」就好，不會產生無法執行的結果。" },
      { q: "行為樹的「突變」通常怎麼做才安全？",
        o: ["把一個節點換成同類的節點，例如動作換動作", "隨機刪掉一半的節點", "把葉子換成 Sequence", "把整棵樹反轉"], a: 0,
        w: "同類替換保證結構合法：葉子仍是葉子、控制節點仍是控制節點。" },
      { q: "遺傳演算法「不需要」下列哪一項？",
        o: ["候選解的表示法", "評估好壞的適應度函數", "正確答案或環境的精確模型", "產生下一代的方法"], a: 2,
        w: "它只需要能打分數；代價是每棵候選樹都要實際跑一次來評估。" },
      { q: "Mario 例子裡，條件節點從哪裡來？",
        o: ["由語言模型自動產生", "Mario 周圍 5 × 5 格子，每格檢查有沒有敵人、有沒有障礙物", "遊戲的關卡編號", "玩家的鍵盤輸入"], a: 1,
        w: "共 50 個條件，加上 5 個動作，就是演化可用的全部積木。" },
      { q: "bloat 指的是什麼？",
        o: ["族群數量越來越多", "適應度越來越低", "tick 頻率越來越慢", "演化過程中樹越長越大，多出來的部分常對分數沒有貢獻"], a: 3,
        w: "多餘的子樹不會讓分數變差，卻常被保留下來，讓樹變大、變難懂。" },
      { q: "「逐一拿掉子樹，若適應度沒有下降就拿掉」屬於哪一種對策？",
        o: ["事後剪除無效子樹", "簡約壓力", "限制深度", "提高突變率"], a: 0,
        w: "這是論文採用的 anti-bloat 步驟，在演化之後清理不需要的部分。" },
      { q: "加上簡約壓力 $F' = F - c\\,|T|$ 後會發生什麼？",
        o: ["所有樹的分數都一樣", "較大的樹分數被扣得較多，演化時就傾向保留小樹", "樹的大小不再影響任何事", "突變被停止"], a: 1,
        w: "分數相近時，小樹會勝出；$c$ 太大則可能把真正需要的結構也壓掉。" },
      { q: "跟直接用神經網路學一個控制策略相比，演化出行為樹的主要優點是？",
        o: ["一定學得比較快", "不需要模擬器", "學出來的仍是一棵看得懂、能檢查與手動修改的樹", "保證找到最佳解"], a: 2,
        w: "表示法本身可讀，剪枝後的樹可以直接拿來檢查與修改。" }
    ],
    next: "EP11：Fallback 的備案順序一定要寫死嗎？Utility BT 讓 Fallback 依「現在哪個最有用」重新排序子節點。"
},
  // ---------------------------------------------------------- EP11
{
    no: 11, id: "u11", phase: 4, tier: "Tier 4｜學習、效用與可解釋",
    title: "Utility BT：依效用重排備案",
    hook: "Fallback 的備案順序是寫死的——可是「先逃跑還是先打」，難道不該看現在手上有什麼嗎？",
    tags: "Utility BT、效用、Utility Fallback、期望報酬、優先順序、強化學習、設計原則",
    status: "planned", estDur: "約 12 分", segWord: "小節",
    src: [{ label: "BT intro part 12", id: "ju4GY1gtP8s" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "寫死的優先順序" },
      { t: 140, title: "Utility Fallback：先問誰最有用" },
      { t: 250, title: "效用從哪裡來" },
      { t: 360, title: "效用怎麼往上傳" },
      { t: 470, title: "效用與強化學習的報酬" },
      { t: 570, title: "換回一般行為樹" },
      { t: 660, title: "總結" }
    ],
    formula: R`\text{Utility Fallback：}\quad \text{依 } U(c_{\pi(1)}) \ge U(c_{\pi(2)}) \ge \cdots \ge U(c_{\pi(n)}) \text{ 的順序 tick}\qquad \mathbb{E}[R] = \sum_{k=1}^{n} \Big(\prod_{j<k} (1-p_{\pi(j)})\Big)\, p_{\pi(k)}\, R_{\pi(k)}`,
    pre: [
      { q: "遊戲裡的小偷被警衛發現。他有兩個備案：開車逃走、拿武器反抗。如果用一般的 Fallback，你會把哪一個放左邊？有沒有哪種情況你會後悔這樣排？",
        a: "不管放哪一個，總有情況會後悔：把「開車逃走」放左邊，手上明明有更強的武器、車卻停得很遠時還是會先跑去開車；反過來也一樣。一般 Fallback 的<b>優先順序是寫死的</b>。Utility BT 的想法是：每一輪先問每個備案「你現在有多有用」，再從最有用的開始試。" },
      { q: "「開門進屋」這個 Sequence 有兩步：開門（成功機率只有 0.3）、進屋（做到了很有價值，0.9）。要估整個 Sequence 有多有用，直接取兩者中較大的 0.9 合理嗎？",
        a: "不太合理。Sequence 要每一步都成功才會成功，開門很可能失敗，進屋根本輪不到。比較合理的估計會把成功機率考慮進去，例如 $0.3 \\times 0.9 = 0.27$。效用要怎麼從子節點往上傳，正是 Utility BT 的難題之一。" },
      { q: "強化學習裡，機器人會挑「預期能拿到最多報酬」的動作。這跟「從效用最高的備案開始試」有什麼關係？",
        a: "如果把效用解讀成<b>預期報酬</b>，Utility Fallback 就是在每一輪挑預期報酬最高的備案，這和強化學習的「最大化報酬」非常接近。差別是行為樹仍保留結構：失敗了有下一個備案、左邊的條件仍可以中斷右邊的動作。" }
    ],
    terms: [
      { zh: "效用", en: "Utility", m: R`U`, d: "某個選擇「現在有多有用」的數字；為了能互相比較，常正規化到 0 到 1。" },
      { zh: "Utility BT", en: "Utility Behavior Tree", m: "", d: "在行為樹裡加入效用：子樹回報自己的效用，讓特定節點依效用決定 tick 的順序。" },
      { zh: "Utility Fallback", en: "Utility Fallback node", m: "", d: "先取得所有子節點的效用，依效用由高到低重新排序，再照一般 Fallback 的規則 tick。" },
      { zh: "固定優先順序", en: "Fixed priority", m: "", d: "一般 Fallback 的子節點順序在設計時寫死；常被認為是行為樹最大的限制之一。" },
      { zh: "效用估計", en: "Utility estimate", m: "", d: "可以來自設計者寫的公式、模擬、經驗統計，或學習得到的價值估計。" },
      { zh: "效用傳遞", en: "Utility propagation", m: "", d: "把葉子的效用沿著 Sequence 與 Fallback 往上合成，讓上層的 Utility Fallback 也能比較子樹。" },
      { zh: "max 規則", en: "Max rule", m: R`U = \max_i U_i`, d: "Merrill 建議的合成方式：Sequence 與 Fallback 都取子節點效用的最大值；簡單但會高估 Sequence。" },
      { zh: "成功機率", en: "Success probability", m: R`p`, d: "子樹被 tick 後最終回報成功的機率；Sequence 要全部成功，Fallback 只要一個成功。" },
      { zh: "期望報酬", en: "Expected reward", m: R`\mathbb{E}[R]`, d: "把效用解讀成報酬時，一個 Fallback 依某個順序執行能拿到的平均報酬。" },
      { zh: "設計原則", en: "Design principle", m: "", d: "Utility BT 常可以換成一般行為樹：用「A 的效用比 B 高」這類條件決定分支，效用成為設計時的思考工具。" }
    ],
    practice: {
      intro: "練習 Utility Fallback 的排序，以及把效用解讀成期望報酬。機率題假設各子樹互相獨立，Fallback 一旦有子節點成功就停止。",
      items: [
        { q: "Utility Fallback 底下有三個備案：躲起來（效用 0.2）、開車逃走（0.9）、拿武器反抗（0.6）。第一個被試的備案失敗了，接下來被 tick 的備案效用是多少？",
          a: 0.6, tol: 0.005, hint: "依效用排序：0.9、0.6、0.2。第一個（0.9）失敗後，輪到 0.6。" },
        { q: "Sequence（開門，成功機率 0.3；進屋，效用 0.9）。如果改用「成功機率 × 最後一步的效用」來估計整個 Sequence 的效用，結果是多少？（Merrill 的 max 規則會給 0.9）",
          a: 0.27, tol: 0.005, hint: "$0.3 \\times 0.9$。max 規則忽略了開門可能失敗、進屋根本輪不到。" },
        { q: "Fallback 依序試 A、B：A 成功機率 0.6、成功報酬 10；B 成功機率 0.9、成功報酬 8；失敗報酬為 0。這個順序的期望報酬是多少？",
          a: 8.88, tol: 0.005, hint: "A 成功：$0.6 \\times 10$；A 失敗才試 B：$0.4 \\times 0.9 \\times 8$。相加。" },
        { q: "同一組 A、B 改成先試 B、再試 A。先試 A 的期望報酬比先試 B 高多少？",
          a: 1.08, tol: 0.005, hint: "先試 B：$0.9 \\times 8 + 0.1 \\times 0.6 \\times 10 = 7.8$；相差 $8.88 - 7.8$。注意 B 成功率比較高，卻不是比較好的第一選擇。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "<b>Utility Fallback</b> 每一輪先問所有子節點「你現在有多有用」，依效用由高到低重新排序再 tick；效用可以解讀成預期報酬，這讓它和強化學習很接近；而且常常能換回一棵一般行為樹，把「效用」當成設計時的思考工具。" },
      { h: "寫死的優先順序", b: "EP1 的 Fallback 由左到右試備案，順序在設計時就決定了。多數情況這很好——可預測、好除錯；但當最佳順序<b>取決於現在的狀況</b>（手上的武器、車的位置、剩下的電量）時，寫死的順序就不夠用。Colledanchise &amp; Ögren 的書引用 Merrill（2014）的說法：固定優先順序是行為樹常被批評的地方，Utility Fallback 就是為此提出。" },
      { h: "Utility Fallback 怎麼運作", b: `<ul>
        <li>每個子節點回報一個效用值（常正規化到 0～1，才能互相比較）。</li>
        <li>節點依效用由高到低排序子節點。</li>
        <li>接下來照一般 Fallback 的規則：成功或執行中就停下並往上回報，失敗才試下一個。</li>
        <li>因為每一輪都重新排序，狀況改變時順序也跟著改變，仍保有行為樹的反應性。</li></ul>` },
      { h: "效用從哪裡來、怎麼往上傳", b: `<ul>
        <li><b>來源</b>：設計者寫的評分公式、模擬估計、過去的成功率統計，或學習得到的價值估計。</li>
        <li><b>只在一層用</b>：在 Utility Fallback 的每個子節點上方加一個計算效用的 Decorator，簡單但有點臨時拼湊。</li>
        <li><b>多層都用</b>：每個動作都有效用，沿 Sequence 與 Fallback 往上合成。Merrill 建議兩者都取最大值，但這會高估 Sequence（前面的步驟可能失敗），也低估了 Fallback「第一個失敗還有第二個」的價值。</li></ul>
        影片也比較了不同層級的 Utility 節點怎麼把估計往上傳；具體做法以影片為準。` },
      { h: "效用 ≈ 預期報酬", b: `若把效用解讀成「選這個備案能拿到的預期報酬」，Fallback 依某個順序 $\\pi$ 的期望報酬是：
        $$\\mathbb{E}[R] = \\sum_{k} \\Big(\\prod_{j<k} (1-p_{\\pi(j)})\\Big)\\, p_{\\pi(k)}\\, R_{\\pi(k)}$$
        挑一個讓它最大的順序，就和強化學習「最大化報酬」非常接近。練習第 3、4 題顯示：成功率最高的備案不一定該排第一，要同時看成功後拿到多少。` },
      { h: "換回一般行為樹：效用當成設計原則", b: `很多 Utility BT 可以改寫成一般行為樹：用條件節點表達「現在哪個比較有用」，例如
        <pre class="mono" style="background:var(--bg);padding:12px;border-radius:8px;overflow-x:auto;font-size:13px;line-height:1.55">Fallback
  Sequence
    「車在附近（逃走效用較高）」
    開車逃走
  Sequence
    「有更強的武器」
    拿武器反抗
  躲起來</pre>這樣保留了一般行為樹的可預測與好檢查，又把效用的想法寫進條件裡。換句話說，Utility BT 也可以當成一種<b>設計思路</b>：先想「什麼時候哪個備案比較有用」，再把答案寫成條件。` },
      { h: "取捨", b: `<ul>
        <li><b>優點</b>：順序可隨狀況調整，不必為每種狀況各寫一棵樹。</li>
        <li><b>代價</b>：效用數字要設計、要校準；排序隨時在變，比較難預測與除錯；若效用估計抖動，可能在兩個備案之間來回切換。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 12（Utility BT）：<a href="https://www.youtube.com/watch?v=ju4GY1gtP8s" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》，Utility BTs 與 Stochastic BTs 段落：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>M. Iovino 等，“A Survey of Behavior Trees in Robotics and AI”（含 Utility BT 的整理）：<a href="https://arxiv.org/abs/2005.05842" target="_blank" rel="noopener">arXiv:2005.05842 ↗</a></li>
        <li>B. Merrill，“Building Utility Decisions into Your Existing Behavior Tree”，收錄於 <i>Game AI Pro</i>（2014）。</li></ul>` }
    ],
    quiz: [
      { q: "一般 Fallback 被批評的主要限制是什麼？",
        o: ["不能放條件節點", "子節點的優先順序在設計時寫死", "不能回報執行中", "只能有兩個子節點"], a: 1,
        w: "最佳順序常取決於當下狀況，寫死的順序無法跟著調整。" },
      { q: "Utility Fallback 每一輪做的第一件事是？",
        o: ["隨機挑一個子節點", "tick 最左邊的子節點", "取得所有子節點的效用並由高到低排序", "等所有子節點都回報成功"], a: 2,
        w: "排好序之後，才照一般 Fallback 的規則一個一個試。" },
      { q: "Utility Fallback 排好序後，第一個子節點回報執行中。接下來會怎樣？",
        o: ["停下並往上回報執行中", "繼續 tick 第二個子節點", "重新排序後再試一次", "回報失敗"], a: 0,
        w: "排序之後的行為和一般 Fallback 一樣：成功或執行中就停下。" },
      { q: "為什麼效用常正規化到 0～1？",
        o: ["為了讓樹執行比較快", "為了讓不同備案的效用可以互相比較", "因為效用就是機率", "因為 KaTeX 只能顯示小數"], a: 1,
        w: "不同動作的評分方式不同，放到同一個尺度上才能排序。" },
      { q: "Merrill 建議 Sequence 與 Fallback 都用 max 合成效用。對 Sequence 而言，主要問題是？",
        o: ["會低估 Sequence 的效用", "計算太慢", "Sequence 不能有效用", "會高估：前面的步驟可能失敗，後面高效用的步驟根本輪不到"], a: 3,
        w: "例如開門只有 0.3 的成功率，取 max 卻直接用進屋的 0.9。" },
      { q: "把效用解讀成預期報酬時，Utility BT 最接近哪一個概念？",
        o: ["強化學習的最大化報酬", "有限狀態機的轉移", "遺傳演算法的突變", "控制屏障函數的不變集"], a: 0,
        w: "每一輪挑預期報酬最高的選擇，正是強化學習的核心想法。" },
      { q: "A（成功率 0.6、報酬 10）與 B（成功率 0.9、報酬 8）。Fallback 先試哪一個期望報酬較高？",
        o: ["先試 B，因為成功率較高", "先試 A", "兩者一樣", "無法比較"], a: 1,
        w: "先 A：$6 + 2.88 = 8.88$；先 B：$7.2 + 0.6 = 7.8$。成功率高不一定該排第一。" },
      { q: "「Utility BT 可以當成設計原則」是什麼意思？",
        o: ["所有行為樹都必須使用效用", "效用只能在遊戲裡使用", "常可用條件節點表達「哪個比較有用」，把 Utility BT 改寫成一般行為樹", "效用取代了所有條件"], a: 2,
        w: "先想清楚什麼時候哪個備案比較有用，再寫成條件，保留一般行為樹可預測、好檢查的優點。" }
    ],
    next: "EP12：既然效用和強化學習這麼接近，能不能把行為樹的一部分直接換成強化學習的策略？又要怎麼保住模組化、安全與收斂保證？"
},
  // ---------------------------------------------------------- EP12
{
    no: 12, id: "u12", phase: 4, tier: "Tier 4｜學習、效用與可解釋",
    title: "行為樹與強化學習：模組化、安全與收斂保證",
    hook: "強化學習學出來的控制器又快又順，但沒人敢保證它不出事。能不能只借用它的好處，把保證留在行為樹裡？",
    tags: "強化學習、RL 葉子、資料驅動控制器、模型式控制器、安全控制器、operating region、ACC、收斂保證、模組化",
    status: "planned", estDur: "約 13 分", segWord: "小節",
    src: [
      { label: "BT intro part 14", id: "y-0fXTmg9fk" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "強化學習好在哪、怕在哪" },
      { t: 140, title: "只把一片葉子換成 RL" },
      { t: 240, title: "安全優先：三層保護的子樹" },
      { t: 360, title: "收斂：控制器之間不要互相拆台" },
      { t: 480, title: "從證明裡拿出獎勵" },
      { t: 590, title: "研究前線：交界處的價值與進度約束" },
      { t: 700, title: "總結" }
    ],
    formula: R`T_0 \;=\; \text{Seq}\Big[\; T_{\text{safe}},\;\; \text{Fal}\big[\, c_{\text{成本太高}},\; T_{\text{RL}} \,\big],\;\; T_{\text{MB}} \;\Big]`,
    pre: [
      { q: "一個強化學習（RL）控制器在模擬裡 95% 的時候表現比手寫控制器好，但偶爾會做出奇怪又危險的動作。你敢直接把它裝到真的機器人上嗎？你會希望多一層什麼？",
        a: "不敢直接裝。RL 學到的是「平均起來表現好」，很少能保證<b>每一種情況</b>都安全、都會到達目標。我們希望外面多一層有保證的結構：危險時有人接手、拖太久時有可靠的備案。行為樹的模組化剛好可以提供這一層。" },
      { q: "機器人的任務是「拿到杯子，而且把杯子放到桌上」。用一個大 RL 學完整個任務，和只用 RL 學「抓杯子」這一個動作，哪一個比較好訓練？為什麼？",
        a: "只學一個動作比較好訓練。整個任務的獎勵很稀疏（做完整串才拿到分數）、要探索的狀態也大得多；把任務交給行為樹拆好，RL 只負責一片葉子，問題變小、獎勵清楚，其他部分（例如「已經拿著就不用抓」）照樣由樹處理。" },
      { q: "RL 控制器的任務是「把杯子放到桌上」，它學會了一個很快的動作：把杯子用丟的。從行為樹的角度看，這有什麼問題？",
        a: "它破壞了前面已經達成的條件（「杯子在手上、杯子完好」）。在 Backward Chaining 的樹裡，前面的條件一失效，樹就得回頭重做，甚至在兩個子樹之間來回。所以訓練 RL 時不只要它達成自己的目標，還要<b>不准破壞前面已達成的條件</b>。" }
    ],
    terms: [
      { zh: "強化學習", en: "Reinforcement Learning (RL)", m: "", d: "讓代理人反覆嘗試、依獎勵調整策略的學習方法；表現常常很好，但很少附帶保證。" },
      { zh: "策略", en: "Policy", m: R`\pi(a \mid x)`, d: "RL 學出來的「看到狀態 x 就做動作 a」的規則；在行為樹裡可以當成一片動作葉子。" },
      { zh: "資料驅動控制器", en: "Data-driven controller", m: R`u_{\text{DD}}`, d: "由 RL 或示範學習得到的控制器：效率可能較高，但沒有形式化保證。" },
      { zh: "模型式控制器", en: "Model-based controller", m: R`u_{\text{MB}}`, d: "依系統模型手工設計、可以證明會收斂到目標的控制器；通常較保守、較慢。" },
      { zh: "安全控制器", en: "Safety controller", m: R`u_{\text{S}}`, d: "狀態接近危險區時接手、把系統拉回安全範圍的控制器，在子樹裡優先權最高。" },
      { zh: "累積成本", en: "Running cost", m: R`L(x,u)`, d: "例如已經花掉的時間；累積太多就判定學來的控制器靠不住，改交給模型式控制器。" },
      { zh: "操作區域", en: "Operating region", m: R`\Omega_i`, d: "狀態空間中「整棵樹會執行第 i 個葉子」的那一塊；用它分析安全與收斂（EP8）。" },
      { zh: "收斂保證", en: "Convergence guarantee", m: "", d: "從允許的起始狀態出發，系統一定會在有限時間內進入目標區域。" },
      { zh: "主動約束條件", en: "Active Constraint Condition (ACC)", m: "", d: "Backward Chaining 的樹裡，某個動作執行時必須維持住、先前已達成的條件；被破壞就得回頭重做。" },
      { zh: "稀疏獎勵", en: "Sparse reward", m: "", d: "只有在任務最後才拿到分數；長任務很難學。行為樹把任務拆小，讓每個 RL 子問題都有近一點的目標。" },
      { zh: "價值函數", en: "Value function", m: R`V(x)`, d: "從狀態 x 出發、照策略做下去預期能拿到的總回報；可以在子樹交界處告訴前一個控制器「下一棒喜歡從哪裡接手」。" }
    ],
    practice: {
      intro: "用數字感受「把 RL 放進行為樹」帶來的好處與代價。所有數字都是教學用的玩具設定，不是論文的實驗數據；機率題假設各事件互相獨立。",
      items: [
        { q: "機器人有 3 個子系統，各有 10 種狀態。用一個大 RL 學整個任務，要面對 3 個子系統的所有組合；用行為樹拆成 3 個 RL 葉子，每個只看自己的 10 種狀態，合計 30 種。大 RL 要面對的狀態數是拆開後的幾倍？",
          a: 33.33, tol: 0.01, hint: "組合數是 $10^3 = 1000$，拆開後是 $3 \\times 10 = 30$，相除：$1000 / 30$。" },
        { q: "Fallback 先試 RL 控制器、失敗再交給模型式控制器。RL 有 0.85 的機率 8 秒內完成；另外 0.15 的機率會在第 3 秒被判定「成本太高」，改由模型式控制器重新花 20 秒完成。平均完成時間是幾秒？（只用模型式控制器要 20 秒）",
          a: 10.25, tol: 0.005, hint: "期望值：$0.85 \\times 8 + 0.15 \\times (3 + 20)$。" },
        { q: "某個 RL 策略每一步有 0.001 的機率做出違反安全限制的動作。在沒有安全控制器把關的情況下連續跑 1000 步，至少違反一次的機率是多少？",
          a: 0.6323, tol: 0.005, hint: "一次都沒違反的機率是 $0.999^{1000}$，答案是 $1 - 0.999^{1000}$。數字很小的機率，乘上很多步就不小了。" },
        { q: "先花 10 秒達成子目標 A，再用 RL 控制器做子目標 B。每次嘗試 B 都花 15 秒；成功機率 0.6，另外 0.4 的機率會破壞 A，得再花 10 秒把 A 修好再重試 B。完成兩個子目標的平均時間是幾秒？",
          a: 41.67, tol: 0.01, hint: "B 的嘗試次數平均 $1/0.6$ 次，其中失敗 $1/0.6 - 1$ 次：$10 + 15/0.6 + 10 \\times (1/0.6 - 1)$。若訓練時禁止破壞 A，就算 B 慢到 18 秒也只要 28 秒。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "不要把整個任務交給 RL，而是<b>只把行為樹的一片葉子換成 RL</b>；安全與收斂的保證由樹的結構和有保證的備案控制器負責，RL 只負責「做得更好」。" },
      { h: "兩邊各有所長", b: `<ul>
        <li><b>RL</b>：能學出又快又順的動作，不必手寫每個細節；但很少能保證每一種情況都安全、都會到達目標，而且長任務的獎勵稀疏、很難學。</li>
        <li><b>行為樹</b>：模組化、看得懂，搭配 EP8 的 operating region 可以分析安全與收斂；但每個動作都要人設計，未必最有效率。</li>
        <li>結合方式：樹負責「何時做什麼」，RL 負責「這個動作怎麼做得好」。</li></ul>` },
      { h: "三層保護的子樹", b: `Sprague 與 Ögren 的做法：把原本的模型式控制器換成一棵小子樹（見本集核心式）。
        <ul><li><b>第一個子節點：安全控制器</b>。狀態安全時回報成功；接近危險時接手（例如離懸崖邊太近就先退開）。</li>
        <li><b>第二個子節點：Fallback（成本太高？，RL 控制器）</b>。只要累積成本還合理，就讓 RL 去做；成本太高代表 RL 可能做不完，條件成立，往右交棒。</li>
        <li><b>第三個子節點：模型式控制器</b>。有保證的老方法，最後一定把系統帶到目標。</li></ul>
        論文的重點是找出明確的條件：在什麼情況下，這樣切換不會讓子樹互相拆台，整體仍保證安全並收斂。範例是倒單擺擺上來的控制問題。` },
      { h: "為什麼不怕 RL 亂來", b: "RL 只在「安全、而且還在預算內」的那塊狀態空間裡被執行；一越界，下一次 tick 就換成安全控制器或模型式控制器。RL 自己不需要附帶任何保證，保證來自<b>外面的樹與備案</b>。這和 EP9 的控制屏障函數是同一種精神：把不能違反的部分交給有證明的機制。" },
      { h: "控制器之間不要互相拆台", b: "Backward Chaining 的樹裡，每個動作執行時都有一些先前已達成、必須維持住的條件（主動約束條件，ACC）。如果 RL 只被訓練成「達成自己的目標」，它可能為了快一點把 ACC 弄壞——像把杯子用丟的——樹就得回頭修好舊目標，甚至來回打轉。這正是 EP6 談的那類 bug。" },
      { h: "從收斂證明裡拿出 RL 的問題設定", b: `Kartašev、Saler 與 Ögren（IROS 2023）的關鍵想法：Backward Chaining 的收斂證明本來就列出了每個控制器該滿足的局部條件——達成自己的後置條件、而且不破壞 ACC。把這些條件直接拿來設定每個 RL 子問題：
        <ul><li>到達自己的目標：給獎勵。</li>
        <li>破壞 ACC：當成要避免的事。</li></ul>
        改善幅度取決於原本 ACC 被破壞得多頻繁，以及每次重做舊目標要花多少力氣。` },
      { h: "研究前線", b: `<ul>
        <li><b>交界處的價值函數</b>（Kartašev &amp; Ögren，arXiv 預印本）：每個子控制器各自最佳，接起來未必最佳。用下一個控制器的價值函數估計，告訴前一個控制器「交棒時把狀態送到哪裡最好」；在一些假設下，整體可以達到全域最佳。</li>
        <li><b>進度約束</b>（Rietz、Kartašev、Ögren、Stork，2026 年 arXiv 預印本）：用可行性估計器限制 RL 能選的動作，避免一個控制器抵銷另一個控制器的進度，並把收斂分析推廣到不只 Backward Chaining 的樹；在 2D 範例與倉儲模擬中測試。</li></ul>
        以上兩篇在撰寫時仍是預印本，結論以正式發表版本為準。` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 14：<a href="https://www.youtube.com/watch?v=y-0fXTmg9fk" target="_blank" rel="noopener">youtube.com/watch?v=y-0fXTmg9fk ↗</a></li>
        <li>C. I. Sprague &amp; P. Ögren，“Adding Neural Network Controllers to Behavior Trees without Destroying Performance Guarantees”，CDC 2022：<a href="https://arxiv.org/abs/1809.10283" target="_blank" rel="noopener">arXiv:1809.10283 ↗</a></li>
        <li>M. Kartašev, J. Saler, P. Ögren，“Improving the Performance of Backward Chained Behavior Trees that use Reinforcement Learning”，IROS 2023：<a href="https://arxiv.org/abs/2112.13744" target="_blank" rel="noopener">arXiv:2112.13744 ↗</a></li>
        <li>M. Kartašev &amp; P. Ögren，價值函數於交界處的預印本：<a href="https://arxiv.org/abs/2305.18903" target="_blank" rel="noopener">arXiv:2305.18903 ↗</a>；F. Rietz 等，“Progress Constraints for Reinforcement Learning in Behavior Trees”：<a href="https://arxiv.org/abs/2602.06525" target="_blank" rel="noopener">arXiv:2602.06525 ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI》，學習相關段落：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "把 RL 和行為樹結合時，本集推薦的分工是？",
        o: ["用一個大 RL 取代整棵行為樹", "只把一片動作葉子換成 RL，安全與收斂交給樹的結構與備案控制器", "讓 RL 決定每一輪要 tick 哪個子樹", "先用 RL 訓練，再把行為樹刪掉"], a: 1,
        w: "RL 只負責把一個動作做得更好；保證來自外面的樹與有保證的控制器。" },
      { q: "在 Sprague 與 Ögren 的子樹裡，哪一個控制器的優先權最高（最先被檢查）？",
        o: ["RL 控制器", "模型式控制器", "安全控制器", "累積成本條件"], a: 2,
        w: "子樹是 Sequence，最左邊的安全控制器最先處理；狀態安全它才回報成功，讓後面的部分執行。" },
      { q: "「成本太高？」這個條件成立時，接下來會執行什麼？",
        o: ["RL 控制器繼續做", "整棵樹回報失敗", "安全控制器", "模型式控制器"], a: 3,
        w: "條件成立使 Fallback 回報成功、不再 tick RL，Sequence 往右交給有保證的模型式控制器。" },
      { q: "為什麼這個設計不需要 RL 控制器自己附帶保證？",
        o: ["RL 訓練夠久就一定安全", "RL 只在安全、成本仍合理的狀態下執行，越界時下一輪就被換手", "行為樹會自動重新訓練 RL", "模型式控制器會修改 RL 的權重"], a: 1,
        w: "每次 tick 都重新檢查；RL 一離開它被允許的區域，就換成安全或模型式控制器。" },
      { q: "主動約束條件（ACC）是什麼？",
        o: ["某個動作執行時必須維持住、先前已達成的條件", "RL 的學習率上限", "安全控制器的啟動門檻", "每秒 tick 的次數"], a: 0,
        w: "例如「杯子在手上」；RL 為了快而破壞它，樹就得回頭重做舊目標。" },
      { q: "Kartašev、Saler 與 Ögren 怎麼設定每個 RL 子問題？",
        o: ["隨機給獎勵，讓 RL 自己探索", "只要求越快越好", "要求 RL 模仿模型式控制器", "直接用收斂證明裡的局部條件：達成自己的目標，而且不破壞 ACC"], a: 3,
        w: "收斂證明本來就列出每個控制器該滿足的條件，把它們當成 RL 的目標與要避免的事。" },
      { q: "每個子控制器各自都學到最佳，接起來的整體控制器一定最佳嗎？",
        o: ["一定，最佳加最佳還是最佳", "一定，因為行為樹會自動最佳化", "不一定；前一個控制器不知道下一個喜歡從哪裡接手，可用交界處的價值函數補上", "不一定，所以應該放棄行為樹"], a: 2,
        w: "這正是交界處價值函數研究的出發點：把下一棒的需求告訴前一棒。" },
      { q: "某 RL 策略每步出錯機率只有千分之一。為什麼還是需要安全控制器？",
        o: ["跑一千步下來，至少出錯一次的機率超過六成", "千分之一已經是零", "安全控制器能讓 RL 學得更快", "因為 RL 每一步都會出錯"], a: 0,
        w: "$1 - 0.999^{1000} \\approx 0.63$；很小的機率乘上很多步就不小了。" }
    ],
    next: "EP13：機器人做了一件奇怪的事，它能不能告訴你「為什麼」？替子樹取好名字，行為樹就能用人聽得懂的話解釋自己。"
},
  // ---------------------------------------------------------- EP13
{
    no: 13, id: "u13", phase: 4, tier: "Tier 4｜學習、效用與可解釋",
    title: "可解釋 AI：為什麼要替子樹命名",
    hook: "機器人突然停下來去開門。你問它「為什麼？」——它能不能用一句人聽得懂的話回答你？",
    tags: "可解釋 AI、XAI、人機協作、子樹命名、階層、祖先節點、對比式解釋、選擇性解釋、因果模型",
    status: "planned", estDur: "約 13 分", segWord: "小節",
    src: [
      { label: "BT intro part 11", id: "NABFGQmA5ao" },
      { label: "研討會：Maximilian Diehl", id: "BqXmOIFTE9c" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "為什麼需要可解釋 AI" },
      { t: 140, title: "人機協作的要求" },
      { t: 230, title: "替子樹取名字" },
      { t: 340, title: "順著祖先往上讀：為了什麼" },
      { t: 450, title: "好解釋的三個特質" },
      { t: 560, title: "失敗了，差在哪裡" },
      { t: 680, title: "總結" }
    ],
    formula: R`\text{為什麼做 } a \;=\; \big(\, \ell(p_1(a)),\; \ell(p_2(a)),\; \dots,\; \ell(\text{root}) \,\big)`,
    pre: [
      { q: "你的同事是一台機器人。它正在倒退，你問它「你在幹嘛？」它回答：「節點 47 回報 RUNNING。」這個回答有什麼問題？你希望它怎麼說？",
        a: "答案是對的，但對人沒有用：人不知道節點 47 是什麼、為什麼要做。比較好的回答是用<b>目的</b>說話，例如「我在退開，為了讓出門口，因為要去充電」。行為樹只要替子樹取好名字，就能把這串「為了什麼」讀出來。" },
      { q: "行為樹和神經網路都能控制機器人。哪一個比較容易回答「你為什麼現在做這件事」？為什麼？",
        a: "<b>行為樹</b>。它的結構是看得見的：正在執行的葉子在哪一棵子樹裡、上面的條件哪些成立、哪些失敗，都可以直接讀出來。神經網路的決定分散在大量權重裡，沒有現成的「理由」可以讀。" },
      { q: "機器人疊方塊，上面那塊掉下來了。下列哪一種解釋最有幫助？(1) 列出當時所有感測器的數值；(2)「因為物理」；(3)「上面那塊放得太高、太偏右了」。",
        a: "<b>(3)</b>。好的解釋是<b>對比式</b>（和「會成功的情況」比，差在哪）、<b>選擇性</b>（只挑最關鍵的一兩個原因），而且用人懂的概念（高、偏右），不是原始數值。" }
    ],
    terms: [
      { zh: "可解釋 AI", en: "Explainable AI (XAI)", m: "", d: "讓人能理解 AI 為什麼做出某個決定的方法與研究領域。" },
      { zh: "人機協作", en: "Human-autonomy teaming", m: "", d: "人與自主系統一起完成任務；人要能理解、預測並信任系統在做什麼。" },
      { zh: "白箱模型", en: "White-box model", m: "", d: "內部結構人看得懂的模型；行為樹屬於這一類，神經網路則常被當成黑箱。" },
      { zh: "子樹命名", en: "Subtree labeling", m: R`\ell(\cdot)`, d: "替每棵子樹取一個說明「目的」的名字，例如「保持溫暖」「把門打開」。" },
      { zh: "祖先節點", en: "Ancestor nodes", m: R`p_k(a)`, d: "從執行中的葉子一路往上到根的那些節點；它們的名字串起來就是「為了什麼」。" },
      { zh: "階層", en: "Hierarchy", m: "", d: "大目標包含小目標、小目標包含動作；越往上越抽象，解釋時可以挑合適的層級。" },
      { zh: "目標／子目標／步驟／動作", en: "Goal / subgoal / step / action", m: "", d: "Han 等人把行為樹節點歸成這幾類語意集合，用來產生解釋。" },
      { zh: "對比式解釋", en: "Contrastive explanation", m: "", d: "回答「為什麼是這樣，而不是那樣」：指出和另一個情況差在哪裡。" },
      { zh: "選擇性解釋", en: "Selective explanation", m: "", d: "從許多原因中只挑最關鍵的一兩個，而不是全部列出。" },
      { zh: "因果模型", en: "Causal model", m: "", d: "描述「哪些因素會影響結果」的模型；可以拿來找出失敗的原因。" },
      { zh: "因果貝氏網路", en: "Causal Bayesian network", m: "", d: "用有向圖加機率表示因果關係；Diehl 等人從模擬資料學出它，用來解釋機器人為什麼失敗。" }
    ],
    practice: {
      intro: "練習用行為樹的結構產生解釋，並感受「挑重點」為什麼重要。樹的形狀與數值都是教學用的例子。",
      items: [
        { q: "根節點「完成今天的任務」底下有子樹「保持溫暖」，再往下是「進屋」，再往下是「門開著」，最底下的葉子是動作「用鑰匙開門」。每個非葉節點都有名字。從這個動作往上讀到根，可以接出幾層「為了……」？",
          a: 4, tol: 0, hint: "數祖先節點：門開著、進屋、保持溫暖、完成今天的任務。" },
        { q: "一棵樹每個內部節點都有 3 個子節點，從根往下共 4 層分支（根在第 0 層，葉子在第 4 層）。整棵樹共有幾個節點？",
          a: 121, tol: 0, hint: "$1 + 3 + 9 + 27 + 81$。葉子有 $3^4 = 81$ 個，但任一個葉子的解釋只需要 4 個祖先的名字。" },
        { q: "Fallback 有 5 個備案，由左到右依序嘗試；這一輪正在執行第 4 個。若有人問「為什麼不用前面的方法？」，你需要指出幾個失敗的條件或子樹？",
          a: 3, tol: 0, hint: "Fallback 只有在左邊的選項失敗時才往右，所以第 1–3 個都失敗了。這就是對比式解釋的材料。" },
        { q: "疊方塊失敗時，上方方塊放在高 12 公分、偏右 3 公分。模擬學到：高度不超過 5 公分、偏移不超過 1 公分才會成功。每一步只能把其中一個量調整 1 公分，最少要幾步才會進入成功區域？",
          a: 9, tol: 0, hint: "像逐層搜尋最近的成功狀態：高度要降 $12 - 5 = 7$，偏移要減 $3 - 1 = 2$，合計 $7 + 2$。解釋就是「太高、太偏右」。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "行為樹本身就有階層；<b>替每棵子樹取一個說明目的的名字</b>，從正在執行的動作往上讀祖先的名字，就得到一串「為了……」的解釋。" },
      { h: "為什麼要可解釋", b: `<ul>
        <li>人要和機器人一起工作，就得知道它在做什麼、接下來會做什麼，才敢信任、才知道何時該介入。</li>
        <li>影片提到美國空軍為人機協作訂下的準則，並逐一檢視行為樹怎麼滿足它們；大方向是：自主系統的意圖要讓人看得懂、預測得到。</li>
        <li>行為樹是白箱：哪個節點在執行、哪個條件失敗，都直接讀得出來。</li></ul>` },
      { h: "名字要說「目的」", b: `同樣一棵子樹，名字可以取成「Sequence_3」，也可以取成「保持溫暖」。後者讓人一看就知道它為什麼存在。
        <ul><li>EP2 的 PPA 本來就是以目標命名：「門開著」「不冷」——Backward Chaining 長出的樹天生適合解釋。</li>
        <li>EP1 講的模組化與階層，在這裡變成解釋的骨架：可以拉遠說大目標，也可以拉近說細節。</li></ul>` },
      { h: "順著祖先往上讀", b: `正在執行「用鑰匙開門」，往上讀：
        <ul><li>為了「門開著」</li><li>為了「進屋」</li><li>為了「保持溫暖」</li><li>為了「完成今天的任務」</li></ul>
        聽的人不一定要全部：急著知道的人只要最近一層，主管只要最上面一層。Han 等人（2021）就是用正在執行節點的祖先標籤來產生解釋。` },
      { h: "Han 等人的做法", b: "他們把行為樹節點整理成目標、子目標、步驟、動作幾類語意集合，再寫演算法回答關於機器人行為的因果問題（例如「你為什麼這樣做」）；在組裝齒輪箱的備料任務與計程車模擬兩個情境中測試，程式碼與行為樹 XML 都公開在 GitHub。" },
      { h: "好解釋的三個特質", b: `Maximilian Diehl 的演講整理了有效解釋的特質：
        <ul><li><b>對比式</b>：說明「為什麼是這樣、而不是那樣」。在 Fallback 裡，「為什麼不用前面的方法」的答案就是左邊那些失敗的條件。</li>
        <li><b>選擇性</b>：只挑最關鍵的原因，不要把所有感測器數值倒給人。</li>
        <li><b>用人懂的抽象層級</b>：說「太高、太偏右」，不說「z = 0.12」。</li></ul>` },
      { h: "失敗了，差在哪裡", b: "Diehl 與 Ramirez-Amaro（RA-L 2022）：先從模擬的執行結果學出因果貝氏網路，失敗時用逐層搜尋找出<b>離現在最近、而且模型預測會成功</b>的狀態，再把兩者的差別說出來，例如「上面那塊方塊放得太高、太偏右」。他們在疊方塊、把球丟進容器兩個任務上測試，並把模擬學到的因果模型直接用在真實機器人上。這種解釋除了說明原因，也直接告訴人怎麼修。" },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 11：<a href="https://www.youtube.com/watch?v=NABFGQmA5ao" target="_blank" rel="noopener">youtube.com/watch?v=NABFGQmA5ao ↗</a></li>
        <li>研討會演講：Maximilian Diehl，機器人在人類環境中的可解釋決策：<a href="https://www.youtube.com/watch?v=BqXmOIFTE9c" target="_blank" rel="noopener">youtube.com/watch?v=BqXmOIFTE9c ↗</a></li>
        <li>Z. Han 等，“Building the Foundation of Robot Explanation Generation Using Behavior Trees”，ACM THRI 2021：<a href="https://doi.org/10.1145/3457185" target="_blank" rel="noopener">doi:10.1145/3457185 ↗</a></li>
        <li>M. Diehl &amp; K. Ramirez-Amaro，“Why Did I Fail? A Causal-Based Method to Find Explanations for Robot Failures”，RA-L 2022：<a href="https://arxiv.org/abs/2204.04483" target="_blank" rel="noopener">arXiv:2204.04483 ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "為什麼行為樹比神經網路更容易回答「你為什麼這樣做」？",
        o: ["行為樹執行得比較快", "行為樹的結構看得見，執行中的節點與條件狀態都讀得出來", "行為樹不會犯錯", "神經網路不能控制機器人"], a: 1,
        w: "行為樹是白箱，理由就寫在結構裡；神經網路的決定分散在大量權重中。" },
      { q: "替子樹取名字時，下列哪一個名字最有助於解釋？",
        o: ["Sequence_3", "節點 47", "Fallback（左）", "保持溫暖"], a: 3,
        w: "名字要說出子樹的目的，人才聽得懂它為什麼存在。" },
      { q: "機器人正在執行「用鑰匙開門」，要產生「為了什麼」的解釋，應該讀哪些節點的名字？",
        o: ["它的祖先節點，從父節點一路往上到根", "它右邊的兄弟節點", "整棵樹的所有葉子", "上一輪執行過的動作"], a: 0,
        w: "祖先名字串起來就是「為了門開著，為了進屋，為了保持溫暖……」。" },
      { q: "Fallback 正在執行第 4 個備案。有人問「為什麼不用第 1 個方法？」，最好的回答依據是？",
        o: ["第 4 個方法比較快", "第 1 個方法的條件或子樹在這一輪失敗了", "Fallback 會隨機挑選", "第 1 個方法沒有名字"], a: 1,
        w: "Fallback 只有左邊失敗才往右走，這就是對比式解釋的材料。" },
      { q: "「選擇性解釋」指的是？",
        o: ["讓使用者選擇要不要聽解釋", "把所有原因都列出來", "只挑最關鍵的一兩個原因", "只解釋成功的情況"], a: 2,
        w: "人一次能吸收的原因有限，好解釋只講最重要的。" },
      { q: "Diehl 與 Ramirez-Amaro 的失敗解釋方法，核心做法是？",
        o: ["請操作員手動寫下原因", "從因果模型出發，找出離失敗狀態最近、模型預測會成功的狀態，說明兩者差別", "重播整段影片給使用者看", "列出所有感測器數值"], a: 1,
        w: "這是對比式、選擇性的解釋，例如「放得太高、太偏右」，也順便告訴人怎麼修。" },
      { q: "Han 等人（2021）把行為樹節點整理成哪幾類語意集合，用來產生解釋？",
        o: ["感測、規劃、控制", "成功、失敗、執行中", "目標、子目標、步驟、動作", "條件、裝飾器、平行節點"], a: 2,
        w: "有了這層語意，演算法才能挑合適的層級回答「為什麼」。" },
      { q: "為什麼說 Backward Chaining 長出來的樹（EP2）天生適合解釋？",
        o: ["每塊 PPA 都以目標條件命名，祖先就是一串目標", "它的節點比較少", "它不需要 tick", "它只有 Sequence 節點"], a: 0,
        w: "PPA 以「門開著」「不冷」這類目標為核心，往上讀就是一串「為了……」。" }
    ],
    next: "EP14：樹的最上層該放哪些目標、誰排前面？借用 Maslow 的需求層次、Rosenberg 的感受與需要，以及 Asimov 的機器人三定律來想。"
},
  // ---------------------------------------------------------- EP14
{
    no: 14, id: "u14", phase: 4, tier: "Tier 4｜學習、效用與可解釋",
    title: "頂層目標怎麼選：Maslow、Rosenberg 與 Asimov",
    hook: "行為樹最上面那一排目標，是整台機器人的「人生優先順序」。這一排該放什麼？誰排前面？",
    tags: "頂層目標、需求、感受、注意力、Maslow 需求層次、Rosenberg、Asimov 三定律、優先順序、目標取捨",
    status: "planned", estDur: "約 11 分", segWord: "小節",
    src: [
      { label: "BT intro part 13", id: "z7L6DMAwTRA" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 45, title: "樹頂那一排是什麼" },
      { t: 120, title: "人有需要，感受負責喊人" },
      { t: 220, title: "Maslow：把需要排成金字塔" },
      { t: 320, title: "Rosenberg：感受指向需要" },
      { t: 410, title: "Asimov：機器人的三條最高目標" },
      { t: 520, title: "優先順序撞在一起時" },
      { t: 610, title: "總結" }
    ],
    formula: R`T_{\text{root}} \;=\; \rightarrow\!\big(\,\text{PPA}(G_1),\; \text{PPA}(G_2),\; \dots,\; \text{PPA}(G_n)\,\big), \qquad G_1 \succ G_2 \succ \cdots \succ G_n`,
    pre: [
      { q: "幫一台掃地機器人列出 3 到 5 個「永遠都要顧到」的目標，並排出先後。你是根據什麼排的？",
        a: "例如：<b>不傷到人與寵物</b> ＞ <b>不摔下樓梯</b> ＞ <b>電量足夠</b> ＞ <b>不過熱</b> ＞ <b>把地掃乾淨</b>。排序依據是「沒顧好的後果有多嚴重、能不能挽回」。在行為樹裡，這一排就是根節點下面由左到右的頂層目標，越左邊越優先。" },
      { q: "肚子餓的時候，你不是隨時都在想「我需要食物」，而是某個時刻「感覺到餓」才去找東西吃。這個「感覺」在決策上扮演什麼角色？",
        a: "它是一個<b>喚起注意力</b>的訊號：需要沒被滿足時，感受出現，把注意力拉到這個需要上。對應到行為樹，就像頂層目標的條件節點——平常成功、不佔資源；一失敗，樹就去處理它。" },
      { q: "Asimov 的機器人三定律大意是：不可傷害人類；服從人類命令，除非違反第一條；保護自己，除非違反前兩條。這三條如果放進行為樹，應該怎麼排？",
        a: "照優先順序由左到右：<b>不傷害人類</b>、<b>服從命令</b>、<b>保護自己</b>。但光排順序還不夠：右邊的動作可能破壞左邊已經滿足的目標（例如為了服從命令去做危險的事），所以要搭配 EP6 的設計條件或 EP9 的控制屏障函數，確保低優先的動作不會破壞高優先的目標。" }
    ],
    terms: [
      { zh: "頂層目標", en: "Top-level goal", m: R`G_i`, d: "行為樹根節點正下方、代理人永遠要顧到的目標；它們的排列就是整體的優先順序。" },
      { zh: "需要", en: "Need", m: "", d: "人或代理人必須維持的狀態，例如食物、安全、休息；對應到機器人可以是電量、溫度、安全。" },
      { zh: "感受", en: "Feeling", m: "", d: "需要沒被滿足（或被滿足）時出現的訊號，負責把注意力拉到那個需要上。" },
      { zh: "注意力", en: "Attention", m: "", d: "有限的處理資源該花在哪個需要上；感受決定此刻要處理誰。" },
      { zh: "需求層次", en: "Maslow's hierarchy of needs", m: "", d: "Maslow 把人的需要排成金字塔：生理、安全、愛與歸屬、尊重、自我實現，下層較基本。" },
      { zh: "感受與需要", en: "Feelings and needs (Rosenberg)", m: "", d: "Rosenberg 在《非暴力溝通》中強調：感受來自需要是否被滿足，聽懂感受就能找到背後的需要。" },
      { zh: "機器人三定律", en: "Asimov's Three Laws of Robotics", m: "", d: "Asimov 在科幻小說中提出的三條規則，可以看成機器人的頂層目標，而且已附帶優先順序。" },
      { zh: "優先順序", en: "Priority ordering", m: R`G_1 \succ G_2`, d: "目標衝突時誰讓誰；行為樹中由左到右的位置表示。" },
      { zh: "目標取捨", en: "Goal trade-off", m: "", d: "兩個目標不能同時滿足時，犧牲比較不重要的那個（EP9 的控制屏障函數就是這樣處理）。" },
      { zh: "後果嚴重度", en: "Severity", m: "", d: "某個目標沒顧好會造成多大、能不能挽回的損失；排頂層目標順序時的主要依據。" }
    ],
    practice: {
      intro: "練習把「需要」變成行為樹的頂層目標，並估算它的大小與代價。效用分數是教學用的玩具模型，不是任何論文的公式。",
      items: [
        { q: "照 Maslow 的五層需要排頂層目標時，若不看金字塔、而是要你把每兩個需要都拿來比一次誰比較重要，總共要比幾次？",
          a: 10, tol: 0, hint: "從 5 個中挑 2 個：$\\binom{5}{2} = 5 \\times 4 / 2$。金字塔一次給了你全部的答案。" },
        { q: "根節點是一個 Sequence，底下依序放 5 個頂層目標，每個目標寫成 PPA，各有 2 個動作、每個動作 1 個前置條件。整棵樹共有幾個節點？",
          a: 41, tol: 0, hint: "一塊 PPA 有 $2 + 3 \\times 2 = 8$ 個節點（EP2），5 塊再加根節點：$5 \\times 8 + 1$。" },
        { q: "用「重要性 × 感受強度」當成效用（EP11 的 Utility 想法）：安全重要性 3、強度 0.1；電量重要性 2、強度 0.7（電只剩三成）；清掃重要性 1、強度 0.9。最高的效用分數是多少？",
          a: 1.4, tol: 0.005, hint: "三個分數：$3 \\times 0.1 = 0.3$、$2 \\times 0.7 = 1.4$、$1 \\times 0.9 = 0.9$。重要性最高的不一定最先處理，要看那個需要此刻有沒有被喚起。" },
        { q: "5 個頂層目標的條件都成立時，每次 tick 都要把 5 個條件檢查一遍。tick 頻率是每秒 10 次，一分鐘總共做幾次條件檢查？",
          a: 3000, tol: 0, hint: "$10 \\times 60 \\times 5$。條件就像「感受」：平常不吵，但要一直有人看著；EP4 的信念位元向量能讓這件事很便宜。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "頂層目標就是代理人的<b>需要</b>；用<b>感受</b>（條件節點）偵測哪個需要沒被滿足、把注意力拉過去；目標由左到右的<b>位置</b>就是優先順序。" },
      { h: "樹頂那一排是什麼", b: "EP2 的 Backward Chaining 從目標長出整棵樹，但「目標從哪裡來」一直沒說。本集補上這一塊：根節點下面那一排頂層目標，決定了代理人在乎什麼、衝突時誰讓誰。這一排排錯，下面長得再漂亮也沒用。" },
      { h: "人怎麼做：需要與感受", b: `<ul>
        <li>人有許多需要：食物、溫暖、安全、休息、陪伴……</li>
        <li>每一種需要都有對應的感受（餓、冷、怕、累、孤單）。需要沒被滿足時，感受出現，把注意力拉過去。</li>
        <li>對應到行為樹：頂層目標的條件節點平常回報成功、什麼都不做；一失敗，就像感受出現，樹開始處理這個需要。</li></ul>` },
      { h: "Maslow：需要有層次", b: "Maslow（1943 年〈A Theory of Human Motivation〉）把需要排成金字塔：生理、安全、愛與歸屬、尊重、自我實現。下層的需要比較基本，通常要先顧好。放進行為樹，就是把較基本的需要放在左邊。機器人版本可以是：<b>不傷人 ＞ 自身安全 ＞ 電量 ＞ 溫度 ＞ 完成任務</b>。" },
      { h: "Rosenberg：感受指向需要", b: "Rosenberg 在《非暴力溝通》裡把重點放在感受與需要的連結：感受是需要有沒有被滿足的訊號，聽懂感受，就能找到背後的需要。對設計者的提醒是：每個頂層目標都要配一個好的「感受」——一個可靠、便宜、能及時察覺需要沒被滿足的條件。感受還有強弱，這和 EP11 的 Utility BT 依效用重排是同一個方向。" },
      { h: "Asimov：機器人的頂層目標", b: `Asimov 在 1942 年的短篇〈Runaround〉提出機器人三定律，大意：
        <ol><li>不可傷害人類，也不可坐視人類受到傷害。</li>
        <li>服從人類的命令，除非違反第一條。</li>
        <li>保護自己，除非違反前兩條。</li></ol>
        這三條本身就是一排已經排好順序的頂層目標。「除非違反……」正是在處理目標衝突。` },
      { h: "排好順序還不夠", b: `<ul>
        <li><b>低優先的動作可能破壞高優先的目標</b>：Sequence 只保證先處理左邊，不保證右邊的動作不會把左邊弄壞——這是 EP6 那類 bug。</li>
        <li><b>真的衝突時要能取捨</b>：EP9 的例子是待在 wifi 範圍內和去充電站不能兼得，演算法犧牲比較不重要的那一個。</li>
        <li><b>人也不完全照金字塔走</b>：順序是設計上的起點，實際上還要看哪個需要此刻最迫切，這也是效用想法（EP11）派得上用場的地方。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>Petter Ögren，BT intro part 13：<a href="https://www.youtube.com/watch?v=z7L6DMAwTRA" target="_blank" rel="noopener">youtube.com/watch?v=z7L6DMAwTRA ↗</a></li>
        <li>A. H. Maslow，“A Theory of Human Motivation”，Psychological Review，1943。</li>
        <li>M. B. Rosenberg，《Nonviolent Communication: A Language of Life》（中譯《非暴力溝通》）。</li>
        <li>I. Asimov，“Runaround”（1942），收錄於短篇集《I, Robot》。</li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "在本集的觀點裡，「感受」對應到行為樹的什麼角色？",
        o: ["動作節點：真正去做事", "頂層目標的條件：需要沒被滿足時把注意力拉過去", "Sequence：決定順序", "tick 頻率"], a: 1,
        w: "條件平常回報成功、不佔資源；一失敗，樹就去處理這個需要，就像感受把注意力拉過去。" },
      { q: "根節點是 Sequence(PPA(G1), PPA(G2), PPA(G3))。哪一個目標的優先權最高？",
        o: ["G3，最後執行的最重要", "三個一樣重要", "由 tick 頻率決定", "G1，最左邊最先被檢查"], a: 3,
        w: "每次 tick 從左邊開始；G1 沒顧好，右邊根本輪不到。" },
      { q: "Maslow 的需求層次放進行為樹，比較合理的做法是？",
        o: ["較基本的需要放左邊，優先處理", "自我實現放最左邊", "所有需要放進同一個 Fallback，隨便一個成功就好", "只留一個需要"], a: 0,
        w: "金字塔下層較基本，通常要先顧好，所以放在左邊。" },
      { q: "Asimov 第二定律「服從命令，除非違反第一條」，其中「除非……」在行為樹設計裡對應到什麼問題？",
        o: ["tick 頻率太低", "節點命名", "目標衝突時的優先順序與取捨", "動作執行時間太長"], a: 2,
        w: "它說明兩個目標衝突時誰讓誰，和 EP9 犧牲較不重要目標的做法同一個精神。" },
      { q: "頂層目標依優先順序排好之後，還可能出什麼問題？",
        o: ["右邊低優先的動作可能破壞左邊已滿足的高優先目標", "樹會變成決策樹", "條件節點會回報執行中", "沒有任何問題"], a: 0,
        w: "Sequence 只保證先處理左邊，不保證右邊不把左邊弄壞；要靠 EP6 的設計條件或 EP9 的控制屏障函數。" },
      { q: "Rosenberg 的觀點對機器人設計者最直接的提醒是？",
        o: ["機器人應該學會說話", "每個頂層目標都要配一個可靠、能及時察覺需要沒被滿足的「感受」條件", "不需要設定優先順序", "感受越多越好"], a: 1,
        w: "感受是需要的訊號；條件設計不好，需要沒被滿足也不會被發現。" },
      { q: "電量只剩三成，清掃工作也還沒做完。用「重要性 × 感受強度」比較時，為什麼可能先去充電？",
        o: ["充電永遠最重要", "清掃的重要性是零", "此刻電量的感受被強烈喚起，乘起來的分數最高", "隨機選擇"], a: 2,
        w: "重要性固定，強度隨情況變；這就是 EP11 Utility 想法在頂層目標上的用法。" },
      { q: "幫機器人排頂層目標順序時，最主要的依據是？",
        o: ["哪個動作最好寫", "哪個目標最常被觸發", "名字的字母順序", "沒顧好的後果多嚴重、能不能挽回"], a: 3,
        w: "傷到人不能挽回，掃地沒掃完可以明天再掃，所以前者排在左邊。" }
    ],
    next: "EP15：理論告一段落，進入工具與實戰。BehaviorTree.CPP 4.0 加了一層腳本語言與前後置條件，看看怎麼把前面學的設計寫得又短又清楚。"
},
  // ---------------------------------------------------------- EP15
{
    no: 15, id: "u15", phase: 5, tier: "Tier 5｜工具與實戰",
    title: "BehaviorTree.CPP 4.0：腳本語言與前後置條件",
    hook: "同一棵樹，能不能少寫一半的節點，又不把邏輯藏到看不見的地方？",
    tags: "BehaviorTree.CPP、Script、黑板、_skipIf、_while、_onSuccess、SKIPPED、Groot2",
    status: "planned", estDur: "約 12 分", segWord: "小節",
    src: [{ label: "研討會 #4 Davide Faconti：BehaviorTree.CPP 4.0", id: "MJckSyRTbYc" }],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "第三版的痛點：一堆小節點" },
      { t: 140, title: "黑板與 Script 節點" },
      { t: 260, title: "前置條件：_skipIf、_failureIf、_successIf" },
      { t: 380, title: "_while：唯一會一直看的條件" },
      { t: 470, title: "後置條件與錯誤碼分流" },
      { t: 580, title: "精簡的代價：圖上看不到的邏輯" },
      { t: 670, title: "總結" }
    ],
    formula: R`\text{tick}(N) = \begin{cases} \text{FAILURE} & \texttt{\_failureIf} \text{ 成立} \\ \text{SUCCESS} & \texttt{\_successIf} \text{ 成立} \\ \text{SKIPPED} & \texttt{\_skipIf} \text{ 成立} \\ N \text{ 原本的結果} & \text{其他情況} \end{cases}`,
    pre: [
      { q: "EP2 提過 <code>_successIf</code>「只在節點開始時檢查一次」。如果動作正在跑、條件中途變成立，會發生什麼事？",
        a: "什麼都不會發生：動作已經不是閒置（IDLE）狀態，<code>_successIf</code> 不會再被看一次，動作照跑到結束。前置條件是「開始前的守門員」，不是 PPA 那種每一輪從根重新檢查的條件；第四版裡只有 <code>_while</code> 在執行中也會每次檢查。" },
      { q: "你想讓「開門」只在門關著時才做，門已經開著就略過、讓 Sequence 繼續往下。用 EP1 的積木要幾個節點？有沒有更短的寫法？",
        a: "用積木要三個：<b>Fallback(門開著, 開門)</b>，門已開時條件直接成功，Sequence 照樣往下。第四版可以寫成一個節點：<code>&lt;OpenDoor _skipIf=\"!door_closed\"/&gt;</code>，條件成立時回報 <b>SKIPPED</b>，Sequence 把它當作略過、繼續 tick 下一個。" },
      { q: "機器人移動失敗時會寫出錯誤碼：1 代表路被擋住、2 代表找不到路徑。你想依錯誤碼走不同的恢復分支，會怎麼設計？",
        a: "讓移動動作在結束時把結果寫到黑板（例如 <code>_onFailure=\"error_code:=...\"</code> 或由動作本身輸出），恢復分支各自加上 <code>_skipIf=\"error_code!=1\"</code>、<code>_skipIf=\"error_code!=2\"</code>。只有對應錯誤碼的分支會真的執行，其他分支回報 SKIPPED。" }
    ],
    terms: [
      { zh: "BehaviorTree.CPP", en: "BehaviorTree.CPP (BT.CPP)", m: "", d: "C++ 行為樹函式庫，以 XML 描述樹，ROS 2 Nav2 也用它；Davide Faconti 自 2018 年起是主要維護者。" },
      { zh: "黑板", en: "Blackboard", m: "", d: "節點之間共用的鍵值儲存區；節點透過埠（port）讀寫，例如 {target}。" },
      { zh: "腳本語言", en: "Scripting language", m: "", d: "第四版加在 XML 之上的小語言，可以賦值、運算、比較與用三元運算子，直接讀寫黑板。" },
      { zh: "Script 節點", en: "Script", m: "", d: "內建動作節點，執行 code 屬性裡的腳本；取代第三版的 SetBlackboard 與 BlackboardCheck。" },
      { zh: "建立式賦值", en: ":= vs =", m: "", d: ":= 可以在黑板上新建項目；= 要求項目已存在，否則出錯，可避免打錯字悄悄新建變數。" },
      { zh: "略過狀態", en: "SKIPPED", m: "", d: "第四版新增的回傳狀態，表示前置條件讓節點沒有執行；控制節點會把它當略過，繼續處理下一個子節點。" },
      { zh: "前置條件屬性", en: "_skipIf / _failureIf / _successIf", m: "", d: "掛在任何節點上的守門條件，只在節點閒置、準備開始時檢查一次，成立就直接回報對應狀態而不執行。" },
      { zh: "持續條件", en: "_while", m: "", d: "節點閒置時條件不成立就略過；節點執行中條件變不成立就中止它並回報 SKIPPED；每次 tick 都會檢查。" },
      { zh: "後置條件屬性", en: "_onSuccess / _onFailure / _post / _onHalted", m: "", d: "節點結束後依結果執行的腳本：成功、失敗、兩者皆可、被中止時。" },
      { zh: "錯誤碼分流", en: "Error-code dispatch", m: "", d: "動作把結果寫進黑板，後面各分支用 _skipIf 只在對應錯誤碼時執行。" },
      { zh: "Groot2", en: "Groot2", m: "", d: "BT.CPP 的圖形編輯與監看工具，可以拖拉編輯並在執行時看到每個節點的狀態。" }
    ],
    practice: {
      intro: "練習計算前後置條件省下的節點數、讀懂一段腳本，以及判斷 _while 什麼時候中止動作。",
      items: [
        { q: "一個 Sequence 底下有 4 個動作，每個動作都要「條件 X 已成立就略過」。用第三版的積木，每個動作寫成 Fallback(條件, 動作)。整棵子樹共有幾個節點（含最上面的 Sequence）？",
          a: 13, tol: 0, hint: "Sequence 1 個，每個動作變成 Fallback＋條件＋動作 3 個節點：$1 + 4 \\times 3$。" },
        { q: "改用第四版：每個動作直接加 <code>_skipIf</code> 屬性。比上一題少了幾個節點？",
          a: 8, tol: 0, hint: "新寫法只剩 Sequence＋4 個動作 ＝ 5 個節點：$13 - 5$。" },
        { q: "Script 節點依序執行 <code>x := 10; x += 5; x *= 2; y := (x &gt; 25) ? x - 25 : 0</code>。y 的值是多少？",
          a: 5, tol: 0, hint: "$x = (10 + 5) \\times 2 = 30$，30 大於 25 成立，$y = 30 - 25$。" },
        { q: "<code>&lt;MoveToGoal _while=\"battery_ok\"/&gt;</code>：MoveToGoal 要 tick 10 次才會成功（前 9 次回報 RUNNING）。battery_ok 在第 6 次 tick 之前變成 false。動作會在第幾次 tick 被中止？",
          a: 6, tol: 0, hint: "_while 每次 tick 都檢查；第 6 次 tick 時條件不成立，執行中的節點被中止並回報 SKIPPED。若換成 _successIf，整段只檢查第 1 次。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "BehaviorTree.CPP 第四版用<b>腳本</b>直接讀寫黑板，用<b>前後置條件屬性</b>把「守門」和「收尾」寫在節點身上，樹變短；但除了 <code>_while</code>，前置條件只在開始時看一次，<b>不能取代 PPA 的反應式檢查</b>。" },
      { h: "為什麼要改：第三版的小節點", b: "第三版要寫一個「如果……就略過」，得拼出 Fallback＋條件＋動作；要設一個黑板值，得放一個 SetBlackboard 節點；要比較數值，得放 BlackboardCheck。邏輯本身很小，樹卻長出一大串。Faconti 在研討會中的主張是：讓意圖用更短、更直接的方式寫出來，樹才讀得懂。" },
      { h: "腳本語言速覽", b: `<ul>
        <li>賦值：<code>:=</code> 可以新建黑板項目，<code>=</code> 只能改既有項目；多個敘述用分號隔開。</li>
        <li>型別：整數、實數、單引號字串、<code>true</code>／<code>false</code>，以及從 C++ 註冊的列舉。</li>
        <li>運算：<code>+ - * /</code> 與 <code>+= -= *= /=</code>，比較 <code>== != &lt; &lt;= &gt; &gt;=</code>，邏輯 <code>&amp;&amp; || !</code>，三元 <code>cond ? a : b</code>。</li></ul>
        <pre class="mono" style="background:var(--bg);padding:12px;border-radius:8px;overflow-x:auto;font-size:13px;line-height:1.55">&lt;Script code=" battery := 80; low := battery &lt; 30 " /&gt;</pre>` },
      { h: "前置條件：開始前的守門員", b: `<ul>
        <li><code>_failureIf</code>：成立就不執行，回報 FAILURE。</li>
        <li><code>_successIf</code>：成立就不執行，回報 SUCCESS。</li>
        <li><code>_skipIf</code>：成立就不執行，回報 SKIPPED，Sequence／Fallback 直接看下一個子節點。</li>
        <li>檢查順序是 <code>_failureIf</code> → <code>_successIf</code> → <code>_skipIf</code> → <code>_while</code>，第一個成立的決定結果。</li>
        <li>這幾個都只在節點<b>閒置、準備開始</b>時看一次；動作跑起來之後就不管了。</li></ul>` },
      { h: "_while：唯一會一直看的條件", b: "節點閒置時，條件不成立就略過；節點執行中，條件一變不成立就中止它並回報 SKIPPED。它最接近 EP1 的「每一輪重新檢查」，但作用範圍只有這一個節點。需要整個子樹在條件消失時讓位，仍要靠 <code>ReactiveSequence</code>／<code>ReactiveFallback</code> 和 PPA 的結構。" },
      { h: "後置條件與錯誤碼分流", b: `<pre class="mono" style="background:var(--bg);padding:12px;border-radius:8px;overflow-x:auto;font-size:13px;line-height:1.55">&lt;Sequence&gt;
  &lt;MoveBase goal="{target}"
            _onSuccess="result := 'OK'"
            _onFailure="result := 'ERROR'"/&gt;
  &lt;Fallback&gt;
    &lt;ClearCostmap _skipIf="error_code != 1"/&gt;
    &lt;Replan       _skipIf="error_code != 2"/&gt;
  &lt;/Fallback&gt;
&lt;/Sequence&gt;</pre>以上為示意。<code>_onSuccess</code>／<code>_onFailure</code>／<code>_post</code>／<code>_onHalted</code> 分別在成功、失敗、成功或失敗、被中止時執行腳本；後面的分支依黑板上的錯誤碼只執行其中一個。` },
      { h: "精簡的代價", b: `<ul>
        <li>條件寫進屬性後，Groot2 的圖上不再有一顆獨立的條件節點；EP13 說的「看圖就能解釋」會變弱。</li>
        <li>腳本可以任意改黑板，等於在節點之間多了一條看不見的資料流；EP6 的衝突（後來的動作破壞先前的目標）更難從圖上看出來。</li>
        <li>建議：守門與收尾用屬性；決定「要不要讓位」的高優先條件，仍畫成獨立的條件節點放在 Reactive 結構最左邊。</li>
        <li>注意版本：後續版本另外加入 <code>_onlyIf</code> 與 <code>_onStart</code>，較舊版本會默默忽略未知的底線屬性。</li></ul>` },
      { h: "從第三版遷移", b: "XML 的 <code>&lt;root&gt;</code> 要加 <code>BTCPP_format=\"4\"</code>；<code>SequenceStar</code> 改名為 <code>SequenceWithMemory</code>；<code>Script</code> 取代 SetBlackboard 與 BlackboardCheck；自訂葉節點不要自己回傳 SKIPPED，那是留給前置條件與控制節點的。" },
      { h: "延伸閱讀", b: `<ul>
        <li>研討會 #4，Davide Faconti：BehaviorTree.CPP 4.0：<a href="https://www.youtube.com/watch?v=MJckSyRTbYc" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>BehaviorTree.CPP 官方文件，腳本語言：<a href="https://www.behaviortree.dev/docs/guides/scripting" target="_blank" rel="noopener">behaviortree.dev ↗</a>；前後置條件：<a href="https://www.behaviortree.dev/docs/guides/pre_post_conditions" target="_blank" rel="noopener">behaviortree.dev ↗</a>；遷移指南：<a href="https://www.behaviortree.dev/docs/migration" target="_blank" rel="noopener">behaviortree.dev ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "在 BehaviorTree.CPP 第四版的腳本裡，<code>:=</code> 和 <code>=</code> 的差別是？",
        o: ["兩者完全相同", "<code>:=</code> 可以新建黑板項目，<code>=</code> 只能改已存在的項目", "<code>=</code> 是比較，<code>:=</code> 是賦值", "<code>:=</code> 只能用在字串"], a: 1,
        w: "<code>=</code> 遇到不存在的項目會出錯，可以抓到打錯字；比較要用 <code>==</code>。" },
      { q: "Sequence 底下某個節點的 <code>_skipIf</code> 成立了。Sequence 這一輪會怎麼做？",
        o: ["整個 Sequence 回報失敗", "整個 Sequence 回報成功並結束", "停在這裡回報 RUNNING", "把它當作略過，繼續 tick 下一個子節點"], a: 3,
        w: "該節點回報 SKIPPED，控制節點把它當作略過、往下一個子節點走。" },
      { q: "動作正在執行中，<code>_successIf</code> 的條件中途變成立。會發生什麼事？",
        o: ["動作照跑，<code>_successIf</code> 不會再被檢查", "動作立刻中止，回報 SUCCESS", "動作立刻中止，回報 SKIPPED", "整棵樹重新開始"], a: 0,
        w: "<code>_failureIf</code>、<code>_successIf</code>、<code>_skipIf</code> 只在節點閒置、準備開始時檢查一次。" },
      { q: "哪一個前置條件屬性在節點執行中也會每次 tick 檢查？",
        o: ["<code>_skipIf</code>", "<code>_failureIf</code>", "<code>_while</code>", "<code>_post</code>"], a: 2,
        w: "<code>_while</code> 的條件在執行中變不成立，節點會被中止並回報 SKIPPED。<code>_post</code> 是後置條件。" },
      { q: "MoveBase 被更高優先的分支中止時，想把 <code>moving</code> 設回 false，應該用哪個屬性？",
        o: ["<code>_onSuccess</code>", "<code>_onHalted</code>", "<code>_onFailure</code>", "<code>_skipIf</code>"], a: 1,
        w: "<code>_onHalted</code> 在執行中的節點被中止時執行；被中止不算成功也不算失敗。" },
      { q: "第四版的 Script 節點主要取代了第三版的哪些節點？",
        o: ["ReactiveSequence 與 ReactiveFallback", "SubTree 與 SubTreePlus", "SequenceStar 與 Fallback", "SetBlackboard 與 BlackboardCheck"], a: 3,
        w: "設定與檢查黑板值改用腳本表示；SequenceStar 則是改名為 SequenceWithMemory。" },
      { q: "把高優先的「沒有警報」改寫成每個動作上的 <code>_skipIf=\"alarm\"</code>，取代 EP1 那棵 Reactive 樹，會有什麼問題？",
        o: ["語法錯誤，屬性不能讀布林值", "沒有問題，兩者完全等價", "正在跑的動作不會因為警報被中止，而且沒有任何分支去執行逃跑", "樹會變得比較長"], a: 2,
        w: "_skipIf 只在開始時看一次，也只會略過，不會切換到逃跑；中斷與備案仍需要 Reactive 結構與 Fallback。" },
      { q: "前後置條件讓樹變短，代價最可能是？",
        o: ["條件變成屬性，圖上看不到；腳本改黑板的資料流也看不見", "執行速度一定變慢", "不能再使用 Groot2", "無法在 ROS 2 中使用"], a: 0,
        w: "可讀性的負擔從圖轉移到文字屬性上；高優先、決定讓位的條件建議仍畫成獨立節點。" }
    ],
    next: "EP16：寫好的動作要按什麼順序做？讓 PDDL 規劃器先排出計畫，再交給行為樹執行——看 PlanSys2 與 CoSTAR 怎麼把規劃器和行為樹接在一起。"
},
  // ---------------------------------------------------------- EP16
{
    no: 16, id: "u16", phase: 5, tier: "Tier 5｜工具與實戰",
    title: "規劃器遇上行為樹：PlanSys2 與 CoSTAR",
    hook: "規劃器排得出完美的計畫，為什麼機器人照著做還是會失敗？",
    tags: "PDDL、PlanSys2、ROS 2、計畫執行、相依圖、拍賣協定、CoSTAR、RLDS",
    status: "planned", estDur: "約 13 分", segWord: "小節",
    src: [
      { label: "研討會 #1 Francisco Martín Rico：PlanSys2 中的行為樹", id: "D7HkH6SvqjY" },
      { label: "研討會 #5 Chris Paxton：真實世界的反應式任務規劃", id: "2pZp3I8uV2c" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 50, title: "規劃不等於執行" },
      { t: 150, title: "PlanSys2 的五個角色" },
      { t: 270, title: "計畫變成一棵行為樹" },
      { t: 400, title: "動作本身也是行為樹" },
      { t: 490, title: "多機器人：誰來做？" },
      { t: 580, title: "CoSTAR：讓新手自己組任務" },
      { t: 690, title: "有保證的反應式計畫" },
      { t: 760, title: "總結" }
    ],
    formula: R`\text{BT}(a) = \text{等待}\,\mathrm{Req}_{\text{start}} \rightarrow \text{套用}\,\mathrm{Eff}_{\text{start}} \rightarrow (\mathrm{Req}_{\text{over all}} \land \text{執行 } a) \rightarrow \text{檢查}\,\mathrm{Req}_{\text{end}} \rightarrow \text{套用}\,\mathrm{Eff}_{\text{end}}`,
    pre: [
      { q: "規劃器根據「現在的世界」排出一串動作：走到廚房、拿盤子、走到餐桌、放下盤子。真正執行時，哪些事情會讓這串動作失效？",
        a: "拿盤子失手、門被關上、有人把盤子先拿走、感測器看錯位置……計畫是在想像中排好的，世界在執行時會變。所以執行端要能<b>邊做邊檢查前提</b>、失敗時回報，必要時<b>重新規劃</b>。這正是行為樹擅長的部分：規劃器決定做什麼，行為樹負責怎麼可靠地做完。" },
      { q: "兩台機器人一起擺餐桌：A 走到廚房（20 秒）再拿盤子（10 秒），B 走到櫃子（15 秒）再拿杯子（8 秒），兩人都拿到後才能擺盤（12 秒）。一個接一個做要多久？可以更快嗎？",
        a: "一個接一個是 20＋10＋15＋8＋12＝65 秒。兩條準備工作互不相依，可以同時做：要等比較慢的那條（20＋10＝30 秒），再加擺盤 12 秒，共 42 秒。PlanSys2 的執行器就是先找出動作之間的相依關係，再把能並行的動作排成平行分支。" },
      { q: "工廠作業員沒有學過程式，要教機械手臂「找到零件、夾起來、放進治具」。你會給他什麼樣的工具？",
        a: "讓他用拖拉積木的方式組出任務，而且積木本身要「聰明」：「夾起零件」這種動作內建視覺辨識與動作規劃，作業員不必處理座標。CoSTAR 就是這個方向——用行為樹當使用者介面，把感知與規劃包在節點裡。" }
    ],
    terms: [
      { zh: "PDDL", en: "Planning Domain Definition Language", m: "", d: "描述動作前提與效果、初始狀態與目標的規劃語言；規劃器據此找出一串動作。" },
      { zh: "計畫執行", en: "Plan execution", m: "", d: "把規劃器產生的動作序列真正做出來，同時處理失敗、延遲與世界的變化。" },
      { zh: "PlanSys2", en: "ROS 2 Planning System", m: "", d: "ROS 2 上的符號規劃框架，受 ROSPlan 啟發，負責儲存知識、產生計畫並用行為樹執行。" },
      { zh: "領域專家", en: "Domain Expert", m: "", d: "PlanSys2 中讀入並保存 PDDL 領域（型別、述詞、動作）的元件。" },
      { zh: "問題專家", en: "Problem Expert", m: "", d: "保存會變動的知識（實例、述詞、目標），規劃時組成 PDDL 問題。" },
      { zh: "執行器", en: "Executor", m: "", d: "向規劃器要計畫、把計畫轉成行為樹並執行；預設規劃器是 POPF。" },
      { zh: "相依圖", en: "Dependency graph", m: "", d: "標出哪個動作要等哪個動作做完；互不相依的動作可以平行執行。" },
      { zh: "前提與效果的時間點", en: "at start / over all / at end", m: "", d: "時間性 PDDL 動作的條件與效果，分別在開始時、整段期間、結束時成立或套用。" },
      { zh: "動作拍賣", en: "Action auction", m: "", d: "PlanSys2 用請求、回應、確認的訊息，把動作指派給有空又會做的機器人。" },
      { zh: "CoSTAR", en: "CoSTAR", m: "", d: "以行為樹為介面的協作機器人任務編輯系統，讓非專家也能組出結合視覺與規劃的任務。" },
      { zh: "RLDS", en: "Robust Logical-Dynamical Systems", m: "", d: "Paxton 等人 2019 年提出的表示法，介於彈性的行為樹與可分析的形式保證之間，可由循序計畫產生。" }
    ],
    practice: {
      intro: "練習計算平行執行省下的時間，以及「有沒有備案」對整份計畫成功率的影響。機率題假設各動作互相獨立。",
      items: [
        { q: "擺餐桌的計畫有 5 個動作：A 走到廚房 20 秒、C 拿盤子 10 秒、B 走到櫃子 15 秒、D 拿杯子 8 秒、E 擺盤 12 秒。全部依序執行要幾秒？",
          a: 65, tol: 0, hint: "$20 + 10 + 15 + 8 + 12$。" },
        { q: "相依關係：C 要等 A，D 要等 B，E 要等 C 和 D；其他動作可以同時開始。照相依圖平行執行，最短要幾秒？",
          a: 42, tol: 0, hint: "兩條準備路線取較長的：$\\max(20 + 10,\\; 15 + 8) = 30$，再加擺盤 $12$。" },
        { q: "一份計畫有 10 個動作，每個動作成功率 0.95，任何一個失敗整份計畫就失敗（純 Sequence）。整份計畫成功的機率是多少？",
          a: 0.5987, tol: 0.005, hint: "$0.95^{10}$。" },
        { q: "每個動作改成 Fallback(動作, 再試一次)，兩次嘗試互相獨立。整份計畫成功的機率是多少？",
          a: 0.9753, tol: 0.005, hint: "單一動作失敗要兩次都失敗：$1 - 0.05^2 = 0.9975$；整份：$0.9975^{10}$。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "<b>規劃器決定做什麼，行為樹負責怎麼可靠地做完。</b>PlanSys2 把 PDDL 計畫自動轉成可以平行執行、會檢查前提的行為樹，動作本身也能用行為樹實作；CoSTAR 則把行為樹變成新手也能用的任務編輯介面。" },
      { h: "規劃不等於執行", b: "PDDL 規劃器在符號世界裡找出一串動作，但它不負責把動作做出來：動作會失敗、會花比預期更久，世界也會在執行中改變。EP2 的 Backward Chaining 是「樹自己長出來、天生會反應」；本集是另一條路：<b>先讓規劃器排出計畫，再把計畫翻成行為樹執行</b>，執行失敗就回報並重新規劃。" },
      { h: "PlanSys2 的元件", b: `<ul>
        <li><b>Domain Expert</b>：保存 PDDL 領域，可以合併多個領域。</li>
        <li><b>Problem Expert</b>：保存會變的知識——實例、述詞、目標。</li>
        <li><b>Planner</b>：以外掛方式呼叫規劃器，預設 POPF。</li>
        <li><b>Executor</b>：要計畫、轉成行為樹、執行。</li>
        <li><b>Controller</b>：每個應用自己寫，設定知識與目標，要求執行或取消計畫。</li></ul>` },
      { h: "計畫怎麼變成一棵樹", b: `<ul>
        <li>先分析計畫，建出<b>相依圖</b>：互不相依的動作形成平行分支，後面的動作要等它的前驅都完成。</li>
        <li>每個動作再展開成一小棵樹：等開始前提成立 → 套用開始效果 → 執行期間持續檢查 over-all 前提並執行動作 → 檢查結束前提 → 套用結束效果。</li>
        <li>任何節點失敗都會傳到根，整份計畫失敗，交回去重新規劃。</li></ul>
        對照 EP15：這裡的前提檢查是畫在樹上的節點，不是藏在屬性裡。` },
      { h: "動作本身也是行為樹", b: "PlanSys2 的第二種用法：計畫裡的一個動作（例如「把盤子拿到餐桌」）本身可以用一棵行為樹實作，只要寫好葉節點，不同動作之間可以共用。導航、手臂規劃這類 ROS 2 介面也被包成節點，複雜度藏在裡面。於是形成兩層：<b>上層是規劃器排出、自動轉成的計畫樹，下層是工程師手寫的動作樹</b>。" },
      { h: "多機器人：用拍賣分工", b: "執行器要做某個動作時，先廣播請求；有空、又會做這個動作的機器人回應；執行器確認其中一個、拒絕其他。被選中的機器人開始執行並定期回報進度，結束時回報結果；計畫中止就送出取消。這讓同一份計畫可以由一台或多台機器人分攤。" },
      { h: "CoSTAR：給新手的行為樹", b: "Paxton 等人的 CoSTAR 讓不是機器人專家的使用者，以行為樹為介面替協作手臂組出任務，並把感知與規劃整合進節點。研討會提到 35 人的使用者研究認為它容易上手，後來也衍生出新創公司。重點是：行為樹的圖形化與模組化（EP1 的優點）讓「看得懂的計畫」交到第一線人員手上。" },
      { h: "有保證的反應式計畫", b: "Paxton 等人 2019 年提出 RLDS（Robust Logical-Dynamical Systems），定位在「行為樹很彈性、但不好分析」與「形式保證」之間，並示範可以從簡單的循序計畫產生，在居家操作案例中面對干擾時表現較好。這和 EP8 把行為樹當動態系統分析、EP2 的反應式規劃是同一個方向：<b>讓計畫既會反應，又說得出為什麼一定會到達目標</b>。" },
      { h: "延伸閱讀", b: `<ul>
        <li>研討會 #1，Francisco Martín Rico：<a href="https://www.youtube.com/watch?v=D7HkH6SvqjY" target="_blank" rel="noopener">YouTube ↗</a>；研討會 #5，Chris Paxton：<a href="https://www.youtube.com/watch?v=2pZp3I8uV2c" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>F. Martín, J. Ginés, V. Matellán, F. J. Rodríguez，“PlanSys2: A Planning System Framework for ROS2”，IROS 2021：<a href="https://arxiv.org/abs/2107.00376" target="_blank" rel="noopener">arXiv:2107.00376 ↗</a>；專案網站：<a href="https://plansys2.github.io/" target="_blank" rel="noopener">plansys2.github.io ↗</a></li>
        <li>C. Paxton 等，“CoSTAR: Instructing Collaborative Robots with Behavior Trees and Vision”，ICRA 2017：<a href="https://arxiv.org/abs/1611.06145" target="_blank" rel="noopener">arXiv:1611.06145 ↗</a>；使用者研究：<a href="https://arxiv.org/abs/1703.07890" target="_blank" rel="noopener">arXiv:1703.07890 ↗</a></li>
        <li>C. Paxton, N. Ratliff, C. Eppner, D. Fox，“Representing Robot Task Plans as Robust Logical-Dynamical Systems”，2019：<a href="https://arxiv.org/abs/1908.01896" target="_blank" rel="noopener">arXiv:1908.01896 ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "PDDL 規劃器產生計畫後，為什麼還需要行為樹？",
        o: ["規劃器只能產生一個動作", "行為樹比規劃器更會找最佳解", "規劃器不負責執行：動作會失敗、世界會變，需要會檢查與回報的執行層", "PDDL 不能描述動作的前提"], a: 2,
        w: "規劃與執行是兩件事；PlanSys2 用行為樹處理後者。" },
      { q: "PlanSys2 中，誰負責把計畫轉成行為樹並執行？",
        o: ["Executor", "Domain Expert", "Problem Expert", "Planner"], a: 0,
        w: "Executor 向 Planner 要計畫、建相依圖、轉成行為樹並執行。" },
      { q: "PlanSys2 的 Problem Expert 保存的是什麼？",
        o: ["規劃器的原始碼", "會變動的知識：實例、述詞與目標", "每個動作的 C++ 實作", "機器人的地圖"], a: 1,
        w: "領域（型別、述詞、動作定義）在 Domain Expert；隨時間變的事實與目標在 Problem Expert。" },
      { q: "計畫中兩個動作互不相依，PlanSys2 轉成行為樹時會怎麼排？",
        o: ["一律依計畫順序串起來", "只執行其中一個", "交給使用者決定", "放在平行分支，同時執行"], a: 3,
        w: "相依圖讓互不相依的動作平行執行，後面的動作等前驅都完成才開始。" },
      { q: "計畫轉成的行為樹中，某個動作執行期間 over-all 前提變不成立，會怎樣？",
        o: ["失敗往上傳到根，整份計畫失敗、可以重新規劃", "忽略它，動作照跑", "自動改用另一台機器人", "前提會在動作結束後才檢查"], a: 0,
        w: "over-all 前提和動作一起放在同一段裡持續檢查，失敗會傳到根。" },
      { q: "PlanSys2「用行為樹」的兩種方式是？",
        o: ["畫地圖與做導航", "訓練與推論", "把計畫編成可執行的行為樹，以及用行為樹實作計畫中的單一動作", "產生 PDDL 與驗證 PDDL"], a: 2,
        w: "上層是規劃器排出、自動轉成的計畫樹；下層是手寫、可共用葉節點的動作樹。" },
      { q: "CoSTAR 最主要想解決的問題是？",
        o: ["讓規劃器跑得更快", "讓不是機器人專家的使用者也能組出結合視覺與規劃的任務", "取代 PDDL", "讓機器人不需要感測器"], a: 1,
        w: "以行為樹當介面，把感知與規劃包在節點裡；研討會提到 35 人使用者研究認為它容易上手。" },
      { q: "Paxton 等人提出 RLDS 的定位是？",
        o: ["一種新的程式語言", "完全取代行為樹的狀態機", "只能用在工業手臂的硬體", "介於彈性的行為樹與形式保證之間，可由循序計畫產生"], a: 3,
        w: "目標是讓反應式計畫既有彈性，又能分析與保證。" }
    ],
    next: "EP17：把整個系列用起來——一群無人機要搬貨，一台居家服務機器人要聽懂人話。從目標、能力清單到一棵能跑的行為樹，完整走一次設計流程。"
},
  // ---------------------------------------------------------- EP17
{
    no: 17, id: "u17", phase: 5, tier: "Tier 5｜工具與實戰",
    title: "實戰：無人機群 pick-and-place 與居家服務機器人",
    hook: "三台無人機、六個箱子、一個卸貨平台——一棵行為樹要怎麼從目標長出來，還要讓三台飛機不互相卡住？",
    tags: "Backward Chaining、PPA、多機器人、共用資源、pick-and-place、居家服務機器人、TAMP、系列回顧",
    status: "planned", estDur: "約 13 分", segWord: "步驟",
    src: [
      { label: "無人機群 back-chained BT 設計", id: "4rkc_9foxzo" },
      { label: "研討會 #3 Sebastian Castro：居家服務機器人的行為樹", id: "xbvMnpwXNPk" }
    ],
    sections: [
      { t: 0, title: "開場" },
      { t: 45, title: "寫下頂層目標與能力清單" },
      { t: 140, title: "從目標往回長出 PPA" },
      { t: 270, title: "檢查衝突與執行順序" },
      { t: 370, title: "從一台到一群：共用資源" },
      { t: 480, title: "居家服務機器人：從一句話到目標" },
      { t: 590, title: "規劃器排計畫，行為樹負責做完" },
      { t: 680, title: "系列回顧：設計檢查清單" },
      { t: 750, title: "總結" }
    ],
    formula: R`\text{任務} = \bigwedge_{i=1}^{n}\Big(\text{箱}_i\text{在卸貨區} \;\lor\; \big(\text{抓著箱}_i \land \text{在卸貨區} \land \text{放下}_i\big)\Big)`,
    pre: [
      { q: "任務是「把三個箱子搬到卸貨區」。照 EP2 的做法，第一步要寫下什麼？",
        a: "寫下<b>頂層目標</b>（三個「箱 i 在卸貨區」的條件，用 Sequence 接起來）和<b>能力清單</b>：每個動作的前置條件與做完會達成什麼——例如「放下箱 i」需要抓著箱 i、而且在卸貨區；「抓起箱 i」需要在箱 i 旁邊、而且夾爪是空的；「飛到某處」需要電量足夠。之後 Backward Chaining 只是一直把條件換成 PPA。" },
      { q: "三台無人機共用一個卸貨平台，一次只能有一台降落。如果每台無人機都各自跑一棵「看到平台就降落」的樹，會發生什麼事？",
        a: "可能兩台同時判斷「平台是空的」而一起降落，或互相等待。共用資源需要明確的協調：例如把「平台空著、且由我保留」寫成前置條件，保留成功的那台才降落，其他的回報執行中、在空中等待。這是單機設計沒有的新條件。" },
      { q: "家人對機器人說「幫我把桌上的杯子收到廚房」。從這句話到機器人動起來，中間要經過哪些環節？",
        a: "聽懂語言、把它變成目標（杯子在廚房）；感知找出是哪個杯子、在哪裡；規劃出要做哪些動作、用什麼參數（走到餐桌、抓杯子、走到廚房、放下）；最後由行為樹在真實世界中執行、處理失敗與意外。EP16 的「規劃器排計畫、行為樹做完」在這裡又出現一次。" }
    ],
    terms: [
      { zh: "頂層目標", en: "Top-level goal", m: "", d: "任務最上層要達成的條件，Backward Chaining 從這裡開始往下展開（EP14）。" },
      { zh: "能力清單", en: "Action library", m: "", d: "每個動作的前置條件與後置條件，展開時用來查「誰能達成這個條件」（EP2）。" },
      { zh: "PPA", en: "Postcondition–Precondition–Action", m: R`C \lor (P \land A)`, d: "一個目標的固定積木：Fallback 最左放目標條件，右邊是「前置條件 而且 動作」。" },
      { zh: "取放任務", en: "Pick-and-place", m: "", d: "把物件從一處抓起、移到另一處放下的任務，是工業與倉儲最常見的機器人工作。" },
      { zh: "多代理任務", en: "Multi-agent mission", m: "", d: "多台機器人共同完成目標，每台可以跑自己的行為樹，但要協調分工與共用資源。" },
      { zh: "共用資源", en: "Shared resource", m: "", d: "一次只能給一個代理使用的東西，例如卸貨平台；要寫成可保留、可釋放的條件。" },
      { zh: "完工時間", en: "Makespan", m: "", d: "從任務開始到最後一個動作結束的總時間，常用來比較單機與多機的效率。" },
      { zh: "居家服務機器人", en: "Home service robot", m: "", d: "在住家中依人的指令整理、取物的機器人，要結合語言、感知、導航與操作。" },
      { zh: "任務與運動規劃", en: "Task and Motion Planning (TAMP)", m: "", d: "同時決定動作順序與動作參數（抓哪裡、走哪條路）的規劃方法，產出計畫交給執行層。" },
      { zh: "參數化行為", en: "Parameterized behavior", m: "", d: "同一個行為配上不同參數重複使用，例如「抓起(杯子)」「抓起(盤子)」。" }
    ],
    practice: {
      intro: "用系列學過的方法計算一棵 back-chained 樹的大小、多台無人機的完工時間，以及加上重試後的成功率。節點包含 Sequence、Fallback、條件與動作；機率題假設各次嘗試互相獨立。",
      items: [
        { q: "一個箱子的樹：PPA(箱在卸貨區)＝Fallback[箱在卸貨區, Sequence[PPA(抓著箱), PPA(在卸貨區), 放下]]；PPA(抓著箱)＝Fallback[抓著箱, Sequence[PPA(在箱旁), 夾爪空, 抓起]]；PPA(在箱旁) 與 PPA(在卸貨區) 都是 Fallback[已在該處, Sequence[電量足夠, 飛過去]]。這個箱子的子樹共有幾個節點？",
          a: 19, tol: 0, hint: "PPA(在箱旁)＝PPA(在卸貨區)＝5；PPA(抓著箱)＝$3 + 5 + 2 = 10$；PPA(箱在卸貨區)＝Fallback、條件、Sequence 3 個，加 $10 + 5$，再加放下 1：$3 + 10 + 5 + 1$。" },
        { q: "頂層用一個 Sequence 接 3 個箱子的子樹。整棵樹共有幾個節點？",
          a: 58, tol: 0, hint: "$1 + 3 \\times 19$。" },
        { q: "6 個箱子、3 台無人機，一開始同時出發。每趟要飛 40 秒（取箱並飛到平台上空，可同時進行），再佔用唯一的卸貨平台 10 秒（一次一台，先到先用）；放下後立刻出發去取下一個箱子。每台各送 2 個，最後一個箱子在第幾秒放好？",
          a: 120, tol: 0, hint: "第一輪三台都在 40 秒到：平台 40–50、50–60、60–70。各自再飛 40 秒，分別在 90、100、110 秒到，平台 90–100、100–110、110–120。" },
        { q: "每次搬運成功率 0.9。每個箱子的搬運加一層 Fallback，失敗就再試一次。6 個箱子全部送達的機率是多少？",
          a: 0.9415, tol: 0.005, hint: "單一箱子：$1 - 0.1^2 = 0.99$；六個：$0.99^6$。沒有重試時只有 $0.9^6 \\approx 0.53$。" }
      ]
    },
    notes: [
      { h: "一句話記住", b: "實戰的流程是：<b>寫下頂層目標與能力清單 → Backward Chaining 長出 PPA → 檢查衝突與順序 → 處理多機共用資源 → 需要時讓規劃器排計畫、行為樹負責執行</b>。前面十六集的每一個工具，都在這條流程上的某一步派上用場。" },
      { h: "步驟一：目標與能力清單", b: `<ul>
        <li>頂層目標：Sequence(箱 1 在卸貨區, 箱 2 在卸貨區, 箱 3 在卸貨區)。</li>
        <li>放下箱 i：前提「抓著箱 i」而且「在卸貨區」。</li>
        <li>抓起箱 i：前提「在箱 i 旁」而且「夾爪是空的」。</li>
        <li>飛到某處：前提「電量足夠」。</li></ul>
        以上是本頁自己的示意；Ögren 頻道 2023 年的影片同樣以六軸無人機在 Unity 中模擬，動力學簡化，重點放在高層行為怎麼組合。` },
      { h: "步驟二：一層一層長出來", b: "把「箱 i 在卸貨區」換成 PPA，冒出「抓著箱 i」「在卸貨區」兩個新條件；再把它們各自換成 PPA，又冒出「在箱 i 旁」「電量足夠」。每一塊形狀都和 EP2 一樣，練習題算出一個箱子 19 個節點、三個箱子 58 個。樹很大，但每一塊都看得懂，也可以收合成子樹命名（EP13）。" },
      { h: "步驟三：檢查衝突與順序", b: `<ul>
        <li>「飛到卸貨區」會不會破壞已經達成的「抓著箱 i」？只要飛行不放開夾爪就不會——這種檢查就是 EP2 說的衝突、EP6 的設計條件要回答的問題。</li>
        <li>「抓起箱 2」需要夾爪是空的，但箱 1 還抓在手上：先把箱 1 放好，順序才對。頂層 Sequence 由左到右排列，正好讓箱子一個一個處理。</li>
        <li>電量條件放在每個飛行動作前面；要讓「電量不足就回去充電」能打斷任何動作，就把它放到整棵樹最左邊、用 Reactive 結構（EP1）。</li></ul>` },
      { h: "步驟四：從一台到一群", b: `<ul>
        <li>最簡單的做法：每台無人機跑同一棵樹，但每個箱子只能由一台負責——把「箱 i 指派給我」當作額外的前置條件。</li>
        <li>唯一的卸貨平台是共用資源：把「平台已由我保留」寫成降落前的條件，保留不到就回報執行中、在空中等待。</li>
        <li>練習題的數字說明代價：三台同時飛，但平台一次一台，6 個箱子要 120 秒；一台無人機每趟 50 秒、全部自己做要 300 秒。瓶頸從飛行時間轉移到共用資源。</li>
        <li>指派也可以交給上層：EP16 的 PlanSys2 用拍賣把動作分給有空的機器人。</li></ul>` },
      { h: "居家服務機器人：一句話之後", b: "Castro 的研討會談的是人的意圖和機器人動作之間的介面：使用者給一句自然語言指令或想要的結果，系統要結合語言理解、感知、導航與操作，再用規劃框架把目標轉成一串<b>排好順序、填好參數</b>的行為。研討會中的系統架構在 Toyota Human Support Robot 上實作，用任務與運動規劃（TAMP）把目標變成高層計畫，再由行為樹管理在真實世界中的執行。" },
      { h: "兩條路怎麼選", b: `<ul>
        <li><b>Backward Chaining（EP2）</b>：目標與動作數量不大、希望樹本身就會反應，例如無人機搬箱子。</li>
        <li><b>規劃器＋行為樹（EP16）</b>：物件多、組合多、需要決定參數，例如居家任務；規劃器負責搜尋，行為樹負責可靠執行與失敗回報。</li>
        <li>兩者常常混用：上層用規劃器，下層的每個動作用手寫或 back-chained 的行為樹。</li></ul>` },
      { h: "系列回顧：設計檢查清單", b: `<ul>
        <li><b>結構</b>：Sequence 是「而且」、Fallback 是「或者」，中斷靠每輪從根重新 tick（EP1）；記得選 Reactive 或有記憶的節點（EP5）。</li>
        <li><b>設計方法</b>：目標寫成 PPA、從目標往回長（EP2）；比較決策樹與狀態機（EP3）；條件太多就用信念向量與事件驅動（EP4）。</li>
        <li><b>正確性</b>：檢查 back-chained 樹的常見錯誤（EP6）、操作區域與收斂（EP8）、用 CBF 守住安全（EP9），並理解它為何最模組化（EP7）。</li>
        <li><b>擴充</b>：學出結構（EP10）、依效用排序（EP11）、換上 RL 子策略（EP12）、為子樹命名來解釋（EP13）、選對頂層目標（EP14）。</li>
        <li><b>工具</b>：BehaviorTree.CPP 4 的腳本與前後置條件（EP15）、PlanSys2 與 CoSTAR（EP16）。</li></ul>` },
      { h: "延伸閱讀", b: `<ul>
        <li>無人機群 back-chained 行為樹設計：<a href="https://www.youtube.com/watch?v=4rkc_9foxzo" target="_blank" rel="noopener">YouTube ↗</a>；研討會 #3，Sebastian Castro：<a href="https://www.youtube.com/watch?v=xbvMnpwXNPk" target="_blank" rel="noopener">YouTube ↗</a></li>
        <li>M. Colledanchise &amp; P. Ögren，《Behavior Trees in Robotics and AI: An Introduction》：<a href="https://arxiv.org/abs/1709.00084" target="_blank" rel="noopener">arXiv:1709.00084 ↗</a></li>
        <li>M. Colledanchise, D. Almeida, P. Ögren，“Towards Blended Reactive Planning and Acting using Behavior Trees”，ICRA 2019：<a href="https://arxiv.org/abs/1611.00230" target="_blank" rel="noopener">arXiv:1611.00230 ↗</a></li>
        <li>Petter Ögren 的行為樹研討會系列：<a href="https://www.kth.se/profile/petter/page/behavior-trees-in-robotics-online-seminars" target="_blank" rel="noopener">KTH ↗</a></li>
        <li>工具：BehaviorTree.CPP <a href="https://www.behaviortree.dev/" target="_blank" rel="noopener">behaviortree.dev ↗</a>；py_trees <a href="https://py-trees.readthedocs.io/" target="_blank" rel="noopener">py-trees.readthedocs.io ↗</a>；PlanSys2 <a href="https://plansys2.github.io/" target="_blank" rel="noopener">plansys2.github.io ↗</a></li></ul>` }
    ],
    quiz: [
      { q: "設計 back-chained 行為樹時，第一步應該寫下什麼？",
        o: ["每個節點的 XML", "頂層目標，以及每個動作的前置條件與效果", "tick 的頻率", "要用幾台機器人"], a: 1,
        w: "有了目標與能力清單，Backward Chaining 只是重複「把條件換成 PPA」。" },
      { q: "「放下箱 i」的前置條件是「抓著箱 i」而且「在卸貨區」。展開「箱 i 在卸貨區」這個 PPA 時，新冒出來、可以再展開的是什麼？",
        o: ["「抓著箱 i」與「在卸貨區」兩個條件", "放下箱 i 這個動作", "頂層的 Sequence", "什麼都沒有，展開到此結束"], a: 0,
        w: "前置條件就是下一層要換成 PPA 的條件。" },
      { q: "無人機抓著箱 1，又要去抓箱 2，但「抓起」需要夾爪是空的。這說明了什麼？",
        o: ["行為樹無法處理兩個箱子", "要改用狀態機", "應該同時抓兩個箱子", "目標之間有順序關係：先完成箱 1，再處理箱 2"], a: 3,
        w: "頂層 Sequence 由左到右，讓箱子一個一個處理，避免動作破壞彼此的前提。" },
      { q: "要讓「電量不足就回去充電」能打斷任何正在進行的動作，應該怎麼放？",
        o: ["放在每個箱子子樹的最右邊", "寫成 _successIf 屬性", "放在整棵樹最左邊，用 Reactive 結構", "不需要，飛完再檢查就好"], a: 2,
        w: "每輪從根 tick，最左邊的高優先條件最先被看到（EP1）；_successIf 只在開始時看一次（EP15）。" },
      { q: "三台無人機共用一個卸貨平台，6 個箱子要 120 秒，而不是理想的 100 秒。多出來的時間來自哪裡？",
        o: ["飛行速度變慢", "等待共用的卸貨平台", "行為樹 tick 太慢", "電量不足"], a: 1,
        w: "飛行可以同時進行，但平台一次只能一台，瓶頸轉移到共用資源。" },
      { q: "在 Castro 描述的居家服務機器人架構中，行為樹主要負責什麼？",
        o: ["理解自然語言", "辨識物體", "決定使用者應該要什麼", "管理計畫在真實世界中的執行"], a: 3,
        w: "任務與運動規劃把目標變成高層計畫，行為樹負責執行並處理失敗。" },
      { q: "什麼時候比較適合「規劃器＋行為樹」，而不是只用 Backward Chaining？",
        o: ["物件與組合很多、需要搜尋動作順序與參數時", "只有一個目標、兩個動作時", "不需要任何反應時", "沒有感測器時"], a: 0,
        w: "規劃器擅長搜尋大量組合，行為樹擅長可靠執行；兩者常常分層混用。" },
      { q: "每次搬運成功率 0.9，加一層「失敗就再試一次」的 Fallback 後，單一箱子的成功率變成？",
        o: ["0.90", "0.81", "0.99", "1.00"], a: 2,
        w: "兩次都失敗才失敗：$1 - 0.1^2 = 0.99$。" }
    ],
    next: "系列完結：從 Sequence 與 Fallback 兩塊積木出發，你已經走過設計方法、理論保證、學習與解釋，到真實工具與實戰。下一步，挑一個你自己的機器人或遊戲角色，寫下頂層目標與能力清單，用 BehaviorTree.CPP 或 py_trees 長出第一棵樹，跑起來、打斷它、修好它。"
}
];
