import React from "react";
import "./Hero.css";
import logo2 from './LOGO_V3.png';
import lines from './Capture_d_écran_2024-11-30_205457-removebg-preview 1.png'
import search from './Capture_d_écran_30-11-2024_212120_drive.google.com-removebg-preview 1.png'
function Hero() {
  return (
    <section className="hero">
    <div className="hero-card">
      <img
      src={lines}
      alt=""
      className="linesimg"
      >
      </img>
      <div className="hero-logo">
        <img
          src={logo2}
          alt=""
          className="hero-logo-img"
        />
      </div>
      <img
      src={lines}
      alt=""
      className="linesimg2"
      >
      </img>
      <img
      src={lines}
      alt=""
      className="linesimg5"
      />
      <img
      src={lines}
      alt=""
      className="linesimg3"
      >
      </img>

      <div className="hero-cta">
        <button className="hero-button">Get Started</button>
        <div className="hero-icon">
          <span role="img" aria-label="Fingerprint">
          <img
          src={search}
          alt=""
          className="getstarted"
          />
          </span>
        </div>
      </div>
      <img
      src={lines}
      alt=""
      className="linesimg4"
      >
      </img>
    </div>  
    </section>
  );
}

export default Hero;
