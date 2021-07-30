import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, Form, Input, Modal, Space, Typography } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import routes from 'constants/routes';
import { useAuth } from 'hooks/useAuth';

import './styles.scss';

const { Text } = Typography;

function SignupCard() {
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(userInput) {
    try {
      await signup(userInput.email, userInput.password, userInput.username);
      history.push(routes.ROOT);
    } catch (errors) {
      Modal.error({
        className: '.modal-body',
        autoFocusButton: null,
        centered: true,
        content: errors.message,
        okType: { className: 'Login-button' },
        title: 'Signup Failed',
      });
    }
  }

  return (
    <Card className="Login-card">
      <Space direction="vertical" align="center" size="small">
        <Text className="Login-welcomeback">Sign up!</Text>
        <Form
          onFinish={handleSubmit}
          className="Login-form"
          name="basic"
          labelCol={{ span: 10 }}
          layout="vertical"
          wrapperCol={{ span: 30 }}
          initialValues={{ remember: true }}
        >
          <Form.Item
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
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item
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

          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="Login-button">
            Submit
          </Button>
        </Form>
        <Space direction="vertical" size="medium">
          <Text className="Login-subtitle">
            Have an account?{' '}
            <Link className="Login-subtitle" to="./login">
              Sign In!
            </Link>
          </Text>
        </Space>
      </Space>
    </Card>
  );
}
export default SignupCard;
