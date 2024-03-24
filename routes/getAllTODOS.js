const  { Router} = require('express');
const { getAllTODOSHandler } = require('../handlers/getAllTODOSHandler');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  if (TODOIDReqestSchema.parseAsync(req)) {
    return res.status(400).send(error.message);
  }
  next();
}

router.get('/:todoId', validateMiddleware, getAllTODOSHandler)


module.exports = router;

