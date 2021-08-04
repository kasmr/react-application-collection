import React, { Component } from 'react';
import Coins from './Coins';

export default class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { flipCount: 0, tailCount: 0, headCount: 0, coin: null };
  }

  flipArrayVariants = ['tail', 'head'];

  incrementFlipCount = (currentState) => {
    return { flipCount: currentState.flipCount + 1 };
  };

  incrementHeadCount = (currentState) => {
    return { headCount: currentState.headCount + 1 };
  };

  incrementTailCount = (currentState) => {
    return { tailCount: currentState.tailCount + 1 };
  };

  flippingCoin = () => {
    let flippedCoin =
      this.flipArrayVariants[
        Math.floor(Math.random() * this.flipArrayVariants.length)
      ];
    if (flippedCoin === 'tail') {
      this.setState(this.incrementTailCount);
      this.setState({ coin: 'tail' });
    } else {
      this.setState(this.incrementHeadCount);
      this.setState({ coin: 'head' });
    }
  };

  handleClick = () => {
    this.setState(this.incrementFlipCount);
    this.flippingCoin();
  };

  render() {
    return (
      <>
        {!this.state.coin && <h1>Let's flip a coin my friend!</h1>}
        <Coins flipCount={this.state.flipCount} coin={this.state.coin} />
        <button onClick={this.handleClick}>Flip a coin!</button>
        <p>
          Out of <b>{this.state.flipCount}</b> there have been{' '}
          <b>{this.state.tailCount}</b> tail and <b>{this.state.headCount}</b>{' '}
          heads
        </p>
      </>
    );
  }
}
