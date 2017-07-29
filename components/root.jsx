import React from 'react';
import Clock from './clock';
import AnalogClock from './analog_clock';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <AnalogClock />
      </div>
    );
  }
}

export default Root;
