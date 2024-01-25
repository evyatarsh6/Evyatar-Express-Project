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

    // const result = await patchWantedCollection('TODOS', WantedDocuQuery, data )
    await generateDBOperation(
        'updateOne',
        'TODOS',
        WantedDocuQuery,
        operation
    )
    // if (result) {
    //   res.send('update successful');
    // }
});


module.exports = router;

