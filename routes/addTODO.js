const  { Router} = require('express')
const bodyParser = require('body-parser');
const getDB =  require('./getDB')


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  let collection = await db.collection("TODOS");
  let newTODO = req.body;
  const result = await collection.insertOne(newTODO)
  res.send(result).status(204);
});

module.exports = router;
