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
    this.clearAll = this.clearAll.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  componentDidMount() {

    if (ls('list')) {
      this.setState({
        list: ls('list')
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
  }

  clearAll() {
    ls.clear();

    this.setState({
      list: []
    })
  }

  compareDate( a, b ) {
    if ( (new Date(a.date)) < (new Date(b.date)) ){
      return -1;
    }
    if ( (new Date(a.date)) > (new Date(b.date)) ){
      return 1;
    }
    return 0;
  }

  compareName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  
  sortByDate() {
    let list = this.state.list;

    list.sort(this.compareDate);

    this.setState({
      list: list
    })
  }

  sortByName() {
    let list = this.state.list;

    list.sort(this.compareName);

    this.setState({
      list: list
    })
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
              <List {...props} list={this.state.list} clearAll={this.clearAll} sortByDate={this.sortByDate} sortByName={this.sortByName}/>}>
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