import React from "react";
import "./Form.css";
import bg from './Rectangle 1.png'
import lg from './LOGO_V1.png'
function Form() {
  return (
    <div className="container">
      <header className="header">
        <img
          src= {lg}
          alt="Logo"
          className="logo"
        />
        <h1 className="title">Registration</h1>
      </header>
      <div className="form-container">
        <div className="holes">
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
        <form>
          <label>
            FirstName
            <input type="text" className="input-field" placeholder="............." />
          </label>
          <label>
            LastName
            <input type="text" className="input-field" placeholder="............." />
          </label>
          <label>
            Email
            <input type="email" className="input-field" id="email" placeholder="............." />
          </label>
          <label>
            Password
            <input type="password" className="input-field" placeholder="............." />
          </label>
          <button type="submit" className="register-btn">
          <div className="hole" id="sml"></div>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
