import{_ as a,l as s,k as i,ae as e}from"./chunks/framework.BFFW23Ds.js";const _=JSON.parse('{"title":"windows","description":"","frontmatter":{"label":["windows"]},"headers":[{"level":2,"title":"连续复制粘贴","slug":"连续复制粘贴","link":"#连续复制粘贴","children":[]},{"level":2,"title":"固定电脑的 ip 地址（使用电脑的静态 ip 地址）","slug":"固定电脑的-ip-地址-使用电脑的静态-ip-地址","link":"#固定电脑的-ip-地址-使用电脑的静态-ip-地址","children":[]},{"level":2,"title":"打开剪切板","slug":"打开剪切板","link":"#打开剪切板","children":[]}],"relativePath":"useful/windows/windows.md","filePath":"useful/windows/windows.md","lastUpdated":1709394628000}'),n={name:"useful/windows/windows.md"},t=e(`<h1 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;windows&quot;">​</a></h1><h2 id="连续复制粘贴" tabindex="-1">连续复制粘贴 <a class="header-anchor" href="#连续复制粘贴" aria-label="Permalink to &quot;连续复制粘贴&quot;">​</a></h2><p>win + c</p><p>win + v</p><h2 id="固定电脑的-ip-地址-使用电脑的静态-ip-地址" tabindex="-1">固定电脑的 ip 地址（使用电脑的静态 ip 地址） <a class="header-anchor" href="#固定电脑的-ip-地址-使用电脑的静态-ip-地址" aria-label="Permalink to &quot;固定电脑的 ip 地址（使用电脑的静态 ip 地址）&quot;">​</a></h2><p>win11 中，在设置里，点击侧边栏的网络和 Internet -&gt; 高级网络设置 -&gt; 更多网络适配器选项 -&gt; WLAN。右键 WLAN，点击属性。选择 internet 协议版本 4 (TCP/IPv4)，进行设置。</p><p>设置你的静态 ip 地址，子关网码。可以先通过 ipconfig 获取相关信息，然后只将动态 ip 地址改为静态 ip 地址，其余的和原来保持一样。</p><p>注意设置静态 ip 后，dns 服务器地址也必须手动指定：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>首选 dns：112.124.47.27</span></span>
<span class="line"><span>备用 dns：114.215.126.16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你是北方用户，将它们调换下顺序即可。</span></span></code></pre></div><h2 id="打开剪切板" tabindex="-1">打开剪切板 <a class="header-anchor" href="#打开剪切板" aria-label="Permalink to &quot;打开剪切板&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">win</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v</span></span></code></pre></div>`,11),l=[t];function p(d,o,h,r,c,u){return i(),s("div",null,l)}const k=a(n,[["render",p]]);export{_ as __pageData,k as default};
