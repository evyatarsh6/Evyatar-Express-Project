const  { Router} = require('express')
const bodyParser = require('body-parser');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {

  // const result = await postWantedCollection('TODOS', req.body)

  const result = await generateOparation(
    'insertOne',
    'TODOS',
    req.body
  )
  
  if (result) {
    res.send('update successful');
  }
});

module.exports = router;
