import React, { Component } from 'react';
import Coins from './Coins';

export default class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { flipCount: 0, tailCount: 0, headCount: 0 };
  }

  render() {
    return (
      <div>
        <Coins />
      </div>
    );
  }
}
