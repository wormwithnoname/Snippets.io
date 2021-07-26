import React from 'react';

import Logo from 'assets/img/logowhite.svg';
import LoginCard from 'components/LoginCard';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div className="login">
      <div className="login-bg">
        <div className="login-page">
          <img src={Logo} alt="snippets logo" />
          <p className="login-subtitle">
            An organized, searchable, shareable, and simple code snippets clipboard
          </p>
          <LoginCard />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
