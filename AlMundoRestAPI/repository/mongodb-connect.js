const MongoClient = require('mongodb').MongoClient;

var MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/';

var getConnection = () => {
  return MongoClient.connect(MONGO_DB_CONNECTION, (error, client) => {
    if (error) {
     return console.log('Unable to connect to MongoDB server ' + error)
   }  else {
     const db = client.db('dbAlMundo');
     return db;
   }
 }
)
};

module.exports = {
  getConnection
};

getCollection();
