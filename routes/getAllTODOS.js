const  { Router} = require('express');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.get("/", async (req, res) => {
const query = {}
  const projection = {}

  const result = await generateDBOperation(
    'find',
    'TODOS',
    query,
    projection
  )

  res.send(result).status(200);

});


module.exports = router;
