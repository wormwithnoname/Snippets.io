import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, Form, Input, Modal, Space, Typography } from 'antd';

import { GoogleCircleFilled, LockOutlined, UserOutlined } from '@ant-design/icons';

import { useAuth } from 'hooks/Hooks';
import { googleProvider } from 'services/FirebaseService';
import routes from 'constants/routes';

import './styles.scss';

const { Text } = Typography;

function LoginCard() {
  const { emailLogin, googleLogin } = useAuth();
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
      await emailLogin(userInput.email, userInput.password);
      history.push(routes.ROOT);
    } catch (errors) {
      promptModal(errors.message);
    }
  }

  async function handleClick() {
    try {
      await googleLogin(googleProvider);
      history.push(routes.ROOT);
    } catch (errors) {
      promptModal(errors.message);
    }
  }

  return (
    <Card className="Login-card">
      <Modal title="Login Failed" centered visible={visible} onCancel={handleCancel} footer={null}>
        <p>{modalText}</p>
      </Modal>
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
              <Link className="Login-link" to="./signup">
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
