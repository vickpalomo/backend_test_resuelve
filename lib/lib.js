const replaceLevels = (dataPlayer, levels) => {
  return {
    nombre: dataPlayer.nombre,
    goles_minimos: levels[dataPlayer.equipo][dataPlayer.nivel],
    goles: dataPlayer.goles,
    sueldo: dataPlayer.sueldo,
    bono: dataPlayer.bono,
    sueldo_completo: null,
    equipo: dataPlayer.equipo
  }
}

const teamDataToReplaceLevels = (players, levels) => players.map(player => replaceLevels(player, levels))

const getPercentage = (total, partial) => {
  const percentage = Math.trunc(((partial * 100) / total) * 100) / 100
  return (percentage < 100) ? percentage : 100
}

const getTotalGoalsAndPercentageTeam = (totals, player) => {
  totals[player.equipo] = totals[player.equipo] || {}
  totals[player.equipo].goals_required = (totals[player.equipo].goals_required || 0) + player.goles_minimos
  totals[player.equipo].goals_scored = (totals[player.equipo].goals_scored || 0) + player.goles
  totals[player.equipo].percentageTeam = getPercentage(totals[player.equipo].goals_required, totals[player.equipo].goals_scored)
  console.log(totals)
  return totals
}

const getPercentageTeam = (teamData) => teamData.reduce(getTotalGoalsAndPercentageTeam, {})

const getAverage = (x, y) => (x + y) / 2

const getPercentageBond = (bond, percentage) => Math.trunc(((percentage * bond) / 100) * 100) / 100

const getSalaryPlayer = (player, percentageTeam) => {
  const percentagePlayer = getPercentage(player.goles_minimos, player.goles)
  const averagePercentage = getAverage(percentageTeam[player.equipo].percentageTeam, percentagePlayer)
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
