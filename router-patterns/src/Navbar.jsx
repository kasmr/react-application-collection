import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Navbar extends Component {
  handleLogin = () => {
    alert('You logged in!');
    this.props.history.push('/food/login');
  };

  render() {
    return (
      <nav className='navbar'>
        <button onClick={this.props.history.goBack}>Go back</button>
        <h1>Navbar</h1>
        <button onClick={this.handleLogin}>Login</button>
      </nav>
    );
  }
}

export default withRouter(Navbar);
