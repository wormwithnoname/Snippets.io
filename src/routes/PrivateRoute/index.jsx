import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes from 'constants/routes';
import { useAuth } from 'hooks/useAuth';

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to={routes.LOGIN} />)}
    />
  );
}

export default PrivateRoute;
