const Ajv = require('ajv')
const schema = require('../data/schema')

/**
* @fileoverview Library with functions that validate the data sent in the request to the API
*
* @author Victor Palomo <ing.victorpalomo@gmail.com>
*/
/**
 * @function isEmpty
 * @description Validate if the object sent in the request is empty
 * @param  {JSON} obj Object sent in the request to the api
 * @returns {Boolean}
 */
const isEmpty = (obj) => {
  return (Object.keys(obj).length === 0)
}

/**
 * @function validateSchemaPlayer
 * @description Analyze the json structure and verify that all the request data is correct
 * @param  {Array} players Array with player data
 * @returns {Object} Object with found error. Returns an empty object if no errors are found
 */
const validateSchemaPlayer = (players) => {
  const ajv = new Ajv()
  const valid = ajv.validate(schema, players)
  const errors = {}
  if (!valid) {
    errors.field = ajv.errors[0].dataPath.split('.')[2] || 'players'
    errors.message = ajv.errors[0].message
  }
  return errors
}

/**
 * @function validateSchemaLevels
 * @description Check that the level assigned to the player is in the default level object or in the object sent within the request
 * @param  {Array} players Array with player data
 * @param  {Object} levels Object with levels by team
 * @returns {Object} Object with found error. Returns an empty object if no errors are found
 */
const validateSchemaLevels = (players, levels) => {
  const errors = {}
  const unknowLevels = players.filter(player => {
    return !levels[player.equipo][player.nivel]
  })
  if (unknowLevels.length !== 0) {
    errors.field = 'nivel'
    errors.message = 'unknown levels were found'
  }
  return errors
}

module.exports = {
  isEmpty,
  validateSchemaPlayer,
  validateSchemaLevels
}
