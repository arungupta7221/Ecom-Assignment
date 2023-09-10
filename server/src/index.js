const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const connect = require('./config/database')
const Product = require('./models/Product')
const LocalStrategy = require('passport-local').Strategy

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

// Define API routes
const productRoutes = require('./routes/products')
const authRoutes = require('./routes/auth')

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

app.listen(5000, async () => {
  console.log('server started on PORT 5000')
  await connect()
  console.log('mongodb connected successfully')
})
