import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleClick = () => {
    alert('Saved!');

    this.props.history.push(`/food/${this.state.query}`);
  };

  render() {
    return (
      <div className='search'>
        <h1>Search for food!</h1>
        <input
          type='text'
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save to database and go!</button>
      </div>
    );
  }
}
