module.exports = function(content){
    var reContent,
        albums = require('../models/album');

    if(content === "唱片列表"){
        var album = [];
        for(var i = 0;i < albums.length;i++){
            album.push((i + 1) + '-' + albums[i].title);
        };
        reContent = album.join('\n');
    }else if(content[0] === "a"){
        if(albums[parseInt(content.slice(1)-1)]){
        reContent = '标题 : ' + albums[parseInt(content.slice(1))-1].title + '\n' +
                    '风格 : ' + albums[parseInt(content.slice(1))-1].type + '\n' +
                    '时长 : ' + albums[parseInt(content.slice(1))-1].length + '秒' + '\n' +
                    '演唱者 : ' + albums[parseInt(content.slice(1))-1].singer;
        }else{
            reContent = '没有找到第' + content.slice(1) + '张专辑'
        }
    }else{
        reContent = '没有找到专辑'
    };
    return reContent;
};
