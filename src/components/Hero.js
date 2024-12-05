import React from "react";
import "./Hero.css";
import logo2 from './LOGO_V1.png';
import search from './Capture_d_écran_30-11-2024_212120_drive.google.com-removebg-preview 1.png'
function Hero() {
  return (
    <section className="hero">
    <div className="hero-card">
      <div className="hero-logo">
        <img
          src={logo2}
          alt="Hack the Case Logo"
          className="hero-logo-img"
        />
      </div>


      <div className="hero-cta">
        <button className="hero-button">Get Started</button>
        <div className="hero-icon">
          <span role="img" aria-label="Fingerprint">
          <img
          src={search}
          alt="getStarted"
          className="getstarted"
          />
          </span>
        </div>
      </div>
    </div>  
    </section>
  );
}

export default Hero;
