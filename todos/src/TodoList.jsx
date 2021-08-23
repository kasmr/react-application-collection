import React, { Component } from 'react';
import FormTodo from './FormTodo';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'asdasd', id: '559uj' }],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    if (this.state.todos.length !== 6) {
      this.setState({ todos: [...this.state.todos, todo] });
    } else {
      alert('You have reached max amount of todos, delete one!');
    }
  }

  deleteTodo(id) {
    this.state.todos.fill((todo) => todo.id !== id);
  }

  render() {
    return (
      <>
        <div className='todo-list'>
          {this.state.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} />
          ))}
        </div>
        <FormTodo addTodo={this.addTodo} />
      </>
    );
  }
}
