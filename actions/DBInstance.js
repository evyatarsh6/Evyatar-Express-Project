
const {MongoClient} = require('mongodb')

const uri = "mongodb://localhost:27017/"

const DBInstance = {}

const connectToDatabase = async () => {

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('TODOLIST-Project-DB');

    DataBase.db = database
    // return database
  }

  finally {

    await client.close();
    console.log('Connection closed');
  }
}

module.exports = DBInstance








