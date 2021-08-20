import React, { Component } from 'react';
import NewBox from './NewBox';
export default class BoxMaker extends Component {
  boxes = [];
  initialStateBox = {
    height: '',
    width: '',
    color: '',
  };

  constructor(props) {
    super(props);
    this.state = this.initialStateBox;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createBox = (e) => {
    e.preventDefault();
    this.boxes.push(this.state);
    this.setState(this.initialStateBox);
    console.log(this.boxes);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.createBox(e)} className='box-form'>
          <label htmlFor='height'>Height</label>
          <input
            type='number'
            name='height'
            onChange={(e) => this.onChange(e)}
            value={this.state.height}
          />
          <label htmlFor='width'>Width</label>
          <input
            type='number'
            name='width'
            value={this.state.width}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor='color'>Color</label>
          <input
            type='text'
            name='color'
            value={this.state.color}
            onChange={(e) => this.onChange(e)}
          />
          <button type='submit'>Create box</button>
        </form>
        {this.boxes.length > 0 &&
          this.boxes.map((item, i) => <NewBox key={i} item={item} />)}
      </div>
    );
  }
}
