import React from 'react';
import './Workshops.css';
import logo from './images/image.png';

const Workshops = () => {
  const workshops = [
    'Introduction To Data Analysis With AI tools',
    'Cybersecurity Basics For Vulnerability Detection',
    'Advanced AI For Pattern Recognition',
    'Collaboration Techniques For Interdisciplinary Teams',
  ];

  return (
    <div className="workshops">
      {/* Title Section */}
      <div className="title-section">
        <div className="logo-title">
          <img src={logo} alt="Hack The Case Logo" className="logo" />
          <h2 className="title">Workshops</h2>
        </div>
        <hr className="line" />
      </div>

      {/* Workshop Cards */}
      <div className="workshops-container">
        {workshops.map((workshop, index) => (
          <div className="workshop-card" key={index}>
            <div className="card-header">
              <div className="card-hole">
                <div className="black-ellipse"></div>
              </div>
              <div className="card-hole">
                <div className="black-ellipse"></div>
              </div>
            </div>
            <div className="card-body">
              <p>{workshop}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
