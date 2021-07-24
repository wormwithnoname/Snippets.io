import React from 'react';

import { Button, Card, Space } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';
import { auth, googleProvider } from 'services/FirebaseService';

import './LoginCard.scss';

function Login() {
  const googleSignIn = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      const { user } = response.user;

      console.log('user object', user);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Card className="Login-card">
      <Space direction="vertical" size="large">
        <p className="Login-welcomeback">Welcome Back!</p>
        <Button onClick={googleSignIn} className="Login-google" type="dashed">
          <GoogleCircleFilled className="Login-margin" />
          Sign in with Google
        </Button>
      </Space>
    </Card>
  );
}
export default Login;
