import React, { Component } from 'react';
import Box from './Box.jsx';
import { v4 as uuidv4, v4 } from 'uuid';

export default class BoxesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: null,
      boxes: this.generateArray(),
    };
  }

  generateArray = () => {
    let array = [];
    for (let index = 0; index < 18; index++) {
      array.push({
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        id: v4(),
      });
    }
    return array;
  };

  render() {
    return (
      <div className='container'>
        {this.state.boxes.map((box) => (
          <Box key={box.id} color={box.color} />
        ))}
      </div>
    );
  }
}
