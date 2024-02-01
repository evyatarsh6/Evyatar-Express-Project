const  { Router} = require('express')
const bodyParser = require('body-parser');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');

const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.delete("/:collectionName", async (req,res,next) => {
    const collectionName = req.params.collectionName

    await generateDBOperation(
        'deleteMany',
        collectionName,
        {}
      )
      
    //   if (result) {
    //     res.send('update successful');
    //   }
    //   else{
    //     console.error('an error has ocured') 
    //   }
    });

module.exports = router;
