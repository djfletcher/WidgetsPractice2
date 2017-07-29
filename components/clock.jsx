import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date };
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
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return <div id="digital">{ this.parseTime() }</div>;
  }
}


export default Clock;
