import React from 'react';

import { auth, googleProvider } from 'services/FirebaseService';
import { Button, Card, Space, Form, Input } from 'antd';

import { GoogleCircleFilled } from '@ant-design/icons';

import './LoginCard.scss';

function Login() {
  const googleSignIn = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      const { user } = response.user;
      // eslint-disable-next-line
      console.log('user object', user);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error.message);
    }
  };
  return (
    <Card className="Login-card">
      <Space direction="vertical" size="large">
        <p className="Login-welcomeback">Welcome Back!</p>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
        >
          <Form.Item
            className="Login-text"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="Login-text"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="Login-button">
            Submit
          </Button>
        </Form>
        <Button onClick={googleSignIn} className="Login-button" type="dashed">
          <GoogleCircleFilled className="Login-margin" />
          Sign in with Google
        </Button>
        <p className="Login-subtitle">Don&apos;t have an account yet?</p>
        <a className="Login-subtitle" href="./signup">
          Sign Up!
        </a>
      </Space>
    </Card>
  );
}
export default Login;
