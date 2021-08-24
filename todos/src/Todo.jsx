import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isEditing: false,
    };
  }

  startEditing = () => {
    this.setState({ isEditing: true });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.state.text, this.props.todo.id);
    this.setState({ text: '', isEditing: false });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <div className='single-todo'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder={this.props.todo.text}
              value={this.state.text}
              onChange={this.handleChange}
              maxLength={33}
            />
            <button type='submit'>
              <i className='far fa-edit'></i>
            </button>
          </form>
        </div>
      );
    }

    return (
      <div className='single-todo'>
        <p>{this.props.todo.text}</p>
        <div className='buttons-group'>
          <i className='fas fa-pencil-alt' onClick={this.startEditing}></i>
          <i className='fas fa-trash-alt' onClick={this.props.deleteTodo}></i>
        </div>
      </div>
    );
  }
}
