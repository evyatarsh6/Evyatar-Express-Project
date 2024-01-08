const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const db = require('../getDB');

const router = Router();

router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)

  // let TODOSCollection = async () => await db.collection("TODOS");
  let TODOSCollection = async () => await db.collection("TODOS");
  let results = await TODOSCollection.find(query)
    .limit(50)
    .toArray();
  res.send(results).status(200);
});


module.exports = router;

