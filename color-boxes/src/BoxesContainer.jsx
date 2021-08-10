import React, { Component } from 'react';
import Box from './Box.jsx';
import { v4 as uuidv4 } from 'uuid';

export default class BoxesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: this.generateArray(),
    };
  }

  generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  generateArray = () => {
    let array = [];
    for (let index = 0; index < 18; index++) {
      array.push({
        color: this.generateRandomColor(),
        newColor: null,
        id: uuidv4(),
      });
    }
    return array;
  };

  handleClick = (clickedBox) => {
    const newBoxes = [...this.state.boxes];

    newBoxes.map((box) =>
      clickedBox.id === box.id ? (box.color = this.generateRandomColor()) : box
    );

    this.setState((state) => ({ newBoxes }));
  };

  render() {
    return (
      <div className='container'>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            color={box.color}
            handleClick={this.handleClick}
            id={box.id}
            box={box}
          />
        ))}
      </div>
    );
  }
}
