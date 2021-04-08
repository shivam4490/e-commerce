const express = require('express')
const Product = require('../models/ProductModel')
const router = require('../routes/productRoute')

//fetch all products
const getProducts = async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}

//fetch single product
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.json({ message: 'product not found' })
  }
  res.json(product)
}

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

module.exports = { getProductById, getProducts, deleteProduct }
