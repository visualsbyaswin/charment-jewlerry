import React from 'react';
import "./logo.css"
const CharmantLogo = () => {
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  
};

const starburstStyle = {
  position: 'relative',
  width: '30px',
  height: '30px',
  marginRight: '15px',
 // Black background for the starburst area
};

const rayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transformOrigin: 'center',
  width: '2px',
  height: '30px',
  Color: 'black', // Rays are white to show up on black
};



  const rays = [0, 45, 90, 135];

  const textStyle = {

    fontFamily: 'Arial, sans-serif',
    fontSize: '1.3rem',
    letterSpacing: '3px',
  };

  return (
    <div style={containerStyle}>
      <div style={starburstStyle}>
        {rays.map((angle, index) => (
          <span
            key={index}
            style={{
              ...rayStyle,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
          />
        ))}
      </div>
      <h1 className='hhh' style={textStyle}>CHARMANT</h1>
    </div>
  );
};

export default CharmantLogo;
