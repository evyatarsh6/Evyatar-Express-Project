// const {MongoClient} = require('mongodb');

// const mongoUrl = 'mongodb://localhost:27017/';
// const dbName = 'TODOLIST-Project-DB';

// const dbConnection = async () => {
//   const dbConnection = await MongoClient.connect(mongoUrl);
//   return dbConnection.db(dbName)
// }
// module.exports = { 
//   dbConnection
// };



import { MongoClient } from "mongodb";

const connectionString = 'mongodb://localhost:27017/' || "";
const dbName = 'TODOLIST-Project-DB';

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db(dbName);
export default db;
