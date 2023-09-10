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

// Implement other user-related routes (login, profile, etc.)

module.exports = router
