const lib = require('../lib/lib')

const calculateSalary = (req, res) => {
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(req.body)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
}

module.exports = {
  calculateSalary
}
