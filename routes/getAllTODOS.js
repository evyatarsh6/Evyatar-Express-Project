const  { Router} = require('express');
const { generateDBOparation } = require('../DB/basicDBCollactionOparations');

const router = Router();

router.get("/", async (req, res) => {
const query = {}
  const projection = {}

  const result = await generateDBOparation(
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

