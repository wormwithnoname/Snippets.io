import React from 'react';
import { Link } from 'react-router-dom';

import { auth, googleProvider } from 'services/FirebaseService';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

import { GoogleCircleFilled } from '@ant-design/icons';

import './LoginCard.scss';

const { Text } = Typography;

function LoginCard() {
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
        <Text className="Login-welcomeback">Welcome Back!</Text>
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
        <Text className="Login-subtitle">
          Don&apos;t have an account yet?
          <Link className="Login-subtitle" to="./signup">
            Sign Up!
          </Link>
        </Text>
      </Space>
    </Card>
  );
}
export default LoginCard;
