const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtConfig = require('../config/jwtConfig')
const User = require('../models/User')

// User login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password.' })
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, config.jwtSecret, {
      expiresIn: config.jwtExpiration,
    })

    res.status(200).json({ token })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
})

module.exports = router
