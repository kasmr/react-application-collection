import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <nav>
        <NavLink activeClassName='active' exact to='/'>
          Vending machine
        </NavLink>
        <NavLink exact to='/soda'>
          Soda
        </NavLink>
        <NavLink exact to='/chips'>
          Chips
        </NavLink>
        <NavLink exact to='/sardines'>
          Sardines
        </NavLink>
      </nav>
    );
  }
}
