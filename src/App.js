import React from 'react';
import { Home, Signin } from './pages';
import * as ROUTES from './routes/routes';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
            <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
            <Signin />
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
