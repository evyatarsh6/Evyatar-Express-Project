const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://127.0.0.1:27017/TODOLIST-Project-DB';

const connectToMongo = async () => 
 {
  const client = new MongoClient(dbUrl);
  let db = null
  try {
    await client.connect();
    db = await client.db('TODOLIST-Project-DB')
    if (db) {
      console.log('Connected to MongoDB');
      return db
    }
}
catch (err){
  return err
}
}

module.exports = connectToMongo; 