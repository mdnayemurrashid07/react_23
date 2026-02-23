import React from 'react'
import Projects from './components/Projects'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Projects/>
      <Services/>
    </div>
  )
}

export default App
