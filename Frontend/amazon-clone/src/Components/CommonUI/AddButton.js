import React, { useState } from 'react';
import './AddButton.css'; // Import the CSS file

function AddButton() {
  const [counterValue, setCounterValue] = useState(0);

  const incrementCounter = () => {
    setCounterValue(prevValue => prevValue + 1);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(prevValue => prevValue - 1);
    }
  };

  return (
    <div>
      {counterValue === 0 ? (
        <button className="add-button" onClick={incrementCounter}>Add</button>
      ) : (
        <div className="counter-wrapper">
          <button className="counter-button" onClick={incrementCounter}>+</button>
          <span className="counter-value">{counterValue}</span>
          <button className="counter-button" onClick={decrementCounter}>-</button>
        </div>
      )}
    </div>
  );
}

export default AddButton;
