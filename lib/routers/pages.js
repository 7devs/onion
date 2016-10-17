var router = require('express').Router();

router.route('/one')
    .get(function(req,res,next){
        //渲染模板
        res.render('one');
    });


router.route('/two')
    .get(function(req,res,next){
        res.render('two',{
            title : 'Page Two',
            name : 'onion',
            arr : [1,2,3,4],
            works : {
                company : 'China Futures'
            }
        });
    });


module.exports = router;
