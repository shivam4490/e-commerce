const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const products = require('./data/products')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API running !')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
