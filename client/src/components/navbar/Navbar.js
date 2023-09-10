// src/components/Navbar.js
import React from 'react'
import './Navbar.css'
import logo from '../../images/logo1.webp'
import CategoriesDropdown from './CategoriesDropdown'
const Navbar = () => {
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
          <button className="login-button">Login</button>
          <div className="cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">0</span> {/* Add cart item count here */}
          </div>
        </div>

        {/* <div className="navbar-menu">
          <ul className="menu-list">
            <li className="dropdown">
              <a href="/" className="dropbtn">
                Categories <i className="fa fa-caret-down"></i>
              </a>
              <CategoriesDropdown />
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
