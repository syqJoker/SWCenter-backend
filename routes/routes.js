var express = require('express');
var router = express.Router();
var tokenCenter = require('../common/token');

exports.routes = function (app) {

    app.use(function(req, res, next) {
        const params = req.params;
        const cookies = req.cookies;
        console.log(req.baseUrl);
        if(req.baseUrl != 'login'){
            if(cookies.token){
                res.send({code:200,success:false,msg:"用户未登录"});
            }else{
                var token  = tokenCenter.generateToken('test');
                console.log('token',token);
                console.log('token decode',tokenCenter.verifyToken(token));
                res.send({code:200,success:false,msg:"用户未登录"});
            }
        }
    });
    const indexRouter = require('./index');
    const usersRouter = require('./users');

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    return app;
}