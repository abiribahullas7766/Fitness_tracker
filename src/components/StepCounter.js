import React, { useState } from 'react';
import './StepCounter.css';
const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  const incrementStepCount = () => {
    setStepCount(stepCount + 1);
  };

  const decrementStepCount = () => {
    if (stepCount > 0) {
      setStepCount(stepCount - 1);
    }
  };

  return (
    <div className="StepCounter">
      <h2>Step Count: {stepCount}</h2>
      <button onClick={incrementStepCount}>Increment</button>
      <button onClick={decrementStepCount}>Decrement</button>
    </div>
  );
};

export default StepCounter;
