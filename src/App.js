import React from 'react';
import { Home, Signin, Register, Admin, CoursePage } from './pages';
import * as ROUTES from './routes/routes';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//Routes protection
import { AuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const { user } = AuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} exact path={ROUTES.HOME}>
            <Home />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.SIGN_IN}>
            <Signin />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.REGISTER}>
            <Register />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.ADMIN}>
            <Admin />
        </ProtectedRoute>

        <ProtectedRoute user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.COURSES}>
          <CoursePage />
        </ProtectedRoute>

      </Switch>
    </Router>
  );
}

export default App;
