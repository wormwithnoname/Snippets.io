import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Space, Typography, Button } from 'antd';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import './styles.scss';

const { Text } = Typography;

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push(routes.LOGIN);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  }

  return (
    <Card className="Login-card">
      <Space direction="vertical" align="center" size="large">
        <Text className="Login-welcomeback">You are signed in!</Text>
        <Text className="Login-welcomeback">{currentUser.email}</Text>
        <Button onClick={handleLogout} type="primary" className="Login-button">
          Logout
        </Button>
      </Space>
    </Card>
  );
}
export default Dashboard;