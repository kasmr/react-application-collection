import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        Todo list
        <Todo />
        <form>
          <label />
          <input type='text' />
        </form>
        <button>Add todo</button>
      </div>
    );
  }
}
