const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');
const { generateFilterKindQuery } = require('../queries/queries');



const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

const TODOList = getWantedCollection('TODOS')


router.post('/:filterKind', (req, res) => {

  const newTODO =  Object.values(req.body)
  
  postWantedCollection('TODOS', newTODO)

  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)

  const status = TODOList.findOne(query)
  res.send(status)

});

// router.get('/', (req, res) => {
//   res.send('Got a GET request');
// });

// router.delete('/', (req, res) => {
//   res.send('Got a DELETE request at');
// });



module.exports = router;
