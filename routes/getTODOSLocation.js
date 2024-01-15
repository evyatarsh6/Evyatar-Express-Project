const  { Router} = require('express');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

router.get("/", async (req, res) => {
    const wantedDocuQuery = {}
    const wantedProjection = {} 

    const result = await getWantedDocumentsFromCollec('TODOS', wantedDocuQuery, wantedProjection)
    if (result) {
      res.send(result);
    }
});


module.exports = router;

