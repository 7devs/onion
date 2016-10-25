var router = require('express').Router();

router.route('/one')
    .get(function(req,res,next){
        //渲染模板
        res.render('one');
    });


router.route('/two')
    .get(function(req,res,next){
        // res.render() 中的 render() 是指对模板进行编译，并将变量传进去，这里是将"title","name"这些变量（值
        //为 'Page Two'，'onion'）传到 "two" 这个模板里，也就是 "/views/two.ejs"。
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
