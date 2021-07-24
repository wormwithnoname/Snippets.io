import React from 'react';

import SignupCard from 'components/SignupCard/SignupCard';

import Logo from 'assets/img/logowhite.svg';

import './SignupPage.scss';

function SignupPage() {
  return (
    <div className="signup-page">
      <img src={Logo} alt="snippets logo" />
      <p className="signup-subtitle">
        An organized, searchable, shareable, and simple code snippets clipboard
      </p>
      <SignupCard />
    </div>
  );
}

export default SignupPage;
