import { Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { AuthProvider } from 'services/AuthProvider';
import PrivateRoute from 'services/PrivateRoute';
import * as routes from 'constants/routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute exact path="/" component={routes.Dashboard} />
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
