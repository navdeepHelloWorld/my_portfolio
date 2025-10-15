import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white font-sans">
      <Hero />
      <Skills />
      <Projects />
      <div className="max-w-4xl mx-auto px-4">
        <Contact />
      </div>
    </div>
  )
}

export default App

