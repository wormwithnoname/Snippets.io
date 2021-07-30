import React from 'react';

import AuthPage from 'components/AuthPageTemplate';
import SignupCard from 'components/SignupCard';

function LoginPage() {
  return (
    <AuthPage>
      <SignupCard />
    </AuthPage>
  );
}

export default LoginPage;
