import React from 'react';

const RotatingTextScroll = () => {
  return (
    <div className="rotating-text-container">
      <div className="rotating-text-wrapper">
        <div className="rotating-text">
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
        </div>
        {/* Duplicate the same content here */}
        <div className="rotating-text">
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
          <span>Engage. Learn. Collaborate.</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingTextScroll;
