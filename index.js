const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const router = require('./routes/router')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(helmet())

app.use(compression())

app.use('/documentation', express.static('out'))
app.use(router)

app.listen(process.env.port, function (err) {
  if (err) throw err
  console.log('Its Alive')
})
