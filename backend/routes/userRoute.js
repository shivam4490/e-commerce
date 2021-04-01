const express = require('express')
const router = express.Router()

const { authUser } = require('../controllers/userController')

router.post('/login', function (req, res) {
  authUser
})

module.exports = router
