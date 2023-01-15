import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Contact />
      <Footer />
    </div>
  )
}

export default App