module.exports = {
    base: '/dist/',
    head: [
        ['link', { rel: 'icon', href: 'https://aigouzz.github.io/dist/logo.png' }]
      ],
    title: '前端架构',
    description: '前端架构宝典',
    dest: '../aigouzz.github.io/dist/',
    themeConfig: {
        logo: 'https://aigouzz.github.io/dist/logo.png',
        nav: [
            { text: '我的主页', link: 'http://aigouzz.github.io/introduce' },
            { text: '网易云音乐', link: 'http://aigouzz.github.io/music' },
            { text: '商城项目', link: 'http://aigouzz.github.io/shop' },
            { text: '组件', link: 'http://aigouzz.github.io/demos' },
          ],
        sidebar: [
            {
                title: 'JS基础',
                path: '/js/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'js中数据类型，存储上区别',
                        path: '/js/1'
                    },
                    {
                        title: '数组常用方法',
                        path: '/js/2'
                    },
                    {
                        title: '字符串常用方法',
                        path: '/js/3'
                    },
                    {
                        title: '类型转换机制',
                        path: '/js/4'
                    },
                    {
                        title: '==和===区别，分别什么情况使用',
                        path: '/js/5'
                    },
                    {
                        title: '深拷贝和浅拷贝区别，实现一个深拷贝',
                        path: '/js/6'
                    },
                    {
                        title: '闭包理解，实现，使用',
                        path: '/js/7'
                    },
                    {
                        title: '作用域链理解',
                        path: '/js/8'
                    },
                    {
                        title: 'js原型，原型链，及其特点',
                        path: '/js/9'
                    },
                    {
                        title: 'js如何实现继承',
                        path: '/js/10'
                    },
                    {
                        title: 'this对象理解',
                        path: '/js/11'
                    },
                    {
                        title: '执行上下文和执行栈是什么',
                        path: '/js/12'
                    },
                    {
                        title: '事件模型',
                        path: '/js/13'
                    },
                    {
                        title: 'typeof和instanceof区别',
                        path: '/js/14'
                    },
                    {
                        title: '事件代理及其应用场景',
                        path: '/js/15'
                    },
                    {
                        title: 'new操作符具体做了什么',
                        path: '/js/16'
                    },
                    {
                        title: 'ajax原理',
                        path: '/js/17'
                    },
                    {
                        title: 'bind call apply区别，实现',
                        path: '/js/18'
                    },
                    {
                        title: '正则表达式理解和应用场景',
                        path: '/js/19'
                    },
                    {
                        title: '事件循环理解',
                        path: '/js/20'
                    },
                    {
                        title: 'dom常见操作',
                        path: '/js/21'
                    },
                    {
                        title: 'bom理解和常见bom对象',
                        path: '/js/22'
                    },
                    {
                        title: '尾递归理解和应用场景',
                        path: '/js/23'
                    },
                    {
                        title: '内存泄漏的情况',
                        path: '/js/24'
                    },
                    {
                        title: '本地存储方式和区别，应用场景',
                        path: '/js/25'
                    },
                    {
                        title: '函数式编程理解和优缺点',
                        path: '/js/26'
                    },
                    {
                        title: '函数缓存的实现和应用场景',
                        path: '/js/27'
                    },
                    {
                        title: '数字精度丢失的问题和如何解决',
                        path: '/js/28'
                    },
                    {
                        title: '防抖和节流，区别和实现',
                        path: '/js/29'
                    },
                    {
                        title: '判断元素在可视区域的方式',
                        path: '/js/30'
                    },
                    {
                        title: '大文件上传断点续传',
                        path: '/js/31'
                    },
                    {
                        title: '实现上拉加载，下拉刷新',
                        path: '/js/32'
                    },
                    {
                        title: '单点登录和实现',
                        path: '/js/33'
                    },
                    {
                        title: 'web常见攻击方式和防御',
                        path: '/js/34'
                    },
                ],
            },
            {
                title: 'ES6',
                path: '/es6/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'var let const之间区别',
                        path: '/es6/1'
                    },
                    {
                        title: 'es6新增的扩展',
                        path: '/es6/2'
                    },
                    {
                        title: 'es6对象新增的扩展',
                        path: '/es6/3'
                    },
                    {
                        title: 'es6函数新增的扩展',
                        path: '/es6/4'
                    },
                    {
                        title: 'es6新增的Set，Map的理解',
                        path: '/es6/5'
                    },
                    {
                        title: 'ES6中promise的理解',
                        path: '/es6/6'
                    },
                    {
                        title: 'ES6中Generator的理解',
                        path: '/es6/7'
                    },
                    {
                        title: 'ES6中Proxy的理解',
                        path: '/es6/8'
                    },
                    {
                        title: 'ES6中Module的理解',
                        path: '/es6/9'
                    },
                    {
                        title: 'ES6中Decorator的理解',
                        path: '/es6/10'
                    },
                ],
            },
            {
                title: 'vue解析',
                path: '/vue/code',
                sidebarDepth: 1,
                children: [
                    {
                        title: '对vue的理解',
                        path: '/vue/code'
                    },
                    {
                        title: '对SPA（单页应用）的理解',
                        path: '/vue/1'
                    },
                    {
                        title: 'vue组件和插件有什么区别',
                        path: '/vue/2'
                    },
                    {
                        title: 'slot的理解和slot应用场景',
                        path: '/vue/3'
                    },
                    {
                        title: 'v-show和v-if怎么理解',
                        path: '/vue/4'
                    },
                    {
                        title: 'vue的实例挂载过程发生什么了',
                        path: '/vue/5'
                    },
                    {
                        title: '对vue生命周期理解',
                        path: '/vue/6'
                    },
                    {
                        title: 'vue中v-if和v-for为什么不建议一起用',
                        path: '/vue/7'
                    },
                    {
                        title: 'spa首屏加载速度慢怎么解决',
                        path: '/vue/8'
                    },
                    {
                        title: 'data属性是个函数而不是一个对象',
                        path: '/vue/9'
                    },
                    {
                        title: 'vue给对象添加新属性界面不刷新（vue2）',
                        path: '/vue/10'
                    },
                    {
                        title: '组件和插件的区别',
                        path: '/vue/11'
                    },
                    {
                        title: 'vue组件之间通信方式',
                        path: '/vue/12'
                    },
                    {
                        title: '双向绑定的理解',
                        path: '/vue/13'
                    },
                    {
                        title: 'nexttick的理解',
                        path: '/vue/14'
                    },
                    {
                        title: 'vue的mixin的理解和应用场景',
                        path: '/vue/15'
                    },
                    {
                        title: 'Vue.observable的理解',
                        path: '/vue/16'
                    },
                    {
                        title: 'key的原理和应用',
                        path: '/vue/17'
                    },
                    {
                        title: '如何缓存组件？缓存怎么更新？keep-alive的理解',
                        path: '/vue/18'
                    },
                    {
                        title: '常用的修饰符及其应用场景',
                        path: '/vue/19'
                    },
                    {
                        title: '自定义指令及其应用场景',
                        path: '/vue/20'
                    },
                    {
                        title: '过滤器及其应用',
                        path: '/vue/21'
                    },
                    {
                        title: '虚拟dom及其实现',
                        path: '/vue/22'
                    },
                    {
                        title: 'diff算法及其实现',
                        path: '/vue/23'
                    },
                    {
                        title: '封装的axios及其封装方式',
                        path: '/vue/24'
                    },
                    {
                        title: 'axios原理及其源码',
                        path: '/vue/25'
                    },
                    {
                        title: 'SSR的实现及其方式',
                        path: '/vue/26'
                    },
                    {
                        title: 'vue项目的目录结构是什么样的，如何划分？',
                        path: '/vue/27'
                    },
                    {
                        title: 'vue权限管理怎么做？控制到按钮级别权限',
                        path: '/vue/28'
                    },
                    {
                        title: '如何解决跨域？',
                        path: '/vue/29'
                    },
                    {
                        title: '本地开发部署到服务器后报404',
                        path: '/vue/30'
                    },
                    {
                        title: '怎么处理vue中错误',
                        path: '/vue/31'
                    },
                    {
                        title: 'vue3和vue2',
                        path: '/vue/32'
                    },
                    {
                        title: 'vue-router源码',
                        path: '/vue/router'
                    },
                    {
                        title: 'vuex源码',
                        path: '/vue/vuex'
                    }
                ],
            },
            {
                title: 'Vue3.0',
                path: '/vue3/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'Vue3的设计目标和优化',
                        path: '/vue3/1'
                    },
                    {
                        title: 'Vue3性能提升如何体现',
                        path: '/vue3/2'
                    },
                    {
                        title: 'Vue3为什么用Proxy代替defineProperty',
                        path: '/vue3/3'
                    },
                    {
                        title: 'Vue3的CompositionApi和OptionApi有什么区别',
                        path: '/vue3/4'
                    },
                    {
                        title: 'Vue3的tree shaking特性',
                        path: '/vue3/5'
                    },
                    {
                        title: 'Vue3写过组件吗，实现一个modal',
                        path: '/vue3/6'
                    },
                ],
            },
            {
                title: 'react解析',
                path: '/react/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: '对于react的理解，特性',
                        path: '/react/1'
                    },
                    {
                        title: 'react的virtual dom和real dom区别',
                        path: '/react/2'
                    },
                    {
                        title: 'react的生命周期的不同阶段，对应方法是？',
                        path: '/react/3'
                    },
                    {
                        title: 'state和props有什么区别',
                        path: '/react/4'
                    },
                    {
                        title: 'super()和super(props)有什么区别',
                        path: '/react/5'
                    },
                    {
                        title: 'react的setState机制',
                        path: '/react/6'
                    },
                    {
                        title: 'react的事件机制',
                        path: '/react/7'
                    },
                    {
                        title: 'react事件绑定方式和区别',
                        path: '/react/8'
                    },
                    {
                        title: 'react构建组件方式',
                        path: '/react/9'
                    },
                    {
                        title: 'react组件间如何通信',
                        path: '/react/10'
                    },
                    {
                        title: 'react中key的作用',
                        path: '/react/11'
                    },
                    {
                        title: 'react中refs理解和应用场景',
                        path: '/react/12'
                    },
                    {
                        title: '类组件和函数组件的理解',
                        path: '/react/13'
                    },
                    {
                        title: '受控组件和非受控组件的理解',
                        path: '/react/14'
                    },
                    {
                        title: '高阶组件的理解',
                        path: '/react/15'
                    },
                    {
                        title: 'react hooks的理解及其应用',
                        path: '/react/16'
                    },
                    {
                        title: '引入css的方式',
                        path: '/react/17'
                    },
                    {
                        title: '组件之间过渡动画实现',
                        path: '/react/18'
                    },
                    {
                        title: 'redux的理解及其实现',
                        path: '/react/19'
                    },
                    {
                        title: 'redux中间件的理解及常用的中间件',
                        path: '/react/20'
                    },
                    {
                        title: 'react中redux结构',
                        path: '/react/21'
                    },
                    {
                        title: 'react router理解及常用的router',
                        path: '/react/22'
                    },
                    {
                        title: 'react router的模式及其实现原理',
                        path: '/react/23'
                    },
                    {
                        title: 'immutable的理解及其应用',
                        path: '/react/24'
                    },
                    {
                        title: 'react render方法原理',
                        path: '/react/25'
                    },
                    {
                        title: '提高组件渲染效率，如何避免不必要的render',
                        path: '/react/26'
                    },
                    {
                        title: 'react diff原理',
                        path: '/react/27'
                    },
                    {
                        title: 'Fiber架构的理解及其解决问题',
                        path: '/react/28'
                    },
                    {
                        title: 'react的jsx转换真实dom过程',
                        path: '/react/29'
                    },
                    {
                        title: 'react性能优化的手段',
                        path: '/react/30'
                    },
                    {
                        title: 'react项目捕获错误的方式',
                        path: '/react/31'
                    },
                    {
                        title: 'react服务端渲染及其原理',
                        path: '/react/32'
                    },
                    {
                        title: '常见问题及其解决方式',
                        path: '/react/33'
                    },
                    {
                        title: 'react源码',
                        path: '/react/code'
                    },
                    {
                        title: 'redux源码',
                        path: '/react/redux'
                    },
                ],
            },
            {
                title: 'webpack解析',
                path: '/webpack/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'webpack的理解，解决的问题',
                        path: '/webpack/1'
                    },
                    {
                        title: 'webpack的构建流程',
                        path: '/webpack/2'
                    },
                    {
                        title: 'webpack的常见的loader及其使用',
                        path: '/webpack/3'
                    },
                    {
                        title: 'webpack的常见的plugin及其使用',
                        path: '/webpack/4'
                    },
                    {
                        title: 'webpack的loader和plugin区别',
                        path: '/webpack/5'
                    },
                    {
                        title: 'webpack热更新如何实现',
                        path: '/webpack/6'
                    },
                    {
                        title: 'webpack proxy的工作原理',
                        path: '/webpack/7'
                    },
                    {
                        title: 'webpack的性能优化',
                        path: '/webpack/8'
                    },
                    {
                        title: '提高webpack的构建速度',
                        path: '/webpack/9'
                    },
                    {
                        title: '和webpack类似的工具',
                        path: '/webpack/10'
                    },
                    {
                        title: 'loader解析',
                        path: '/webpack/loaders'
                    },
                    {
                        title: 'plugin解析',
                        path: '/webpack/plugins'
                    }
                ],
            },
            {
                title: 'mdn解析',
                path: '/audit/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'MDN地址',
                        path: '/audit/1'
                    },
                    {
                        title: '解析特性第一部分',
                        path: '/audit/first'
                    },
                    {
                        title: '解析特性第二部分',
                        path: '/audit/second'
                    }
                ],
            },
            {
                title: '算法',
                path: '/calc/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: '算法的理解，应用场景',
                        path: '/calc/1'
                    },
                    {
                        title: '算法时间复杂度和空间复杂度，如何计算',
                        path: '/calc/2'
                    },
                    {
                        title: '数据结构的理解',
                        path: '/calc/3'
                    },
                    {
                        title: '栈队列的理解和操作',
                        path: '/calc/4'
                    },
                    {
                        title: '链表的理解和操作',
                        path: '/calc/5'
                    },
                    {
                        title: '集合的理解和操作',
                        path: '/calc/6'
                    },
                    {
                        title: '树结构的理解和操作',
                        path: '/calc/7'
                    },
                    {
                        title: '堆的理解和操作',
                        path: '/calc/8'
                    },
                    {
                        title: '图的理解和操作',
                        path: '/calc/9'
                    },
                    {
                        title: '常见的排序算法和区别',
                        path: '/calc/10'
                    },
                    {
                        title: '算法1-3',
                        path: '/calc/first'
                    },
                    {
                        title: '算法4-6',
                        path: '/calc/second'
                    },
                    {
                        title: '算法7-9',
                        path: '/calc/third'
                    }
                ],
            },
            {
                title: 'CSS',
                path: '/css/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: '盒子模型是什么',
                        path: '/css/1'
                    },
                    {
                        title: 'css选择器和优先级，继承的属性',
                        path: '/css/2'
                    },
                    {
                        title: 'em/px/rem/vh/vw区别',
                        path: '/css/3'
                    },
                    {
                        title: '设备像素，css像素，设备独立像素，dpr，ppi之间区别',
                        path: '/css/4'
                    },
                    {
                        title: '隐藏页面元素的方式和区别',
                        path: '/css/5'
                    },
                    {
                        title: 'BFC的理解',
                        path: '/css/6'
                    },
                    {
                        title: '元素水平垂直居中方法',
                        path: '/css/7'
                    },
                    {
                        title: '实现两栏布局，右侧自适应；三栏布局中间自适应',
                        path: '/css/8'
                    },
                    {
                        title: 'flexbox弹性盒布局模型及其适用场景',
                        path: '/css/9'
                    },
                    {
                        title: 'grid网格布局',
                        path: '/css/10'
                    },
                    {
                        title: 'css3新增特性',
                        path: '/css/11'
                    },
                    {
                        title: 'css3动画',
                        path: '/css/12'
                    },
                    {
                        title: '如何理解回流重绘，什么场景触发',
                        path: '/css/13'
                    },
                    {
                        title: '响应式设计基本原理及如何做',
                        path: '/css/14'
                    },
                    {
                        title: 'css提高性能的方式',
                        path: '/css/15'
                    },
                    {
                        title: '单行/多行文本溢出的省略样式',
                        path: '/css/16'
                    },
                    {
                        title: '实现视差滚动效果',
                        path: '/css/17'
                    },
                    {
                        title: '画一个三角形',
                        path: '/css/18'
                    },
                    {
                        title: 'chrome中小于12px的文字方式实现',
                        path: '/css/19'
                    },
                    {
                        title: 'css预编语言及其区别',
                        path: '/css/20'
                    },
                ],
            },
            {
                title: 'HTTP',
                path: '/http/1',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'HTTP是什么及其与HTTPS区别',
                        path: '/http/1'
                    },
                    {
                        title: '为什么HTTPS比HTTP安全，如何保证的呢',
                        path: '/http/2'
                    },
                    {
                        title: 'UDP和TCP区别及其应用场景',
                        path: '/http/3'
                    },
                    {
                        title: 'OSI七层模型',
                        path: '/http/4'
                    },
                    {
                        title: 'TCP/IP协议',
                        path: '/http/5'
                    },
                    {
                        title: 'DNS协议是什么，完整查询过程',
                        path: '/http/6'
                    },
                    {
                        title: 'HTTP1.0/1.1/2.0区别',
                        path: '/http/7'
                    },
                    {
                        title: 'HTTP常见的状态码，适应场景',
                        path: '/http/8'
                    },
                    {
                        title: 'GET和POST区别',
                        path: '/http/9'
                    },
                    {
                        title: 'HTTP常见的请求头及其作用',
                        path: '/http/10'
                    },
                    {
                        title: '输入URL发生了什么',
                        path: '/http/11'
                    },
                    {
                        title: 'TCP的三次握手和四次挥手',
                        path: '/http/12'
                    },
                    {
                        title: 'WebSocket的理解及其应用场景',
                        path: '/http/13'
                    },
                    {
                        title: 'CDN实现原理',
                        path: '/http/14'
                    },
                ],
            },
        ],
    },
    chainWebpack(config, isServer) {
        config.module
            .rule('webp')
            .test(/\.webp$/)
            .include
            .end()
            .use('file')
            .loader('file-loader');
        return config;
    },
    plugins: ['@vuepress/back-to-top']
}