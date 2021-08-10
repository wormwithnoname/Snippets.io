import { Suspense, React, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import './App.css';

import { AuthProvider } from 'contexts/AuthProvider';
import PrivateSnippetRoute from 'components/PrivateSnippetRoute';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'constants/routes';

const Addsnippet = lazy(() => import('pages/Add-Snippet'));
const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
const Snippet = lazy(() => import('pages/Snippet'));
const Dashboard = lazy(() => import('pages/Dashboard'));

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
            <PrivateSnippetRoute exact path={routes.SNIPPET} component={Snippet} />
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.SIGNUP} component={Signup} />
            <Redirect to={routes.LOGIN} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
