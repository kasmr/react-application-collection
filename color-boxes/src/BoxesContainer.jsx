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
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

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

  generateUniqueColor = (currentColor) => {
    const newColor = this.generateRandomColor();
    return newColor !== currentColor
      ? newColor
      : this.generateUniqueColor(currentColor);
  };

  handleClick = (e) => {
    const currentColor = e.target.style.backgroundColor;
    const currentId = e.target.id;
    const newBoxes = this.state.boxes.map((box) => {
      return box.id === currentId
        ? {
            ...box,
            color: this.generateUniqueColor(currentColor),
          }
        : box;
    });

    this.setState({ boxes: newBoxes });
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
          />
        ))}
      </div>
    );
  }
}
