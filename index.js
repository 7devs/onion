var express = require('express'),
    app = express(),
    //引入配置文件
    conf = require('./lib/config'),
    //引入系统提供的 path 包
    path = require('path'),
    //引入微信 API 功能包
    wechat = require('./lib/wechat'),
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: false
}));

//设置模板目录
app.set('views', path.join(__dirname,'lib/views'));
//设置模板引擎
app.set('view engine', 'ejs');

//静态文件目录，在 Express 中提供如图像,CSS 文件和 JavaScript 文件之类的静态文件时，使用 Express 中的 express.static 内置中间件函数。
app.use(
    express.static(
        path.join(__dirname, 'static'),
        {
            index: false,
            maxAge: '7 days'

        }
    )
);

//初始化微信 API 功能包
wechat(conf.wechat);

//创建自定义菜单，lib/menu.json 为菜单结构描述文件
//相关文档： https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013&token=&lang=zh_CN
wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi',require('./lib/routers/wxapi.js'));
app.use('/pages',require('./lib/routers/pages.js'));

app.listen(8005,function(err){
    console.log('listening at 8005...')
})
