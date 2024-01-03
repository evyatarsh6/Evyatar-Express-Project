const  { Router} = require('express')
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri);

const database = client.db('TODOLIST-Project-DB');
const TODOList = database.collection('TODOS');
const filterKind = database.collection('filterInfo').find()

const router = Router();

router.put('/', (req, res) => {
      res.send(Object.values(TODOList).filter((TODO) => !TODO.isDeleted));
  }
);

module.exports = router;
