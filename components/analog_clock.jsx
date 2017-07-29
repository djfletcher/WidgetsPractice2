import React from 'react';
import Clock from './clock';

class AnalogClock extends Clock {
  constructor(props) {
    super(props);
  }

  orientHands() {
    let { hours, minutes, seconds } = this.parseTime();
    return {
      hourDegrees: hours * 15,
      minuteDegrees: minutes * 6,
      secondDegrees: seconds * 6,
    };
  }

  render() {
    let { hourDegrees, minuteDegrees, secondDegrees } = this.orientHands();
    return (
      <div id="clock-face">
        <div id="hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
        <div id="minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
        <div id="second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />
      </div>
    );
  }
}

export default AnalogClock;
