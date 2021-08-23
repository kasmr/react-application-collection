import React, { Component } from 'react';

export default class FormTodo extends Component {
  render() {
    return (
      <div className='form-div'>
        <h4>New Todo</h4>
        <form>
          <label />
          <input type='text' />
        </form>
        <button>Add todo</button>
      </div>
    );
  }
}
