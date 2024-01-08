const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');
const { generateFilterKindQuery } = require('../queries/queries');



const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));



// router.post('/:filterKind', (req, res) => {
  
//   const TODOList = getWantedCollection('TODOS')
//   const newTODO =  Object.values(req.body)
  
//   postWantedCollection('TODOS', newTODO)

//   const filterKind = req.params.filterKind
//   const query = generateFilterKindQuery(filterKind)

//   const status = TODOList.findOne(query)
//   res.send(status)

// });

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("TODOS");
  let newTODO = req.body;
  await postWantedCollection('TODOS', newTODO)
  res.send(result).status(204);
});

module.exports = router;
