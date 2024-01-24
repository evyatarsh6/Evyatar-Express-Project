const  { Router} = require('express')

const router = Router();

router.put("/", async (req, res) => {
    const {_id} =  req.body
    
    const WantedDocuQuery =  {
        "_id": _id
      } 

      // const result = await putWantedCollection('TODOS', WantedDocuQuery, req.body )


    const result =  await generateOparation(
      'findOneAndReplace',
      'TODOS',
      WantedDocuQuery,
      req.body
    )

    if (result) {
      res.send('update successful');
    }
});


module.exports = router;

