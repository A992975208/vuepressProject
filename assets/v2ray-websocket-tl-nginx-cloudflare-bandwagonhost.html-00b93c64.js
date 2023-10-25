import{_ as c,r as o,o as d,c as g,f as s,d as e,e as a,b as i,w as l,a as t}from"./app-e45bee01.js";const p={},u=e("h1",{id:"v2ray-websocket-ws-tls-nginx-cloudflare-拯救搬瓦工被封-ip-的-vps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v2ray-websocket-ws-tls-nginx-cloudflare-拯救搬瓦工被封-ip-的-vps","aria-hidden":"true"},"#"),a(" V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare 拯救搬瓦工被封 IP 的 VPS")],-1),h=e("p",null,[a("上一次国庆的时候打击力度真是大，可谓是血色国庆，一大波梯子惨遭封禁，楼主的也不例外，"),e("br"),a(" 网上搜索了下搬瓦工被封 IP，之前搬瓦工还是可以免费更换 IP 的，现在政策改了，不在提供免费的更换 IP 服务，"),e("br"),a(" 所以你得你得花 60 多块钱重新买个 IP。"),e("br"),a(" 在搜索的过程中无意间看到了 V2Ray，于是搜索了下 V2Ray 搬瓦工关键词，果然找到了相应的教程。"),e("br"),a(" 下面开始大概讲下教程，如果你有装宝塔面板的话就更简单了，配合 V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare 即可拯救你的 VPS。")],-1),m=e("h2",{id:"准备一个域名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备一个域名","aria-hidden":"true"},"#"),a(" 准备一个域名")],-1),f={href:"https://www.freenom.com",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),_={href:"https://tieba.baidu.com/p/6227922839",target:"_blank",rel:"noopener noreferrer"},v=t('<p>先注册一个账号登陆上去，点击菜单的<code>Services</code>，选择<code>Register a New Domain</code></p><figure><img src="https://image.liubing.me/2019/12/26/58c6cf6283c82.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>在输入框里输入想要注册的域名：如<code>lovechinacc</code>，点击<code>Check Availability</code></p><p>选择一个域名点击<code>Get it now!</code>,</p><figure><img src="https://image.liubing.me/2019/12/26/e58841780db66.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>完成后点击<code>Checkout</code>进入下一步</p><figure><img src="https://image.liubing.me/2019/12/26/a1e91bcde7d54.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择免费的 12 个月期限，点击<code>Continue</code>下一步</p><figure><img src="https://image.liubing.me/2019/12/26/48153dc578495.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>进入到结算页面后需要填写一些信息，其中红色框出来的地方如实填写，其他的随便填，最关键的是地区，如果你没国外的手机号，老老实实选择 China，<br> 不然会校验到你当前 IP 所属国家和你选择的不符会失败。</p><figure><img src="https://image.liubing.me/2019/12/26/d62a084633f81.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>出现下面的情况说明域名购买成功了</p><figure><img src="https://image.liubing.me/2019/12/26/d941a9411e1d4.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>如果购买成功的信息里面有如下图红框圈出来的信息则说明失败了</p><figure><img src="https://image.liubing.me/2019/12/26/741bd4dd4a3c8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="域名套上-cloudflare" tabindex="-1"><a class="header-anchor" href="#域名套上-cloudflare" aria-hidden="true">#</a> 域名套上 Cloudflare</h2>',16),y={href:"https://dash.cloudflare.com/sign-up",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),k={href:"https://dash.cloudflare.com",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"Add a Site",-1),w=t('<figure><img src="https://image.liubing.me/2019/12/26/56967e12a5ca8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>输入事先注册好的域名，点击<code>Add site</code></p><blockquote><p>如果出现无法添加的情况，请耐心等待一会，刚注册的域名 DNS 还未来得及解析。</p></blockquote><figure><img src="https://image.liubing.me/2019/12/26/2cacbc42728e9.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择一个计划，这里我们选择第一个免费的就行了，选择完后点击<code>Confirm plan</code></p><figure><img src="https://image.liubing.me/2019/12/26/4ecaef21c0cbe.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>点击<code>Add Record</code>按钮添加 2 条 A 记录，Value 指向被墙的 VPS 的 IP，点击<code>Proxy status</code>栏中的云朵，让其变成灰色(这个很重要)，<br> 弄完后点击<code>Continue</code>按钮继续</p><figure><img src="https://image.liubing.me/2019/12/26/e178c8af687a5.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>此时会提示你将域名的 DNS 解析到 Cloudflare，其中有 2 个 Nameserver 是需要用到的。</p><figure><img src="https://image.liubing.me/2019/12/26/a4a119359b7e2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>这里需要重新到 freenom 修改下 DNS，点击<code>Services</code>，选择<code>My Domains</code>，<br> 找到之前注册的域名，点击右侧的<code>Manage Domain</code></p><figure><img src="https://image.liubing.me/2019/12/26/67df4e6ea4c80.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/2e551cacfa9df.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>点击<code>Management Tools</code>选择<code>Nameservers</code></p><figure><img src="https://image.liubing.me/2019/12/26/59fe33d349694.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>选择第二个选项自定义，填写上面的 2 个 Nameserver，点击<code>Change Nameservers</code>保存。</p><figure><img src="https://image.liubing.me/2019/12/26/cf14f013e28c2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>回到 Cloudflare，刷新之前的页面，如果跳转到下面所示控制台页面就成功了，如果没有耐心等待一会，解析需要时间。</p><figure><img src="https://image.liubing.me/2019/12/26/1c7132210b4bc.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>点击<code>SSL/TLS</code>菜单，选择<code>mode</code>模式为<code>Full</code></p><figure><img src="https://image.liubing.me/2019/12/26/6e97009c0fffa.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>点击<code>Origin Server</code>，点击<code>Create Certificate</code>按钮创建证书，年限选择最大的 15 年</p><figure><img src="https://image.liubing.me/2019/12/26/10bd691c931b4.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/ea0c154031650.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>创建完成后会出现一个弹窗，请务必将红框圈出来的内容保存下来，请务必将红框圈出来的内容保存下来，请务必将红框圈出来的内容保存下来<br> 弹窗关闭后 Private key 就看不到了。</p><figure><img src="https://image.liubing.me/2019/12/26/ac7e8bd564667.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="宝塔面板相关设置" tabindex="-1"><a class="header-anchor" href="#宝塔面板相关设置" aria-hidden="true">#</a> 宝塔面板相关设置</h2><p>打开宝塔控制面板，在网站中添加站点，PHP 版本选择纯静态</p><figure><img src="https://image.liubing.me/2019/12/26/7f4c223430263.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>添加完成后点击网站名称，选择<code>SSL</code>，选择<code>其他证书</code>，将 Cloudflare 创建的证书填进去并保存，保存完毕后勾选<code>强制HTTPS</code></p><figure><img src="https://image.liubing.me/2019/12/26/87b7c2f3da55b.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/ade284c78181e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>',32),S={class:"hint-container warning"},V=e("p",{class:"hint-container-title"},"注意",-1),C=e("h2",{id:"安装-v2ray-fun-面板",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-v2ray-fun-面板","aria-hidden":"true"},"#"),a(" 安装 v2ray.fun 面板")],-1),N={class:"hint-container warning"},P=e("p",{class:"hint-container-title"},"注意",-1),I=e("code",null,"v2-ui",-1),D={href:"https://github.com/sprov065/v2-ui",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),R=e("img",{src:"https://image.liubing.me/2020/12/15/80ea0e9a52d2e.png",alt:"image",loading:"lazy"},null,-1),L=e("br",null,null,-1),T=e("img",{src:"https://image.liubing.me/2020/12/15/532de133ce06c.png",alt:"image",loading:"lazy"},null,-1),q=e("br",null,null,-1),M=e("img",{src:"https://image.liubing.me/2020/12/15/84f597bb8fd26.png",alt:"image",loading:"lazy"},null,-1),B=t(`<p>这里需要链接你的 VPS，如果你的 VPS 已经被墙了，需要去找个临时的梯子，这里就需要你自己去想办法了。如果无法链接 VPS，下面的也就不用看了。</p><p>用 Xshell 或者其他工具链接上 VPS 后执行下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-N</span> --no-check-certificate https://raw.githubusercontent.com/FunctionClub/v2ray.fun/master/install.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装到最后会提示你输入账号密码和端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请输入默认用户名（默认admin）：可自行修改，举例为默认；
请输入默认登陆密码（默认admin）：可自行修改，举例为默认；
请输入监听端口号（默认5000）：可自行修改，举例为默认；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入宝塔面板-安全-防火墙，放行上面的 V2ray 面板监听端口（默认 5000）</p><figure><img src="https://image.liubing.me/2019/12/26/a333d5b15f8bc.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="v2ray-fun-配置" tabindex="-1"><a class="header-anchor" href="#v2ray-fun-配置" aria-hidden="true">#</a> V2ray.fun 配置</h2><p>登陆 V2ray.fun 控制面板，登陆方式是：VPS 的 IP:5000，输入账号（admin）、密码（admin）登录。</p><h3 id="主端口及传输方式修改" tabindex="-1"><a class="header-anchor" href="#主端口及传输方式修改" aria-hidden="true">#</a> 主端口及传输方式修改</h3>`,10),G=e("br",null,null,-1),H={href:"http://lovechinacc.tk",target:"_blank",rel:"noopener noreferrer"},W=t(`<figure><img src="https://image.liubing.me/2019/12/26/8a7dc854b75df.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/519f5bcf95a5e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="配置文件修改" tabindex="-1"><a class="header-anchor" href="#配置文件修改" aria-hidden="true">#</a> 配置文件修改</h3><p>编辑 /etc/v2ray/config.json 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/v2ray/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改<code>path</code>为<code>/ws/</code><br> 修改<code>Host</code>为<code>lovechinacc.tk</code></p><figure><img src="https://image.liubing.me/2019/12/26/8ac8461443b7b.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="nginx-设置" tabindex="-1"><a class="header-anchor" href="#nginx-设置" aria-hidden="true">#</a> Nginx 设置</h3><p>打开宝塔面板-&gt;网站，点击上面的创建的站点，选择配置文件，<br> 将以下信息添加到最后，其中<code>proxy_pass</code>中的<code>10010</code>端口号得保持和上面<code>主端口及传输方式修改</code>中主端口号保持一致。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /ws {
  proxy_redirect off;
  proxy_pass http://127.0.0.1:10010;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection &quot;upgrade&quot;;
  proxy_set_header Host $http_host;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/1e999a3810628.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="重启相关服务" tabindex="-1"><a class="header-anchor" href="#重启相关服务" aria-hidden="true">#</a> 重启相关服务</h3><p>重启 V2ray：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> v2ray restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 Ngix</p><p>找到宝塔上安装的 Nginx，点击重启按钮重启服务</p><figure><img src="https://image.liubing.me/2019/12/26/a872ed68efd7e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="cloudflare-再次设置" tabindex="-1"><a class="header-anchor" href="#cloudflare-再次设置" aria-hidden="true">#</a> Cloudflare 再次设置</h3><p>回到 Cloudflare，在 DNS 设置中点击灰色的小云朵，让你变成点亮状态</p><figure><img src="https://image.liubing.me/2019/12/26/7ca3d85866d5e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/b714d005eb009.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>至此教程就差不多结束了，接下来需要在电脑上下载相应的客户端软件</p><h2 id="v2ray-客户端下载" tabindex="-1"><a class="header-anchor" href="#v2ray-客户端下载" aria-hidden="true">#</a> v2ray 客户端下载</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>`,24),j={href:"https://github.com/v2ray/v2ray-core/releases/latest",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/2dust/v2rayN/releases/latest",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"mac-os",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac-os","aria-hidden":"true"},"#"),a(" Mac OS")],-1),O={href:"https://github.com/v2ray/v2ray-core/releases/latest",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/Cenmrev/V2RayX/releases/latest",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"android",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android","aria-hidden":"true"},"#"),a(" Android")],-1),$={href:"https://github.com/2dust/v2rayNG/releases/latest",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/V2Ray-Android/Actinium/releases/latest",target:"_blank",rel:"noopener noreferrer"},J={href:"https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv",target:"_blank",rel:"noopener noreferrer"},Q=e("h3",{id:"ios",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ios","aria-hidden":"true"},"#"),a(" IOS")],-1),Y={href:"https://apps.apple.com/us/app/kitsunebi/id1275446921",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://apps.apple.com/us/app/shadowrocket/id932747118",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://apps.apple.com/us/app/pepi/id1283082051",target:"_blank",rel:"noopener noreferrer"},ae=t(`<h2 id="客户端使用" tabindex="-1"><a class="header-anchor" href="#客户端使用" aria-hidden="true">#</a> 客户端使用</h2><p>以 win 说明，下载相应的 win 版本</p><blockquote><p>Mac 及其他请自行搜索</p></blockquote><figure><img src="https://image.liubing.me/2019/12/26/16eeda326a239.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/d341a253e1af8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>下载完成后解压<code>v2ray-core</code>，<code>v2rayN</code>压缩包中的内容复制到解压后的<code>v2ray-core</code>中</p><figure><img src="https://image.liubing.me/2019/12/26/38ca1333b7b0d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>打开<code>v2rayN</code>，点击<code>服务器</code>，选择<code>添加[VMess]服务器</code></p><figure><img src="https://image.liubing.me/2019/12/26/6c6b2a550c32e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>按图填写相关的信息，其中<code>地址</code>、<code>用户ID</code>、<code>额外ID</code>、<code>别名</code>、<code>伪装域名</code>换成你们自己的，其他的保持一致。</p><figure><img src="https://image.liubing.me/2019/12/26/c8f5bed50fbf9.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>至于<code>用户ID</code>、<code>额外ID</code>怎么查看，可以登录自己的 VPS，输入下面的命令查看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/v2ray/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/5dc76b1e341fa.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>添加完成后右键任务栏的 v2ray 的小图标，点击启用 http 代理，点击代理模式选择第二个开启 PAC</p><figure><img src="https://image.liubing.me/2019/12/26/c00206b45a5cb.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后打开 Google 试试吧。</p><h2 id="多用户使用" tabindex="-1"><a class="header-anchor" href="#多用户使用" aria-hidden="true">#</a> 多用户使用</h2><p>可以通过 v2ray 的配置文件添加多个 ID，登录 VPS 输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/v2ray/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>clients</code>节点下添加多个用户对象即可，如下图所示</p><figure><img src="https://image.liubing.me/2019/12/26/06b711bf90a2d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>其中得保持<code>ID</code>和<code>alertId</code>唯一性，<code>ID</code>可以在<code>添加[VMess]服务器</code>的时候，点击<code>用户ID</code>后面的生成按钮生成 ID。<br> 添加完成后最好将 v2ray 重启下即可。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2>`,24),ie=e("br",null,null,-1),ne={href:"https://eveaz.com/1107.html",target:"_blank",rel:"noopener noreferrer"},te=e("br",null,null,-1),oe={href:"https://eveaz.com/",target:"_blank",rel:"noopener noreferrer"},re={href:"http://lovechinacc.tk",target:"_blank",rel:"noopener noreferrer"},ce=e("p",null,"如果无法成功在 freenom 注册域名可邮箱私聊我，发送你的 freenom 的用户名、密码、手机号及想要注册的域名，楼主可以免费帮忙注册。",-1);function de(ge,se){const n=o("ExternalLinkIcon"),r=o("RouterLink");return d(),g("div",null,[u,h,s(" more "),m,e("p",null,[a("事先得准备一个可用的域名，自己买也好，还是免费注册一个都行，这里推荐一个免费注册域名的地方："),e("a",f,[a("freenom"),i(n)])]),e("blockquote",null,[e("p",null,[a("该网站目前注册域名有时会会失败，国内访问速度慢加上该网站引入的防机器人的插件 reCAPTCHA，国内被墙导致验证不通过而注册失败"),b,a(" 可以参考贴吧的一个教程尝试："),e("a",_,[a("https://tieba.baidu.com/p/6227922839"),i(n)])])]),v,e("p",null,[a("需要先注册一个 Cloudflare 的账号并登陆上去，"),e("a",y,[a("点我去注册"),i(n)]),x,a(" 注册完成后登陆进入，"),e("a",k,[a("进入控制台"),i(n)]),a("，点击"),z,a("按钮添加一个站点。")]),w,e("div",S,[V,e("p",null,[a("看到此处下面的不用看了，下面的教程方法已失效过期，请参考新的教程："),i(r,{to:"/article/v2ray/v2ray-websocket-tl-nginx-cloudflare-x-ui.html"},{default:l(()=>[a("点击查看")]),_:1})])]),C,e("div",N,[P,e("p",null,[a("该面板可能已经失效，可以尝试安装"),I,a("，安装完成后拥有可视化操作 UI，可参考下图，具体安装参考："),e("a",D,[a("点击前往"),i(n)]),A,R,L,T,q,M])]),B,e("p",null,[a("点击修改链接，修改主端口号：10010（可自定义，下面会用到，得保持一直）"),G,a(" 修改传输方式，选择 WebSocket 后，点击修改传输，会弹出一个对话框，输入之前弄得域名："),e("a",H,[a("lovechinacc.tk"),i(n)])]),W,e("p",null,[a("v2ray-core："),e("a",j,[a("https://github.com/v2ray/v2ray-core/releases/latest"),i(n)])]),e("p",null,[a("v2rayN："),e("a",X,[a("https://github.com/2dust/v2rayN/releases/latest"),i(n)])]),E,e("p",null,[a("v2ray-core："),e("a",O,[a("https://github.com/v2ray/v2ray-core/releases/latest"),i(n)])]),e("p",null,[a("V2RayX："),e("a",F,[a("https://github.com/Cenmrev/V2RayX/releases/latest"),i(n)])]),U,e("p",null,[a("V2rayNG："),e("a",$,[a("https://github.com/2dust/v2rayNG/releases/latest"),i(n)])]),e("p",null,[a("Actinium："),e("a",K,[a("https://github.com/V2Ray-Android/Actinium/releases/latest"),i(n)])]),e("p",null,[a("BifrostV："),e("a",J,[a("https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv"),i(n)])]),Q,e("p",null,[a("Kitsunebi："),e("a",Y,[a("https://apps.apple.com/us/app/kitsunebi/id1275446921"),i(n)])]),e("p",null,[a("ShadowRocket："),e("a",Z,[a("https://apps.apple.com/us/app/shadowrocket/id932747118"),i(n)])]),e("p",null,[a("Pepi："),e("a",ee,[a("https://apps.apple.com/us/app/pepi/id1283082051"),i(n)])]),ae,e("p",null,[a("至此教程就结束了，最后奉劝大家个人及朋友使用即可，切勿建机场、切勿建机场、切勿建机场。"),ie,a(" 本文教程来源："),e("a",ne,[a("https://eveaz.com/1107.html"),i(n)]),a("。"),te,a(" 其他的拯救被封 IP 途径也可参考上面的网站其他文章解决："),e("a",oe,[a("https://eveaz.com/"),i(n)])]),e("blockquote",null,[e("p",null,[e("a",re,[a("lovechinacc.tk"),i(n)]),a(" 该域名仅做为教程需要所注册，请勿直接使用。")])]),ce])}const pe=c(p,[["render",de],["__file","v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.html.vue"]]);export{pe as default};
