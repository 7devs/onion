module.exports = function(event,eventkey){
    switch (event.toLowerCase()) {
        case 'click':
            switch (eventkey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'menu2 clicked.';
                    break;
                case 'hello':
                    reContent = 'Hello World'
                default:
                    reContent = '...';

            };
            break;
        case 'scancode_push';
            reContent = JSON.stringify(data);
            break;
        case 'scancode_waitmsg';
            reContent = JSON.stringify(data);
            break;
        case 'pic_sysphoto';
            reContent = JSON.stringify(data);
            break;
        case 'pic_photo_or_album';
            reContent = JSON.stringify(data);
            break;
        case 'pic_weixin';
            reContent = JSON.stringify(data);
            break;
        default:
            reContent = event;
            break;

    }
    return reContent;
}
