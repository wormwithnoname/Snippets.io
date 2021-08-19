import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import routes from 'constants/routes';
import { checkEditorAccess } from 'model/SnippetAccessModel';
import { useAuth } from 'hooks/useAuth';
import { Spin } from 'antd';

import './styles.scss';

function PrivateSnippetRouteEdit({ component: Component, ...rest }) {
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
      const accessStatus = await checkEditorAccess(snippetID, currentUser.uid);
      setAuthenticated(accessStatus);
    }
    setisLoading(false);
  }, []);
  // eslint-disable-next-line no-unused-vars

  if (isLoading) {
    return (
      <div>
        <Spin className="spinner-div" />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoading && authenticated ? <Component {...props} /> : <Redirect to={routes.ERROR} />
      }
    />
  );
}

export default PrivateSnippetRouteEdit;
