var config = require('../config.js'),
    wechat = requier('../wechat.js');
module.exports = function(data){
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey,
        reContent;
    switch (event) {
        case 'click':
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'Hello world';
                    break;
                case 'hello':
                    reContent = 'Hello World';
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
            reContent = event;
            break;

    }
    return reContent;
}
