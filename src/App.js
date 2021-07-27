import { Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Spin } from 'antd';

import * as routes from 'constants/routes';

import './App.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
