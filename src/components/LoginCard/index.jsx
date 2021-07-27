import React from 'react';
import { Link } from 'react-router-dom';

// import { auth, googleProvider } from 'services/FirebaseService';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

import { GoogleCircleFilled, LockOutlined, UserOutlined } from '@ant-design/icons';

import './LoginCard.scss';

const { Text } = Typography;

function LoginCard() {
  // const googleSignIn = async () => {
  //   try {
  //     const response = await auth.signInWithPopup(googleProvider);
  //     const { user } = response.user;
  //     // eslint-disable-next-line
  //     console.log('user object', user);
  //   } catch (error) {
  //     // eslint-disable-next-line
  //     console.error(error.message);
  //   }
  // };
  return (
    <Card className="Login-card">
      <Space direction="vertical" align="center" size="large">
        <Text className="Login-welcomeback">Welcome Back!</Text>
        <Form
          className="Login-form"
          name="basic"
          labelCol={{ span: 10 }}
          layout="vertical"
          wrapperCol={{ span: 30 }}
          initialValues={{ remember: true }}
        >
          <Space direction="vertical" align="center">
            <Form.Item
              className="Login-text"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              className="Login-text"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="Login-button">
              Submit
            </Button>
            <Button className="Login-button" type="dashed">
              <GoogleCircleFilled className="Login-margin" />
              Sign in with Google
            </Button>
            <Text className="Login-subtitle">
              Don&apos;t have an account yet?{' '}
              <Link className="Login-subtitle" to="./signup">
                Sign Up!
              </Link>
            </Text>
          </Space>
        </Form>
      </Space>
    </Card>
  );
}
export default LoginCard;
