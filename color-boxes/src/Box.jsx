import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return (
      <div
        className='box'
        style={{ backgroundColor: this.props.color }}
        id={this.props.id}
      ></div>
    );
  }
}
