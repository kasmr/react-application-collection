import React, { Component } from 'react';

export default class NewBox extends Component {
  render() {
    const { color, height, width } = this.props.item;
    return (
      <div
        style={{
          background: `${color}`,
          height: `${height}`,
          width: `${width}`,
        }}
      ></div>
    );
  }
}
