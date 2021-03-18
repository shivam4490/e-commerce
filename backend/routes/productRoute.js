const express = require('express')
const Product = require('../models/ProductModel')
const router = express.Router()

//fetch all products
router.get('/', async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//fetch single product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'product not found' })
  }
  res.json(product)
})

module.exports = router
