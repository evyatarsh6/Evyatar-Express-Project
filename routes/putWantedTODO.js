const  { Router} = require('express');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.put("/", async (req, res) => {
    const {_id} =  req.body
    
    const WantedDocuQuery =  {
        "_id": _id
      } 


    await generateDBOperation(
      'findOneAndReplace',
      'TODOS',
      WantedDocuQuery,
      req.body
    )
});


module.exports = router;

