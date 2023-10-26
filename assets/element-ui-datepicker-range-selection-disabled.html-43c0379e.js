import{_ as e,r as t,o as p,c as o,f as c,d as n,e as s,b as i,a as l}from"./app-5ba7297e.js";const u={},r=n("h1",{id:"element-ui-datepicker-日期范围选择动态设置禁选日期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#element-ui-datepicker-日期范围选择动态设置禁选日期","aria-hidden":"true"},"#"),s(" Element UI DatePicker 日期范围选择动态设置禁选日期")],-1),d=n("p",null,[s("之前看到群里又小伙伴提出了一个"),n("code",null,"DatePicker"),s("日期范围组件的一个问题"),n("br"),s(" 用图描述大概就是选择开始日期 13 号后，只能选择 13 号前一周和后一周的日期，其他日期处于禁止选择状态。")],-1),k=n("figure",null,[n("img",{src:"https://image.liubing.me/2019/12/26/4c3e37b2f6308.png",alt:"image",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image")],-1),m=n("code",null,"onPick",-1),v={href:"http://element-cn.eleme.io/#/zh-CN/component/date-picker#picker-options",target:"_blank",rel:"noopener noreferrer"},b=l(`<figure><img src="https://image.liubing.me/2019/12/26/8e4e2c936d971.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>根据这个回调函数可以拿到点击的开始时间是，然后根据点击的开始时间在<code>picker-options</code>中<code>disabledDate</code>中处理需禁用的日期，由于这个日期是动态不确定的，所以将<code>picker-options</code>放在<code>computed</code>里面去处理，大致下面这个样子，可以获取到<code>data</code>中的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">pickerOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">disabledDate</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//此处可以根据_this获取到data中定义的数据</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">onPick</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>maxDate<span class="token punctuation">,</span> minDate<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>onPick</code>选择第一个日期的时候能够取到的是<code>minDate</code>，<code>maxDate</code>是取不到的，将取到的<code>minDate</code>存下来<code>this.minDate = minDate</code>，在<code>disabledDate</code>里面根据<code>minDate</code>进行相关处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">pickerOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">disabledDate</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> times <span class="token operator">=</span>  <span class="token number">86400000</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token comment">//一周的毫秒数</span>
        <span class="token keyword">let</span> curSelectTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>minDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> before <span class="token operator">=</span> curSelectTime <span class="token operator">-</span> times<span class="token comment">//前一周毫秒数</span>
        <span class="token keyword">let</span> after <span class="token operator">=</span> curSelectTime <span class="token operator">+</span> times<span class="token comment">//后一周毫秒数</span>
        <span class="token keyword">return</span> time<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> after <span class="token operator">||</span> time<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> before
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onPick</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>maxDate<span class="token punctuation">,</span> minDate<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>maxDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          _this<span class="token punctuation">.</span>minDate <span class="token operator">=</span> minDate
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动图预览：</p><figure><img src="https://image.liubing.me/2019/12/26/6ef3d8a77c480.gif" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>在线预览：</p>`,8),g=n("iframe",{width:"100%",height:"300",src:"//jsrun.pro/beXKp/embedded/all/light/",allowfullscreen:"allowfullscreen",frameborder:"0"},null,-1);function f(h,_){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,d,c(" more "),k,n("p",null,[s("先去看了下 element 的相关文档，找到了一个点击选择日期后相关回调函数"),m,s("，"),n("a",v,[s("传送门"),i(a)])]),b,g])}const y=e(u,[["render",f],["__file","element-ui-datepicker-range-selection-disabled.html.vue"]]);export{y as default};