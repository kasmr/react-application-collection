import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Food from './components/Food';
import './App.css';
import Meal from './components/Meal';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Toggler from './components/Toggler';
import Form from './components/Form';
import Select from './components/Select';

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
          <Toggler />
          <Form />
          <Select />
        </BrowserRouter>
      </div>
    );
  }
}
