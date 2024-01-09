const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
// const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const getDB =  require('../getDB')

const router = Router();

router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const database =  await getDB()
  const wantedCollection = await database.collection("TODOS")
  const query = generateFilterKindQuery(filterKind)
  const results = await wantedCollection.findq(uery)
  res.send(results).status(200);
  
  
  // const results = await getWantedDocumentsFromCollec("TODOS", query)
  // .toArray()
  // let TODOSCollection = async () => await db.collection("TODOS");
  // let results = await TODOSCollection().find(query)
  //   .limit(50)
  //   .toArray();
  // res.send(results).status(200);
});


module.exports = router;

