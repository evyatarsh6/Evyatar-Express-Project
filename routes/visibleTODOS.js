const  { Router} = require('express')
const { generateFilterKindQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

router.get('/:filterKind', (req, res) => {

  const filterKind = req.params.filterKind

  const query = generateFilterKindQuery(filterKind)

  const shownTODOS = getWantedDocumentsFromCollec('TODOS', query )

  return Object.values(shownTODOS)

});

module.exports = router;
