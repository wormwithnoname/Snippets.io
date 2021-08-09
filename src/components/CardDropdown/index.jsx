import React from 'react';

import { Dropdown, Menu, Tag, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import './styles.scss';

const menu = (
  <Menu>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Add to Folder</Menu.Item>
    <Menu.Item key="3">Delete</Menu.Item>
  </Menu>
);

function CardDropdown() {
  return (
    <Space className="dropdown">
      <Tag className="ant-tag" color="#f50">
        Language
      </Tag>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
    </Space>
  );
}
export default CardDropdown;
