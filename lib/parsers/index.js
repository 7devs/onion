module.exports = function(data){
    var msgType = data.msgtype;
    var reContent;

    switch(msgType){
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
        break;
        case 'image':
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