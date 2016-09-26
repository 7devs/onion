module.exports = function(data){
    var msgtype = data.msgtype;
    var reContent;

    switch(MsgType){
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
        break;
        case 'location':
        break;
        case 'video':
        case 'shortvideo':

        default:
            reContent = 'I don\'t know';
        break;
    }



    return reContent;
}
