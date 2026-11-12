// ============================================================
//  課程內容：《行為樹 Behavior Tree：從零看懂》EP1–EP2
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
  eyebrow: "Behavior Trees · EP1–EP2",
  heroTitle: '機器人<span class="hl">什麼時候</span>該換動作？',
  lead: "行為樹用兩種積木回答這個問題：Sequence（而且）和 Fallback（或者），再靠每秒十次的 tick 從根重新檢查。EP1 學會讀懂一棵樹，EP2 學會讓樹從目標自己長出來。每一集先答三題、看動畫、動手算，再答一次。",
  tagline: "成功、失敗、被打斷：三種切換理由，三種結構。",
  heroLabel: "行為樹 tick 模擬：可以拉警報、單步 tick，看狀態怎麼一路往上傳",
  description: "《行為樹 Behavior Tree：從零看懂》學習網頁：Sequence、Fallback、tick、中斷、Backward Chaining 與 PPA。先答三題、看動畫、動手算、再答一次。",
  footer: "《行為樹 Behavior Tree：從零看懂》學習網頁 · 進度只存在這台裝置的瀏覽器裡 · 理論骨架延續 Petter Ögren 的行為樹課程與 Colledanchise &amp; Ögren 的著作",
  source: {
    name: "Petter Ögren 行為樹入門課程；Colledanchise & Ögren《Behavior Trees in Robotics and AI》",
    url: "https://arxiv.org/abs/1709.00084",
    license: ""
  },
  phases: [
    { id: 1, name: "第一階段｜讀懂並設計行為樹", range: "EP1–EP2", desc: "從生活例子出發，先認識積木、tick 與中斷，再用 Backward Chaining 從目標自動長出一棵會反應的樹；每一集最後都對照 2026 年的函式庫與應用。" }
  ]
};

window.UNITS = [
  // ---------------------------------------------------------- EP1
  {
    no: 1, id: "u01", phase: 1, tier: "Tier 1｜直覺與基本積木",
    title: "行為樹從零看懂：Sequence、Fallback 與 tick",
    hook: "機器人會很多動作，真正難的是：什麼時候該換動作？又該換成哪一個？",
    tags: "Sequence、Fallback、tick、中斷、模組化、Reactive 節點、Nav2",
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
    next: "系列下一步：試著為你自己的機器人或遊戲角色列出目標與能力清單，親手用 Backward Chaining 長出一棵樹，再用 BehaviorTree.CPP 或 py_trees 跑跑看。"
  }
];
