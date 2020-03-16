const lib = require('../lib/lib')

const calculateSalary = (req, res) => {
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(req.body)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

module.exports = {
  calculateSalary
}
