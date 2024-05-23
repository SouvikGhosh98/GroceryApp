import React, { useState } from 'react';

const CustomAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="alert">
          <span className="close-btn" onClick={handleClose}>&times;</span>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default CustomAlert;