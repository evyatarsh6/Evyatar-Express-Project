const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  let collection = await getWantedCollection('TODOS')
  let newTODO = req.body;
  const result = await collection.insertOne(newTODO)
  res.send(result).status(204);
});

module.exports = router;
