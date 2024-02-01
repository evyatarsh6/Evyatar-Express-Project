const  { Router} = require('express');
const { patchWantedCollection } = require('../actions/patchActions');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');



const router = Router();

router.patch("/", async (req, res) => {
    
    const {wantedField, wantedFieldUpdateVal} =  req.body
    
    const data = {
      'wantedField': wantedField,
      'wantedFieldUpdateVal': wantedFieldUpdateVal
    }

    const operation = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

    const WantedDocuQuery = {}

    const result = await generateDBOperation(
      'updateMany',
      'TODOS',
      WantedDocuQuery,
      operation
    )
    
});


module.exports = router;

