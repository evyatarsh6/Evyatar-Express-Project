const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { fromDBObjToArray } = require( '../utils/generalUtils');

const router = Router();

router.get("/", async (req, res) => {
    
  const resultsDBObj = await getWantedDocumentsFromCollec('TODOS',query )
  const finalResults = await fromDBObjToArray(resultsDBObj)
  res.send(finalResults).status(200);
});


module.exports = router;

