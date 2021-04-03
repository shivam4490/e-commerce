const express = require('express')
const router = express.Router()

const { addOrderItems } = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, addOrderItems).get(protect)

module.exports = router
