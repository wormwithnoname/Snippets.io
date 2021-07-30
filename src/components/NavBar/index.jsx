import React from 'react';

import { Layout, Input, Space, Dropdown, Menu, Avatar, Button, Form } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import { useAuth } from 'hooks/useAuth';

import routes from 'constants/routes';

import { useHistory } from 'react-router-dom';

import './styles.scss';

import snippetslogo from 'assets/img/logoblack.svg';
import Modal from 'antd/lib/modal/Modal';

const { Header } = Layout;

function NavBar() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push(routes.LOGIN);
    } catch (errors) {
      Modal.error({
        autoFocusButton: null,
        centered: true,
        content: errors.message,
        okType: { className: 'Login-button' },
        title: 'Logout Failed',
      });
    }
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">{currentUser.displayName}</Menu.Item>
      <Menu.Item onClick={handleLogout} key="2">
        Logout
      </Menu.Item>
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
