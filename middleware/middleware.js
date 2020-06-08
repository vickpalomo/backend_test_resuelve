const validations = require('./validation')
const levels = require('../data/level')

const validationsMiddleware = (req, res, next) => {
  const levelsToValidate = req.body.levels || levels
  const empty = validations.isEmpty(req.body)
  if (empty) return res.status(400).json({ error: 'No data to process' })
  const validateSchemaPlayer = validations.validateSchemaPlayer(req.body)
  if (Object.keys(validateSchemaPlayer).length !== 0) return res.status(400).json(validateSchemaPlayer)
  const validateSchemaLevels = validations.validateSchemaLevels(req.body.players, levelsToValidate)
  if (Object.keys(validateSchemaLevels).length !== 0) return res.status(400).json(validateSchemaLevels)
  next()
}

module.exports = {
  validationsMiddleware
}
