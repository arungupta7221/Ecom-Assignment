import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProductListing from './components/Products/ProductListing'
import CartProvider from './contextProvider/cartContext'
import AppRoutes from './Routes'

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

export default App
