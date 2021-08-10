import React, { useState } from 'react';

import { Button, Dropdown, Menu, Modal, Tag, Space } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import './styles.scss';

function CardDropdown() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onDelete() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Add to Folder</Menu.Item>
      <Menu.Item onClick={onDelete} key="3">
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Space className="dropdown">
      <Tag className="ant-tag" color="#f50">
        Language
      </Tag>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
      <Modal
        title="Delete code snippet"
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
        <p>Are you sure you want to delete this code snippet card?</p>
        <br />
        <Space>
          <Button onClick={handleOk}>Delete</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Space>
      </Modal>
    </Space>
  );
}
export default CardDropdown;
