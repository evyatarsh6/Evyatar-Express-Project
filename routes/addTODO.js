const  { Router} = require('express')
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser')

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri);

const database = client.db('TODOLIST-Project-DB');
const TODOList = database.collection('TODOS');
const filterKind = database.collection('filterInfo').find()



const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));



router.post('/', (req, res) => {

  const id = TODOList.insertOne(req.body)
  
  const query = {
    '_id': id.insertedId
  } 
  
  const status = TODOList.findOne(query)
  res.send(status)

});

router.get('/', (req, res) => {
  res.send('Got a GET request');
});

router.delete('/', (req, res) => {
  res.send('Got a DELETE request at');
});



module.exports = router;
