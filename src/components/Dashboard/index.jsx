import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Card, Space, Tabs } from 'antd';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import './styles.scss';

const { TabPane } = Tabs;

function Dashboard() {
  const { logout } = useAuth();
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
    <div>
      <Card className="dashboard-card">
        <Space direction="vertical" align="center" size="large">
          <Tabs className="dashboard-text" defaultActiveKey="1" centered>
            <TabPane className="dashboard-text" tab="Home" key="1" />
            <TabPane className="dashboard-text" tab="Folder" key="2" />
            <TabPane className="dashboard-text" tab="Tags" key="3" />
          </Tabs>
        </Space>
      </Card>
      <Button onClick={handleLogout} type="primary" className="dashboard-button">
        Logout
      </Button>
    </div>
  );
}
export default Dashboard;
