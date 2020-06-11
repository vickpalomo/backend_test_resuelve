const router = require('express').Router()
const calculateSalary = require('./salary_controller')

router.use('/calculateSalary', calculateSalary.calculateSalary)
module.exports = router
