import React from 'react';
import { useHistory } from 'react-router-dom';

import { Avatar, Button, Dropdown, Form, Input, Layout, Menu, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import snippetslogo from 'assets/img/logoblack.svg';
import routes from 'constants/routes';
import { useAuth } from 'hooks/useAuth';

import './styles.scss';

const { Header } = Layout;

function NavBar() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push(routes.LOGIN);
    } catch (error) {
      console.error('error');
    }
  }

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.ItemGroup title={currentUser.displayName}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Logout</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  // eslint-disable-next-line no-console
  function onSearch(value) {
    console.log(value);
  }
  return (
    <Layout>
      <Header className="NavBar">
        <img className="App-logo" src={snippetslogo} alt="snippetslogo" />
        <div className="rightOfNav">
          <Space size={25}>
            <Form className="ant-input-affix-wrapper">
              <Input
                bordered={false}
                id="searchID"
                placeholder="Search code snippet"
                suffix={
                  <Button className="ant-btn" icon={<SearchOutlined />} onClick={onSearch} ghost />
                }
              />
            </Form>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Avatar className="Nav-avatar" src={currentUser.photoURL} />
            </Dropdown>
          </Space>
        </div>
      </Header>
    </Layout>
  );
}

export default NavBar;
