const { Router } = require('express')
const { patchDocumentFieldSchema } = require('../schemas/patchDocumentField.js');
const { patchFieldWantedTODOHandler } = require('../handlers/patchFieldWantedTODOHandler.js');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
    try {
        await patchDocumentFieldSchema.parseAsync(req)
        return next()
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

router.patch('/', validateMiddleware(), patchFieldWantedTODOHandler)
// router.patch('/', patchFieldWantedTODOHandler)

module.exports = router;

