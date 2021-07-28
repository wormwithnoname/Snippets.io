import { Suspense, React, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import './App.css';

import { AuthProvider } from 'services/AuthProvider';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'constants/pathroutes';

const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
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
