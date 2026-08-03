import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  )
}

export default App
