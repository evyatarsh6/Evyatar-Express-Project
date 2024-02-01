const  { Router} = require('express')
const bodyParser = require('body-parser');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {

  await generateDBOperation(
    'insertOne',
    'TODOS',
    req.body
  )
});

module.exports = router;
