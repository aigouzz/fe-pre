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
                        title: '解析特性',
                        path: '/audit/first'
                    },
                    {
                        title: '解析特性',
                        path: '/webpack/second'
                    }
                ],
            },
        ],
    },
    
}