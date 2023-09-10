const mongoose = require('mongoose')
const Product = require('../models/Product')
const fs = require('fs')

// Connect to the MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/Ecom_Dev', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Read data from the JSON file
const jsonFilePath = 'products.json' // Update with your JSON file path
const productsData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'))

// Function to seed products
const seedProducts = async () => {
  try {
    await Product.insertMany(productsData)
    console.log('Products seeded successfully.')
  } catch (error) {
    console.error('Error seeding products:', error)
  } finally {
    mongoose.disconnect() // Disconnect from the database when done
  }
}

// Call the seedProducts function to populate the database
seedProducts()
