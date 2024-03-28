const { Router } = require('express');
const { getTodoByIDHandler } = require('../handlers/getTodoByIDHandler')
const { TODOIDReqestSchema } = require('../schemas/TODOID');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
    try {
        await TODOIDReqestSchema.parseAsync(req)
        return next()
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

router.get('/:todoId', validateMiddleware(), getTodoByIDHandler)


module.exports = router;

