(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{188:function(n,a,s){"use strict";s.r(a);var e=function(){var n=this.$createElement,a=this._self._c||n;return a("layout-manager",{attrs:{page:this.$page}},[a("div",{staticClass:"markdown-body is-component"},[this._v("undefined")])])};e._withStripped=!0;var t=s(1),p=function(n){const a="wrap-page-tags-code",s={attributes:{type:"tag",layout:["tag","index"]},tag:"code",permalink:"/tags/code",slug:"code",pagination:{current:1,total:1,hasPrev:!1,hasNext:!1,nextLink:"/tags/code/page/0",prevLink:"/tags/code/page/2"},posts:[{slug:"create-react-component-like-a-pro",permalink:"/2018/01/29/create-react-component-like-a-pro",attributes:{title:"流畅地开发一个 react 组件",subTitle:"Create a react component like a pro 🎉",date:"2018-01-29T00:00:00.000Z",tags:["code"],type:"post",layout:"post"},body:'<p>不知道你有没有用过 <a href="https://github.com/vue-land/create-vue-component">vue-land/create-vue-component</a>，这是一个通过命令行初始化 vue 组件的工具，项目结构简洁，无需配置文件。使用 <a href="https://poi.js.org/">Poi</a> 构建，可以打包你写的组件，构建 demo，内置 jest 测试... 总之用来写 vue 组件非常好用，我已经离不开它了。</p>\n<p>最近在写 react，在我想用 react 写点简单的组件骗点 star 的时候也想有这么流畅的开发体验啊 (╯°A°)╯ 所以克隆了这个项目，魔改了一版，现在也能通过命令行初始化一个 react 组件了，基本上是体力活...比较适合我这种笨人...\x3c!--more--\x3e<br/></p>\n<p>项目名字叫 create-react-component-with-no-config 嗯... 我在 npm 上已经找不到可以用的简洁的名字了 😂</p>\n<p>create-vue-component 有的功能都有，就是这么好（no）用（face）</p>\n<p>项目地址：<a href="https://github.com/luyilin/create-react-component-with-no-config">https://github.com/luyilin/create-react-component-with-no-config</a></p>\n<p>用法：</p>\n<h4 id="install">Install</h4>\n<div class="pre-wrapper" v-pre="" data-lang="bash"><pre class="language-bash"><code class="language-bash">yarn global add create-react-component-with-no-config</code></pre></div><h4 id="usage">Usage</h4>\n<div class="pre-wrapper" v-pre="" data-lang="bash"><pre class="language-bash"><code class="language-bash">create-react-component-with-no-config react-xxx\n<span class="token comment"># or</span>\ncreate-react-component react-xxx\n<span class="token comment"># or type less</span>\ncrc react-xxx\n\n<span class="token comment"># you can also create component in place</span>\n<span class="token function">mkdir</span> react-xxx <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> react-xxx\ncrc</code></pre></div><p>项目结构预览：</p>\n<p><img src="https://wx3.sinaimg.cn/mw690/a2117cdbly1fnxfc4mh6mj20jq0cddgw.jpg" alt="preview"></p>\n<p>用例：<a href="https://github.com/luyilin/react-multipane">https://github.com/luyilin/react-multipane</a></p>\n<p>Enjoy!</p>\n',excerpt:'<p>不知道你有没有用过 <a href="https://github.com/vue-land/create-vue-component">vue-land/create-vue-component</a>，这是一个通过命令行初始化 vue 组件的工具，项目结构简洁，无需配置文件。使用 <a href="https://poi.js.org/">Poi</a> 构建，可以打包你写的组件，构建 demo，内置 jest 测试... 总之用来写 vue 组件非常好用，我已经离不开它了。</p>\n'},{slug:"vue-pagination",permalink:"/2017/04/19/vue-pagination",attributes:{title:"使用 vue2.0 实现一个简洁的分页组件",date:"2017-04-19T00:00:00.000Z",tags:["code"],type:"post",layout:"post"},body:'<p>分页效果预览：</p>\n<ul>\n<li><a href="https://luyilin.github.io/Minemine-pagination/dist/index.html">在线 demo</a></li>\n<li><a href="https://github.com/luyilin/Minemine-pagination">github 地址</a></li>\n<li>分页效果截图<img src="https://ooo.0o0.ooo/2017/04/19/58f7246807888.png" alt="messagedboard"></li>\n</ul>\n<h3 id="">前言</h3>\n<blockquote>\n<ol>\n<li>使用 vue-cli 初始化项目 \x3c!--more--\x3e</li>\n<li>使用 vuex 管理数据</li>\n<li>node v6.9.2，npm v3.10.9</li>\n</ol>\n</blockquote>\n<h3 id="-2">分页原理</h3>\n<p>实现分页主要依靠两个参数，偏移量（offset）、限制数（limit）。点击分页发送 Ajax 请求，将这两个参数传给后端，后端从数据库筛选出对应的数据返回给前端，前端将获取到的数据添加到页面中，分页组件根据偏移量和限制数显示对应的页码，这是一个简单地实现分页的思路。</p>\n<h3 id="-3">分页类型</h3>\n<p>分页一般分为两种类型，一种经常用于移动端的滚动加载，或是一个按钮点击即可加载更多。这种分页实现起来比较简单，前端仅需定义一个 offset 变量，每次 ajax 请求时 offset += limit，然后将获取到的内容 append 上去即可。\n另一种是显示总页数、当前页数、上一页、下一页按钮，且页数较多时将中间页数用省略号表示。这种分页实现起来稍微复杂一点，但用户体验更好，本文讨论的就是如何使用 vue 实现这样的分页组件。</p>\n<h3 id="-4">分页组件</h3>\n<p>创建 pagination.vue 文件。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class=""><template>\n    <div class="page-wrap">\n      <ul v-show="prePage" class="li-page" v-tap="{methods: goPrePage}">上一页</ul>\n      <ul>\n        <li v-for="i in showPageBtn" :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}"\n            v-tap="{methods: goPage, i: i}">\n          <a v-if="i" class="notPointer">{{i}}</a>\n          <a v-else>···</a>\n        </li>\n      </ul>\n      <ul v-show="nextPage" class="li-page" v-tap="{methods: goNextPage}">下一页</ul>\n    </div>\n</template></code></pre></div><p>组件的作用域是独立的，父组件通信通过 props 向其传递数据，分页组件通过 $emit 触发在父组件定义的事件实现和父组件的通信，因此预设从父组件获取到需显示的总数 num 为 30 , limit 为 5，当然你也可以随意设置这两个值～</p>\n<pre><code>```\nlet that\nexport default{\n    data(){\n      that = this\n      return{\n        num: 30,\n        limit: 5\n      }\n    }\n}\n```\n</code></pre>\n<p>计算几个变量，在这里可以使用 vue 的计算属性 computed\n总页数 totalPage 应该等于需显示的总数除以每页显示的个数，并向上取整，这个很好理解。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">computed: {\n      totalPage() {\n        return Math.ceil(that.num / that.limit)\n      }\n    }</code></pre></div><p>偏移量 offset，因为点击上下页、制定页码均会改变 offset 变量，父组件也需要用到这个变量发送 ajax 请求，因此使用 vuex 存储 offset。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">// pagination.vue\n    computed: {\n      offset() {\n          return that.$store.state.offset\n      }\n    }</code></pre></div><p>当前页面 currentPage，当前页面是比较重要的一个变量，显示用户当前所处页数，已知偏移量和每页显示数量可以得出当前页面是二者的余数向上取整，因为页数不从0开始，因此</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">computed: {\n      currentPage() {\n        return Math.ceil(that.offset / that.limit) + 1\n      }\n    }</code></pre></div><p>是否显示上一页按钮 prePage，因为在首页的时候偏移量为0，因此只要偏移量不等于0则当前页面肯定不在第一页，则显示上一页按钮，并且 num 不等于 0。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">coumputed: {\n      prePage() {\n        return that.offset !== 0 && that.num\n      }\n    }</code></pre></div><p>是否显示下一页按钮 nextPage，这个也很好理解，只要偏移量和每页显示的个数相加小于需显示的总数，则显示下一页按钮，并且 num 不等于 0。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">computed: {\n      nextPage() {\n        return (that.offset + that.limit < that.num) && that.num\n      }\n    }</code></pre></div><p>页码计算 showPageBtn，页码计算是这个分页组件的核心内容，基本思路是当总页数不大于5时，显示全部页码；当总页数大于5时，始终显示首尾页码，当当前页码距首页小于2时，显示前三页页码和省略号；当当前页码距尾页小于2时，显示后三页页码，当当前页码距首页等于2时，显示前四页页码和省略号；当当前页码距尾页等于2时，显示后四页页码和省略号；当当前页码距首页大于3且距尾页大于3时，显示当前页码和当前页码的前一页和后一页，两边各有一个省略号；在这里我们使用0代表省略号</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">computed: {\n      showPageBtn() {\n          let pageNum = that.totalPage,\n              index = that.currentPage,\n              arr = []\n          if (pageNum <= 5) {\n            for(let i = 1; i <= pageNum; i++) {\n              arr.push(i)\n            }\n            return arr\n          }\n          if (index <= 2) return [1,2,3,0,pageNum]\n          if (index >= pageNum -1) return [1,0, pageNum -2, pageNum -1, pageNum]\n          if (index === 3) return [1,2,3,4,0,pageNum]\n          if (index === pageNum -2) return [1,0, pageNum-3, pageNum-2, pageNum-1, pageNum]\n          return [1,0, index-1, index, index + 1, 0, pageNum]\n        }\n    }</code></pre></div><p>跳转事件，分别点击上一页、下一页和指定页码。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">methods: {\n      goPage(params) {\n        if (params.i === 0 || params.i === that.currentPage) return\n        that.$store.commit(\'GO_PAGE\', (params.i-1) * that.limit)\n        that.$emit(\'getNew\')\n      },\n      goPrePage() {\n        that.$store.commit(\'PRE_PAGE\', that.limit)\n        that.$emit(\'getNew\')\n      },\n      goNextPage() {\n        that.$store.commit(\'NEXT_PAGE\', that.limit)\n        that.$emit(\'getNew\')\n      }\n    }</code></pre></div><h3 id="vuex">vuex 部分</h3>\n<p>在此介绍一下 vuex 部分的实现，学习了二哲大大的 vuex 部分的结构。在 src 目录下（和 components 目录平级），新建 store 目录，其中 index.js 文件传入 mutation，初始化 vuex；</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">// vuex \bstore/index.js\n  import Vue from \'vue\'\n  import Vuex from \'vuex\'\n  import mutations from \'./mutations\'\n  \n  Vue.use(Vuex);\n  \n  const state = {\n    offset: 0\n  };\n  \n  export default new Vuex.Store({\n    state,\n    mutations\n  })</code></pre></div><p>mutation-types.js 记录所有的事件名，其实这个文件最大的好处是能让我们更直观地管理所有的 vuex 方法，它的优点会在项目复杂后凸显出来，项目复杂时我们可能会使用 vuex 存储很多数据、定义很多方法，这时 mutation-types.js 就能更好更直观地管理这些方法。这也是一种设计理念嘛，有利于后期维护。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">// mutation-types.js\n    export const PRE_PAGE = \'PRE_PAGE\'\n    export const NEXT_PAGE = \'NEXT_PAGE\'\n    export const GO_PAGE = \'GO_PAGE\'</code></pre></div><p>mutation.js 这是 vuex 的核心文件，注册了实现的所有事件，我们定义了点击上一页、下一页和跳转到指定页面的方法。</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">// mutation.js\n  import * as types from \'./mutation-types\'\n\n  export default {\n    // 分页 上一页\n    [types.PRE_PAGE] (state, offset) {\n      state.offset -= offset\n    },\n    // 分页 下一页\n    [types.NEXT_PAGE] (state, offset) {\n      state.offset += offset\n    },\n    // 分页 跳转到指定页码\n    [types.GO_PAGE] (state, offset) {\n      state.offset = offset\n    }\n  };</code></pre></div><h3 id="how-to-run">how to run</h3>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">$ npm install \n\n$ npm run dev\n\n// 访问 http://localhost:8088/index.html</code></pre></div><p>最后打个小广告🎣 ๑乛◡乛๑</p>\n<p>我的个人网站：<a href="https://minemine.cc/">https://minemine.cc/</a></p>\n<p>github 地址：<a href="https://github.com/luyilin">https://github.com/luyilin</a></p>\n',excerpt:"<p>分页效果预览：</p>\n"},{slug:"git",permalink:"/2017/01/29/git",attributes:{title:"记在小本本上的 git 操作",date:"2017-01-29T00:00:00.000Z",tags:["code"],type:"post",layout:"post"},body:'<p>标签： git</p>\n<p>查看 git 配置信息</p>\n<div class="pre-wrapper" v-pre="" data-lang="git"><pre class="language-git"><code class="language-git"><span class="token command">$ git config<span class="token parameter"> --list</span></span>\nor\n<span class="token command">$ git config<span class="token parameter"> -l</span></span></code></pre></div><p>设置 git 配置信息 \x3c!--more--\x3e</p>\n<ul>\n<li>全局设置</li>\n</ul>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> config --global user.name <span class="token string">"{{userName}}"</span>\n$ <span class="token function">git</span> config --global user.email <span class="token string">"{{userEmail}}"</span></code></pre></div><ul>\n<li>修改当前项目的 git 配置信息</li>\n</ul>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">ls</span> -a\n$ <span class="token function">cd</span> .git/\n$ <span class="token function">vi</span> config\nadd\n<span class="token punctuation">[</span>user<span class="token punctuation">]</span>\n   name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>userName<span class="token punctuation">}</span><span class="token punctuation">}</span>\n   email <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>userEmail<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\nor\n$ <span class="token function">git</span> config user.name <span class="token string">"{{userName}}"</span>\n$ <span class="token function">git</span> config user.email <span class="token string">"{{userEmail}}"</span></code></pre></div><p>查看分支</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> branch 查看本地分支\n$ <span class="token function">git</span> branch -r 查看远程分支\n$ <span class="token function">git</span> branch -a 查看所有分支</code></pre></div><p>创建一个新分支</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> checkout -b <span class="token punctuation">{</span><span class="token punctuation">{</span>branch<span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre></div><p>切换分支</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> checkout <span class="token punctuation">{</span><span class="token punctuation">{</span>branch<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n$ <span class="token function">git</span> checkout -b <span class="token punctuation">{</span><span class="token punctuation">{</span>remoteBranch<span class="token punctuation">}</span><span class="token punctuation">}</span> origin/<span class="token punctuation">{</span><span class="token punctuation">{</span>remoteBranch<span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre></div><p>删除分支</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> branch -D <span class="token punctuation">{</span><span class="token punctuation">{</span>loaclBranch<span class="token punctuation">}</span><span class="token punctuation">}</span>\n$ <span class="token function">git</span> push --delete origin <span class="token punctuation">{</span><span class="token punctuation">{</span>remoteBranch<span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre></div><p>合并分支</p>\n<div class="pre-wrapper" v-pre="" data-lang=""><pre class=""><code class="">$ git merge {{branch}} 将 branch 与当前分支合并</code></pre></div><p>储藏修改</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> stash 当你想切换到其他分支又不想提交现在修改的东西时，当你在修改好前想 <span class="token function">git</span> pull 时，用 <span class="token function">git</span> stash 来得到一个干净的工作目录\n\n$ <span class="token function">git</span> stash save <span class="token string">\'\'</span> 给你的 stash 取个名字\n\n$ <span class="token function">git</span> stash pop 重新应用储藏内容\n\n$ <span class="token function">git</span> stash list 查看现有储藏列表\n\n$ <span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span>number<span class="token punctuation">}</span> 应用某次储藏，但未从栈上移除，需继续 <span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span>number<span class="token punctuation">}</span> <span class="token punctuation">(</span>I like pop<span class="token operator">!</span></code></pre></div><p>查看提交历史</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> log\n\n$ <span class="token function">git</span> log -p  查看每次提交的内容差异\n\n$ <span class="token function">git</span> log -p -2 显示最近的两次更新</code></pre></div><p>查看 commit head message</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> reflog</code></pre></div><p>打 tag</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> tag <span class="token punctuation">{</span><span class="token punctuation">{</span>tagName<span class="token punctuation">}</span><span class="token punctuation">}</span>\n$ <span class="token function">git</span> push origin <span class="token punctuation">{</span><span class="token punctuation">{</span>tagName<span class="token punctuation">}</span><span class="token punctuation">}</span>\nor\n$ <span class="token function">git</span> push --tags</code></pre></div><p>删除 tag</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> tag -d <span class="token punctuation">{</span><span class="token punctuation">{</span>localTag<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n$ <span class="token function">git</span> tag -d <span class="token punctuation">{</span><span class="token punctuation">{</span>remoteTag<span class="token punctuation">}</span><span class="token punctuation">}</span>\n$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">{</span><span class="token punctuation">{</span>remoteTag<span class="token punctuation">}</span><span class="token punctuation">}</span></code></pre></div><p>给一个历史提交添加 tag</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// Set the HEAD to the old commit that we want to tag\n$ <span class="token function">git</span> checkout <span class="token punctuation">{</span><span class="token punctuation">{</span>leading 7 chars of commit<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n// temporarily <span class="token keyword">set</span> the <span class="token function">date</span> to the <span class="token function">date</span> of the HEAD commit, and add the tag\n$ GIT_COMMITTER_DATE<span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> show --format<span class="token operator">=</span>%aD <span class="token operator">|</span> <span class="token function">head</span> -1<span class="token variable">)</span></span>"</span> <span class="token function">git</span> tag -a <span class="token punctuation">{</span><span class="token punctuation">{</span>tag<span class="token punctuation">}</span><span class="token punctuation">}</span> -m <span class="token string">"{{commit message}}"</span>\n\n// <span class="token keyword">set</span> HEAD back to whatever you want it to be\n$ <span class="token function">git</span> checkout master\n\n$ <span class="token function">git</span> push --tags</code></pre></div><p>push 后发现没加 .gitignore，删除本地及远程的冗余提交</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> <span class="token function">rm</span> -r --cached <span class="token keyword">.</span>\n$ <span class="token function">git</span> add <span class="token keyword">.</span>\n$ <span class="token function">git</span> commit -m <span class="token string">"{{commit message}}"</span>\n$ <span class="token function">git</span> push</code></pre></div><p>修改已经 commit 的邮箱和用户名</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// get the commit we want to modify\n$ <span class="token function">git</span> log\n\n// go to the commit\n$ <span class="token function">git</span> reset --soft <span class="token punctuation">{</span><span class="token punctuation">{</span>commitId<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n$ <span class="token function">git</span> commit --amend --author<span class="token operator">=</span><span class="token string">\'{{userName}}&lt;{{userEmail}}>\'</span>\n$ <span class="token function">git</span> push</code></pre></div><p>修改已经 push 的 commit 的邮箱和用户名</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// clone a new repo\n<span class="token function">git</span> clone --bare https://github.com/user/repo.git\n<span class="token function">cd</span> repo.git</code></pre></div><div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// copy the script below and modify the variables: OLD_EMAIL, CORRECT_NAME, CORRECT_EMAIL\n\n<span class="token comment">#! /bin/sh</span>\n\n<span class="token function">git</span> filter-branch --env-filter <span class="token string">\'\n\nOLD_EMAIL=""\nCORRECT_NAME="Your Correct Name"\nCORRECT_EMAIL="your-correct-email@example.com"\n\nif [ "<span class="token variable">$GIT_COMMITTER_EMAIL</span>" = "<span class="token variable">$OLD_EMAIL</span>" ]\nthen\n    export GIT_COMMITTER_NAME="<span class="token variable">$CORRECT_NAME</span>"\n    export GIT_COMMITTER_EMAIL="<span class="token variable">$CORRECT_EMAIL</span>"\nfi\nif [ "<span class="token variable">$GIT_AUTHOR_EMAIL</span>" = "<span class="token variable">$OLD_EMAIL</span>" ]\nthen\n    export GIT_AUTHOR_NAME="<span class="token variable">$CORRECT_NAME</span>"\n    export GIT_AUTHOR_EMAIL="<span class="token variable">$CORRECT_EMAIL</span>"\nfi\n\'</span> --tag-name-filter <span class="token function">cat</span> -- --branches --tags</code></pre></div><div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// <span class="token keyword">then</span> press enter to run the script\n\n// checkout <span class="token keyword">if</span> there any error <span class="token keyword">in</span> new <span class="token function">git</span> and push\n$ <span class="token function">git</span> push --force --tags origin <span class="token string">\'refs/heads/*\'</span>\n\n// delete the temporary clone\n$ <span class="token function">cd</span> <span class="token punctuation">..</span>\n$ <span class="token function">rm</span> -rf repo.git</code></pre></div><p>修改已经 push 的 commit message</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">方法一:\n$ <span class="token function">git</span> commit --amend\n$ <span class="token function">git</span> push --force\n\n方法二:\n$ <span class="token function">git</span> rebase -i HEAD~n\n\nchange the <span class="token variable"><span class="token variable">`</span>pick<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span>reword<span class="token variable">`</span></span>, <span class="token function">which</span> means edit the commit message\n\nsave and <span class="token keyword">exit</span> and <span class="token keyword">then</span> update the commit message as you like and :wq\n\n$ <span class="token function">git</span> push --f</code></pre></div><p>修改已经 push 的提交内容</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell"><span class="token function">git</span> reset --hard <span class="token punctuation">{</span><span class="token punctuation">{</span>commitId<span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token function">git</span> add <span class="token keyword">.</span>\n\n<span class="token function">git</span> commit --amend\n\n<span class="token function">git</span> push origin HEAD --force</code></pre></div><p>解决提交前的 conflict，协同工作必备</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">// 先不提交修改的内容直接创建新分支 temp ，若已 commit 则创建新分支后在本分支 reset 到上一个 commit ,再执行 <span class="token function">git</span> pull\n\n$ <span class="token function">git</span> checkout -b temp\n\n$ <span class="token function">git</span> add <span class="token keyword">.</span>\n\n$ <span class="token function">git</span> commit -m <span class="token string">\'commit message\'</span>\n\n// 此时的master 分支是干净的，无自己的提交\n$ <span class="token function">git</span> checkout master\n\n// 拉取远程修改\n$ <span class="token function">git</span> pull\n\n// 复制刚刚提交的 commit-id  commit-a, 将自己的提交 cherry-pick 进去\n$ <span class="token function">git</span> cherry-pick commit-a\n\n// 如果有冲突 fix it\n$ <span class="token function">git</span> add <span class="token keyword">.</span>\n\n$ <span class="token function">git</span> cherry-pick --continue\n\n// <span class="token keyword">then</span> push\n$ <span class="token function">git</span> push</code></pre></div><p>git 删除远程仓库的某次错误提交</p>\n<div class="pre-wrapper" v-pre="" data-lang="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">git</span> reset --hard HEAD~1\n\n$ <span class="token function">git</span> push --force\n// <span class="token function">git</span> push -f\n\n// 强制推送到远程仓库，远程仓库里的错误提交也会消失</code></pre></div><ul>\n<li>需注意，其实这种方法仅适用于删除最新的一次提交，如果某次错误提交后又有了一个新的提交，则强制删除错误提交会导致后面的提交也消失，因此需慎用此方法，尤其是在多人协作项目上(°ー°〃)</li>\n</ul>\n<p>gerrit merge 前执行 git commit --amend 改写上次提交，并将 gerrit 上的 changeid 加入到上次提交的 commit message 下面（上下各空一行），再 git push（还是原来的 commit，不产生新的提交）</p>\n<p>bash ctrl＋R 快速查看输入过的命令</p>\n<p>git 创建仓库并关联到 github</p>\n<ul>\n<li>\n<p>cd 到项目目录，git init 初始化，使 git 对此项目进行版本控制</p>\n</li>\n<li>\n<p>git add .</p>\n</li>\n<li>\n<p>git commit -m \'\'</p>\n</li>\n<li>\n<p>在 github 上创建一个新仓库 create a new repository</p>\n</li>\n<li>\n<p>将本地项目关联到建立的新仓库上 <code v-pre="">git remote add origin {{url}}</code></p>\n</li>\n<li>\n<p>运行 <code v-pre="">$ git remote -v</code> 查看 origin 关联</p>\n</li>\n<li>\n<p><code v-pre="">git push -u origin master</code></p>\n</li>\n<li>\n<p>若本地已有代码非空, 则直接<code v-pre="">git remote add origin {{url}}</code></p>\n</li>\n<li>\n<p><code v-pre="">git push -u origin master</code></p>\n</li>\n<li>\n<p>若将一个 git 仓库关联为另一个 git 仓库,则<code v-pre="">ls -a</code> 删除 .git/ 文件夹即可\n删除 git 版本控制, 然后再执行 remote</p>\n</li>\n</ul>\n<p>Github Pages 发布静态页面</p>\n<ul>\n<li>repository-Settings-Github Pages-select a source and save</li>\n</ul>\n',excerpt:"<p>标签： git</p>\n"}]};n.options.name=a,n.options.computed=Object.assign({},n.options.computed,{$page:()=>s})},o=Object(t.a)({},e,[],!1,null,null,null);"function"==typeof p&&p(o),o.options.__file=".peco/data/tags/code.peson";a.default=o.exports}}]);