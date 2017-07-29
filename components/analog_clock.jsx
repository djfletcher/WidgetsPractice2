import React from 'react';
import Clock from './clock';
import ClockHand from './clock_hand';

class AnalogClock extends Clock {
  constructor(props) {
    super(props);
  }

  orientHands() {
    let { hours, minutes, seconds } = this.parseTime();
    return {
      // Need to add 180 to result because 0 degrees points down instead of up
      hourDegrees: 180 + hours * 30,
      minuteDegrees: 180 + minutes * 6,
      secondDegrees: 180 + seconds * 6,
    };
  }

  render() {
    let { hourDegrees, minuteDegrees, secondDegrees } = this.orientHands();
    return (
      <div id="clock-face">
        { ClockHand('hour-hand', hourDegrees) }
        { ClockHand('minute-hand', minuteDegrees) }
        { ClockHand('second-hand', secondDegrees) }
      </div>
    );
  }
}

export default AnalogClock;
