const express = require('express')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')
const app = express()

app.use('/products', productRoutes)
app.use('/auth', authRoutes)

module.exports = app