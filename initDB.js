const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://127.0.0.1:27017/TODOLIST-Project-DB';

const connectToMongo = async () => 
 {
  const client = new MongoClient(dbUrl);
  let db = null
  try {
    db = await client.connect();
    console.log('Connected to MongoDB');
    if (db) {
      return db
    }
}
catch (err){
  return err
}
}

module.exports = connectToMongo;  