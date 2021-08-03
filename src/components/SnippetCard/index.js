import React from 'react';

import { Button, Card, Dropdown, Menu, message, Typography } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';

import CIcon from 'assets/img/c_icon.svg';
import JavaScriptIcon from 'assets/img/javascript_icon.svg';
import PythonIcon from 'assets/img/python_icon.svg';

import './styles.scss';

const { Link, Text } = Typography;

function handleMenuClick() {
  message.info('Click on menu item.');
}

const menu = (
  <Menu className="menu-icon" onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<img alt="Python" src={PythonIcon} />}>
      Python
    </Menu.Item>
    <Menu.Item key="2" icon={<img alt="JavaScript" src={JavaScriptIcon} />}>
      JavaScript
    </Menu.Item>
    <Menu.Item key="3" icon={<img alt="C" src={CIcon} />}>
      C++
    </Menu.Item>
  </Menu>
);

const tagNames = ['Frontend', 'Web'];

const tags = tagNames.map((tagName) => (
  <Button className="tagButton" shape="round">
    {tagName}
  </Button>
));

function SnippetCard() {
  return (
    <div className="snippet-container">
      <Card
        actions={[tags]}
        className="snippet-card"
        extra={
          <>
            <Dropdown overlay={menu}>
              <Button shape="round" className="extra-button">
                Language <DownOutlined />
              </Button>
            </Dropdown>
            <Link classname="snippet-ellipsis" href="/">
              <EllipsisOutlined />
            </Link>
          </>
        }
        title="Card Title"
      >
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
      </Card>
    </div>
  );
}

export default SnippetCard;
