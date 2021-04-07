const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = require('./config/db')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API running !')
})

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
