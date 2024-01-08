const { MongoClient } = require('mongodb');

// Replace 'your_database_name' with the actual name of your MongoDB database
// const dbUrl = 'mongodb://localhost:27017/TODOLIST-Project-DB';

const dbUrl = 'mongodb://127.0.0.1:27017/TODOLIST-Project-DB';

async function connectToMongo() {
// async function connectToMongo(action, actionData) {
  const client = new MongoClient(dbUrl);
    // , { useNewUrlParser: true, useUnifiedTopology: true }
    // );
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    
    const collectionExists = await client.db('TODOLIST-Project-DB')
    .listCollections({ name: 'TODOS' }).hasNext();

    console.log(collectionExists)
    return collectionExists


    // action(actionData)
}
    // You can now use the 'client' object to interact with your MongoDB database
    // For example, you can perform operations like client.db('your_database_name').collection('your_collection_name').insertOne({...});

  finally {
    // Close the connection when done
    await client.close();
    console.log('Disconnected from MongoDB');
  }


}

module.exports = connectToMongo;  