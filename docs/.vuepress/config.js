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
        ],
    },
    
}