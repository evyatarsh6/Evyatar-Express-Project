const  { Router} = require('express')
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { fromDBObjToArray } = require( '../utils/generalUtils');

const router = Router();

router.get("/", async (req, res) => {
const query = {}
  const projection = {}

  const result = await generateOparation(
    'find',
    'TODOS',
    query,
    projection
  )

  res.send(result).status(200);

  // const resultsDBObj = await getWantedDocumentsFromCollec('TODOS',query, projection )
  // const finalResults = await fromDBObjToArray(resultsDBObj)
  // res.send(finalResults).status(200);
  
});


module.exports = router;

