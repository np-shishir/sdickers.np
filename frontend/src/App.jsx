import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
<<<<<<< HEAD
import MarketPlace from './pages/MarketPlace'
=======
import Marketplace from './pages/Marketplace'
>>>>>>> 484ae2f (/marketplace integration)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
<<<<<<< HEAD
        <Route path="/marketplace" element={<MarketPlace/>}/>
=======
        <Route path="/marketplace" element={<Marketplace/>}/>
>>>>>>> 484ae2f (/marketplace integration)
      </Routes>
      <Footer/>
    </>
  )
}

export default App
