const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { fromDBObjToArray } = require( '../utils/generalUtils');

const router = Router();

router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)
  const projection = {}
  const resultsDBObj = await getWantedDocumentsFromCollec('TODOS',query, projection )
  const finalResults = await fromDBObjToArray(resultsDBObj)
  res.send(finalResults).status(200);
});


module.exports = router;

