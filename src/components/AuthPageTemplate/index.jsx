import React from 'react';

import { Space, Typography } from 'antd';

import Logo from 'assets/img/logowhite.svg';

import './styles.scss';

const { Title } = Typography;

function AuthPageTemplate({ children }) {
  return (
    <div className="auth">
      <div className="auth-bg">
        <div className="auth-page">
          <Space align="center" direction="vertical" size="large">
            <img alt="snippets logo" className="auth-logo" src={Logo} />
            <Title level={4} className="auth-subtitle">
              An organized, searchable, shareable, and simple code snippets clipboard
            </Title>
            {children}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default AuthPageTemplate;
