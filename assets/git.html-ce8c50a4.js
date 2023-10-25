import{_ as a,o as s,c as e,a as n}from"./app-e45bee01.js";const i="/assets/img_1-7a0aef40.png",l={},t=n('<h1 id="使用git命令上传代码到仓库" tabindex="-1"><a class="header-anchor" href="#使用git命令上传代码到仓库" aria-hidden="true">#</a> 使用git命令上传代码到仓库</h1><p>1.首先在Gitee创建一个仓库<br><img src="'+i+`" alt="img_1.png" loading="lazy"></p><p>2.配置你的用户名和邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.查看用户名和邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.在项目内空白处右键Git Bash Here，命令行输入下列命令，初始化本地仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.添加项目目录下所有文件至本地仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.使用如下命令加入注释提交（此步骤必不可少！）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;项目初始化&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.将本地仓库与远程仓库相连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8.强制将远程仓库文件更新至指定远程仓库中（如果仓库为空可以跳过这一步骤）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9.将本地仓库中的文件推送至指定的远程仓库中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),d=[t];function c(r,o){return s(),e("div",null,d)}const u=a(l,[["render",c],["__file","git.html.vue"]]);export{u as default};
