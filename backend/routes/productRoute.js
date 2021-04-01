const express = require('express')
const router = express.Router()

const {
  getProducts,
  getProductById,
} = require('../controllers/productController')

//fetch all products
router.route('/').get(getProducts)

//fetch single product
router.route('/:id').get(getProductById)

module.exports = router
