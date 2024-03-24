const { Router } = require('express')
const bodyParser = require('body-parser');
const { collectionNameReqestSchema } = require('../schemas/wantedCollection');
const { deleteAllDocuWantedCollectionHandler } = require('../handlers/deleteAllDocuWantedCollectionHandler');

const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

const validateMiddleware = () => async (req, res, next) => {
  if (collectionNameReqestSchema.parseAsync(req)) {
    return res.status(400).send(error.message);
  }
  next();
}

router.delete('/:collectionName', validateMiddleware, deleteAllDocuWantedCollectionHandler)


module.exports = router;
