import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import TabsBar from 'components/TabsBar';

import { useAuth } from 'hooks/Hooks';
import routes from 'constants/routes';

import Grid from 'antd/lib/card/Grid';
import {
  createNewUser,
  createNewSnippet,
  getAllSnippets,
  getAllUsers,
  getEditSnippets,
  getOwnedSnippets,
  getUserInfo,
  getViewSnippets,
} from '../../database/DatabaseWrapper';
import { setSnips } from '../../database/UserData-test';
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

      <Grid>
        <Button onClick={() => createNewUser('user1', 'John Doe', 'johndoe21', 0)}>
          create new User
        </Button>
        <Button onClick={() => getUserInfo('user1')}> get userinfo</Button>

        <Button onClick={() => setSnips()}> get owned snippets</Button>
        <Button
          onClick={() =>
            createNewSnippet('finding the min of a list', 'user1', 'python', 'min(list)')
          }
        >
          create snippet
        </Button>

        <Button onClick={() => getAllUsers()}> get all users</Button>
        <Button onClick={() => getOwnedSnippets('user1')}> get owned snnippets2</Button>
        <Button onClick={() => getAllSnippets()}> get all snippets</Button>
        <Button onClick={() => getViewSnippets('user1')}> get view snippets</Button>

        <Button onClick={() => getEditSnippets('user1')}> get edit snippets</Button>
      </Grid>

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
