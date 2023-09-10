import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'
import ProductListing from './components/Products/ProductListing'
import CartProvider from './contextProvider/cartContext'
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />

        <ProductListing />
      </CartProvider>
    </Router>
  )
}

export default App
