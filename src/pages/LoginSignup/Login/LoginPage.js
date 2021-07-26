import React from 'react';

import { Typography } from 'antd';

import LoginCard from 'components/LoginCard/LoginCard';

import Logo from 'assets/img/logowhite.svg';

import './LoginPage.scss';

const { Title } = Typography;

function LoginPage() {
  return (
    <div className="login-page">
      <img src={Logo} alt="snippets logo" />
      <Title level={4} type="secondary" className="login-subtitle">
        An organized, searchable, shareable, and simple code snippets clipboard
      </Title>
      <LoginCard />
    </div>
  );
}

export default LoginPage;
