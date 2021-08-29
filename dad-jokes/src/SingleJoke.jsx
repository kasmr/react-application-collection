import React, { Component } from 'react';

export default class SingleJoke extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 };
  }

  handleUp = () => {
    if (this.state.counter !== 10)
      this.setState((prevSt) => ({ counter: prevSt.counter + 1 }));
  };
  handleDown = () => {
    if (this.state.counter !== 0)
      this.setState((prevSt) => ({ counter: prevSt.counter - 1 }));
  };

  render() {
    let circleColor = 'orange';
    let emoji = 'far fa-meh';

    if (this.state.counter <= 3) {
      circleColor = 'red';
      emoji = 'far fa-meh-rolling-eyes';
    }
    if (this.state.counter >= 7) {
      circleColor = 'green';
      emoji = 'far fa-laugh-beam';
    }
    return (
      <div className='joke'>
        <div className='buttons'>
          <i class='fas fa-arrow-up' onClick={this.handleUp}></i>
          <p style={{ border: `solid 3px ${circleColor}` }}>
            {this.state.counter}
          </p>
          <i class='fas fa-arrow-down' onClick={this.handleDown}></i>
        </div>
        <p>{this.props.joke}</p>
        <i className={emoji} />
      </div>
    );
  }
}
