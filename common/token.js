const common = {
  idLength:12,
    dateLength:8,
    floorStart:3,
    floorLength:8,
  addFlag:" ",
};
var Token =  {
    generateToken : function(id){
        var token = id;
        if(token.length<common.idLength){
            for(var i = token.length;i<common.idLength;i++){
                token = token + common.addFlag;
            }
        }
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var day = new Date().getDate();
        var today = year +""+ (month<10?'0'+month:month) +""+(day<10?'0'+day:day);
        var floor = (Math.random() + '').substr(common.floorStart,common.floorLength);
        token = token + today + floor;
        return new Buffer(token).toString('base64');
    },
    verifyToken : function(token){
        var tokenStr = new Buffer(token, 'base64').toString();
        return tokenStr;
    },
}

module.exports = Token;