import React, { Component } from 'react';

export default class SingleJoke extends Component {
  render() {
    let circleColor = 'orange';
    let emoji = 'far fa-meh';

    if (this.props.score <= 3) {
      circleColor = 'red';
      emoji = 'far fa-meh-rolling-eyes';
    }
    if (this.props.score >= 7) {
      circleColor = 'green';
      emoji = 'far fa-laugh-beam';
    }
    return (
      <div className='joke'>
        <div className='buttons'>
          <i
            className='fas fa-arrow-up'
            onClick={() => this.props.handleScoreChange(this.props.id, +1)}
          />
          <p style={{ border: `solid 3px ${circleColor}` }}>
            {this.props.score}
          </p>
          <i
            className='fas fa-arrow-down'
            onClick={() => this.props.handleScoreChange(this.props.id, -1)}
          />
        </div>
        <p>{this.props.joke}</p>
        <i className={emoji} />
      </div>
    );
  }
}
