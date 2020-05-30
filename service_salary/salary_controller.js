const lib = require('../lib/lib')
const levels = require('../data/level')

const calculateSalaryResuelveTeam = (req, res) => {
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(req.body, levels)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

const calculateSalaryExternalTeams = (req, res) => {
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(req.body.players, req.body.levels)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

module.exports = {
  calculateSalaryResuelveTeam,
  calculateSalaryExternalTeams
}
