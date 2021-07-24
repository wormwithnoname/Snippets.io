import React from 'react';

import { Button, Card, Space, Form, Input } from 'antd';

import './SignupCard.scss';

function Signup() {
  return (
    <Card className="Login-card">
      <Space direction="vertical" size="large">
        <p className="Login-welcomeback">Sign up!</p>
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
        <p className="Login-subtitle">
          Have an account?{' '}
          <a className="Login-subtitle" href="./login">
            Sign In!
          </a>
        </p>
      </Space>
    </Card>
  );
}
export default Signup;
