// 项目配置文件
module.exports = {
    // 微信相关配置
    wechat: {
        appid: 'wxc983a2a9cdf71ced',
        secret: '7f2156dc5f31dc8ae98037d0b26910c9',
        // 微信 API 地址，地址后需要连接相关功能地址，例如：https://api.weixin.qq.com/cgi-bin/user/get
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        template: {
            test: 'vXHxijHFOgaxq58gIoHhZGHpvbCKjlhiKAb7KbjH7go'
        }
    }
}
