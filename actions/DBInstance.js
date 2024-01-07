
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'TODOLIST-Project-DB';

const client = new MongoClient(url);

// const uri = "mongodb://localhost:27017";
let DBInstance = null;

const connectToDatabase = async () => {
  
  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db(dbName);

    DBInstance = database;

  } catch (err) {
    console.error('Connection failed:', err);
  }
};

const closeDatabaseConnection = async () => {
  if (DBInstance) {
    await DBInstance.close();
    console.log('Connection closed');
  }
};

module.exports = { connectToDatabase, closeDatabaseConnection, DBInstance };








    // const client = new MongoClient (uri, { 
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true });