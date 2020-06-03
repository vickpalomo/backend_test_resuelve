const lib = require('../lib/lib')
const levelsResuelve = require('../data/level')

const calculateSalary = (req, res) => {
  const levels = req.body.levels || levelsResuelve
  const teamData = req.body.players || req.body
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(teamData, levels)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

module.exports = calculateSalary
