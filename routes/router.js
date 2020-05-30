const router = require('express').Router()
const salary = require('../service_salary/salary_controller')

router.use('/salaryResuelve', salary.calculateSalaryResuelveTeam)
router.use('/salaryExternal', salary.calculateSalaryExternalTeams)

module.exports = router
