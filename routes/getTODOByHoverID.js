const { Router } = require('express');

const { getTodoByIDHandler } = require('../handlers/getTODOByHoverIDHandler');
const { TODOIDReqestSchema } = require('../schemas/TODOID');

const router = Router();

// const validateMiddleware = () => async (req, res, next) => {
//   try {
//     await TODOIDReqestSchema.pick({params : true}).parseAsync(req)
//     return next()
//   } catch (error) {
//     return res.status(400).send(error.message) 
//   }
// }

// router.get('/:todoId', validateMiddleware, getTodoByIDHandler)
router.get('/:todoId', getTodoByIDHandler)


module.exports = router;

