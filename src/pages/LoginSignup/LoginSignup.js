import { lazy, Suspense, React } from 'react';
import { Route, BrowserRouter as Switch } from 'react-router-dom';

import './LoginSignup.scss';

const Login = lazy(() => import('./Login'));

function LoginSignup() {
  return (
    <div className="login">
      <div className="login-bg">
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default LoginSignup;
