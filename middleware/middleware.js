const validations = require('./validation')
const levels = require('../data/level')
/**
 * @function validationsMiddleware
 * @description Validate json receive with valid scheme
 * @param  {Object} req Request Object
 * @param  {Object} res Response Object
 * @param  {Function} next Pass control to the next function
 * @returns {Object | Function}
 */
const validationsMiddleware = (req, res, next) => {
  const levelsToValidate = req.body.levels || levels
  const empty = validations.isEmpty(req.body)
  if (Object.keys(empty).length !== 0) return res.status(400).json(empty)
  const validateSchemaPlayer = validations.validateSchemaPlayer(req.body)
  if (Object.keys(validateSchemaPlayer).length !== 0) return res.status(400).json(validateSchemaPlayer)
  const emptyLevels = validations.isEmpty(levelsToValidate)
  if (Object.keys(emptyLevels).length !== 0) return res.status(400).json(emptyLevels)
  const validateSchemaLevels = validations.validateSchemaLevels(req.body.players, levelsToValidate)
  if (Object.keys(validateSchemaLevels).length !== 0) return res.status(400).json(validateSchemaLevels)
  next()
}

module.exports = {
  validationsMiddleware
}
