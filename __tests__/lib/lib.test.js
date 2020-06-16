const lib = require('../../lib/lib')
const mock = require('../../__mocks__/mock')

describe('lib.js file', () => {
  describe('#teamDataToReplace', () => {
    it('when receive a valid array of players should remove the level key and replace it with the key goles_minimos', () => {
      expect(lib.teamDataToReplaceLevels(mock.players, mock.levels)).toEqual(mock.playersWithReplacedLevels)
    })
  })

  describe('#getPercentageTeam', () => {
    it('when receive a valid array of players should accumulate the goals required and scored by team and calculate the percentage obtained from the total', () => {
      expect(lib.getPercentageTeam(mock.playersWithReplacedLevels)).toEqual(mock.totalGoalAndPercentageTeam)
    })
  })

  describe('#getTotalSalary', () => {
    it('when receive a valid array of players should calculate the full salary of each player', () => {
      expect(lib.getTotalSalary(mock.playersWithReplacedLevels, mock.totalGoalAndPercentageTeam)).toEqual(mock.jsonResponse)
    })
  })
})
