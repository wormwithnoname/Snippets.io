import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import routes from 'constants/routes';
import { checkViewerAccess } from 'model/SnippetAccessModel';
import { useAuth } from 'hooks/useAuth';
import { Spin } from 'antd';

function PrivateSnippetRouteView({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const [isLoading, setisLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  function parseURL(URL) {
    return URL.substring(URL.lastIndexOf('/') + 1);
  }

  useEffect(async () => {
    const snippetID = await parseURL(location.pathname);
    if (currentUser) {
      const accessStatus = await checkViewerAccess(snippetID, currentUser.email);
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

export default PrivateSnippetRouteView;
