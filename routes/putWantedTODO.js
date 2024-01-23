const  { Router} = require('express')
const { patchWantedCollection } = require('../actions/patchActions');
const { putWantedCollection } = require('../actions/putActions');

const router = Router();

router.put("/", async (req, res) => {
    const {_id} =  req.body
    
    const WantedDocuQuery =  {
        "_id": _id
    } 

    const result = await putWantedCollection('TODOS', WantedDocuQuery, req.body )

    if (result) {
      res.send('update successful');
    }
});


module.exports = router;

