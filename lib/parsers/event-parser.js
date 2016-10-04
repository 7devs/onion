var conf = require('../config.js'),
    wechat = require('../wechat.js');
module.exports = function(data){
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey,
        reContent;
    switch (event) {
        case 'click':
            reContent = 'menu clicked';
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'Hello world';
                    break;
                    wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
                        content: {
                            color: '#ff0000',
                            value: '测试内容。'
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
            console.log(data);
            reContent = JSON.stringify(data);
            break;

    }
    return reContent;
}
