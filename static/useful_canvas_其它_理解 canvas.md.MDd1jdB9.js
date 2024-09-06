import{_ as s,l as i,k as a,ae as n}from"./chunks/framework.BFFW23Ds.js";const y=JSON.parse('{"title":"理解 canvas","description":"","frontmatter":{"label":"canvas"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"canvas 绘图入门与理解","slug":"canvas-绘图入门与理解","link":"#canvas-绘图入门与理解","children":[]},{"level":2,"title":"理解基于状态的绘图","slug":"理解基于状态的绘图","link":"#理解基于状态的绘图","children":[]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[{"level":3,"title":"closePath 与 beginPath 的关系","slug":"closepath-与-beginpath-的关系","link":"#closepath-与-beginpath-的关系","children":[]},{"level":3,"title":"理解何为“基于状态”","slug":"理解何为-基于状态","link":"#理解何为-基于状态","children":[]}]}],"relativePath":"useful/canvas/其它/理解 canvas.md","filePath":"useful/canvas/其它/理解 canvas.md","lastUpdated":1717542113000}'),h={name:"useful/canvas/其它/理解 canvas.md"},t=n(`<h1 id="理解-canvas" tabindex="-1">理解 canvas <a class="header-anchor" href="#理解-canvas" aria-label="Permalink to &quot;理解 canvas&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>用 canvas 做过需求的朋友多少应该写过 <code>ctx.beginPath</code> 方法，一旦某个位置少了这个方法的调用，canvas 绘制就可能出现预期之外的效果。依稀记得一年前初学 canvas 的时候有一个对 canvas 的描述——“基于状态的绘图”，当时似懂非懂，直到最近写业务彻底搞清楚然后来简单分享一下。</p><p>如果</p><ol><li>你想入门 canvas，宏观上对 canvas 的绘制流程有一个清晰的把握</li><li>你不是很清楚究竟 beginPath() 的作用以及何为“canvas 是基于状态的绘图”</li></ol><p>可以看下文章</p><h2 id="canvas-绘图入门与理解" tabindex="-1">canvas 绘图入门与理解 <a class="header-anchor" href="#canvas-绘图入门与理解" aria-label="Permalink to &quot;canvas 绘图入门与理解&quot;">​</a></h2><p>咱们不去细说 api，从宏观上，我谈一下我对 canvas 绘图的理解。</p><p>给不太熟悉 canvas 的朋友们多说一些：我们在绘制 canvas 时需要先获取 canvas 元素对应的上下文对象，然后通过上下文对象去绘制对应的 canvas，如下面的栗子：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvasElm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvasElm.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvasElm.height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvasElm.style.border </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`1px solid red\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建 canvas 上下文</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasElm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>既然代码写出来了，我还是多说两句，把代码解释清楚：在 js 中拿到 <code>&lt;canvas/&gt;</code> 标签的对应 domcanvasElm 后，通过 <code>canvasElm.width / height</code> 来设置的宽高其实并不是真正意义上的设置 dom 的宽高样式，这里类似于申请 canvas 画布的像素点，只是说在不显式设置 canvas 的 css 样式时 canvas 像素点大小等于一个 css 像素大小。也就是说经过赋值 <code>canvasElm.width / height</code> 后我们的 canvas 是一张 300 * 300 的画布（用于绘制定位）。并且我们没有显式设置 canvas 的 css 宽高，所以 canvas 的宽高就默认也等于 300px * 300px 了。从这里可以延伸到关于 canvas 画质优化的一个手段，无关主题咱就不多说了。然后 canvasElm.getContext(&#39;2d&#39;) 返回了一个 canvas 上下文对象，调用这个对象上的 api 就可以完成对 <code>&lt;canvas id=&quot;demo&quot;&gt;</code> 的绘制。</p><p><strong>canvas 绘制的过程是先构思再动笔的过程。</strong> 这里的构思并不是指我们大脑里的构思，而是说 canvas 上下文上提供的绘制相关的 api 大体可以分为两种，一种是“构思 api”，另一类就是“动笔 api”，看下面的 demo 秒懂：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasElm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里的 0, 0 和下面的 150, 150 都是针对上面我们所说的 canvas 画布大小，canvas 画布左上角为 (0, 0) 点，向右为 x 轴，向下为 y 轴。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>moveTo 与 lineTo 就是“构思 api”，顾名思义 moveTo 与 lineTo 就是移动的意思，他们在描述一个路径，moveTo 指移动到某个具体的点，lineTo 就是基于现在的位置与目标位置画一条线。但是他们并不会真正的进行绘制，也就是说经过上面的操作，canvas 上并没有真正的出现绘制的线条，我们把 moveTo 与 lineTo 产生的痕迹理解为一种构思。有了“构思”，现在就需要“动笔 api”来将构思“变现”。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasElm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 动笔 api——stroke</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>所谓 stroke，（轻抚；摩；捋；在… 上轻轻涂抹），但作用就是连线，将“构思”产生的线条真正的画在 canvas 上。经过上面“构思” + “动笔”的操作，我们的 canvas 上就有了一条从左上角到中心的黑线。</p><h2 id="理解基于状态的绘图" tabindex="-1">理解基于状态的绘图 <a class="header-anchor" href="#理解基于状态的绘图" aria-label="Permalink to &quot;理解基于状态的绘图&quot;">​</a></h2><p>先看一段代码结合绘制效果感受一下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasElm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认连线的颜色是黑色，我们可以通过 ctx.strokeStyle = color 来修改 stroke 时连线的颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.strokeStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改连线颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>基于代码的逻辑我们分析最后三行：</p><ol><li>修改 strokeStyle，那么以后 stroke 方法绘制出来的线条为蓝色</li><li>ctx.lineTo(300, 300);即从 (150, 150) 与 (300, 300) 之间“构思”一条线</li><li>调用 stroke 方法绘制这条线，那么我们的 canvas 画布上应该从 (0, 0) 到 (150, 150) 之间为黑线，(150, 150) 到 (300, 300) 之间为蓝线</li></ol><p>但是实际上绘制出来的结果是从 (0, 0) 到 (300, 300) 一整条线都是蓝色的。</p><p>先给结论：</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p><strong>canvas 中的绘制方法（“动笔 api”）都以上一次 beginPath 之后的所有“构思”的路径为基础进行绘制。</strong></p><p>基于结论解释一下上面的代码：我们创建上下文之后默认就调用了一次 ctx.beginPath 来开启一个新路径，所以上面没写，但我们明确上面的所有 canvas 代码是处于同一个 beginPath 中的，上面代码中第二次 stroke 方法调用时，我们是基于上面的所有“构思 api”产生的路径的。之所以我们看到一整条蓝色的线是因为第一个 stroke 方法绘制的黑色线条被第二次 stroke 方法绘制的蓝色线条覆盖了（第二次 stroke 方法绘制时，路径中已经有了从 (0, 0) 到 (300, 300) 的线）。</p><p>如果我们想绘制 (0, 0) 到 (150, 150) 的线条为黑色，(150, 150) 到 (300, 300) 为蓝色，可以修改代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvasElm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.strokeStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">beginPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上面第一次 stroke 绘制完成，为了让下面的 stroke 不受上面的“构思”的影响，调用 beginPath 来开启一个新的路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在一个新的 Path 中，相当于清空了曾经 Path 中的“构思”(路径)，所以我们需要先调用 moveTo 先移动到一个点，换句话说 lineTo 方法需要前面有一个点为基础，不然无效</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 绘制出来了从 (150, 150) 到 (300, 300) 的蓝色线段 且 (0, 0) 到 (150, 150) 的黑色线段安然无恙</span></span></code></pre></div><h3 id="closepath-与-beginpath-的关系" tabindex="-1">closePath 与 beginPath 的关系 <a class="header-anchor" href="#closepath-与-beginpath-的关系" aria-label="Permalink to &quot;closePath 与 beginPath 的关系&quot;">​</a></h3><p>答：<strong>没有关系，ctx.closePath 相当于一个“构思 api”</strong> ，基于上面我们对于 canvas 绘制的理解举个例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lineTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当下已经“构思”了两条线</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">closePath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// closePath 即让当前的构思线条起点与终点相连，形成闭合区域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 绘制出一个封闭的三角形</span></span></code></pre></div><p>而 beginPath 作用是保证我们两个不同的绘制（“动笔 api”）不相互影响。</p><h3 id="理解何为-基于状态" tabindex="-1">理解何为“基于状态” <a class="header-anchor" href="#理解何为-基于状态" aria-label="Permalink to &quot;理解何为“基于状态”&quot;">​</a></h3><p>状态的概念我们并不陌生，vue 与 react 这些前端框架的核心思想都是“状态驱动视图”，这里的状态可以理解为数据；那么 canvas 中，每一个 beginPath 都相当于开启一个新的路径，canvas 中的状态完全可以理解为路径中我们“构思”的线条，最终调用 stroke\\fill 等绘制方法时绘制出来的效果是基于 lineTo 等方法构造出来的“状态”的。</p>`,34),l=[t];function k(p,e,E,d,r,g){return a(),i("div",null,l)}const o=s(h,[["render",k]]);export{y as __pageData,o as default};
