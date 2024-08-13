import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/landing/Hero'
import Companies from './components/landing/Companies'
import Features from './components/landing/Features'

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Companies/>
    <Features/>
    </div>
  )
}

export default App