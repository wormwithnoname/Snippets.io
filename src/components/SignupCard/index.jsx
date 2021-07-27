import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import './SignupCard.scss';

const { Text } = Typography;

function SignupCard() {
  return (
    <Card className="Login-card">
      <Space direction="vertical" align="center" size="small">
        <Text className="Login-welcomeback">Sign up!</Text>
        <Form
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
            name="confirm-password"
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
