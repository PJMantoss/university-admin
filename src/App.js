import React from 'react';
import { Home, Signin, Register, Admin, CoursePage } from './pages';
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
        <Route path={ROUTES.REGISTER}>
            <Register />
        </Route>
        <Route path={ROUTES.ADMIN}>
            <Admin />
        </Route>
        <Route path={ROUTES.COURSES}>
          <CoursePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
