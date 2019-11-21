var express = require('express');
var router = express.Router();
const DBConnect = require('../common/dbConnect');
const DBInfo = require('../common/DBInfo');
const dbName = DBInfo.dbName;
const tables = DBInfo.tableName;
var userBean = require('../Entity/user');
var userModel = userBean.userModel;
const defaultUser = userBean.default;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    res.send(200,JSON.stringify(req.params)+'respond with a resource');
});

router.post('/save', function(req, res, next) {
    var params = defaultUser;
    // if(req.param){
    //     params = req.param;
    // }
    console.log("请求参数:"+JSON.stringify(params)+" - "+ req.params);

    var insertUser = new userModel(params);
    insertUser.save(function (err,insertUser) {
        if (err) return console.error(err);
        console.log('保存成功');
    });
    res.send(200,insertUser);
});

router.get('/list', function(req, res, next) {
    userModel.find(function(err,list){
        if (err) return handleError(err);
        console.log('callback 查询结果：',JSON.stringify(list));
        res.send(200,list);
    });
});


module.exports = router;
