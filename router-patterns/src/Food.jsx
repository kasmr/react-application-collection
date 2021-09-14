import React, { Component } from 'react';

export default class Food extends Component {
  render() {
    const url = `https://source.unsplash.com/800x600/?${this.props.name}`;
    return <img alt={this.props.name} src={url}></img>;
  }
}
