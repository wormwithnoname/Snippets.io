import React from 'react';

import { Typography } from 'antd';

import Logo from 'assets/img/logowhite.svg';
import LoginCard from 'components/LoginCard';

import './LoginPage.scss';

const { Title } = Typography;

function LoginPage() {
  return (
    <div className="login">
      <div className="login-bg">
        <div className="login-page">
          <img src={Logo} alt="snippets logo" />
          <Title level={4} className="login-subtitle">
            An organized, searchable, shareable, and simple code snippets clipboard
          </Title>
          <LoginCard />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
