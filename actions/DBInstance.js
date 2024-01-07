const {MongoClient} = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/';
const dbName = 'TODOLIST-Project-DB';

const dbConnection = async () => {
  const dbConnection = await MongoClient.connect(mongoUrl);
  return dbConnection.db(dbName)
}
module.exports = { 
  dbConnection
};

