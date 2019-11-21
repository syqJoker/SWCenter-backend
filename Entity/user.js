var Schema = require('../common/dbConnect').schema;
var model = require('../common/dbConnect').model;

const defaultUser = {
    username:"test",
    nickName:"小圣",
    sex:"男",
    birthday:"1989-01-01",
    startYear:"2019-08-01",
    address:"北京市朝阳区",
    height:'173',
    weight:'71',
    armLength:'190',
    legLength:'105',
    state:0,
    createTime:Date.now(),
    role:'入门',
    level:50
};
var userSchema = new Schema({
    username:  {
            type:String,required:[true, '用户名不能为空'],index:true,unique:true,
            validate:{validator: function(v) {
                return v.length<=12;
            },
            message: '用户名【{VALUE}】太长了,不能超过12位'}
        },
    nickName:  {type:String,required:[true, '昵称不能为空'],index:true},
    sex:  { type: String, default: '??' },
    birthday: { type: Date, default: Date.now },
    startYear: { type: Date, default: Date.now },
    address:  String,
    height:{ type: Number, default: 0,max:300 },
    weight:{ type: Number, default: 0,max:150 },
    armLength:{ type: Number, default: 0,max:300 },
    legLength:{ type: Number, default: 0,max:200 },
    state:{type:Number,default: 0},
    createTime:{ type: Date },
    updateTime:{ type: Date, default: Date.now },
    role:{type:String,default: '菜鸟'},
    level:{type:Number,default: 1}
});

var userModel = model('user', userSchema);

exports.userModel = userModel;
exports.userSchema = userSchema;
exports.default = defaultUser;

