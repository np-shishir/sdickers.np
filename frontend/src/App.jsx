import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
