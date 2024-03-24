const { Router } = require('express');

const { getTodoByIdHandler } = require('../handlers/getTODOByHoverIDHandler');
const { TODOIDSchema } = require('../schemas/TODOID');

const router = Router();

const validateMiddleware = () => async (req, res, next) => {
  if (TODOIDSchema.parseAsync(req.params.hoverID)) {
    return res.status(400).send('Validation failed');
  }
  next();
}

router.get('/:todoId', validateMiddleware, getTodoByIdHandler)


module.exports = router;

