const express = require('express')
const Resources = require('./resources/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

Resources.setup(app)

module.exports = app
