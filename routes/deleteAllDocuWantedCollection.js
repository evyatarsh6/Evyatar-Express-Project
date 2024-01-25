const  { Router} = require('express')
const bodyParser = require('body-parser');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');
// const {getWantedCollection} = require('../DB/basicDBCollactionOperations')


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.delete("/:collectionName", async (req,res,next) => {
    const collectionName = req.params.collectionName


    const result = await generateDBOperation(
        'deleteMany',
        collectionName,
        {}
      )
      
      if (result) {
        res.send('update successful');
      }
      else{
        console.error('an error has ocured') 
      }
    });
    // const wantedCollection = await getWantedCollection(collectionName)
    // await wantedCollection.deleteMany({})
    // if (error) {
    //     console.error('an error has ocured')
    // }
    // else{
    //     console.log('delete all action was successful')
    // }
// });

module.exports = router;
