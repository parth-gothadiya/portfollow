import React from 'react'
import { Route, Routes } from'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'

const RouterWrapper = () => {
  return (
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<About />} />
        </Routes>
  )
}

export default RouterWrapper