


import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Service from "../pages/Service";
import ClickSpark from "../components/ClickSpark"; // Ensure the correct path

const RouterWrapper = () => {
  return (
    <ClickSpark sparkColor="orange" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<About />} />
      </Routes>
    </ClickSpark>
  );
};

export default RouterWrapper;
