const e=JSON.parse('{"key":"v-6d47439e","path":"/notes/problem/react.html","title":"react","lang":"zh-CN","frontmatter":{"title":"react","date":"2023-07-31T13:33:29.000Z","categories":["foo"],"tags":[null]},"headers":[{"level":3,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":3,"title":"闭包的作用有两种：","slug":"闭包的作用有两种","link":"#闭包的作用有两种","children":[]},{"level":3,"title":"闭包的优点：","slug":"闭包的优点","link":"#闭包的优点","children":[]},{"level":3,"title":"闭包的缺点：","slug":"闭包的缺点","link":"#闭包的缺点","children":[]},{"level":3,"title":"Es6新特性","slug":"es6新特性","link":"#es6新特性","children":[]},{"level":3,"title":"在浏览器输入URL后回车，经历了哪些过程？","slug":"在浏览器输入url后回车-经历了哪些过程","link":"#在浏览器输入url后回车-经历了哪些过程","children":[]}],"git":{"createdTime":1698402886000,"updatedTime":1698402886000,"contributors":[{"name":"”hngkkkl”","email":"2410892131@qq.com","commits":1}]},"readingTime":{"minutes":8.13,"words":2438},"filePathRelative":"notes/problem/react.md","localizedDate":"2023年7月31日","excerpt":"<h3> 闭包</h3>\\n<p>闭包的应用场景防抖与节流<br>\\n防抖:当持续触发某种事件时，一定时间没有执行该事件，处理函数才会调用。<br>\\n节流：当持续触发某种事件时，在一定时间范围内，限定执行处理函数的次数。</p>\\n<h3> 闭包的作用有两种：</h3>\\n<p>将函数需要用到的变量在函数作用域内声明，避免全局污染<br>\\n将函数内部的变量给外部作用域开放一个访问渠道(将变量设置为私有变量)</p>\\n<h3> 闭包的优点：</h3>\\n<p>1.可以读取函数内部的变量。</p>\\n<p>2.让局部变量始终保存到内存中。</p>\\n<h3> 闭包的缺点：</h3>\\n<p>和它的优点一样，有时候常驻内存是好事，但是也是坏事。在早期计算机内存很小，如果出现太多的常驻内存变量就导致内存泄漏，怎样解决这个问题呢？只需要在使用过这个变量之后给它赋值null就可以将内存释放掉。</p>"}');export{e as data};
