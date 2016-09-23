var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .get(function(req,res,next){
        var str = req.query.echstr;
        res.send('str');
    });

module.exports = router;
