const withCss = require('@zeit/next-css')

if (typeof require != 'undefined') {
    require.extensions['.css'] = file => { }
}

// 导出静态页面
module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/list': { page: '/list' },
            '/detailes': { page: '/detailes' },
            // '/_error': { pages: '/_error' },
            // '/_app': { pages: '/_app' },
        }
    }
}

module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id'
    },
}

module.exports = withCss({})