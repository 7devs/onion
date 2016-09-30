module.exports = function(content){
    var reContent,
        albums = require('../models/album');


    if(content === "唱片列表"){
        var album = [];
        for(var i = 0;i < albums.length;i++){
            album.push((i + 1) + '-' + albums[i].title);
        };
        reContent = album.join('\n');
    }else{
            reContent = '曲库中没有第X张专辑';
        };
    /*}else if(content = "a" + i + 1){
        //if(album){
            reContent = '标题:' + albums[i].title + '\n' +
                        '风格:' + albums[i].type + '\n' +
                        '时长:' + albums[i].length + '秒' + '\n' +
                        '演唱者:' + albums[i].singer;
        //};*/

};
