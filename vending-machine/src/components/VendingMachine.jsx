import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VendingMachine extends Component {
  render() {
    return (
      <div className='vending_machine'>
        <ul className='vending_machine nav'>
          <li>
            {' '}
            <Link to='soda'>Soda</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}
