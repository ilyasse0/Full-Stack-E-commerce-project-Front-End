import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/Navigation/NavigationBar'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavigationBar></NavigationBar>
   <HeroSection></HeroSection>
   </>
  )
}

export default App
