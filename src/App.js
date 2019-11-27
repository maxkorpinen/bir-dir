import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import ls from 'local-storage';

import List from './components/List';
import Add from './components/Add';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    if (ls('list')) {
      this.setState({
        list: ls('list')
      })
    } else {
      this.setState({
        list: []
      })
    }
  }

  handleSubmit(newObservation) {
    let list = this.state.list;
    list.push(newObservation);

    ls('list', list);

    this.setState({
      list: list
    })

    console.log("state", this.state.list)
    console.log("ls", ls('list'))
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

            <Route exact path="/" render={(props) =>
              <List {...props} list={this.state.list} />}>
            </Route>

            <Route exact path="/add" render={(props) =>
              <Add {...props} handleSubmit={this.handleSubmit} />}>
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