import { lazy, Suspense, React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// Pages/Routes
const Login = lazy(() => import('pages/LoginSignup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
