// hover.js
import React from "react";
import "./hover.css";

const HoverLogo = () => {
  const rays = [0, 45, 90, 135];

  return (
    <div className="logo-container">
      <div className="starburst">
        {rays.map((angle, index) => (
          <span
            key={index}
            className="ray"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
          />
        ))}
      </div>
      <h1 className="logo-text">CHARMANT</h1>
    </div>
  );
};

export default HoverLogo;
