// AuthService.js
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth' // Replace with your backend URL

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password })
      const { token } = response.data
      localStorage.setItem('token', token) // Store the JWT token in local storage
      return token
    } catch (error) {
      throw error
    }
  },
  logout: () => {
    localStorage.removeItem('token') // Remove the JWT token from local storage
  },
  getCurrentUser: () => {
    const token = localStorage.getItem('token')
    if (token) {
      // Decode the token and extract user information
      const user = JSON.parse(atob(token.split('.')[1]))
      return user
    }
    return null
  },
}

export default AuthService
