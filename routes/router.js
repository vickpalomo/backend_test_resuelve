const router = require('express').Router()
const salary = require('../service_salary/routes')

router.use('/salary', salary)

module.exports = router
