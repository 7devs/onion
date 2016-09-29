module.exports = function(content){
    var reContent,

        albums = require('../models/album');
        //i = 1 && i++ && i < albums.length;
    var album = new Array();


    switch (content) {

        case '唱片列表':
        for(var i = 0;i < albums.length;i++){
            album.push(albums[i].title);
        };

            reContent = i + '-' + album.join() + '\n';

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
