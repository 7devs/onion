var conf = require('../config.js'),
    wechat = require('../wechat.js');
module.exports = function(data){
    // event 类型
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey,
        reContent;
    switch (event) {
        // 处理菜单点击事件
        case 'click':
        // 根据不同的 event key 给不同的返回值
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'Hello world';
                    wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
                        content: {
                            color: '#ff0000',
                            value: 'test，test'
                        }
                    });
                    break;
                default:
                    reContent = '...';
                    break;
            }
            break;
        case 'scancode_push':
            reContent = JSON.stringify(data);
            break;
        case 'scancode_waitmsg':
            reContent = JSON.stringify(data);
            break;
        case 'pic_sysphoto':
            reContent = JSON.stringify(data);
            break;
        case 'pic_photo_or_album':
            reContent = JSON.stringify(data);
            break;
        case 'pic_weixin':
            reContent = JSON.stringify(data);
            break;
        default:
            //调试数据
            console.log(data);
            reContent = JSON.stringify(data);
            break;

    }
    return reContent;
}
