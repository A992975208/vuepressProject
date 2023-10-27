const n=JSON.parse(`{"key":"v-2bfb00e7","path":"/notes/js/utils.html","title":"通用工具","lang":"zh-CN","frontmatter":{"order":1,"category":["代码笔记"]},"headers":[{"level":2,"title":"UUID 生成","slug":"uuid-生成","link":"#uuid-生成","children":[]},{"level":2,"title":"复制到剪贴板","slug":"复制到剪贴板","link":"#复制到剪贴板","children":[]},{"level":2,"title":"获取地址栏参数","slug":"获取地址栏参数","link":"#获取地址栏参数","children":[]},{"level":2,"title":"睡眠 Sleep","slug":"睡眠-sleep","link":"#睡眠-sleep","children":[]},{"level":2,"title":"深度合并对象","slug":"深度合并对象","link":"#深度合并对象","children":[]},{"level":2,"title":"重命名键","slug":"重命名键","link":"#重命名键","children":[]},{"level":2,"title":"解析 Cookie","slug":"解析-cookie","link":"#解析-cookie","children":[]},{"level":2,"title":"FormData 转 Object","slug":"formdata-转-object","link":"#formdata-转-object","children":[]},{"level":2,"title":"是否是浏览器环境","slug":"是否是浏览器环境","link":"#是否是浏览器环境","children":[]},{"level":2,"title":"是否是绝对 URL","slug":"是否是绝对-url","link":"#是否是绝对-url","children":[]},{"level":2,"title":"检测当前用户的首选语言","slug":"检测当前用户的首选语言","link":"#检测当前用户的首选语言","children":[]},{"level":2,"title":"检测用户设备类型","slug":"检测用户设备类型","link":"#检测用户设备类型","children":[]},{"level":2,"title":"检查是否启用 localStorage","slug":"检查是否启用-localstorage","link":"#检查是否启用-localstorage","children":[]},{"level":2,"title":"检查是否启用 sessionStorage","slug":"检查是否启用-sessionstorage","link":"#检查是否启用-sessionstorage","children":[]},{"level":2,"title":"检查是否支持 Touch 事件","slug":"检查是否支持-touch-事件","link":"#检查是否支持-touch-事件","children":[]},{"level":2,"title":"深度对象比较","slug":"深度对象比较","link":"#深度对象比较","children":[]},{"level":2,"title":"数组转嵌套对象","slug":"数组转嵌套对象","link":"#数组转嵌套对象","children":[]},{"level":2,"title":"获取 min-max 之前的随机数","slug":"获取-min-max-之前的随机数","link":"#获取-min-max-之前的随机数","children":[]},{"level":2,"title":"生成随机字符串","slug":"生成随机字符串","link":"#生成随机字符串","children":[]}],"git":{"createdTime":1698402886000,"updatedTime":1698402886000,"contributors":[{"name":"”hngkkkl”","email":"2410892131@qq.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1262},"filePathRelative":"notes/js/utils.md","localizedDate":"2023年10月27日","excerpt":"<h1> 通用工具</h1>\\n<h2> UUID 生成</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">generateUUID</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// Public Domain/MIT</span>\\n  <span class=\\"token keyword\\">var</span> d <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Date</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//Timestamp</span>\\n  <span class=\\"token keyword\\">var</span> d2 <span class=\\"token operator\\">=</span>\\n    <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> performance <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">'undefined'</span> <span class=\\"token operator\\">&amp;&amp;</span>\\n      performance<span class=\\"token punctuation\\">.</span>now <span class=\\"token operator\\">&amp;&amp;</span>\\n      performance<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">||</span>\\n    <span class=\\"token number\\">0</span> <span class=\\"token comment\\">//Time in microseconds since page-load or 0 if unsupported</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">[xy]</span><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-flags\\">g</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">c</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">var</span> r <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">random</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">16</span> <span class=\\"token comment\\">//random number between 0 and 16</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>d <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//Use timestamp until depleted</span>\\n      r <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>d <span class=\\"token operator\\">+</span> r<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">%</span> <span class=\\"token number\\">16</span> <span class=\\"token operator\\">|</span> <span class=\\"token number\\">0</span>\\n      d <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>d <span class=\\"token operator\\">/</span> <span class=\\"token number\\">16</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//Use microseconds since page-load if supported</span>\\n      r <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>d2 <span class=\\"token operator\\">+</span> r<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">%</span> <span class=\\"token number\\">16</span> <span class=\\"token operator\\">|</span> <span class=\\"token number\\">0</span>\\n      d2 <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>d2 <span class=\\"token operator\\">/</span> <span class=\\"token number\\">16</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>c <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'x'</span> <span class=\\"token operator\\">?</span> r <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>r <span class=\\"token operator\\">&amp;</span> <span class=\\"token number\\">0x3</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">|</span> <span class=\\"token number\\">0x8</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">16</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
