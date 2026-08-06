import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import MarketPlace from './pages/Marketplace'
// import MarketPlace from './pages/Marketplace-trash'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/marketplace" element={<MarketPlace/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
