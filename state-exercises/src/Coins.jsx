import React, { Component } from 'react';
import tail from './assets/tail.jpg';
import head from './assets/head.jpg';

export default class Coins extends Component {
  render() {
    if (this.props.coin) {
      return this.props.coin === 'tail' ? (
        <img src={tail} alt={this.props.coin} />
      ) : (
        <img src={head} alt={this.props.coin} />
      );
    } else {
      return null;
    }
  }
}
