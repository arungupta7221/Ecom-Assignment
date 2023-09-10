import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
