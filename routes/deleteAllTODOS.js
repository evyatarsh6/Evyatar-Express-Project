const  { Router} = require('express')
const bodyParser = require('body-parser');
const { getWantedCollection } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');
const { error } = require('console');


const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.delete("/", async () => {
    const TODOSCollection = await getWantedCollection('TODOS')
    await TODOSCollection.deleteMany({})
    if (error) {
        console.error('an error has ocured')
    }
    else{
        console.log('delete all action was successful')
    }
});

module.exports = router;
