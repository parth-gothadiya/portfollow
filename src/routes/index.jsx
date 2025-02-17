import React from 'react' 
import { Route, Routes } from'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'
import Service from '../pages/Service'

const RouterWrapper = () => {
  return (
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<About />} />
        </Routes>
  )
}

export default RouterWrapper