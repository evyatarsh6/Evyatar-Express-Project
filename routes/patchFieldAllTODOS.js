const { Router } = require('express');
const { patchFieldAllTODOSHandler } = require('../handlers/patchFieldAlllTODOSHandler.js');
const { patchDocumentFieldSchema } = require('../schemas/patchDocumentField.js');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  try {
    await patchDocumentFieldSchema.parseAsync(req)
    return next()
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

router.patch('/', validateMiddleware(), patchFieldAllTODOSHandler)


module.exports = router;

