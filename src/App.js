import { Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
