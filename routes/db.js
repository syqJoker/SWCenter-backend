var express = require('express');
var router = express.Router();
const client = require('../common/dbConnect').client;
const DBInfo = require('../common/DBInfo');
const dbName = DBInfo.dbName;
const tables = DBInfo.tableName;

router.get('/connect', function(req, res, next) {
    client.connect(function (err){
        const collection = client.db(dbName).collection(tables.user);
        console.log('数据库连接成功');
        client.close();
    });
    res.send(200,JSON.stringify(req.params)+'respond with a resource');
});
router.get('/connect/createIndex', function(req, res, next) {
    client.connect(function (err){
        const collection = client.db(dbName).collection(tables.user);
        console.log('数据库连接成功');
        client.close();
    });
    res.send(200,JSON.stringify(req.params)+'respond with a resource');
});
router.get('/listUser', function(req, res, next) {
    client.connect(function (err){
        const collection = client.db(dbName).collection(tables.user);
        console.log('数据库连接成功');
        res.send(collection.find());
        client.close();
    });

});
router.get('/insertOne', function(req, res, next) {
    var params = req.param;
    console.log("请求参数:"+JSON.stringify(params));
    const defaultUser = {
        name:"小圣",
        sex:"男",
        birthday:"1989-01-01",
        startYear:"2019-08-01",
        address:"北京市朝阳区",
        height:'173',
        weight:'71',
        armLength:'190',
        legLength:'105',
        state:0,
        createTime:'2019-11-19 14:12:13',
        updateTime:'',
        role:'入门',
        level:50
    };
    if(!params){
        params = defaultUser
    }
    client.connect(function (err){
        const collection = client.db(dbName).collection(tables.user);
        console.log('数据库连接成功');
        const insertRes = collection.insertOne(params, function(err) {
            if (err) throw err;
        });
        console.log("文档插入成功",insertRes);
        client.close();
    });
    res.send(200,JSON.stringify(insertRes)+'respond with a resource');
});

module.exports = router;
