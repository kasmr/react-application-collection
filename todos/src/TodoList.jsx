import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'asdasd', id: '559uj' }],
    };
  }
  render() {
    return (
      <div className='todo-list'>
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
