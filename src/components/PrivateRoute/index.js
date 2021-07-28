import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'hooks/Hooks';

import routes from 'constants/routes';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to={routes.LOGIN} />)}
    />
  );
}
