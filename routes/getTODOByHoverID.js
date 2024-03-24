const { Router } = require('express');

const { getTodoByIdHandler } = require('../handlers/getTODOByHoverIDHandler');
const { TODOIDReqestSchema } = require('../schemas/TODOID');
const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  if (TODOIDReqestSchema.parseAsync(req)) {
    return res.status(400).send(error.message);
  }
  next();
}

router.get('/:todoId', validateMiddleware, getTodoByIdHandler)


module.exports = router;

