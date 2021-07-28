import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import TabsBar from 'components/TabsBar';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import './styles.scss';

function DashboardPage() {
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
    <div className="dashboard">
      <TabsBar />
      <Button onClick={handleLogout} type="primary" className="dashboard-button">
        Logout
      </Button>
      <Button
        className="dashboard-add-button"
        icon={<PlusOutlined />}
        shape="circle"
        size="large"
      />
    </div>
  );
}

export default DashboardPage;
