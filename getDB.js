// const createDB = require('./createDB');

// const getDB = async () => {
//   const db = await createDB();
//   return db
// }

// getDB();



const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectAndQuery = async () => {
  try {
    await client.connect();
    const database = await client.db('TODOLIST-Project-DB');
    const collection = await database.collection('TODOS');
    
    console.log(collection)
    // Perform MongoDB operations here
    
  } finally {
    await client.close();
  }
}

connectAndQuery();
