const  { Router} = require('express');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');

const router = Router();

router.get("/:hoverID", async (req, res) => {
    const hoverID = req.params.hoverID
    const WantedDocuQuery = {
        _id: hoverID
    }
    const wantedProjection = {}

    const result = await getWantedDocumentsFromCollec('TODOS', WantedDocuQuery, wantedProjection)
    if (result) {
      res.send(result);
    }
});


module.exports = router;

