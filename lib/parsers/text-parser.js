module.exports = function(content){
    var reContent;

    switch (content) {
        case '1':
            reContent = '11';
            break;
        case '2':
            reContent = '22';
            break
        case '3':
            reContent ='33';
            break;
        default:
            reContent = 'xxx';
            break;
    }
    return reContent;
}
