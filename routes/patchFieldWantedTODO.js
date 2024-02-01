const  { Router} = require('express')
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.patch("/", async (req, res) => {
    const {_id, wantedField, wantedFieldUpdateVal} =  req.body
    
    const data = {
        'wantedField': wantedField,
        'wantedFieldUpdateVal': wantedFieldUpdateVal
    }
    const WantedDocuQuery =  {
        "_id": _id
    } 

    const operation = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

    await generateDBOperation(
        'updateOne',
        'TODOS',
        WantedDocuQuery,
        operation
    )
    
});


module.exports = router;

