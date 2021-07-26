import React from 'react';

import { Typography } from 'antd';

import SignupCard from 'components/SignupCard/SignupCard';

import Logo from 'assets/img/logowhite.svg';

import './SignupPage.scss';

const { Title } = Typography;

function SignupPage() {
  return (
    <div className="signup-page">
      <img src={Logo} alt="snippets logo" />
      <Title level={4} className="signup-subtitle">
        An organized, searchable, shareable, and simple code snippets clipboard
      </Title>
      <SignupCard />
    </div>
  );
}

export default SignupPage;
