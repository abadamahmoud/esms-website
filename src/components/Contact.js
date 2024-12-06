import React from 'react'
import './Contact.css'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import logo1 from './images/Capture_d_écran_2024-11-30_205413-removebg-preview 1.png'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>For More Questions about</h1>
        <div className="logo">
          <img 
            src={logo1} 
            alt="Hack the Case Logo"
            className="hack-logo" 
          />
        </div>
      </header>

      <section className="contact-section">
        <div className="contact-header">
          <div className="fingerprint-icon">
            <FaSearch className="search-icon" />
          </div>
          <h2>contact Us</h2>
        </div>

        <div className="social-links">
          <a href="#" className="social-link">
            <div className="magnifier-container">
              
              <FaFacebook className="social-icon" />
            </div>
          </a>
          <a href="#" className="social-link">
            <div className="magnifier-container">
              <FaInstagram className="social-icon" />
            </div>
          </a>
          <a href="#" className="social-link">
            <div className="magnifier-container">
              <FaTwitter className="social-icon" />
            </div>
          </a>
          <a href="#" className="social-link">
            <div className="magnifier-container">
              <FaEnvelope className="social-icon" />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default App


