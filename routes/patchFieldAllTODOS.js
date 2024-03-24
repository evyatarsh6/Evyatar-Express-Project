const { Router } = require('express');
const { patchFieldAllTODOSHandler } = require('../handlers/patchFieldAlllTODOSHandler.js');
const { patchFieldAllDocuCollection } = require('../schemas/patchFieldAllTODOS.js');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  if (patchFieldAllDocuCollection.parseAsync(req)) {
    return res.status(400).send(error.message);
  }
  next();
}

router.patch('/', validateMiddleware, patchFieldAllTODOSHandler)


module.exports = router;

