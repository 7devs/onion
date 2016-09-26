var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }),function(req,res,next){
        var data = req.body.xml;
        var content =  data.content;
        var rescontent;
        //TODO: XXX
        if(content === '1'){
            rescontent = 'Monday'
        }else if(content === '2'){
            rescontent = 'Tuesday'
        }else if(content === '3'){
            rescontent = 'Wednesday'
        }else if(content === '4'){
            rescontent = 'Thursday'
        }else if(content === '5'){
            rescontent = 'Friday'
        }else if(content === '6'){
            rescontent = 'Saturday'
        }else if(content === '7'){
            rescontent = 'Sunday'
        }else if(content === '8'){
            rescontent = 'Help !'
        }else if(content === '9'){
            rescontent = 'Go die !'
        }else{
            rescontent = 'Sorry'
        };



        res.append('Content-Type','text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: rescontent}},
            ]
        }));
    });

router.route('/')
    .get(function(req,res,next){
        var str = req.query.echostr;
        res.send(str);
    });

module.exports = router;
