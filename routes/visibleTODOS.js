const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

router.get("/:filterKind", async (req, res) => {
  const filterKind = req.params.filterKind
  const query = generateFilterKindQuery(filterKind)
  const results = await getWantedDocumentsFromCollec('TODOS',query )
  res.send(results).status(200);
});


module.exports = router;

