const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  // let collection = await getWantedCollection('TODOS')
  // const result = await collection.insertOne(newTODO)

  let newTODO = req.body;
  const result = await postWantedCollection('TODOS', newTODO)
  if (result) {
    res.send(result).status(204);
    console.log('update successful')
  }
});

module.exports = router;
