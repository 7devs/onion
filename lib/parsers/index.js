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
        case 'event':
            reContent = require('./event-parser.js')(data);
        break;
        case 'image':
        case 'location':
        case 'video':
        case 'shortvideo':

        default:
            reContent = 'I don\'t know';
        break;
    }



    return reContent;
}
