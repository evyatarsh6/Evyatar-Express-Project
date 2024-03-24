const  { Router} = require('express');
const { getAllTODOSHandler } = require('../handlers/getAllTODOSHandler');
const { collectionNameReqestSchema } = require('../schemas/wantedCollection');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  try {
    await collectionNameReqestSchema.parseAsync(req)
    return next()
  } catch (error) {
    return res.status(400).send(error.message) 
  }
}

router.get('/:todoId', validateMiddleware, getAllTODOSHandler)


module.exports = router;

