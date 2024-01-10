const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
import { fromDBObjToArray } from '../utils/generalUtils';

const router = Router();

router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)
  const resultsDBObj = await getWantedDocumentsFromCollec('TODOS',query )
  const finalResults = fromDBObjToArray(resultsDBObj)
  res.send(finalResults).status(200);
});


module.exports = router;

