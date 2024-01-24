const  { Router} = require('express');
const { patchWantedCollection } = require('../actions/patchActions');
const { generateDBOparation } = require('../DB/basicDBCollactionOparations');



const router = Router();

router.patch("/", async (req, res) => {
    
    const {wantedField, wantedFieldUpdateVal} =  req.body
    
    const data = {
      'wantedField': wantedField,
      'wantedFieldUpdateVal': wantedFieldUpdateVal
    }

    const oparation = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

    const WantedDocuQuery = {}

    // const result = await patchWantedCollection('TODOS', WantedDocuQuery, data, true)
    const result = await generateDBOparation(
      'updateMany',
      'TODOS',
      WantedDocuQuery,
      oparation
    )

    if (result) {
      res.send('update successful');
    }
});


module.exports = router;

