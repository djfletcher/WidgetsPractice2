import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  tick() {
    this.setState({ date: new Date });
  }

  parseTime() {
    let date, hours, minutes, seconds;
    date = this.state.date;
    hours = date.getHours() % 12;
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    return { hours, minutes, seconds };
  }

  render() {
    let { hours, minutes, seconds } = this.parseTime();
    return <div id="digital">{ `${hours}:${minutes}:${seconds}` }</div>;
  }
}


export default Clock;
