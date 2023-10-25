import{_ as a,r as s,o as d,c,f as l,d as n,e,b as i,a as t}from"./app-4c532fb6.js";const r={},p=n("h1",{id:"git-根据目录文件夹配置用户名和邮箱",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-根据目录文件夹配置用户名和邮箱","aria-hidden":"true"},"#"),e(" Git 根据目录文件夹配置用户名和邮箱")],-1),u=n("p",null,[e("平常开发过程中自己电脑 Git 全局配置的用户名和邮箱都是自己常用的，由于会存在开发公司项目的情况，Git 配置的用户名和邮箱肯定会不一样，此时需要手动在公司项目仓库下面单独设置提交的"),n("code",null,"user.name"),e("和"),n("code",null,"user.email"),e("，有人肯定会说这也没啥麻烦的，但是公司项目过多的情况下拉取仓库后很可能会忘记设置，导致提交记录里面的用户名非公司项目账号，这个就会尴尬 😅，然后自己 Google 了一番记录下根据目录文件夹的形式去配置用户名和邮箱，该目录下的所有项目都会统一使用相同的 Git 配置。")],-1),g=n("h2",{id:"git-配置文件层级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-配置文件层级","aria-hidden":"true"},"#"),e(" Git 配置文件层级")],-1),h={href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"/etc/gitconfig",-1),_=n("code",null,"~/.gitconfig",-1),b=n("code",null,"~/.config/git/config",-1),v=n("code",null,".git/config",-1),f=t('<ul><li>系统层级: <code>/etc/gitconfig</code>，作用于系统中每位用户的 Git 配置。</li><li>用户层级: <code>~/.gitconfig</code>，作用于具体用户的 Git 配置。</li><li>项目层级: <code>.git/config</code>，作用于具体仓库，只对该仓库有效。</li></ul><h2 id="includeif" tabindex="-1"><a class="header-anchor" href="#includeif" aria-hidden="true">#</a> [includeIf]</h2>',2),k={href:"https://git-scm.com/docs/git-config#_conditional_includes",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"includeIf.<condition>.path",-1),G=n("code",null,"condition",-1),E=n("code",null,"path",-1),I=t(`<p>[includeIf] 的语法如下，<code>&lt;keyword&gt;</code> 为关键词，<code>&lt;data&gt;</code> 是与关键词关联的数据， 具体意义由关键词决定。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>includeIf <span class="token string">&quot;&lt;keyword&gt;:&lt;data&gt;&quot;</span><span class="token punctuation">]</span>
  path <span class="token operator">=</span> path/to/gitconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中支持的 keyword 关键词有<code>gitdir</code>、<code>gitdir/i</code>、<code>onbranch</code>：</p><ul><li><code>gitdir</code>: 其中 <code>&lt;data&gt;</code> 是一个 <code>glob pattern</code> 如果代码仓库的<code>.git</code> 目录匹配 <code>&lt;data&gt;</code> 指定的 <code>glob pattern</code>，那么条件命中；</li><li><code>gitdir/i</code>：<code>gitdir</code> 的大小写不敏感版本。</li><li><code>onbranch</code>：其中 <code>&lt;data&gt;</code> 是匹配分支名的一个 <code>glob pattern</code>， 假如代码仓库中分支名匹配 <code>&lt;data&gt;</code>，那么条件就成立。</li></ul><p>看下来后我们其实需要的是就是<code>gitdir</code>，根据代码目录仓库匹配。</p><h2 id="实例配置" tabindex="-1"><a class="header-anchor" href="#实例配置" aria-hidden="true">#</a> 实例配置</h2><p>假如公司的所有项目都放在<code>~/jobCode/</code>目录下面。编辑用户目录下面的配置文件<code>~/.gitconfig</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.gitconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件的最后加上<code>includeIf</code>配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:~/jobCode/&quot;</span><span class="token punctuation">]</span>
  path <span class="token operator">=</span> ~/jobCode/.gitconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后在<code>~/jobCode/</code>目录下面新增<code>.gitconfig</code>配置文件，并配置<code>user.name</code>和<code>user.email</code>信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user<span class="token punctuation">]</span>
  name <span class="token operator">=</span> xx
  email <span class="token operator">=</span> xx

<span class="token punctuation">[</span>http<span class="token punctuation">]</span>
  <span class="token comment"># 如果需要代理的话配置proxy，不需要可以忽略</span>
  proxy <span class="token operator">=</span> <span class="token operator">&lt;</span>Proxy URL<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后可以重新拉取一个公司的新仓库，随便改点东西提交后查看提交记录中的用户名和邮箱验证下。</p>`,13);function y(C,A){const o=s("ExternalLinkIcon");return d(),c("div",null,[p,u,l(" more "),g,n("p",null,[e("先了解下 Git 有哪些层级的配置，通过"),n("a",h,[e("自定义 Git - 配置 Git"),i(o)]),e("中可以看到，Git 会首先会查找系统级的 "),m,e(" 文件，该文件含有系统里每位用户及他们所拥有的仓库的配置值。接下来 Git 会查找每个用户的"),_,e(" 文件（或者 "),b,e(" 文件），最后 Git 会查找你正在操作的仓库所对应的 Git 目录下的配置文件（"),v,e("），这个文件中的值只对该仓库有效。")]),f,n("p",null,[e("Git 配置文件支持 "),n("a",k,[e("Conditional Includes"),i(o)]),e(" 的配置。通过设置 "),x,e("，可以向命中 "),G,e(" 的 Git 仓库引入 "),E,e(" 指向一个 自定义的 Git 配置文件。")]),I])}const N=a(r,[["render",y],["__file","git-config-width-directory.html.vue"]]);export{N as default};