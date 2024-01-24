const  { Router} = require('express')
const { patchWantedCollection } = require('../actions/patchActions');

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

    // const result = await patchWantedCollection('TODOS', WantedDocuQuery, data )
    const result = await generateOparation(
        'updateOne',
        'TODOS',
        WantedDocuQuery,
        data
      )

    if (result) {
      res.send('update successful');
    }
});


module.exports = router;

