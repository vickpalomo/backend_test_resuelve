/**
* @fileoverview Library with the functions to calculate the salary of Resolver FC players.
*
* @author Victor Palomo <ing.victorpalomo@gmail.com>
*/

/**
 * @function replaceLevels
 * @description Replace the player level with the goals required for that level.
 * @param  {JSON} dataPlayer Json with player data
 * @param  {JSON} levels Json with individual goals per team and per level.
 * @returns {JSON} Return a json with the goal of individual goals instead of the level
 */
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

/**
 * @function teamDataToReplaceLevels
 * @description Function that goes through the array of objects and replaces the level with the required goals of that level
 * @param  {Array} players Array of players with the levels to replace
 * @param  {Object} levels Json with individual goals per team and per level.
 * @returns {Array} Returns an array of objects with the key minimum_goles instead of level
 */
const teamDataToReplaceLevels = (players, levels) => players.map(player => replaceLevels(player, levels))

/**
 * @function getPercentage
 * @description Calculate the percentage relationship between two quantities
 * @param  {Number} total Amount that represents 100% of our operation
 * @param  {Number} partial Partial quantity from which we calculate your percentage with respect to a total
 * @returns {Number} Percentage calculated with respect to two quantities
 */
const getPercentage = (total, partial) => {
  const percentage = Math.trunc(((partial * 100) / total) * 100) / 100
  return (percentage < 100) ? percentage : 100
}

/**
 * @function getTotalGoalsAndPercentageTeam
 * @description Function to add up the minimum goals and scored by team and calculate the percentage between them
 * @param  {JSON} totals Accumulated goals required, scored and the percentage between them
 * @param  {JSON} player Player data by team
 * @returns {JSON} Sum of accumulated goals and percentages with current player data
 */
const getTotalGoalsAndPercentageTeam = (totals, player) => {
  totals[player.equipo] = totals[player.equipo] || {}
  totals[player.equipo].goals_required = (totals[player.equipo].goals_required || 0) + player.goles_minimos
  totals[player.equipo].goals_scored = (totals[player.equipo].goals_scored || 0) + player.goles
  totals[player.equipo].percentageTeam = getPercentage(totals[player.equipo].goals_required, totals[player.equipo].goals_scored)
  return totals
}

/**
 * @function getPercentageTeam
 * @description Function that goes through the array of players and gets the total sum of minimum goals scored by teams and the percentage between them
 * @param  {Array} teamData Array with player data
 * @returns {JSON} Total accumulated goals and percentage obtained by team
 */
const getPercentageTeam = (teamData) => teamData.reduce(getTotalGoalsAndPercentageTeam, {})

/**
 * @function getAverage
 * @description Calculate the average of two numbers
 * @param  {Number} x Number to calculate average
 * @param  {Number} y Number to calculate average
 * @returns {Number} Average between the quantities passed to the function
 */
const getAverage = (x, y) => (x + y) / 2

/**
 * @function getPercentageBond
 * @description Calculate the bonus to pay the player
 * @param  {Number} bond Player assigned bonus
 * @param  {Number} percentage Percentage of bond to pay
 * @returns {Number} Final amount to pay the bond
 */
const getPercentageBond = (bond, percentage) => Math.trunc(((percentage * bond) / 100) * 100) / 100

/**
 * @function getSalaryPlayer
 * @description Calculate the final salary to pay the player
 * @param  {JSON} player Player data
 * @param  {JSON} percentageTeam Total goals required, scored and percentage obtained by team
 * @returns {JSON} Player data with final calculated salary
 */
const getSalaryPlayer = (player, percentageTeam) => {
  const percentagePlayer = getPercentage(player.goles_minimos, player.goles)
  const averagePercentage = getAverage(percentageTeam[player.equipo].percentageTeam, percentagePlayer)
  const totalBond = getPercentageBond(player.bono, averagePercentage)
  const totalSalary = player.sueldo + totalBond
  return totalSalary
}

/**
 * @function getTotalSalary
 * @description Function to go through the array of players and calculate the total salary of each one
 * @param  {Array} teamData Players array
 * @param  {JSON} percentageTeam Total goals required, scored and percentage obtained by team
 * @returns {Array} Array of players with the final salary
 */
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
