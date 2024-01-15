const  { Router} = require('express');
const { patchWantedCollection } = require('../actions/patchActions');



const router = Router();

router.patch("/", async (req, res) => {
    
    const {wantedField, wantedFieldUpdateVal} =  req.body
    
    const data = {
        'wantedField': wantedField,
        'wantedFieldUpdateVal': wantedFieldUpdateVal
    }
    const WantedDocuQuery = {}

    const result = await patchWantedCollection('TODOS', WantedDocuQuery, data, true)

    if (result) {
      res.send('update successful');
      console.log(req.body)
    }
});


module.exports = router;

