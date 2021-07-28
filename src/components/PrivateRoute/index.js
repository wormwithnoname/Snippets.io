import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks/Hooks';

import routes from 'constants/routes';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to={routes.LOGIN} />)}
    />
  );
}
