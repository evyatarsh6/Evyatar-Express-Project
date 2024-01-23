const connectToMongo = require('./initDB');

let db = null
const getDB = async () => {
  if (db) {
    return db
  }
  else{
    db = await connectToMongo()
    return db
  }
}

module.exports = getDB;  