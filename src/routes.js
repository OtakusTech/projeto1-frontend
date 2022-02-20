import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router';
import { isAuthenticated } from './services/auth';
import { User } from './pages/User';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => null} />
      <PrivateRoute
        path='/user/:id'
        component={() => <User />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;