import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, Form, Input, Space, Typography } from 'antd';

import { GoogleCircleFilled, LockOutlined, UserOutlined } from '@ant-design/icons';

import { useAuth } from 'services/AuthProvider';
import { googleProvider } from 'services/FirebaseService';
import routes from 'constants/pathroutes';

import './styles.scss';

const { Text } = Typography;

function LoginCard() {
  const { emailLogin, googleLogin } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(userInput) {
    try {
      /* CHANGE LOADER */
      setLoading(true);
      await emailLogin(userInput.email, userInput.password);
      setLoading(false);
      return history.push(routes.ROOT);
    } catch (errors) {
      /* FOR TESTING (NEEDS IMPLEMENTATION OF ERROR HANDLING) */
      // eslint-disable-next-line no-console
      return console.log(errors.message);
    }
  }

  async function handleClick() {
    try {
      setLoading(true);
      await googleLogin(googleProvider);
      setLoading(false);
      return history.push(routes.ROOT);
    } catch (errors) {
      // eslint-disable-next-line no-console
      return console.log(errors.message);
    }
  }

  return (
    <Card className="Login-card">
      <Space direction="vertical" align="center" size="large">
        <Text className="Login-welcomeback">Welcome Back!</Text>
        <Form
          onFinish={handleSubmit}
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
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
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
            <Button onClick={handleClick} className="Login-button" type="dashed">
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
