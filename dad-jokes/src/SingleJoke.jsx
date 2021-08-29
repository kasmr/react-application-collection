import React, { Component } from 'react';

export default class SingleJoke extends Component {
  render() {
    return (
      <div>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}
