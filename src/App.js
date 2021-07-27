import { Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import './App.css';

import { AuthProvider } from 'services/AuthProvider';
import PrivateRoute from 'services/PrivateRoute';
import * as routes from 'constants/routes';

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
          <Route path="/login" component={routes.Login} />
          <Route path="/signup" component={routes.Signup} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
