const  { Router} = require('express')
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/"

const client = new MongoClient(uri);

const database = client.db('TODOLIST-Project-DB');
const TODOList = database.collection('TODOS');
const filterKind = database.collection('filterInfo').find()

const router = Router();

router.get('/', (req, res) => {

  switch (filterKind) {
    case 'normal':
      res.send(Object.values(TODOList).filter((TODO) => !TODO.isDeleted));
      break;
    case 'delete':
      res.send(Object.values(TODOList).filter((TODO) => TODO.isDeleted));
      break;
    case 'choosen':
      res.send(Object.values(TODOList).filter(
        (TODO) => TODO.isChoosen && !TODO.isDeleted
      )
      );
      break;
    default:
      res.send([]);
  }
});

module.exports = router;
