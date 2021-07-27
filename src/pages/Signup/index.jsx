import React from 'react';

import { Space, Typography } from 'antd';

import SignupCard from 'components/SignupCard';

import Logo from 'assets/img/logowhite.svg';

import './SignupPage.scss';

const { Title } = Typography;

function SignupPage() {
  return (
    <div className="login">
      <div className="login-bg">
        <div className="login-page">
          <Space align="center" direction="vertical" size="large">
            <img alt="snippets logo" className="login-logo" src={Logo} />
            <Title level={4} className="login-subtitle">
              An organized, searchable, shareable, and simple code snippets clipboard
            </Title>
            <SignupCard />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
