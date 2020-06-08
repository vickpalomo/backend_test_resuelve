const router = require('express').Router()
const salary = require('../service_salary/routes')
const middleware = require('../middleware/middleware')

router.use('/salary', middleware.validationsMiddleware, salary)

module.exports = router
