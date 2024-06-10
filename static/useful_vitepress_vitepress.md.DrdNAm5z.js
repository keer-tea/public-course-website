import{_ as s,l as a,k as n,ad as i}from"./chunks/framework.CZ3uBn-2.js";const u=JSON.parse('{"title":"VitePress","description":"","frontmatter":{"label":"vitepress"},"headers":[],"relativePath":"useful/vitepress/vitepress.md","filePath":"useful/vitepress/vitepress.md","lastUpdated":1715469372000}'),p={name:"useful/vitepress/vitepress.md"},e=i(`<h1 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 左对齐        |      居中对齐      |  右对齐 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| zebra stripes |   are neat    |    $1 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><h2 id="表情" tabindex="-1">表情 <a class="header-anchor" href="#表情" aria-label="Permalink to &quot;表情&quot;">​</a></h2><p>输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:tada: :100:</span></span></code></pre></div><p>输出：</p><p>🎉 💯</p><p>可以在这里查看所有的<a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">表情</a>。</p><h2 id="生成目录" tabindex="-1">生成目录 <a class="header-anchor" href="#生成目录" aria-label="Permalink to &quot;生成目录&quot;">​</a></h2><p>在 md 文件中输入下面的代码即可生成带有层级的标题目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[[toc]]</span></span></code></pre></div><p>可以在配置文件中设置 markdown.toc，以控制显示目录的层级。</p><h2 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::: info</span></span>
<span class="line"><span>This is an info box.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>This is a tip.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: warning</span></span>
<span class="line"><span>This is a warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: danger</span></span>
<span class="line"><span>This is a dangerous warning.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: details</span></span>
<span class="line"><span>This is a details block.</span></span>
<span class="line"><span>:::</span></span></code></pre></div><p>你还可以自定义标题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::: danger STOP</span></span>
<span class="line"><span>Danger zone, do not proceed</span></span>
<span class="line"><span>:::</span></span></code></pre></div><h2 id="在代码块中的语法高亮" tabindex="-1">在代码块中的语法高亮 <a class="header-anchor" href="#在代码块中的语法高亮" aria-label="Permalink to &quot;在代码块中的语法高亮&quot;">​</a></h2><p>VitePress 使用 <a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a> 将 Markdown 和 代码块中的语法文本变得高亮和多彩。Shiki 支持广泛的编程语言，你只需要在三反引号后面写上正确的编程别名。</p><p>你可以在这个<a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md" target="_blank" rel="noreferrer">列表</a>里查看所有有效的编程别名。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    name: &#39;MyComponent&#39;,</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="高亮代码块中的若干行" tabindex="-1">高亮代码块中的若干行 <a class="header-anchor" href="#高亮代码块中的若干行" aria-label="Permalink to &quot;高亮代码块中的若干行&quot;">​</a></h2><p>在编程别名后面写一个花括号，再在里面写上高亮的行数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line highlighted"><span>\`\`\`js{4}</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><p>花括号里面也可以是其它值：</p><ul><li>行范围：比如 <code>{5-8}，{3-10}, {10-17}</code></li><li>多个单行：比如 <code>{4,7,9}</code></li><li>行范围和单行：比如 <code>{4,7-13,16,23-27,40}</code></li></ul><p>还有种办法，你可以直接在代码的一行最后面加上 <code>// [!code hl]</code> 注释。</p><p>输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Highlighted!&#39; // [!code  hl]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="聚焦代码块中的若干行" tabindex="-1">聚焦代码块中的若干行 <a class="header-anchor" href="#聚焦代码块中的若干行" aria-label="Permalink to &quot;聚焦代码块中的若干行&quot;">​</a></h2><p>在一行代码的最后面添加注释 <code>// [!code focus]</code>，会聚焦这行代码并且模糊其它的部分代码。</p><p>如果需要聚焦多行请使用 <code>// [!code focus:&lt;lines&gt;]</code>，多了 <code>:&lt;lines&gt;</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Focused!&#39; // [!code  focus]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="其它代码块的高亮注释" tabindex="-1">其它代码块的高亮注释 <a class="header-anchor" href="#其它代码块的高亮注释" aria-label="Permalink to &quot;其它代码块的高亮注释&quot;">​</a></h2><p><code>// [!code --]</code> 和 <code>// [!code ++]</code> 用于对比。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Removed&#39; // [!code  --]</span></span>
<span class="line"><span>      msg: &#39;Added&#39; // [!code  ++]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><p><code>// [!code warning]</code> 和 <code>// [!code error]</code> 用于提示错误或警告。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &#39;Error&#39;, // [!code  error]</span></span>
<span class="line"><span>      msg: &#39;Warning&#39; // [!code  warning]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="显示代码块行数" tabindex="-1">显示代码块行数 <a class="header-anchor" href="#显示代码块行数" aria-label="Permalink to &quot;显示代码块行数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lineNumbers: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>还可以使用 <code>:line-numbers</code> / <code>:no-line-numbers</code> 来设置代码块是否显示行数，这种办法优先级最高。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`\`\`ts {1}</span></span>
<span class="line"><span>// line-numbers is disabled by default</span></span>
<span class="line"><span>const line2 = &#39;This is line 2&#39;</span></span>
<span class="line"><span>const line3 = &#39;This is line 3&#39;</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`ts:line-numbers {1}</span></span>
<span class="line"><span>// line-numbers is enabled</span></span>
<span class="line"><span>const line2 = &#39;This is line 2&#39;</span></span>
<span class="line"><span>const line3 = &#39;This is line 3&#39;</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h2 id="将某个文件的内容显示为代码块" tabindex="-1">将某个文件的内容显示为代码块 <a class="header-anchor" href="#将某个文件的内容显示为代码块" aria-label="Permalink to &quot;将某个文件的内容显示为代码块&quot;">​</a></h2><p>你可以像下面这样将某个文件的内容显示为代码块。</p><p>在这里 <code>@</code> 的值相当于项目的源码目录的根路径。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/filepath</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; ./filepath</span></span></code></pre></div><p>如果需要设置行高亮：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; ./filepath{highlightLines}</span></span></code></pre></div><p>如果你只想显示文件中内容的某一具体部分，可以使用 <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noreferrer">VS Code region</a> 语法来达到目的。</p><p>首先文件内容的某一具体部分用 region 语法包裹起来。</p><p>代码文件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #region myFn</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// #endregion myFn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span></code></pre></div><p>然后在 .md 文件里导入的时候在路径后面拼接井号 <code>#</code> 和自定义的 region 名。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</span></span></code></pre></div><p>另外，支持你明确的指定文件内容编程语言：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 带有高亮：--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 显示行号：--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}</span></span></code></pre></div><h2 id="代码分组" tabindex="-1">代码分组 <a class="header-anchor" href="#代码分组" aria-label="Permalink to &quot;代码分组&quot;">​</a></h2><p>你可以像这样将不同的多个代码块分为不同的组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>::: code-group</span></span>
<span class="line"><span>\`\`\`js [config.js]</span></span>
<span class="line"><span>const config = {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default config</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`ts [config.ts]</span></span>
<span class="line"><span>import type { UserConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span>const config: UserConfig = {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default config</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>:::</span></span></code></pre></div><h2 id="包含-markdown-文件" tabindex="-1">包含 Markdown 文件 <a class="header-anchor" href="#包含-markdown-文件" aria-label="Permalink to &quot;包含 Markdown 文件&quot;">​</a></h2><p>你可以使用 <code>&lt;!--@include: ./xxx.md--&gt;</code> 语法使一个 markdown 文件中包含另一个 markdown 文件：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre></div><h2 id="使用原封不动的静态资源" tabindex="-1">使用原封不动的静态资源 <a class="header-anchor" href="#使用原封不动的静态资源" aria-label="Permalink to &quot;使用原封不动的静态资源&quot;">​</a></h2><p>你可能需要使用原封不动的静态资源，比如这些文件 robot.txt，favicons，PWA icons。</p><p>你可以把这些文件放在源码目录的 public 目录下面。</p><p>比如，如果你的项目根目录是 ./docs 并且使用默认的资源目录位置，那么你的 public 目录将是 ./docs/public。</p><p>被放置到 public 的资源将会被复制到输出目录的根目录。</p><p>使用绝对根路径来引用放置在 public 目录里的文件。比如，在源代码中总是以 /icon.png 的形式来引入 public/icon.png 资源。</p><h2 id="基础-url" tabindex="-1">基础 URL <a class="header-anchor" href="#基础-url" aria-label="Permalink to &quot;基础 URL&quot;">​</a></h2><p>如果你的站点被部署到一个非根路由，你将需要在 .vitepress/config.js 中设置 base 选项。</p><p>比如，你计划部署你的站点到 <code>https://foo.github.io/bar/</code>，那么 base 应该设置为 &#39;/bar/&#39;（它的开头和结尾应该都是斜杠）。</p><p>所有你的静态资源路由将被自动处理以适应不同的 base 配置值。比如，你的 markdown 引用了在 public 目录下的资源，但是你不需要画蛇添足的加上 <code>/base/</code>。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">An image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/image-inside-public.png</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>但如果你要动态引入资源，可以使用 VitePress 提供的 withBase 辅助器。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { withBase, useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(theme.logoPath)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,77),l=[e];function t(h,d,c,o,r,k){return n(),a("div",null,l)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
