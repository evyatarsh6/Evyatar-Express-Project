const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  let newTODO = req.body;
  const result = await postWantedCollection('TODOS', newTODO)
  if (result) {
    res.send('update successful').status(204);
  }
});

module.exports = router;
