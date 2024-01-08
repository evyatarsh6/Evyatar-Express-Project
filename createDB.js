// const { MongoClient } = require("mongodb");

// const connectionString = 'mongodb://localhost:27017/' 
// const dbName = 'TODOLIST-Project-DB';

// const client = new MongoClient(connectionString);
// let conn;
// let db

// const connection = async () => {
//   try {
//     conn = await client.connect();
//   } catch (e) {
//     console.error(e);
//   }
//    db = conn.db(dbName);
// }

// const connectionInstance = async () => await connection()

// connectionInstance()

// module.exports = db;


const { MongoClient } = require("mongodb");

const connectionString = 'mongodb://localhost:27017/';
const dbName = 'TODOLIST-Project-DB';

const client = new MongoClient(connectionString);
let db;

const connectToDatabase = (callback) => {
  client.connect()
    .then((connection) => {
      db = connection.db(dbName);
      callback(null, db);
    })
    .catch((err) => {
      console.error(err);
      callback(err, null);
    });
};

// Export a function that returns the connected db
module.exports = async () => {
  if (!db) {
    await connectToDatabase(() => {});
  }
  return db;
};
