const withCss = require('@zeit/next-css')

if (typeof require != 'undefined') {
    require.extensions['.css'] = file => { }
}

// 导出静态页面
module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/' },
            '/p/detailes': { page: '/' },
        }
    }
}

module.exports = withCss({})