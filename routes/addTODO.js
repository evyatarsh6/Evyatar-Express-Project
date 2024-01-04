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


const reqValues = (req) => {
  return {
    "id": req.body.id,
    "kind": req.body.kinf
  }

}


router.post('/', (req, res) => {
  res.send(`Got a new TODO with values: ${reqValues(req)}`);
});

router.delete('/', (req, res) => {
  res.send('Got a DELETE request at');
});


module.exports = router;
