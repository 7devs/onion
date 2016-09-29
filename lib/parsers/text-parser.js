module.exports = function(content){
    var reContent,
        albums = require('../models/album');
        //index = albums.length,
        //album = albums[index].title;

    switch (content) {
        for(var i = 0;i < albums.length;i++){
            albums[i].title;
        }
        case '唱片列表':
            reContent = 'i+1' + '-' + albums[i].title;
            break;
        case '2':
            reContent = '22';
            break
        case '3':
            reContent = '33';
            break;
        default:
            reContent = 'xxx';
            break;
    }
    return reContent;
}
