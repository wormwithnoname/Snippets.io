import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, Form, Input, Modal, Space, Typography } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import './styles.scss';

const { Text } = Typography;

function SignupCard() {
  const { signup } = useAuth();
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const history = useHistory();

  const promptModal = (message) => {
    setVisible(true);
    setModalText(message);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  async function handleSubmit(userInput) {
    try {
      await signup(userInput.email, userInput.password, userInput.username);
      history.push(routes.ROOT);
    } catch (errors) {
      promptModal(errors.message);
    }
  }

  return (
    <Card className="Login-card">
      <Modal title="Signup Failed" centered visible={visible} onCancel={handleCancel} footer={null}>
        <p>{modalText}</p>
      </Modal>
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
            <Link className="Login-link" to="./login">
              Sign In!
            </Link>
          </Text>
        </Space>
      </Space>
    </Card>
  );
}
export default SignupCard;
