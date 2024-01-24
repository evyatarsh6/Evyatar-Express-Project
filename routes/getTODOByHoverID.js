const  { Router} = require('express');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { generateDBOparation } = require('../DB/basicDBCollactionOparations');

const router = Router();

router.get("/:hoverID", async (req, res) => {
    const hoverID = req.params.hoverID
    const query = {
        _id: hoverID
    }
    const projection = {}

    const result = await generateDBOparation(
      'find',
      'TODOS',
      query,
      projection
    )
  
    res.send(result).status(200);

    // const result = await getWantedDocumentsFromCollec('TODOS', WantedDocuQuery, wantedProjection)
    // if (result) {
    //   res.send(result);
    // }

});


module.exports = router;

