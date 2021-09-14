import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Food from './Food';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route
            exact
            path='/food/:name'
            render={(routeParams) => (
              <Food name={routeParams.match.params.name} />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}
