const express = require('express')
const User = require('../models/UserModel')
const router = require('../routes/productRoute')

//POST /api/users/login
const authUser = async (req, res) => {
  const { email, password } = req.body

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

module.exports = authUser
