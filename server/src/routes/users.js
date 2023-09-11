const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if the user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' })
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user
    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: 'User registration successful.' })
  } catch (error) {
    console.error('User registration error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
})

// Route to fetch user email and password by email
router.get('/fetchUser', async (req, res) => {
  try {
    const { email } = req.query

    // Find the user by email
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    // Return the user's email and hashed password (you may choose to omit the password)
    res.status(200).json({ email: user.email, password: user.password })
  } catch (error) {
    console.error('Fetch user credentials error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
})

module.exports = router
