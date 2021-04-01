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

module.exports = { getProductById, getProducts }
