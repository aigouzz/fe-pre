module.exports = {
    base: '/dist/',
    title: '前端面试',
    description: '前端面试宝典',
    dest: '../aigouzz.github.io/dist/',
    themeConfig: {
        logo: './public/logo.png',
        nav: [
            { text: '我的主页', link: 'http://aigouzz.github.io/introduce' },
            { text: '网易云音乐', link: 'http://aigouzz.github.io/music' },
            { text: '商城项目', link: 'http://aigouzz.github.io/shop' },
          ],
        sidebar: [
            {
                title: 'vue解析',
                path: '/vue/main',
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
    
}