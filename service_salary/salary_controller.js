const lib = require('../lib/lib')
const levels = require('../data/level')

const calculateSalaryTeamResuelve = (req, res) => {
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(req.body, levels)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

module.exports = {
  calculateSalaryTeamResuelve
}
