const  { Router} = require('express');
const { getAllTODOSHandler } = require('../handlers/getAllTODOSHandler');
const { collectionNameReqestSchema } = require('../schemas/wantedCollection');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  if (collectionNameReqestSchema.parseAsync(req)) {
    return res.status(400).send(error.message);
  }
  next();
}

router.get('/:todoId', validateMiddleware, getAllTODOSHandler)


module.exports = router;

