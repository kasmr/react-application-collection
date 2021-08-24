import React, { Component } from 'react';
import FormTodo from './FormTodo';
import Todo from './Todo';
import { v4 as uuidV4 } from 'uuid';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'task 1', id: uuidV4() }],
    };
  }

  addTodo = (todo) => {
    if (this.state.todos.length !== 6) {
      this.setState({ todos: [...this.state.todos, todo] });
    } else {
      alert('You have reached max amount of todos, delete one!');
    }
  };

  deleteTodo = (id) => {
    const newTodoList = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodoList });
  };

  updateTodo = (text, id) => {
    if (text) {
      const updatedTodo = { text, id };
      this.setState({
        todos: [
          ...this.state.todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
          ),
        ],
      });
    }
  };

  render() {
    return (
      <>
        <div className='todo-list'>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={() => this.deleteTodo(todo.id)}
              updateTodo={this.updateTodo}
            />
          ))}
        </div>
        <FormTodo addTodo={this.addTodo} />
      </>
    );
  }
}
