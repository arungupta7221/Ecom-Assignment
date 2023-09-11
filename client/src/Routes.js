import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import App from './App'
import Home from './Home'
import ProductListing from './components/Products/ProductListing'
import ProductByCategoris from './ProductByCategoris'
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:cat" element={<ProductByCategoris />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
