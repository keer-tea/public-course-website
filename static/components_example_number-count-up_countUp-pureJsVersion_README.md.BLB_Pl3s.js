import{_ as i,l as e,k as a,ae as s}from"./chunks/framework.BFFW23Ds.js";const u=JSON.parse('{"title":"like","description":"","frontmatter":{},"headers":[{"level":2,"title":"like 使用方法","slug":"like-使用方法","link":"#like-使用方法","children":[]},{"level":2,"title":"like 参数说明","slug":"like-参数说明","link":"#like-参数说明","children":[]},{"level":2,"title":"like 内置 API","slug":"like-内置-api","link":"#like-内置-api","children":[]}],"relativePath":"components/example/number-count-up/countUp-pureJsVersion/README.md","filePath":"components/example/number-count-up/countUp-pureJsVersion/README.md","lastUpdated":1709816942000}'),t={name:"components/example/number-count-up/countUp-pureJsVersion/README.md"},l=s(`<h1 id="like" tabindex="-1">like <a class="header-anchor" href="#like" aria-label="Permalink to &quot;like&quot;">​</a></h1><p>点赞动画</p><img width="30%" src="https://cdn.jsdelivr.net/gh/ZHOUYUANN/BlogBed@master/20210919/like.2x0jhvwpazq0.gif"><h2 id="like-使用方法" tabindex="-1">like 使用方法 <a class="header-anchor" href="#like-使用方法" aria-label="Permalink to &quot;like 使用方法&quot;">​</a></h2><p>首先引入插件 <code>like.js</code> 和 <code>like.css</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;like.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  var like = new Like({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    element: document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.like&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: value,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    click: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    callback: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="like-参数说明" tabindex="-1">like 参数说明 <a class="header-anchor" href="#like-参数说明" aria-label="Permalink to &quot;like 参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">element</td><td style="text-align:center;"><code>dom 对象</code>（必须）</td><td style="text-align:left;">点赞的 dom 区块</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">0（必须）</td><td style="text-align:left;">点赞时的数字</td></tr><tr><td style="text-align:center;">click</td><td style="text-align:center;">false</td><td style="text-align:left;">默认是否可以点击</td></tr><tr><td style="text-align:center;">callback</td><td style="text-align:center;"><code>func</code></td><td style="text-align:left;">如果设置 click 就会返回数字</td></tr></tbody></table><h2 id="like-内置-api" tabindex="-1">like 内置 API <a class="header-anchor" href="#like-内置-api" aria-label="Permalink to &quot;like 内置 API&quot;">​</a></h2><h4 id="like-updatevalue-val" tabindex="-1">like.updateValue(val) <a class="header-anchor" href="#like-updatevalue-val" aria-label="Permalink to &quot;like.updateValue(val)&quot;">​</a></h4><p><code>val</code> 是一个数字类型，可以手动配置点赞初始化的数量。</p><h4 id="like-addnum-val" tabindex="-1">like.addNum(val) <a class="header-anchor" href="#like-addnum-val" aria-label="Permalink to &quot;like.addNum(val)&quot;">​</a></h4><p><code>val</code> 是一个数字类型，可以手动配置点赞 +1。</p><h4 id="like-reducenum-val" tabindex="-1">like.reduceNum(val) <a class="header-anchor" href="#like-reducenum-val" aria-label="Permalink to &quot;like.reduceNum(val)&quot;">​</a></h4><p><code>val</code> 是一个数字类型，可以手动配置点赞 -1。</p>`,15),n=[l];function k(h,p,d,r,c,E){return a(),e("div",null,n)}const g=i(t,[["render",k]]);export{u as __pageData,g as default};
