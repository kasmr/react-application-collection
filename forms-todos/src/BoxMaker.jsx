import React, { Component } from 'react';

export default class BoxMaker extends Component {
  render() {
    return (
      <form>
        <label htmlFor='height'>Height</label>
        <input type='text' />
        <label htmlFor='width'>Width</label>
        <input type='text' />
        <label htmlFor='color'>Color</label>
        <input type='text' />
        <button type='submit'>Create box</button>
      </form>
    );
  }
}
