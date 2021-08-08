import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return (
      <div
        onClick={this.props.newRandomColor}
        className='box'
        style={
          !this.props.newColor
            ? { backgroundColor: `#${this.props.color}` }
            : { backgroundColor: `#${this.props.newColor}` }
        }
      ></div>
    );
  }
}
