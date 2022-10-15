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
                path: '/react/main',
                sidebarDepth: 1,
                children: [
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
                path: '/webpack/main',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'loader解析',
                        path: '/webpack/loaders'
                    },
                    {
                        title: 'plugins解析',
                        path: '/webpack/plugins'
                    }
                ],
            },
            {
                title: 'mdn解析',
                path: '/audit/main',
                sidebarDepth: 1,
                children: [
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
                path: '/calc/main',
                sidebarDepth: 1,
                children: [
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
    chainWebpack(config, isServe) {
        console.log(config)
        return config;
    },
    plugins: ['@vuepress/back-to-top']
}