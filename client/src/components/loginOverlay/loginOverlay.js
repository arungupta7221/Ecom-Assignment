// src/components/LoginOverlay.js
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import './loginOverlay.css'
const LoginOverlay = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.get('/api/users/fetchUser', {
        params: { email },
      })

      if (response.status === 200) {
        // Successful login
        toast.success('Login successful!', { position: 'top-right' })
        onLogin(email) // Pass the email to the onLogin callback
        onClose() // Close the login overlay
      } else {
        // Handle other status codes or error responses from your backend
        toast.error('Login failed', { position: 'top-right' })
      }
    } catch (error) {
      // Handle errors, such as network issues or server errors
      console.error('Login error:', error)
      toast.error('An error occurred while logging in', { position: 'top-right' })
    }
  }

  return (
    <div className="login-overlay">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginOverlay
