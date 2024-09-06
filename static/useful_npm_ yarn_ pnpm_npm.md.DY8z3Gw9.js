import{_ as s,l as i,k as a,ae as n}from"./chunks/framework.BFFW23Ds.js";const g=JSON.parse('{"title":"npm","description":"","frontmatter":{"label":"npm"},"headers":[{"level":2,"title":"如何删除一个软链接","slug":"如何删除一个软链接","link":"#如何删除一个软链接","children":[]},{"level":2,"title":"npm link 的使用","slug":"npm-link-的使用","link":"#npm-link-的使用","children":[]},{"level":2,"title":"npm install 和 npm ci 的区别","slug":"npm-install-和-npm-ci-的区别","link":"#npm-install-和-npm-ci-的区别","children":[]},{"level":2,"title":"npm 更新某个包","slug":"npm-更新某个包","link":"#npm-更新某个包","children":[]},{"level":2,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":2,"title":".npmrc 配置文件作用","slug":"npmrc-配置文件作用","link":"#npmrc-配置文件作用","children":[]},{"level":2,"title":".npmrc 文件向上查找的路径是什么？","slug":"npmrc-文件向上查找的路径是什么","link":"#npmrc-文件向上查找的路径是什么","children":[]}],"relativePath":"useful/npm, yarn, pnpm/npm.md","filePath":"useful/npm, yarn, pnpm/npm.md","lastUpdated":1709515071000}'),l={name:"useful/npm, yarn, pnpm/npm.md"},e=n(`<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><h2 id="如何删除一个软链接" tabindex="-1">如何删除一个软链接 <a class="header-anchor" href="#如何删除一个软链接" aria-label="Permalink to &quot;如何删除一个软链接&quot;">​</a></h2><p>先通过 <code>where xxx</code> 命令找到软链接 xxx 的位置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>where xxx</span></span></code></pre></div><p>然后寻着位置删除链接即可。</p><h2 id="npm-link-的使用" tabindex="-1">npm link 的使用 <a class="header-anchor" href="#npm-link-的使用" aria-label="Permalink to &quot;npm link 的使用&quot;">​</a></h2><p>先 cd 到你写的包的目录，执行 npm link，软链接到全局。</p><p>然后 cd 到你的项目中，npm link &lt;刚才的包名&gt;。</p><h2 id="npm-install-和-npm-ci-的区别" tabindex="-1">npm install 和 npm ci 的区别 <a class="header-anchor" href="#npm-install-和-npm-ci-的区别" aria-label="Permalink to &quot;npm install 和 npm ci 的区别&quot;">​</a></h2><p>来自官方文档：</p><p>简而言之，使用 npm install 和 npm ci 的主要区别是：</p><ul><li>该项目必须具有现有的 package-lock.json 或 npm-shrinkwrap.json。</li><li>如果包锁中的依赖项与 package.json 中的依赖项不匹配，npm ci 将报错退出，而不是更新包锁。</li><li>npm ci 一次只能安装整个项目：不能使用此命令添加单个依赖项。</li><li>如果 node_modules 已经存在，它将在 npm ci 开始安装之前自动删除。</li><li>它永远不会写入 package.json 或任何包锁：安装基本上是冻结的。</li></ul><p>npm ci（也称为 Clean Install）旨在用于自动化环境——例如测试平台、持续集成和部署——或者任何你想确保你正在干净安装你的依赖项的情况。</p><h2 id="npm-更新某个包" tabindex="-1">npm 更新某个包 <a class="header-anchor" href="#npm-更新某个包" aria-label="Permalink to &quot;npm 更新某个包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看某个包信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx@xxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span></span></code></pre></div><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h2><p>如果存在损坏的文件，清空缓存</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre></div><p>查看缓存的包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果只想看全局缓存的包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>查看缓存所在的位置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span></span></code></pre></div><p>查看是否还有缓存</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verify</span></span></code></pre></div><h2 id="npmrc-配置文件作用" tabindex="-1">.npmrc 配置文件作用 <a class="header-anchor" href="#npmrc-配置文件作用" aria-label="Permalink to &quot;.npmrc 配置文件作用&quot;">​</a></h2><ol><li>定义项目依赖的安装源</li><li>可以设置代理服务器（你的计算机和互联网中间的一台机器）</li><li>设置 npm 缓存的位置</li><li>配置私有仓库的认知信息</li><li>配置 npm 的默认行为，是否允许覆盖本地包</li></ol><p>.npmrc 文件会向上查找，下面的会覆盖上面的。</p><h2 id="npmrc-文件向上查找的路径是什么" tabindex="-1">.npmrc 文件向上查找的路径是什么？ <a class="header-anchor" href="#npmrc-文件向上查找的路径是什么" aria-label="Permalink to &quot;.npmrc 文件向上查找的路径是什么？&quot;">​</a></h2><p>npm 将按照以下顺序查找和应用配置：</p><ol><li>项目根目录下的 <code>.npmrc</code> 文件</li><li>用户主目录下的 <code>.npmrc</code> 文件（win 在 cmd 里输入 <code>echo %USERPROFILE%</code> 获取用户主目录）</li></ol>`,30),p=[e];function t(h,c,d,k,r,o){return a(),i("div",null,p)}const F=s(l,[["render",t]]);export{g as __pageData,F as default};
