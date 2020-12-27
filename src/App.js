import React from 'react';
import { Home, Signin, Register, Admin, CoursePage } from './pages';
import * as ROUTES from './routes/routes';
import { HashRouter as Router, Switch } from 'react-router-dom';
//Routes protection
import { AuthListener } from './hooks'; //pull in custom hooks from /hooks
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const { user } = AuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} exact path={ROUTES.HOME}>
            <Home /> {/*If on Home page and auth user, redirect to 'Admin' page*/}
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.SIGN_IN}>
            <Signin /> {/*If already an admin, redirect to Admin page*/}
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.REGISTER}>
            <Register />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.ADMIN}>
            <Admin /> {/*If not an admin, redirect to 'Sign In' page*/}
        </ProtectedRoute>

        <ProtectedRoute user={user} loggedInPath={ROUTES.ADMIN} path={ROUTES.COURSES}>
          <CoursePage /> {/*If not an admin, redirect to 'Sign In' page*/}
        </ProtectedRoute>

      </Switch>
    </Router>
  );
}

export default App;
