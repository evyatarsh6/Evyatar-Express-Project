const  { Router} = require('express');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.get("/:hoverID", async (req, res) => {
    const hoverID = req.params.hoverID
    const query = {
        _id: hoverID
    }
    const projection = {}

    const result = await generateDBOperation(
      'find',
      'TODOS',
      query,
      projection
    )
  
    res.send(result).status(200);

});


module.exports = router;

