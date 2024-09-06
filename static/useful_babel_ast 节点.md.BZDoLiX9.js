import{_ as a,l as s,k as e,ae as i}from"./chunks/framework.BFFW23Ds.js";const g=JSON.parse('{"title":"ast 节点","description":"","frontmatter":{"label":"babel"},"headers":[{"level":2,"title":"literal 字面量","slug":"literal-字面量","link":"#literal-字面量","children":[]},{"level":2,"title":"Identifier 标识符","slug":"identifier-标识符","link":"#identifier-标识符","children":[]}],"relativePath":"useful/babel/ast 节点.md","filePath":"useful/babel/ast 节点.md","lastUpdated":1709394628000}'),t={name:"useful/babel/ast 节点.md"},l=i('<h1 id="ast-节点" tabindex="-1">ast 节点 <a class="header-anchor" href="#ast-节点" aria-label="Permalink to &quot;ast 节点&quot;">​</a></h1><p>文档：</p><p><a href="https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md" target="_blank" rel="noreferrer">https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md</a></p><p>这里简单记录几个常见 ast 节点。</p><h2 id="literal-字面量" tabindex="-1">literal 字面量 <a class="header-anchor" href="#literal-字面量" aria-label="Permalink to &quot;literal 字面量&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;haha&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // haha ---&gt; StringLiteral 字符串字面量。</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `hehe`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // hehe ---&gt; TemplateLiteral 模版字面量。</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 18 ---&gt; NumberLiteral 数字字面量。</span></span></code></pre></div><h2 id="identifier-标识符" tabindex="-1">Identifier 标识符 <a class="header-anchor" href="#identifier-标识符" aria-label="Permalink to &quot;Identifier 标识符&quot;">​</a></h2><p>变量名、属性名、参数名等等一系列声明和引用的名字。</p><p>比如在 <code>const name = &#39;haha&#39;</code> 中，<code>name</code> 就是标识符。</p>',9),n=[l];function h(r,p,d,k,o,c){return e(),s("div",null,n)}const _=a(t,[["render",h]]);export{g as __pageData,_ as default};
