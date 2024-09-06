import{_ as t,l as s,k as a,ae as e}from"./chunks/framework.BFFW23Ds.js";const k=JSON.parse('{"title":"调试","description":"","frontmatter":{"label":"debug"},"headers":[{"level":2,"title":"移动端调试工具","slug":"移动端调试工具","link":"#移动端调试工具","children":[]},{"level":2,"title":"配置 auto-attach","slug":"配置-auto-attach","link":"#配置-auto-attach","children":[]},{"level":2,"title":"package.json 的调试操作方式","slug":"package-json-的调试操作方式","link":"#package-json-的调试操作方式","children":[]},{"level":2,"title":"基础操作","slug":"基础操作","link":"#基础操作","children":[]},{"level":2,"title":"元素面板（Element）","slug":"元素面板-element","link":"#元素面板-element","children":[{"level":3,"title":"可视化编辑 CSS","slug":"可视化编辑-css","link":"#可视化编辑-css","children":[]},{"level":3,"title":"强制激活伪类","slug":"强制激活伪类","link":"#强制激活伪类","children":[]},{"level":3,"title":"DOM 断点","slug":"dom-断点","link":"#dom-断点","children":[]}]},{"level":2,"title":"控制台面板（Console）","slug":"控制台面板-console","link":"#控制台面板-console","children":[{"level":3,"title":"console 函数","slug":"console-函数","link":"#console-函数","children":[]},{"level":3,"title":"console.log 的占位符","slug":"console-log-的占位符","link":"#console-log-的占位符","children":[]},{"level":3,"title":"监听函数","slug":"监听函数","link":"#监听函数","children":[]},{"level":3,"title":"监听变量","slug":"监听变量","link":"#监听变量","children":[]}]},{"level":2,"title":"源代码面板（Sources）","slug":"源代码面板-sources","link":"#源代码面板-sources","children":[{"level":3,"title":"断点调试","slug":"断点调试","link":"#断点调试","children":[]},{"level":3,"title":"调试线上代码","slug":"调试线上代码","link":"#调试线上代码","children":[]}]},{"level":2,"title":"网络面板（Network）","slug":"网络面板-network","link":"#网络面板-network","children":[]},{"level":2,"title":"性能面板（Performance）","slug":"性能面板-performance","link":"#性能面板-performance","children":[{"level":3,"title":"Lighthouse","slug":"lighthouse","link":"#lighthouse","children":[]}]}],"relativePath":"useful/debug/调试.md","filePath":"useful/debug/调试.md","lastUpdated":1709816942000}'),i={name:"useful/debug/调试.md"},l=e(`<h1 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h1><h2 id="移动端调试工具" tabindex="-1">移动端调试工具 <a class="header-anchor" href="#移动端调试工具" aria-label="Permalink to &quot;移动端调试工具&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UmQFy" id="tab-wwSFjB9" checked><label for="tab-wwSFjB9">新版 eruda</label><input type="radio" name="group-UmQFy" id="tab-u75bjHU"><label for="tab-u75bjHU">eruda</label><input type="radio" name="group-UmQFy" id="tab-7IGJsKk"><label for="tab-7IGJsKk">vconsole</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/eruda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;eruda.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.staticfile.org/eruda/2.4.1/eruda.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eruda.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VConsole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><h2 id="配置-auto-attach" tabindex="-1">配置 auto-attach <a class="header-anchor" href="#配置-auto-attach" aria-label="Permalink to &quot;配置 auto-attach&quot;">​</a></h2><p>VSCode 调试 JS 的方法有很多，目前比较推荐的就是无需配置的 auto-attach。默认无需配置，超级好用。</p><p>按 <code>ctrl + shift + p</code>，打开输入 <code>&gt;auto attach</code>。默认是智能（smart）。如果不是，可以查看设置成智能，或者根据场景自行设置成其他的。</p><p>再然后通过快捷键 ctrl + \` 反引号 打开终端。在终端进入到目录。执行相应的脚本。VSCode 则会自动进入到调试模式。</p><p>参考：<a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging" target="_blank" rel="noreferrer">https://code.visualstudio.com/docs/nodejs/nodejs-debugging</a></p><h2 id="package-json-的调试操作方式" tabindex="-1">package.json 的调试操作方式 <a class="header-anchor" href="#package-json-的调试操作方式" aria-label="Permalink to &quot;package.json 的调试操作方式&quot;">​</a></h2><p>在 package.json 找到相应的 scripts。</p><p>鼠标悬浮在相应的命令上，会出现 <strong>Run Script</strong> 和 <strong>Debug Script</strong> 两个选项，选择 <strong>Debug Script</strong> 即可进入调试模式。或者点击 scripts 上方的 Debug，再选择相应的命令。也可以进入调试模式。</p><h2 id="基础操作" tabindex="-1">基础操作 <a class="header-anchor" href="#基础操作" aria-label="Permalink to &quot;基础操作&quot;">​</a></h2><table tabindex="0"><thead><tr><th>操作</th><th>说明</th></tr></thead><tbody><tr><td>切换浏览器标签页（选项卡）</td><td><code>ctr + 1 ~ 9</code>：切换到第 1 ~ 9 个选项卡。<code>ctr + Pg Up/Pg On</code>：切换到左/右边一个标签页</td></tr><tr><td>浏览器全屏</td><td><code>F11</code></td></tr><tr><td>打开调试模式</td><td><code>F12</code>，<code>ctr + shift + i</code>，或则鼠标右键菜单选择开发者工具</td></tr><tr><td>控制调试工具窗口停靠在浏览器屏幕里的位置</td><td><code>ctr + shift + d</code>，在右边和下边之间切换</td></tr><tr><td>切换调试工具的标签页（又叫选项卡或面板）</td><td><code>ctr + [</code>、<code>ctr + ]</code></td></tr><tr><td>在控制台搜索</td><td><code>ctr + f</code></td></tr><tr><td>调出 commond 命令面板</td><td><code>ctr + shift + p</code>，调出集合了所有命令的面板</td></tr><tr><td>复制元素</td><td>1. 在 Elements 面板中选中元素并 ctr + c，会复制元素的整个标签结构，包括其子元素。<br> 右键选中 copy 选项，调出如下 copy 命令：<br> 2. <code>Copy element</code>：效果同第 1 点。<br> 3. <code>Copy outerHTML</code>：只复制元素的最外层标签结构，不包括其子元素。<br> 4. <code>Copy selector</code>：复制能精确查找出该元素的选择器，比如 <code>#app &gt; div &gt; aside</code>。<br> 5. <code>Copy JS path</code>：将第 4 点的结果放入 <code>document.querySelector()</code> 中。<br> 6. <code>Copy styles</code>：复制应用在该元素上的所有 css 样式。有可能复制出来的东西非常多。<br> 7. <code>Copy XPath</code>、<code>Copy full XPath</code>：用于 XML 文档，具体有什么用这里就不赘述了。 <br> 8. 在控制台中使用 window.copy() 方法，可以复制接入 copy 的参数。</td></tr><tr><td>控制台快速访问元素</td><td><code>$(&#39;selector&#39;)</code>、<code>$$(&#39;selector&#39;)</code> 或 <code>$0</code>、<code>$1</code>、<code>$n</code>。<code>$(0)</code> 代表当前选择的元素，默认为 body 标签。 <code>$$</code> 等效 <code>querySelectAll</code></td></tr><tr><td>控制台复制数据到剪切板</td><td><code>copy(anyValue)</code></td></tr><tr><td>返回参数构造出来的所有实例化对象 queryObjects(Constructor)</td><td><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-04-55-50.png" alt="" loading="lazy"> <br> 因为 queryObjects 没有返回值，所以可以在控制台右键选择 <code>Store object as global variable</code>，自动保存到变量 temp1 中。利用这个 api 可以调试生产项目，如果是一个 Vue 项目，进行以下操作：<code>queryObjects(Object) -&gt; temp1 -&gt; temp1.filter(a =&gt; a.name &amp;&amp; a._isVue)</code>。</td></tr><tr><td>控制台保存堆栈信息（Stack trace）</td><td>报错信息可以右键另存为文件</td></tr><tr><td>Store as global（存储为全局变量）</td><td>🔸 控制台（右键）：把一个对象设置为全局变量，自动命名为 temp* <br>🔸 元素面板（右键）：把一个元素设置全局变量并自动在控制台中打印</td></tr><tr><td>快速隐藏或重新显示元素</td><td>选中元素，按下 <code>h</code> 键</td></tr><tr><td>移动元素</td><td>🔸 鼠标拖动到任意位置 <br> 🔸 上下移动，[ctrl] + [⬆] / [ctrl] + [⬇]</td></tr></tbody></table><ul><li>🔸 Command 面板：同 VSCode 的命令面板，可以找到调试工具的所有的（隐藏）功能。<code>Ctrl] + [Shift] + [P]</code><ul><li>设置主题：打开 Command 面板，搜索 theme（主题），可以切换多种主题。</li><li>分析代码的覆盖率：打开 Command 面板，搜索 coverage（覆盖），分析首次页面加载过程中哪些代码执行了，那些没有执行，输出一个报告。选择文件可进一步查看代码的使用分析，红色 = 尚未执行，青蓝色 = 至少执行了一次。</li><li>元素截图：搜索 capture（截图），输出指定元素的截图，包含隐藏滚动的内容，这个功能挺好用的。</li></ul></li></ul><h2 id="元素面板-element" tabindex="-1">元素面板（Element） <a class="header-anchor" href="#元素面板-element" aria-label="Permalink to &quot;元素面板（Element）&quot;">​</a></h2><h3 id="可视化编辑-css" tabindex="-1">可视化编辑 CSS <a class="header-anchor" href="#可视化编辑-css" aria-label="Permalink to &quot;可视化编辑 CSS&quot;">​</a></h3><p>可视化的颜色、贝塞尔曲线、阴影编辑器，所见即所得，挺好用！</p><ul><li>颜色编辑器：只要是颜色属性，都可以点击色块按钮可视化编辑颜色，支持拖动设置颜色、取色、设置对比度。 <img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-06-12-56.png" alt="" loading="lazy"></li><li>Grid、Flex 布局编辑器：当使用弹性布局 Grid、Flex 时，支持可视化编辑布局对齐方式。 <img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-06-12-11.png" alt="" loading="lazy"></li><li>阴影编辑器：阴影 shadow 属性上，会出现编辑器按钮，可视化编辑阴影效果。</li><li><strong>贝塞尔曲线编辑器：在动画 transition、animation 中会用到贝塞尔曲线函数（缓动函数）</strong>。</li></ul><h3 id="强制激活伪类" tabindex="-1">强制激活伪类 <a class="header-anchor" href="#强制激活伪类" aria-label="Permalink to &quot;强制激活伪类&quot;">​</a></h3><p>强制激活元素的伪类效果。</p><ul><li>选择 Dom 节点右键“强制状态”。</li><li>如下图 CSS 样式中“切换元素状态”。</li></ul><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-06-15-12.png" alt="" loading="lazy"></p><h3 id="dom-断点" tabindex="-1">DOM 断点 <a class="header-anchor" href="#dom-断点" aria-label="Permalink to &quot;DOM 断点&quot;">​</a></h3><p>选中 DOM 元素，右键选中断点，可以在元素更改（JS 代码修改 DOM）时触发断点。</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-08-28-32.png" alt="" loading="lazy"></p><p>然后你就可以在 Sources 面板中看到 dom 断点：</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-08-30-14.png" alt="" loading="lazy"></p><h2 id="控制台面板-console" tabindex="-1">控制台面板（Console） <a class="header-anchor" href="#控制台面板-console" aria-label="Permalink to &quot;控制台面板（Console）&quot;">​</a></h2><h3 id="console-函数" tabindex="-1">console 函数 <a class="header-anchor" href="#console-函数" aria-label="Permalink to &quot;console 函数&quot;">​</a></h3><p>常用 console 函数：</p><table tabindex="0"><thead><tr><th>console 函数</th><th>说明</th></tr></thead><tbody><tr><td>console.log(str)</td><td>输出一条信息</td></tr><tr><td>console.error(str);</td><td>输出一条带有红颜色的信息</td></tr><tr><td>console.table(data [, columns])</td><td>以表格的形式打印 data。如果 data 是基本数据类型，那么和 console.log 没什么区别。如果 data 是数组，那么表格第一列是索引（index），第二列是索引对应的元素；如果元素是数组或对象，那么第二列为空，第三列及后面的列为该数组的索引或该对象的属性。第二个参数只有在元素或属性也是一个数组或对象时有用，作用是选择显示哪些属性（索引）</td></tr><tr><td>console.assert(false, &#39;false&#39;)</td><td>断言输出。如果断言为 false，则将一个错误消息写入控制台。如果断言是 true，没有任何反应。</td></tr><tr><td>console.trace()</td><td>输出当前位置的执行堆栈。</td></tr><tr><td>console.time(label)</td><td>计时器，可用来计算耗时（毫秒），三个函数配合使用：time(&#39;a&#39;) &gt; timeLog(&#39;a&#39;) &gt; timeEnd(&#39;a&#39;)</td></tr><tr><td>console.clear()</td><td>清空控制台，并输出 Console was cleared。</td></tr></tbody></table><h3 id="console-log-的占位符" tabindex="-1">console.log 的占位符 <a class="header-anchor" href="#console-log-的占位符" aria-label="Permalink to &quot;console.log 的占位符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>占位符</th><th>描述</th></tr></thead><tbody><tr><td>%c</td><td>CSS 样式占位符，值就是 CSS 样式。比如 <code>console.log(&#39;%c%s&#39;,&#39;color:red&#39;,&#39;红色的文字&#39;)</code> 会打印红色的文字。%s 字符串占位符。</td></tr><tr><td>%o 或 %O</td><td>打印 js 对象，其可以点击展开查看属性。这时候用 %c 设置样式就不起效果了。</td></tr><tr><td>%d 或 %i</td><td>打印整数。例如，console.log(&quot;Foo %d&quot;, 1.1) 会输出 <code>Foo 1</code></td></tr><tr><td>%s</td><td>打印字符串。</td></tr><tr><td>%f</td><td>打印浮点数（小数）。比如 <code>console.log(&quot;asfd%f&quot;,11.21)</code>，输出 <code>asfd11.21</code></td></tr></tbody></table><h3 id="监听函数" tabindex="-1">监听函数 <a class="header-anchor" href="#监听函数" aria-label="Permalink to &quot;监听函数&quot;">​</a></h3><p>通过如下（调试工具）的全局函数可监听一个函数、事件的执行。</p><table tabindex="0"><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>monitor(函数)</td><td>监听一个函数，当被监听函数执行的时候，会打印被调用信息</td></tr><tr><td>monitorEvents(event)</td><td>监听一个事件，当事件被触发时打印触发事件日志</td></tr></tbody></table><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-10-47-18.png" alt="" loading="lazy"></p><p>只有调试工具的命令行能使用，感觉没多大意义！</p><h3 id="监听变量" tabindex="-1">监听变量 <a class="header-anchor" href="#监听变量" aria-label="Permalink to &quot;监听变量&quot;">​</a></h3><p>点击图标为小眼睛的按钮，实时监听某个变量的值。</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-10-52-09.png" alt="" loading="lazy"></p><h2 id="源代码面板-sources" tabindex="-1">源代码面板（Sources） <a class="header-anchor" href="#源代码面板-sources" aria-label="Permalink to &quot;源代码面板（Sources）&quot;">​</a></h2><h3 id="断点调试" tabindex="-1">断点调试 <a class="header-anchor" href="#断点调试" aria-label="Permalink to &quot;断点调试&quot;">​</a></h3><ul><li><strong>添加断点（Add breakpoint）</strong>：在代码的那一行右键添加断点，或则在代码所在行的行号处点击添加断点。</li><li><strong>添加条件断点（Add conditional breakpoint）</strong>：添加一个条件断点，符合条件断点才会生效，条件可使用当前代码上下文中的变量。如下所示，当数组的长度大于 5 时，该断点就会起作用。 <img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-11-11-20.png" alt="" loading="lazy"></li><li><strong>添加记录点（Add logpoint）</strong>：添加一个日志打印，打印当前代码环境的变量，非常方便，不用在源码下添加 console 了。 <img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-11-14-38.png" alt="" loading="lazy"></li></ul><h3 id="调试线上代码" tabindex="-1">调试线上代码 <a class="header-anchor" href="#调试线上代码" aria-label="Permalink to &quot;调试线上代码&quot;">​</a></h3><p>如果是线上的环境，能不能直接修改源代码（JS、CSS）调试呢？—— 可以的。思路就是创建本地的 JS 副本，页面加载本地的 JS 文件，就可以在本地 JS 文件上修改了。</p><p><strong>① 创建本地工作目录：</strong></p><p>在源代码（Sources）面板下找到覆写（Overrides）选项：</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-06-30-11-59-19.png" alt="" loading="lazy"></p><p>点击 <code>Select folder for overrides</code>（选择文件夹用户覆写），选择一个空的文件夹，用于存放 js 副本。</p><p>需要同意授权：</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-07-01-12-01-59.png" alt="" loading="lazy"></p><p><strong>② 创建源代码的本地副本：</strong></p><p>选择需要修改的源代码右键“保存以备替代”，就会在本地目录创建副本文件，网页使用本地的 JS 文件。</p><p>创建的本地副本，可以在“覆盖”下看到，也可以在本地文件夹下看到。</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-07-01-12-03-47.png" alt="" loading="lazy"></p><p><strong>③ 编辑代码：</strong></p><p>该 JS 文件就可以直接在源代码中编辑修改了，实时生效。</p><ul><li>CSS、HTML、JavaScript 都支持。</li><li>可以在浏览器的源代码中修改，也可以本地其他工具中打开编辑。</li></ul><h2 id="网络面板-network" tabindex="-1">网络面板（Network） <a class="header-anchor" href="#网络面板-network" aria-label="Permalink to &quot;网络面板（Network）&quot;">​</a></h2><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-07-01-12-13-02.png" alt="" loading="lazy"></p><p>可以重新发送请求：</p><p><img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-07-01-12-19-45.png" alt="" loading="lazy"></p><h2 id="性能面板-performance" tabindex="-1">性能面板（Performance） <a class="header-anchor" href="#性能面板-performance" aria-label="Permalink to &quot;性能面板（Performance）&quot;">​</a></h2><p>先录制，后分析，分析网络、CPU、内存、渲染 FPS 帧率，用于定位、解决页面性能问题。</p><p>点这里先录制，然后点停止，分析这段时间内的性能。 <img src="https://my-course-public.oss-cn-shanghai.aliyuncs.com/public/img/2023-07-01-01-01-33.png" alt="" loading="lazy"></p><p>🚩特别提示：调试性能建议在无恒模式下进行，尽量避浏览器插件的影响。</p><h3 id="lighthouse" tabindex="-1">Lighthouse <a class="header-anchor" href="#lighthouse" aria-label="Permalink to &quot;Lighthouse&quot;">​</a></h3><p>对页面进行综合分析，包括性能、PWA（Progressive Web App，渐进式 Web 应用）、SEO、无障碍访问等，分析完后产出报告，给出得分，还给出了页面改进建议。</p>`,69),o=[l];function n(d,r,c,h,p,g){return a(),s("div",null,o)}const m=t(i,[["render",n]]);export{k as __pageData,m as default};
