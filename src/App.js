import { Suspense, React, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import './App.css';

import { AuthProvider } from 'contexts/AuthProvider';
import PrivateSnippetRouteEdit from 'routes/PrivateSnippetRoute-EDIT';
import PrivateSnippetRouteView from 'routes/PrivateSnippetRoute-VIEW';
import PrivateRoute from 'routes/PrivateRoute';
import routes from 'constants/routes';

const Addsnippet = lazy(() => import('pages/Add-Snippet'));
const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
const Snippet = lazy(() => import('pages/Snippet'));
const SnippetView = lazy(() => import('pages/SnippetView'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const SearchPage = lazy(() => import('pages/SearchResult'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense
          fallback={
            <div className="spinner-div">
              <Spin />
            </div>
          }
        >
          <Switch>
            <PrivateRoute exact path={routes.ROOT} component={Dashboard} />
            <PrivateRoute exact path={routes.ADDSNIPPET} component={Addsnippet} />
            <PrivateSnippetRouteEdit exact path={routes.SNIPPET_EDIT} component={Snippet} />
            <PrivateSnippetRouteView exact path={routes.SNIPPET_VIEW} component={SnippetView} />
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.SIGNUP} component={Signup} />
            <Route exact path={routes.ERROR} component={ErrorPage} />
            <Route exact path={routes.SEARCH} component={SearchPage} />
            <Redirect to={routes.LOGIN} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
