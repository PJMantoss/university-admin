import React from 'react';
import { Home } from './pages';
import * as ROUTES from './routes/routes';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
            <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
            <p>Sign In Page</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
            <p>Sign Up Page</p>
        </Route>
        <Route path={ROUTES.DASHBOARD}>
            <p>Dashboard PAGE</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
