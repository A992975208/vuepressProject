const e=JSON.parse('{"key":"v-308ce124","path":"/article/vue/vuepress-automatically-deploys-to-own-servers-with-buddy.html","title":"VuePress 借助 Buddy 自动构建打包部署到自己的服务器","lang":"zh-CN","frontmatter":{"date":"2023-01-02T00:00:00.000Z","category":["Vue","VuePress","Buddy"],"tag":["Vue","自动打包","自动部署","自动构建"],"layout":"ArticleLayout","containerClass":"article-container"},"headers":[{"level":2,"title":"注册","slug":"注册","link":"#注册","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"添加管道","slug":"添加管道","link":"#添加管道","children":[]},{"level":2,"title":"添加 FTP 配置","slug":"添加-ftp-配置","link":"#添加-ftp-配置","children":[]},{"level":2,"title":"添加 SSH 配置","slug":"添加-ssh-配置","link":"#添加-ssh-配置","children":[]},{"level":2,"title":"测试打包","slug":"测试打包","link":"#测试打包","children":[]}],"git":{"createdTime":1698241516000,"updatedTime":1698241516000,"contributors":[{"name":"”hngkkkl”","email":"2410892131@qq.com","commits":1}]},"readingTime":{"minutes":3.36,"words":1009},"filePathRelative":"article/vue/vuepress-automatically-deploys-to-own-servers-with-buddy.md","localizedDate":"2023年1月2日","excerpt":"<h1> VuePress 借助 Buddy 自动构建打包部署到自己的服务器</h1>\\n<p>近期将自己的博客由 <code>WordPress</code> 迁移到了 <code>VuePress</code>，一开始想到的是用 Github 提供的 Action 功能，代码推送到 main 分支后自动构建打包并将打包后的文件通过 FTP 的形式发送到自己的服务器上面，尴尬的是之前利用 Action 做了些非法用途，用于各种脚本签到导致 Action 功能被封了 😂，最后这个方法被弃用了，然后就找到了今天的主角：Buddy，记录下自动构建打包配置过程。</p>\\n"}');export{e as data};
