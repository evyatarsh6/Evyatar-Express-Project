const  { Router} = require('express')
const bodyParser = require('body-parser');
const db = require('../createDB');

const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = db.collection("TODOS");
  let newTODO = req.body;
  const result = await collection.insertOne(newTODO)
  res.send(result).status(204);
});

module.exports = router;
