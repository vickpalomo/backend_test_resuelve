const levels = require('../data/level')

const replaceLevels = (dataPlayer, levels) => {
  return {
    nombre: dataPlayer.nombre,
    goles_minimos: levels[dataPlayer.nivel],
    goles: dataPlayer.goles,
    sueldo: dataPlayer.sueldo,
    bono: dataPlayer.bono,
    sueldo_completo: null,
    equipo: dataPlayer.equipo
  }
}

const teamDataToReplaceLevels = (players) => players.map(player => replaceLevels(player, levels))

const sumGoals = (totals, player) => {
  totals.goals_required = totals.goals_required + player.goles_minimos
  totals.goals_scored = totals.goals_scored + player.goles
  return totals
}

const getTotalGoals = (teamData) => teamData.reduce(sumGoals, { goals_required: 0, goals_scored: 0 })

const getPercentage = (total, quantity) => {
  const percentage = (quantity * 100) / total
  return (percentage < 100) ? percentage : 100
}

const getPercentageTeam = (teamData) => {
  const { goalsRequired, goalsScored } = getTotalGoals(teamData)
  const percentageTeam = getPercentage(goalsRequired, goalsScored)
  return percentageTeam
}

const getAverage = (x, y) => (x + y) / 2

const getPercentageBond = (bond, percentage) => (percentage * bond) / 100

const getSalaryPlayer = (player, percentageTeam) => {
  const percentagePlayer = getPercentage(player.goles_minimos, player.goles)
  const averagePercentage = getAverage(percentageTeam, percentagePlayer)
  const totalBond = getPercentageBond(player.bono, averagePercentage)
  const totalSalary = player.sueldo + totalBond
  return totalSalary
}

const getTotalSalary = (teamData, percentageTeam) => {
  return teamData.map((player) => {
    player.sueldo_completo = getSalaryPlayer(player, percentageTeam)
    return player
  })
}
module.exports = {
  teamDataToReplaceLevels,
  getPercentageTeam,
  getTotalSalary
}
