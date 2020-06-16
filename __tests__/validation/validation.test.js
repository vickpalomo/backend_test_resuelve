const validations = require('../../middleware/validation')
const mock = require('../../__mocks__/mock')

describe('validation.js file', () => {
  describe('#isEmpty', () => {
    it('when receive an empty json should return an object with the error message', () => {
      expect(validations.isEmpty({})).toEqual(mock.expectErrors)
    })

    it('when not receive an empty json should return a empty object', () => {
      expect(validations.isEmpty({ players: mock.players })).toEqual({})
    })
  })

  describe('#validateSchemaPlayers', () => {
    it('when receive a json with a missing attribute should return an object with the errors generated', () => {
      expect(validations.validateSchemaPlayer({ players: mock.playersMissingAttribute })).toEqual(mock.errorMissingAttribute)
    })

    it('when receive a json with a valid schema should return a json without errors', () => {
      expect(validations.validateSchemaPlayer({ players: mock.players })).toEqual({})
    })
  })

  describe('#validateSchemaLevels', () => {
    it('when receive unknow levels should return a json without errors', () => {
      expect(validations.validateSchemaLevels(mock.playersUnknowLevel, mock.levels)).toEqual(mock.errorUnknowLevel)
    })

    it('when receive valid levels should return a json without errors', () => {
      expect(validations.validateSchemaLevels(mock.players, mock.levels)).toEqual({})
    })
  })
})
