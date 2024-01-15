const { MongoClient } = require("mongodb");

const connectionString = 'mongodb://localhost:27017/';
const dbName = 'TODOLIST-Project-DB';

const client = new MongoClient(connectionString);
let db;

const connectToDatabase = async(callback) => {
  try {
    const connect = await client.connect()
    const a = connect.db(dbName)
    console.log(a)
  }
  catch (err) {
    console.error(err);

  }
};

// Export a function that returns the connected db
module.exports = async () => {
  if (!db) {
    await connectToDatabase(() => {});
  }
  return db;
};
