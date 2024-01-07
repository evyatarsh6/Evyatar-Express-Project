const  { Router} = require('express')
const bodyParser = require('body-parser');
const { connectToDatabase } = require('../actions/connectToDB');
const { getWantedCollection } = require('../actions/getActions');



const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

const TODOList = getWantedCollection('TODOS')


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
