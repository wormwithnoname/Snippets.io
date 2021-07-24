import React from 'react';

// import Subtitle from 'components/Subtitle/Subtitle';
import LoginCard from 'components/LoginCard/LoginCard';

import Logo from 'assets/img/logowhite.svg';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div className="login-page">
      <img className="login-logo" src={Logo} alt="snippets logo" />
      <p className="login-subtitle">
        An organized, searchable, shareable, and simple code snippets clipboard
      </p>
      <LoginCard />
    </div>
  );
}

export default LoginPage;
