import React, { Component } from 'react';
import Box from './Box.jsx';

export default class BoxesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: null,
      boxes: [...Array(18).map(() => ({ color: `#${this.randomColor()}` }))],
    };
  }
  randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  render() {
    return (
      <div className='container'>
        {this.state.boxes.map((index) => (
          <Box
            key={index}
            color={this.randomColor()}
            newRandomColor={this.newRandomColor}
          />
        ))}
      </div>
    );
  }
}
