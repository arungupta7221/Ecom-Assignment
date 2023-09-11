import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo1.webp'
import LoginOverlay from '../loginOverlay/loginOverlay'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { cartContext } from '../../contextProvider/cartContext'

const Navbar = ({ categoris }) => {
  const navigate = useNavigate()

  const { getCartProductCount } = useContext(cartContext)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const openLoginOverlay = () => {
    setIsLoginOpen(true)
  }

  const closeLoginOverlay = () => {
    setIsLoginOpen(false)
  }
  const handleLogin = (email) => {
    // Simulate a successful login for demonstration purposes
    setUserEmail(email)
    setIsLoggedIn(true)
    closeLoginOverlay() // Close the login overlay
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search For Products...." />
          <button className="search-button">Search</button>
        </div>
        <div className="user-actions">
          {isLoggedIn ? (
            <div className="user-info">{userEmail.charAt(0)}</div>
          ) : (
            <button className="login-button" onClick={openLoginOverlay}>
              Login
            </button>
          )}
          {isLoginOpen && <LoginOverlay onClose={closeLoginOverlay} onLogin={handleLogin} />}
          <div className="cart">
            {/* <i className="fa fa-shopping-cart"></i> */}
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{getCartProductCount()}</span>{' '}
            {/* Add cart item count here */}
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        <ul className="menu-list">
          <li className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              {categoris?.map((cat) => (
                <ul>
                  <li onClick={() => navigate(`/products/${cat}`)}>{cat}</li>
                </ul>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
