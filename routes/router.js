const router = require('express').Router()
const salary = require('../service_salary/salary_controller')

router.use('/salary', salary.calculateSalary)

module.exports = router
