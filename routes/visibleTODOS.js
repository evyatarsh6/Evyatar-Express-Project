const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

// router.get('/:filterKind', (req, res) => {

//   const filterKind = req.params.filterKind

//   const query = generateFilterKindQuery(filterKind)

//   const shownTODOS = getWantedDocumentsFromCollec('TODOS', query )

//   return Object.values(shownTODOS)

// });


  // let results = await collection.find({})


router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)

  let TODOSCollection = await db.collection("TODOS");
  let results = await TODOSCollection.find(query)
    .limit(50)
    .toArray();
  res.send(results).status(200);
});


module.exports = router;
