import React from 'react';

import { Button, Card, Form, Input, Space, Typography } from 'antd';

import './SignupCard.scss';

const { Text, Link } = Typography;

function SignupCard() {
  return (
    <Card className="Login-card">
      <Space direction="vertical" size="small">
        <Text className="Login-welcomeback">Sign up!</Text>
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 20 }}>
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
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

          <Form.Item
            className="Login-text"
            label="Confirm Password"
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
      </Space>
      <Space direction="vertical" size="medium">
        <Text className="Login-subtitle">
          Have an account?{' '}
          <Link className="Login-subtitle" href="./login">
            Sign In!
          </Link>
        </Text>
      </Space>
    </Card>
  );
}
export default SignupCard;
