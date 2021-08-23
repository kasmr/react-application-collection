import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div className='single-todo'>
        <p>{this.props.todo.text}</p>
        <div className='buttons-group'>
          <button>
            <i>x</i>
          </button>
          <button>
            <i>C</i>
          </button>
        </div>
      </div>
    );
  }
}
