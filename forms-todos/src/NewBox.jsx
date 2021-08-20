import React, { Component } from 'react';

export default class NewBox extends Component {
  render() {
    const { color, height, width } = this.props.item;
    return (
      <div
        style={{
          background: color,
          height: `${height}px`,
          width: `${width}px`,
          margin: '10px auto',
        }}
      ></div>
    );
  }
}
