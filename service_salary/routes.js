const router = require('express').Router()
const salary = require('./salary_controller')

router.use('/resuelveTeam', salary.calculateSalaryResuelveTeam)
router.use('/externalTeam', salary.calculateSalaryExternalTeams)

module.exports = router
