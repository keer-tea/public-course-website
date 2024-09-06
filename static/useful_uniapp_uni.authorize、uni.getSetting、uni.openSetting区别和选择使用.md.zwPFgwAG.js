import{_ as i,l as n,k as s,ae as a}from"./chunks/framework.BFFW23Ds.js";const d=JSON.parse('{"title":"uni.authorize、uni.getSetting、uni.openSetting 区别和选择使用","description":"","frontmatter":{"label":"uniapp"},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"理解","slug":"理解","link":"#理解","children":[]},{"level":2,"title":"个人结论","slug":"个人结论","link":"#个人结论","children":[]}],"relativePath":"useful/uniapp/uni.authorize、uni.getSetting、uni.openSetting区别和选择使用.md","filePath":"useful/uniapp/uni.authorize、uni.getSetting、uni.openSetting区别和选择使用.md","lastUpdated":1709816942000}'),t={name:"useful/uniapp/uni.authorize、uni.getSetting、uni.openSetting区别和选择使用.md"},e=a(`<h1 id="uni-authorize、uni-getsetting、uni-opensetting-区别和选择使用" tabindex="-1">uni.authorize、uni.getSetting、uni.openSetting 区别和选择使用 <a class="header-anchor" href="#uni-authorize、uni-getsetting、uni-opensetting-区别和选择使用" aria-label="Permalink to &quot;uni.authorize、uni.getSetting、uni.openSetting 区别和选择使用&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>我一直对 uni.authorize、uni.getSetting、uni.openSetting 的使用感到纠结。</p><p>以获取位置授权为例，</p><p>大多数人判断用户是否授权都是先使用 getSetting 判断用户已授权的列表，</p><pre><code>如果需要授权的那一项为true可以直接使用uni.getLocation获取用户位置信息；

但如果为false，就使用authorize进行授权，

但因为之前已经拒绝授权，所以会直接走失败回调，

然后我们在失败回调里使用uni.openSetting提示用户打开位置权限。
</code></pre><p>我就感觉这里有点多余，直接使用 uni.authorize 或者 uni.getSetting 判断是否授权，然后是否需要使用 uni.openSetting 就好了，为什么要判断两次呢？</p><h2 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.authorize</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如果是第一次，会弹框让用户判断是否授权。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会去判断某个权限是否已经授权。已授权走成功回调，没授权走失败回调。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.getSetting</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会去获取用户已经授权的权限。成功回调的参数res是授权的列表。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.openSetting</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是打开设置，开启或关闭某个权限。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">微信中在manifest.json中必须配置如下，然后在用户打开小程序时自动弹框提示用户是否授权小程序使用位置信息。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;mp-weixin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;appid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wx58a7869155c1d656&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;permission&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;scope.userLocation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你的位置信息将用于院区自动选择&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   },</span></span></code></pre></div><h2 id="个人结论" tabindex="-1">个人结论 <a class="header-anchor" href="#个人结论" aria-label="Permalink to &quot;个人结论&quot;">​</a></h2><p>最后我个人认为如果某个功能必须要用户打开某个权限，直接使用 uni.authorize 即可。</p><p>uni.getSetting 也行，只不过多一次判断。然后再根据业务需求使用 uni.openSetting 让用户打开某项设置权限即可。</p><p>最后最后，如果大佬觉得我的理解是错了，请评论帮我纠正一下，多谢！</p>`,13),p=[e];function l(h,u,o,r,k,g){return s(),n("div",null,p)}const c=i(t,[["render",l]]);export{d as __pageData,c as default};
