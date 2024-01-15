const  { Router} = require('express');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

router.get("/", async (req, res) => {
    const wantedDocuQuery = {$ne:{location: {}}}
    const wantedProjection = {location:1} 

    const result = await getWantedDocumentsFromCollec('TODOS', wantedDocuQuery, wantedProjection)
    if (result) {
      res.send(result);
    }
});


module.exports = router;

