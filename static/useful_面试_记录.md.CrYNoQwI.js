import{_ as s,l as a,k as n,ae as i}from"./chunks/framework.BFFW23Ds.js";const g=JSON.parse('{"title":"记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"从输入 url 到渲染页面发生了什么","slug":"从输入-url-到渲染页面发生了什么","link":"#从输入-url-到渲染页面发生了什么","children":[]},{"level":2,"title":"讲讲跨域以及解决办法","slug":"讲讲跨域以及解决办法","link":"#讲讲跨域以及解决办法","children":[]},{"level":2,"title":"讲讲 js 闭包，包括其定义和适用场景","slug":"讲讲-js-闭包-包括其定义和适用场景","link":"#讲讲-js-闭包-包括其定义和适用场景","children":[]},{"level":2,"title":"强缓存，协商缓存，localStorage，sessionStorage","slug":"强缓存-协商缓存-localstorage-sessionstorage","link":"#强缓存-协商缓存-localstorage-sessionstorage","children":[]},{"level":2,"title":"JS 基本数据类型","slug":"js-基本数据类型","link":"#js-基本数据类型","children":[]},{"level":2,"title":"createWebHistory 和 createWebHashHistory","slug":"createwebhistory-和-createwebhashhistory","link":"#createwebhistory-和-createwebhashhistory","children":[]},{"level":2,"title":"其它","slug":"其它","link":"#其它","children":[]}],"relativePath":"useful/面试/记录.md","filePath":"useful/面试/记录.md","lastUpdated":1709816942000}'),l={name:"useful/面试/记录.md"},e=i(`<h1 id="记录" tabindex="-1">记录 <a class="header-anchor" href="#记录" aria-label="Permalink to &quot;记录&quot;">​</a></h1><h2 id="从输入-url-到渲染页面发生了什么" tabindex="-1">从输入 url 到渲染页面发生了什么 <a class="header-anchor" href="#从输入-url-到渲染页面发生了什么" aria-label="Permalink to &quot;从输入 url 到渲染页面发生了什么&quot;">​</a></h2><p><a href="https://juejin.cn/post/7320224895228133388" target="_blank" rel="noreferrer">https://juejin.cn/post/7320224895228133388</a></p><h2 id="讲讲跨域以及解决办法" tabindex="-1">讲讲跨域以及解决办法 <a class="header-anchor" href="#讲讲跨域以及解决办法" aria-label="Permalink to &quot;讲讲跨域以及解决办法&quot;">​</a></h2><ol><li>JSONP：通过动态创建 <code>&lt;script&gt;</code> 标签，利用 <code>&lt;script&gt;</code> 标签的跨域特性来实现跨域请求。</li><li>CORS（跨域资源共享）：在服务端设置响应头部信息，允许指定源的请求访问资源，常用的响应头部信息包括 Access-Control-Allow-Origin、Access-Control-Allow-Methods 等。</li><li>代理：在同源的服务器上设置一个代理服务器，由代理服务器转发请求，从而绕过浏览器的跨域限制。</li><li>跨文档消息传递（Cross-document Messaging）：使用 window.postMessage() 方法在不同窗口之间传递消息，实现跨域通信。</li></ol><h2 id="讲讲-js-闭包-包括其定义和适用场景" tabindex="-1">讲讲 js 闭包，包括其定义和适用场景 <a class="header-anchor" href="#讲讲-js-闭包-包括其定义和适用场景" aria-label="Permalink to &quot;讲讲 js 闭包，包括其定义和适用场景&quot;">​</a></h2><p>闭包是指在一个函数内部定义的函数可以访问该函数的作用域。在 JavaScript 中，由于函数可以作为值返回，因此函数可以嵌套定义，形成闭包。</p><p>闭包可能导致内存泄露，如何规避这个问题？</p><ol><li>避免不必要的引用：在编写闭包时，尽量避免将外部函数作用域中不再需要的变量引入闭包中。如果一个变量在闭包中没有被使用，那么就不要将其引入闭包。</li><li>手动释放引用：在不再需要使用闭包时，可以手动将闭包引用的变量设置为 null，这样可以告诉垃圾回收器可以回收这些变量。</li><li>使用匿名自执行函数：有时候可以使用匿名自执行函数来代替显式的闭包，因为匿名自执行函数在执行完毕后，其内部的变量会被立即释放，不会造成内存泄露。</li></ol><h2 id="强缓存-协商缓存-localstorage-sessionstorage" tabindex="-1">强缓存，协商缓存，localStorage，sessionStorage <a class="header-anchor" href="#强缓存-协商缓存-localstorage-sessionstorage" aria-label="Permalink to &quot;强缓存，协商缓存，localStorage，sessionStorage&quot;">​</a></h2><p>前端缓存可以分为两种类型：浏览器缓存和 Web Storage。</p><ol><li>浏览器缓存：浏览器缓存是指浏览器在本地保存一些静态资源的副本，以便在下次访问相同资源时可以直接从本地获取，而不需要再次从服务器下载。浏览器缓存主要包括以下几种类型：</li></ol><ul><li>强缓存：浏览器在请求资源时，会先检查该资源的缓存标识（如 Cache-Control 和 Expires），如果命中强缓存，则直接从缓存中获取资源，不会发送请求到服务器。</li><li>协商缓存：如果资源的缓存标识表示资源已经过期（如 Cache-Control 中的 max-age 或者 Last-Modified 和 ETag 等），浏览器会发送请求到服务器，服务器会根据请求头中的条件判断来决定是否返回资源内容，如果返回 304 状态码表示资源未发生改变，浏览器可以使用缓存中的资源。</li></ul><ol start="2"><li>Web Storage：Web Storage 是 HTML5 提供的一种浏览器本地存储数据的方式，主要包括 localStorage 和 sessionStorage 两种。它们可以存储在浏览器中供网站使用，可以在页面会话结束后依然保留（localStorage），或者在页面会话结束后被清除（sessionStorage）。</li></ol><ul><li>localStorage：localStorage 存储的数据没有过期时间，除非手动清除，否则会一直保存在浏览器中。</li><li>sessionStorage：sessionStorage 存储的数据在页面会话结束时被清除，即当页面被关闭时数据也会被清除。</li></ul><h2 id="js-基本数据类型" tabindex="-1">JS 基本数据类型 <a class="header-anchor" href="#js-基本数据类型" aria-label="Permalink to &quot;JS 基本数据类型&quot;">​</a></h2><p>共有七种。基本数据类型使用 typeof 来区分判断。 但是不能用 typeof 来判断是不是 null，<code>typeof null</code> 返回 &quot;object&quot;，因此必须使用 <code>=== null</code> 来测试 null。</p><ol><li>Null，<code>typeof</code> 返回值为 &quot;object&quot;</li><li>Undefined，<code>typeof</code> 返回值为 &quot;undefined&quot;</li><li>Boolean，<code>typeof</code> 返回值为 &quot;boolean&quot;</li><li>Number，<code>typeof</code> 返回值为 &quot;number&quot;</li><li>BigInt，<code>typeof</code> 返回值为 &quot;bigint&quot;</li><li>String，<code>typeof</code> 返回值为 &quot;string&quot;</li><li>Symbol，<code>typeof</code> 返回值为 &quot;symbol&quot;</li></ol><h2 id="createwebhistory-和-createwebhashhistory" tabindex="-1">createWebHistory 和 createWebHashHistory <a class="header-anchor" href="#createwebhistory-和-createwebhashhistory" aria-label="Permalink to &quot;createWebHistory 和 createWebHashHistory&quot;">​</a></h2><p>createWebHistory 利用浏览器的 History api 来实现路由的前进、后退，url 中不带有 hash，缺点是低版本浏览器不支持，部署上线时需要后端配置重定向路由，防止 404；</p><p>createWebHashHistory 监听 url 地址栏的 hashchange 事件来实现路由的前进、后退。有点是兼容性好，不需要后端配置 404 路由。</p><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><p><a href="http://caibaojian.com/vue-design/" target="_blank" rel="noreferrer">http://caibaojian.com/vue-design/</a></p><p><a href="https://vue3js.cn/interview/" target="_blank" rel="noreferrer">https://vue3js.cn/interview/</a></p><p>小程序性能优化手段：</p><p><a href="https://uniapp.dcloud.io/tutorial/performance.html#%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">https://uniapp.dcloud.io/tutorial/performance.html#运行原理</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dom，bom</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">箭头函数区别</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">var、let、const</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">最开始的网页就是可以在网络上浏览的一张张报纸。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">怎么理解MVVM呢？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">M就是model，模型，处理业务逻辑和与数据库交互的。（可以理解为JS代码）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v就是view，视图，用户看得到的界面。（可以理解为用户看见的界面。）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vm就是view-model，连接视图与模型之间的桥梁。（可以理解为v-model、v-bind等指令）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">什么是单页应用？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">只有一个页面，通过动态重写当前页面内容来与用户进行交互。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">多页应用是有多个页面，每次加载页面都要重新加载html，css，js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    单页面应用（SPA）</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	        多页面应用（MPA）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">组成</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	            一个主页面和多个页面片段</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	 多个主页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">刷新方式</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	        局部刷新</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	                整页刷新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url模式</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	            哈希模式</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	                历史模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SEO搜索引擎优化</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	     难实现，可使用SSR方式改善</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	容易实现</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">数据传递</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	        容易</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	通过url、cookie、localStorage等传递</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">页面切换</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	        速度快，用户体验良好</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	切换加载资源，速度慢，用户体验差</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">维护成本</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	        相对容易</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	相对复杂</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash路由和history路由区别？</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://blog.csdn.net/weixin_39556702/article/details/110990184</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash路由通过监听hash变化来控制页面，不会发起http请求。因为hash就是一个页面的位置，和游览器有关，与服务器无关。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">history路由通过HTML5的histor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api来控制页面。地址栏看起来更美观。不过这也导致刷新浏览器页面，可能会出现404，所以需要后端配合重定向到首页。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">深克隆、浅克隆。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">基本数据类型存放在栈内存中。引用数据类型存放在堆内存中。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">你把一个数据赋值给一个变量，修改这个变量，如果原数据也会发生改变，就是浅克隆；如果原数据不发生改变，就是深克隆。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">undefined</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> null区别，==是否相等，===是否相等。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">undefined表示一个变量自然、最初始的状态值。null则是人为设置的一个空对象；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">undefined不会占用任何空间，而null会占用系统内存。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">基本数据类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Number、String、Boolean、Null、Undefined、Symbol。引用数据类型Object、Array、Function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">原型链</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">你可以想象成一条较短的链子，多个较短的链子连接形成一条长的链子。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">每个函数都有个prototype属性，指向其原型对象。通过new构造函数实例化出的对象，有一个属性为__proto__，指向其构造函数的原型对象，这样就形成了一个较短的链子。然后原型对象也是对象，它也可以形成一个较短的链子。将这些链子连接起来，就是原型链了。原型链的最上层为Object.prototype,值为null。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">路由传参方式？有什么区别？</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query传参和params传参。query传刷新不会丢失。params传会丢失。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">数组扁平化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">去重</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Set。indexOf(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">item</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue的理解：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue是一个构建用户界面的JS框架。它建立HTML，CSS，JS之上。并且提供一个声明式的、基于组件的编程模式，以帮助开发人员快速有效的开发用户界面。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vue2实例挂载过程中发生了什么？</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">首先找到Vue构造函数，传入参数为options，options就是用户传入的配置项，比如props，methods，data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">然后执行init方法。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">在init方法里面，有个initState方法，作用是初始化用户传入的配置项，然后就可以通过this获取访问到它们。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">由此可知在beforeCreate钩子里不能获取到props、methods等配置项。在created钩子里可以获取到。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后我们点到initState方法里面，可以看到Vue初始化用户传入配置项的顺序依次为props、methods、data、computed、watch。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后有个初始化data的方法，名叫initData，在initData里面，会判断data的值是一个对象还是一个函数返回一个对象。data的属性名是不是和props、methods重复。最后会将data转换为响应式数据。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">然后init方法结尾，会执行mount挂载方法。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">在mount方法里，会看到vue不允许将模板直接挂载到body或document标签上。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              会把template模板解析为ast虚拟语法树，再将其转换为render语法字符串，并生成render方法。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount方法最后会去执行mountComponent方法，在里面会触发beforeMount钩子；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">在mountComponent里面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">会定义updateComponent渲染页面视图的方法，主要执行render、update方法，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render方法返回虚拟dom，update方法主要功能是调用patch方法，将虚拟dom转为真实dom，并更新到页面；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">会会new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 一个watcher对vm也就是vue实例进行监听，并执行updateComponent方法。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">最后调用mounted生命周期钩子，至此vue的组件实例化结束。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue给对象添加新属性界面不刷新？</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue2使用object.defineProperty实现数据响应式，当获取、修改属性时能被拦截到，但是当动态添加、删除某个属性时不会被拦截到。这时候可以使用Vue.set、$forceUpdate、方法来使页面刷新。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue底层原理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue的key的理解</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">用过Proxy吗</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue2和vue3有什么区别</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-model实现原理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">说一下uniapp的理解</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">一个基于Vue的多端开发框架，一套代码，可以发布到H5、小程序、App多个平台。优点是开发快速。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">我用uniapp的一些坑：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">使用全局混入mixins，为每个页面添加onShareAppMessage生命周期函数，使得可以分享。但是不会起作用。因为这是个bug，后来官方修复了。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uniapp的ui框架，colorUI，uView，graceUI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">小程序生命周期钩子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">应用生命周期：onLaunch，onShow，onHide，onError</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">页面生命周期：onLoad，onReady，onShow，onHide，onPullDownRefresh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">组件生命周期：beforeCreate，created，beforeMounte，mounted。。。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-if和v-show</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">共同点：控制页面元素是否显示。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">不同点：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-show是为元素添加css--display：none来隐藏元素，dom元素依旧存在。v-if是将整个dom元素添加或删除。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-if会销毁重建事件监听和子组件，以及生命周期钩子。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-if有更高的切换性能消耗。v-show有更高的初始渲染性能消耗。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue性能优化手段：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">路由懒加载、使用cdn引入项目组件、gzip压缩（前端使用webpack插件compression-webpack-plugin）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">小程序性能优化手段：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://uniapp.dcloud.io/tutorial/performance.html#%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">computed和watch有什么区别，watchEffect</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">computed有缓存。计算属性。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch是监视响应式数据，发生改变，更新视图。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watchEffect是第一次就会执行回调函数，后面回调里的响应式数据更新，又会重新触发回调函数，更新视图。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">怎么缓存一个组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keepAlive。组件就不会重建和销毁，也不会触发对应的生命周期钩子</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">你有什么想问我的？</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">公司使用什么技术栈？我要是去公司能为公司做什么事情呢？公司的发展方向是什么呀？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">强缓存和协商缓存</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">输入url到显示发生了什么</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">村长、然叔、winter三位大佬好。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">买过讲买过vue原理、掘金小册的课</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">少些一点。聚合一点。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">培训出来的要补哪些东西才能追上计算机专业的学士。（不要在意）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">看完村长的源码课。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">怎么才能进大厂。</span></span></code></pre></div>`,27),p=[e];function t(h,k,r,o,c,d){return n(),a("div",null,p)}const y=s(l,[["render",t]]);export{g as __pageData,y as default};
