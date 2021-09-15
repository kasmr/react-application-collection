import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Food from './Food';
import './App.css';
import Meal from './Meal';
import Search from './Search';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route
              exact
              path='/food/:name'
              render={(routeParams) => <Food {...routeParams} />}
            />
            <Route
              exact
              path='/food/:foodName/drink/:drinkName'
              render={(routeParams) => <Meal {...routeParams} />}
            />
            <Route render={() => <h1>Error! Page not found!</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
