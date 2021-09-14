import React, { Component } from 'react';

export default class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/800x600/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/800x600/?${drinkName}`;
    return (
      <div>
        <h1>
          this is a meal of {foodName} + {drinkName}{' '}
        </h1>
        <img src={foodUrl} alt='' />
        <img src={drinkUrl} alt='' />
      </div>
    );
  }
}
