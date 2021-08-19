import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Avatar, Button, Dropdown, Form, Input, Layout, Menu, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import routes from 'constants/routes';
import { useAuth } from 'hooks/useAuth';

import './styles.scss';

import snippetslogo from 'assets/img/logowhite.svg';
import Modal from 'antd/lib/modal/Modal';

const { Header } = Layout;
const { Text } = Typography;

function NavBar() {
  const { logout, currentUser } = useAuth();
  const [searchText, setSearchText] = useState();
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

  function redirectHome() {
    history.push(routes.ROOT);
  }

  async function redirectSearchPage() {
    if (searchText) {
      history.push(`/search/${searchText}`, searchText);
    }
  }

  const menu = (
    <Menu>
      <Menu.ItemGroup
        title={
          <div>
            <Text>{currentUser?.displayName}</Text>
            <br />
            <Text type="secondary">{currentUser?.email}</Text>
          </div>
        }
      >
        <Menu.Item onClick={handleLogout} key="1">
          Logout
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Layout>
      <Header className="NavBar">
        <img
          className="App-logo"
          onClickCapture={redirectHome}
          src={snippetslogo}
          alt="snippetslogo"
        />
        <div className="rightOfNav">
          <Space size={25}>
            <Form className="ant-input-affix-wrapper">
              <Input
                bordered={false}
                onChange={(searchValue) => {
                  setSearchText(searchValue.target.value);
                }}
                placeholder="Search code snippet"
                suffix={
                  <Button
                    className="ant-btn"
                    icon={<SearchOutlined />}
                    onClick={redirectSearchPage}
                    ghost
                  />
                }
                value={searchText}
              />
            </Form>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Avatar className="Nav-avatar" src={currentUser?.photoURL} />
            </Dropdown>
          </Space>
        </div>
      </Header>
    </Layout>
  );
}

export default NavBar;
