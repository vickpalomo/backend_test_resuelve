const router = require('express').Router()
const salary = require('../service_salary/salary_controller')

router.use('/salaryResuelve', salary.calculateSalaryTeamResuelve)

module.exports = router
