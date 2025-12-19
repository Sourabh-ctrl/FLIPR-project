import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Subscribe from './components/Subscribe'
import Bottom from './components/Bottom'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Projects />
      <Testimonials />
      <Bottom />
      <Subscribe />
    </>
  )
}

export default App