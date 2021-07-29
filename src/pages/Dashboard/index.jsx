import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import TabsBar from 'components/TabsBar';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import {
  getEditSnippets,
  getOwnedSnippets,
  getUserInfo,
  getViewSnippets,
} from '../../database/DatabaseWrapper';
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
      <Button onClick={() => getUserInfo('user1')}> get userinfo</Button>

      <Button
        onClick={() =>
          getOwnedSnippets('user1').then((res) => {
            console.log('done');
            console.log(res);
          })
        }
      >
        {' '}
        get owned snippets
      </Button>
      <Button onClick={() => getViewSnippets('user1')}> get view snippets</Button>

      <Button onClick={() => getEditSnippets('user1')}> get edit snippets</Button>
      <Button onClick={handleLogout} type="primary" className="dashboard-button">
        Logout
      </Button>
      <Button
        className="dashboard-add-button"
        icon={<PlusCircleFilled />}
        size="large"
        shape="round"
      />
    </div>
  );
}

export default DashboardPage;
