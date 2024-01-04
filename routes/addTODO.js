const  { Router} = require('express')
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri);

const database = client.db('TODOLIST-Project-DB');
const TODOList = database.collection('TODOS');
const filterKind = database.collection('filterInfo').find()

const router = Router();

router.get('/', (req, res) => {
  res.send('Got a GET request');
});

router.post('/', (req, res) => {
  res.send('Got a POST request');
});

router.put('/', (req, res) => {
  res.send('Got a PUT request at ');
});

router.delete('/', (req, res) => {
  res.send('Got a DELETE request at');
});


module.exports = router;
