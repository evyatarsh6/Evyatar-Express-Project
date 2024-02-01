const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.get("/:filterKind", async (req, res) => {

  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)
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

