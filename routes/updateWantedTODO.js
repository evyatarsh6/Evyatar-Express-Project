const  { Router} = require('express')
const { generateFilterKindQuery, generateWantedDocuFromIDQuery } = require('../queries/queries');
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { fromDBObjToArray } = require( '../utils/generalUtils');
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

    const result = await patchWantedCollection('TODOS', WantedDocuQuery, data )

    if (result) {
      res.send('update successful').status(204);
      console.log(req.body)
    }
});


module.exports = router;

