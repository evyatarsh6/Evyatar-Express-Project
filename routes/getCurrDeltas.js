const  { Router} = require('express')
const bodyParser = require('body-parser');
const { generateDBOperation } = require('../DB/basicDBCollactionOperations');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

let prevTime = '2024-01-25T12:29:11.822+00:00'

router.get("/:currTime", async (req, res) => {

    let newTime = req.params.currTime
    
    const query = {
      "timeStanp": { $lt: newTime },
      $and:
      [{ "timeStanp": { $gt: prevTime } }]
    }


    const avi = await generateDBOperation(
        'find',
        'changeLog',
        query,
      )

    prevTime = newTime


      if (avi) {
          res.send(avi)
      }


})



module.exports = router;
