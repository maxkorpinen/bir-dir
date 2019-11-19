import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navigation from './components/Navigation';
import List from './components/List';
import Add from './components/Add';
import NotFound from './components/NotFound';

function App() {
  return (
      <Router>

        <Navigation />

        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
