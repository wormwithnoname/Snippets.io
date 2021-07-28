import { Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import './App.css';

import { AuthProvider } from 'services/AuthProvider';
import PrivateRoute from 'services/PrivateRoute';
import routes from 'constants/pathroutes';
import * as componentroutes from 'constants/componentroutes';

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
            <PrivateRoute exact path={routes.ROOT} component={componentroutes.Dashboard} />
            <Route path={routes.LOGIN} component={componentroutes.Login} />
            <Route path={routes.SIGNUP} component={componentroutes.Signup} />
            <Redirect to={routes.LOGIN} />
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
