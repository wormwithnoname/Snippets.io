import React from 'react';

import { Space, Typography } from 'antd';

import LoginCard from 'components/LoginCard';

import './styles.scss';
import Logo from 'assets/img/logowhite.svg';

const { Title } = Typography;

function LoginPage() {
  return (
    <div className="login">
      <div className="login-bg">
        <div className="login-page">
          <Space align="center" direction="vertical" size="large">
            <img alt="snippets logo" className="login-logo" src={Logo} />
            <Title level={4} className="login-subtitle">
              An organized, searchable, shareable, and simple code snippets clipboard
            </Title>
            <LoginCard />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
