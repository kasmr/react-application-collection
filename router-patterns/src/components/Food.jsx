import React, { Component } from 'react';

export default class Food extends Component {
  render() {
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/800x600/?${name}`;
    return <img alt={name} src={url}></img>;
  }
}
