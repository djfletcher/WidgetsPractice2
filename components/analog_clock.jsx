import React from 'react';
import Clock from './clock';

class AnalogClock extends Clock {
  constructor(props) {
    super(props);
    this.state = { degrees: { hours: 0, minutes: 0, seconds: 0 } };
  }

  orientHands() {
    let seconds = this.state.date.getSeconds();
    let degrees = seconds * 6;
    let secondHand = <div id="second-hand" style={{ transform: `rotate(${degrees}deg)` }}></div>;
    return secondHand;
  }

  render() {
    let hourHand, minuteHand, secondHand;
    secondHand = this.orientHands();
    return (
      <div id="clock-face">
        { hourHand }
        { minuteHand }
        { secondHand }
      </div>
    );
  }
}

export default AnalogClock;
