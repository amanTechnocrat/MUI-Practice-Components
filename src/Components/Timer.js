import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 5 * 60 }; // 5 minutes in seconds
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 // update every second
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.time <= 0) {
      clearInterval(this.timerID);
      // handle timeout here
    } else {
      this.setState(prevState => ({ time: prevState.time - 1 }));
    }
  }

  render() {
    const minutes = Math.floor(this.state.time / 60);
    const seconds = this.state.time % 60;
    return (
      <div>
        Time left: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </div>
    );
  }
}