import React, { Component } from 'react';
import NewBox from './NewBox';

export default class BoxMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {},
      boxColor: '',
      boxes: [],
    };
  }

  render() {
    const createBox = (e) => {
      e.preventDeafult();
      this.setState(...this.state.boxes, {});
    };

    return (
      <div>
        <form onSubmit={(e) => createBox(e)} className='box-form'>
          <label htmlFor='height'>Height</label>
          <input type='text' />
          <label htmlFor='width'>Width</label>
          <input type='text' />
          <label htmlFor='color'>Color</label>
          <input type='text' />
          <button type='submit'>Create box</button>
        </form>
        {this.state.boxes &&
          this.state.boxes.map((item) => <NewBox item={item} />)}
      </div>
    );
  }
}
