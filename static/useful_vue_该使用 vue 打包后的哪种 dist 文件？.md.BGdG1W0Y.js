import{_ as i,l as s,k as l,ae as e}from"./chunks/framework.BFFW23Ds.js";const g=JSON.parse('{"title":"该使用 vue 打包后的哪种 dist 文件？","description":"","frontmatter":{},"headers":[{"level":2,"title":"从 CDN 引入或者不使用打包工具","slug":"从-cdn-引入或者不使用打包工具","link":"#从-cdn-引入或者不使用打包工具","children":[]},{"level":2,"title":"使用打包工具","slug":"使用打包工具","link":"#使用打包工具","children":[{"level":3,"title":"打包构建功能配置","slug":"打包构建功能配置","link":"#打包构建功能配置","children":[]}]},{"level":2,"title":"For Server-Side Rendering","slug":"for-server-side-rendering","link":"#for-server-side-rendering","children":[]},{"level":2,"title":"其它帮助理解的知识","slug":"其它帮助理解的知识","link":"#其它帮助理解的知识","children":[{"level":3,"title":"format 格式","slug":"format-格式","link":"#format-格式","children":[]},{"level":3,"title":"动态编译模板","slug":"动态编译模板","link":"#动态编译模板","children":[]},{"level":3,"title":"in-DOM templates","slug":"in-dom-templates","link":"#in-dom-templates","children":[]}]}],"relativePath":"useful/vue/该使用 vue 打包后的哪种 dist 文件？.md","filePath":"useful/vue/该使用 vue 打包后的哪种 dist 文件？.md","lastUpdated":1709816942000}'),a={name:"useful/vue/该使用 vue 打包后的哪种 dist 文件？.md"},t=e(`<h1 id="该使用-vue-打包后的哪种-dist-文件" tabindex="-1">该使用 vue 打包后的哪种 dist 文件？ <a class="header-anchor" href="#该使用-vue-打包后的哪种-dist-文件" aria-label="Permalink to &quot;该使用 vue 打包后的哪种 dist 文件？&quot;">​</a></h1><h2 id="从-cdn-引入或者不使用打包工具" tabindex="-1">从 CDN 引入或者不使用打包工具 <a class="header-anchor" href="#从-cdn-引入或者不使用打包工具" aria-label="Permalink to &quot;从 CDN 引入或者不使用打包工具&quot;">​</a></h2><ul><li><p><code>vue(.runtime).global(.prod).js</code>：</p><ul><li>直接在浏览器里通过 <code>&lt;script src=&quot;...&quot;&gt;</code> 使用 vue，这个脚本会暴露 Vue 全局对象</li><li>注意 global 构建不是 UMD 构建，这个文件被构建为 IIFE 格式以便能够通过 <code>&lt;script src=&quot;...&quot;&gt;</code> 形式引入并直接使用</li><li>在浏览器里的模板编译： <ul><li><code>vue.global.js</code> 是完整构建，它包含 compiler（编译器）和 runtime（运行时），这样它就可以动态编译模板了</li><li><code>vue.runtime.global.js</code> contains only the runtime and requires templates to be pre-compiled during a build step</li><li><code>vue.runtime.global.js</code> 仅仅包含 vue 运行时，不包含编译器。使用这个 dist 文件需要模板已经被预编译好了（一般都是在项目构建打包的时候预编译好了）</li></ul></li><li>它内联了所有的 Vue 核心内部包，也就是说，它是一个单独的文件，不依赖于其他文件</li><li>生产环境下请使用 <code>*.prod.js</code></li></ul></li><li><p><code>vue(.runtime).esm-browser(.prod).js</code>：</p><ul><li>如果使用原生模块导入（在浏览器中使用 <code>&lt;script type=&quot;module&quot;&gt;</code> 来开启原生模块），那么使用这个 dist 文件</li></ul></li></ul><h2 id="使用打包工具" tabindex="-1">使用打包工具 <a class="header-anchor" href="#使用打包工具" aria-label="Permalink to &quot;使用打包工具&quot;">​</a></h2><ul><li><code>vue(.runtime).esm-bundler.js</code>： <ul><li>在打包工具中使用 vue 使用这个 dist 文件，比如在 webpack, rollup 和 parcel 里</li><li>代码中含有 process.env 代码（上面介绍的 dist 文件不含有），这样打包工具就可以替换它们了</li><li>这个 dist 文件不会压缩代码，它的压缩有打包工具完成</li><li>会导入依赖 (比如 @vue/runtime-core, @vue/runtime-compiler)，含有像 <code>import * as runtimeDom from &#39;@vue/runtime-dom&#39;;</code> 这样的代码 <ul><li>被导入的依赖也是 esm-bundler 构建格式，它们也可能含有自身的依赖</li><li>这意味着您可以单独安装/导入这些依赖，但您必须确保它们能在一起正常工作</li></ul></li><li>浏览器里的模板编译： <ul><li>vue.runtime.esm-bundler.js 仅仅包含运行时，需要所有模板被预编译好。因为使用打包工具的话 html 模板通常都被预编译好了，所以打包工具默认引入的都是这个文件（vue 包的 package.json 的 module 字段指向了这个文件）</li><li><code>vue.esm-bundler.js</code>：包含编译器。如果你正在使用打包工具但是依然想要模板编译器（比如解析 in-DOM 模板或者 JavaScript 内联模板），那就使用这个 dist 文件</li></ul></li></ul></li></ul><h3 id="打包构建功能配置" tabindex="-1">打包构建功能配置 <a class="header-anchor" href="#打包构建功能配置" aria-label="Permalink to &quot;打包构建功能配置&quot;">​</a></h3><p><a href="https://vuejs.org/api/compile-time-flags.html" target="_blank" rel="noreferrer">详细参考链接</a>。</p><p>vue 的 esm-bundler 构建暴露了全局可以配置的功能，它们能够在编译时被重写覆盖配置：</p><ul><li><p><code>__VUE_OPTIONS_API__</code></p><ul><li>Default: true</li><li>Enable / disable Options API support</li></ul></li><li><p><code>__VUE_PROD_DEVTOOLS__</code></p><ul><li>Default: false</li><li>Enable / disable devtools support in production</li></ul></li><li><p><code>__VUE_PROD_HYDRATION_MISMATCH_DETAILS__</code></p><ul><li>Default: false</li><li>Enable / disable detailed warnings for hydration mismatches in production</li></ul></li></ul><p>The build will work without configuring these flags, however it is strongly recommended to properly configure them in order to get proper tree-shaking in the final bundle.</p><h2 id="for-server-side-rendering" tabindex="-1">For Server-Side Rendering <a class="header-anchor" href="#for-server-side-rendering" aria-label="Permalink to &quot;For Server-Side Rendering&quot;">​</a></h2><ul><li>vue.cjs(.prod).js: <ul><li>For use in Node.js server-side rendering via require().</li><li>If you bundle your app with webpack with target: &#39;node&#39; and properly externalize vue, this is the build that will be loaded.</li><li>The dev/prod files are pre-built, but the appropriate file is automatically required based on process.env.NODE_ENV.</li></ul></li></ul><h2 id="其它帮助理解的知识" tabindex="-1">其它帮助理解的知识 <a class="header-anchor" href="#其它帮助理解的知识" aria-label="Permalink to &quot;其它帮助理解的知识&quot;">​</a></h2><h3 id="format-格式" tabindex="-1">format 格式 <a class="header-anchor" href="#format-格式" aria-label="Permalink to &quot;format 格式&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">参考</p><p>rollup 打包输出的 format 配置支持以下选项：</p><ul><li>amd – 异步模块加载，适用于 RequireJS 等模块加载器</li><li>cjs – CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）</li><li>es – 将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 <code>&lt;script type=module&gt;</code> 标签的浏览器。（别名：esm，module）</li><li>iife – 自执行函数，适用于 <code>&lt;script&gt;</code> 标签（如果你想为你的应用程序创建 bundle，那么你可能会使用它）。iife 表示“自执行 函数表达式”</li><li>umd – 通用模块定义规范，同时支持 amd，cjs 和 iife</li><li>system – SystemJS 模块加载器的原生格式（别名：systemjs）</li></ul></div><h3 id="动态编译模板" tabindex="-1">动态编译模板 <a class="header-anchor" href="#动态编译模板" aria-label="Permalink to &quot;动态编译模板&quot;">​</a></h3><p>:::tip“动态编译模板”是什么意思？ 意思是可以直接解析 html 模板。我们知道 vue 组件有个 template 选项，它只有在我们引入了模板编译器后才能使用。我们可以将 html 字符片段赋值给它。</p><p>举例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &lt;button @click=&quot;toLogin&quot;&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    toLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><h3 id="in-dom-templates" tabindex="-1">in-DOM templates <a class="header-anchor" href="#in-dom-templates" aria-label="Permalink to &quot;in-DOM templates&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">in-DOM templates 和 templates via inline JavaScript strings 含义</p><p>在前端开发中，in-DOM templates 和 templates via inline JavaScript strings 是两种常见的方式来定义和表示 HTML 模板。</p><ol><li>In-DOM Templates：</li></ol><ul><li>也被称为外部模板或内联 HTML 模板</li><li>&quot;In-DOM&quot; 指的是这些模板是 DOM（Document Object Model，文档对象模型）的一部分，即它们是 HTML 文档的一部分</li><li>示例：</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- example.html --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-template&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ content }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="2"><li>Templates via Inline JavaScript Strings：</li></ol><ul><li>这种方法是在 JavaScript 文件中使用字符串来定义模板</li><li>示例：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// example.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &lt;div&gt;  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1&gt;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&lt;/h1&gt;  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;p&gt;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">content</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&lt;/p&gt;  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &lt;/div&gt;  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></div>`,22),n=[t];function p(h,r,d,o,k,u){return l(),s("div",null,n)}const E=i(a,[["render",p]]);export{g as __pageData,E as default};
