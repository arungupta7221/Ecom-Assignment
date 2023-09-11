import React from 'react'
import ProductListing from './components/Products/ProductListing'
import CartProvider from './contextProvider/cartContext'

const Home = () => {
  return (
    <CartProvider>
      <ProductListing />
    </CartProvider>
  )
}

export default Home
