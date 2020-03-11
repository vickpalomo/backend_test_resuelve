const router = require('express').Router()
cons calculateSalary = require('./salary_controller')

router.post('/', calculateSalary.calculateSalary)
