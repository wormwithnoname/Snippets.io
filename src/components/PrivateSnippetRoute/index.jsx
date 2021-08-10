import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import routes from 'constants/routes';
import { checkEditorAccess } from 'model/SnippetAccessModel';
import { useAuth } from 'hooks/useAuth';
import { Spin } from 'antd';

function PrivateSnippetRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const [isLoading, setisLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const { location } = useLocation();

  useEffect(async () => {
    console.log('id is', location);
    if (currentUser) {
      const accessStatus = await checkEditorAccess('oVQDK7GSVJLibzifkcH1', currentUser.uid);
      setAuthenticated(accessStatus);
    }
    setisLoading(false);
  }, []);
  // eslint-disable-next-line no-unused-vars

  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoading && authenticated ? <Component {...props} /> : <Redirect to={routes.ROOT} />
      }
    />
  );
}

export default PrivateSnippetRoute;
