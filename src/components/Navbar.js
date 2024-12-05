import React from "react";
import "./Navbar.css"; // Import the CSS file
import logo from './LOGO_V1.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo} 
          alt="The case logo"
          className="logo-img"
        />
        <span className="logo-text">The case</span>
      </div>

      {/* Navigation Items */}
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#workshops">Workshops</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#registration" className="registration-btn">
            Registration
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
