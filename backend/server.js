const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = require('./config/db')
const productRoute = require('./routes/productRoute')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API running !')
})

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
