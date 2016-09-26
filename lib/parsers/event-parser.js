module.exports = function(event,eventKey){
    switch (event.toLowerCase()) {
        case 'click':
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'qrscene_.';
                    break;
                default:
                    reContent = '...';

            }
            break;
        default:
            reContent = event;
            break;

    }
    return reContent;
}
