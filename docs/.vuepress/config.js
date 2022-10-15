module.exports = {
    base: '/dist/',
    title: '前端面试',
    description: '前端面试宝典',
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
        ],
    },
    chainWebpack(config, isServer) {
        console.log(config)
        return config;
    },
    plugins: ['@vuepress/back-to-top']
}