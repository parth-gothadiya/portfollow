import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  // console.log(window.config.navbar.links);
  const link1 =[
    {
      to:"/",
      label: "About"
    },
    {
      to:"/resume",
      label: "Resume"
    },

    {
      to:"/blog",
      label: "Blog"
    },
    {
      to:"/portfolio",
      label: "Portfolio"
    },
    {
      to:"/contact",
      label: "Contact"
    },
    

  ] 

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Dynamic Links from Configuration */}
        {link1.map((link, index) => (
          <li key={index} className="navbar-item">
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
       
      </ul>
    </nav>
  );
};

export default Navbar;


