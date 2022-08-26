module.exports = {
    title: '前端面试',
    description: '前端面试宝典',
    themeConfig: {
        logo: 'logo.png',
        sidebar: [
            {
                title: 'vue解析',
                path: '/vue/main',
                sidebarDepth: 1,
                children: [
                    {
                        title: 'vue源码',
                        path: '/vue/code'
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