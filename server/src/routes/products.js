const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// Route to get top 5 products from each category
router.get('/', async (req, res) => {
  try {
    let query = {} // Initialize an empty query object
    // Check if there are query parameters for filtering
    if (req.query.category) {
      query.category = req.query.category
    }

    const products = await Product.find(query)
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

// Route to get products by category
router.get('/category/:categoryName', async (req, res) => {
  try {
    const categoryName = req.params.categoryName

    // Find products that match the given category
    const products = await Product.find({ category: categoryName })

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found in this category.' })
    }

    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

// Implement other CRUD operations for products

module.exports = router
