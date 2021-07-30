import React from 'react';

import AuthenticationPage from 'components/AuthPageTemplate';
import LoginCard from 'components/LoginCard';

function LoginPage() {
  return (
    <AuthenticationPage>
      <LoginCard />
    </AuthenticationPage>
  );
}

export default LoginPage;
