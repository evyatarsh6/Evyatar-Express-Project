const { Router } = require('express')
const bodyParser = require('body-parser');
const { getDeltasHandler } = require('../handlers/getDeltasHandler');
const { getDeltasSchema } = require('../schemas/deltas');

const router = Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

const validateMiddleware = () => async (req, res, next) => {
  try {
    await getDeltasSchema.parseAsync(req)
    return next()
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

router.get("/:currTime", validateMiddleware(), getDeltasHandler)



module.exports = router;
