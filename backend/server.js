const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = require('./config/db')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
const uploadRoute = require('./routes/uploadRoute')
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
app.use('/api/uploads', uploadRoute)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

const folder = path.resolve()
app.use('/uploads', express.static(path.join(folder, '/uploads')))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
