import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import List from './components/List';
import Add from './components/Add';
import NotFound from './components/NotFound';

export default class App extends Component {
  state = {
    name: 'ys'
  }

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}