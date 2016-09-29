module.exports = function(content){
    var reContent,

        albums = require('../models/album');
        //i = 1 && i++ && i < albums.length;
    var album = [];
    for(var i = 0;i < albums.length;i++){
        album.push((i + 1) + '-' + albums[i].title);
    };

    switch (content) {

        case '唱片列表':

            reContent = album.join('\n');

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
