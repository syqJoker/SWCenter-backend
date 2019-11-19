const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://username:password@quanta-dlvvi.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const DBInfo = require('./DBInfo');
const dbName = DBInfo.dbName;
const tables = DBInfo.tableName;
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
