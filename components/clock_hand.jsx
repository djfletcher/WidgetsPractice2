import React from 'react';

const ClockHand = function(id, degrees) {
  return (
    <div
      className="hand"
      id={ id }
      style={{ transform: `rotate(${degrees}deg)` }} />
  );
};

export default ClockHand;
