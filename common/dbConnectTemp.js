const mongoose = require('mongoose');

const uri = "mongodb+srv://username:password@quanta-dlvvi.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri);
// client.connect(err => {
//     const collection = client.db(dbName).collection(tables.user);
// // perform actions on the collection object
// client.close();
// });

var client = mongoose.connection;
client.on('error', console.error.bind(console, 'connection error:'));
client.once('open', function() {
    console.log('数据库打开')
});

exports.client = client;
exports.mongoose = mongoose;
exports.schema  = mongoose.Schema;
exports.model  = mongoose.model;