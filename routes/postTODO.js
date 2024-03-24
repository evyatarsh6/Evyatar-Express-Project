const { Router } = require('express')
const bodyParser = require('body-parser');
const { postTODOHandler } = require('../handlers/postTODOHandler');
const { postTODOSchema } = require('../schemas/postTODO.js');

const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

const validateMiddleware = () => async (req, res, next) => {
  try {
    await postTODOSchema.pick({body : true}).parseAsync(req)
    return next()
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

router.post('/', validateMiddleware, postTODOHandler)

module.exports = router;
