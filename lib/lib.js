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
  totals[player.equipo] = totals[player.equipo] || {}
  totals[player.equipo].goals_required = (totals[player.equipo].goals_required || 0) + player.goles_minimos
  totals[player.equipo].goals_scored = (totals[player.equipo].goals_scored || 0) + player.goles
  return totals
}

const getTotalGoals = (teamData) => teamData.reduce(sumGoals, {})

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

const getPercentageBond = (bond, percentage) => Math.trunc(((percentage * bond) / 100) * 100) / 100

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
