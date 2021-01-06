let ipUrl = 'http://192.168.0.110:7001'

let servicePath = {
    article: ipUrl + '/article',     // 首页接口
    details: ipUrl + '/article/details/', //详细页接口
    type: ipUrl + '/type',  //分类接口
    list: ipUrl + '/list/',//文章列表接口
}

export default servicePath;