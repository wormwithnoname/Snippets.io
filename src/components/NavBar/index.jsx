import React from 'react';

import { Layout, Input, Space, Dropdown, Menu, Avatar, Button, Form } from 'antd';

import { UserOutlined, SearchOutlined } from '@ant-design/icons';

import { useAuth } from 'hooks/Hooks';

import routes from 'constants/routes';

import { useHistory } from 'react-router-dom';

import './styles.scss';

import snippetslogo from 'assets/img/logoblack.svg';

const { Header } = Layout;

function NavBar() {
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

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  // eslint-disable-next-line no-console
  const onSearch = (value) => console.log(value);

  return (
    <Layout>
      <Header className="NavBar">
        <Space size={780}>
          <img className="App-logo" src={snippetslogo} alt="snippetslogo" />
          <div className="rightOfNav">
            <Space size={25}>
              <Form className="ant-input-affix-wrapper">
                <Input
                  bordered={false}
                  id="searchID"
                  placeholder="Search code snippet"
                  suffix={
                    <Button
                      className="ant-btn"
                      icon={<SearchOutlined />}
                      onClick={onSearch}
                      ghost
                    />
                  }
                />
              </Form>
              <Dropdown overlay={menu} placement="bottomCenter">
                <Avatar style={{ backgroundColor: '#313837' }} icon={<UserOutlined />} />
              </Dropdown>
            </Space>
          </div>
        </Space>
      </Header>
    </Layout>
  );
}

export default NavBar;
