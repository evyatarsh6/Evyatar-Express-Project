// const  { Router} = require('express')
// const { getWantedDocumentsFromCollec } = require('../actions/getActions');
// const { fromDBObjToArray } = require( '../utils/generalUtils');
// const { json } = require('body-parser');

// const router = Router();

// router.get("/:IDS", async (req, res) => {
    
//   const generateQueryFunc = ID =>{
//        return  {'_id': ID }
//     } 
//     const projection = {}
//     const changedTODOS = JSON.parse(req.params.IDS)
//     const IDS = Object.keys(changedTODOS)
//     let updateTODOS = []
//     IDS.forEach(ID => { 

//         const currQuery =  generateQueryFunc(ID)      
//     })

//   const resultsDBObj = await getWantedDocumentsFromCollec('TODOS',query, projection)
//   const finalResults = await fromDBObjToArray(resultsDBObj)
//   res.send(finalResults).status(200);
// });


// module.exports = router;

