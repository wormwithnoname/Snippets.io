import React, { useState } from 'react';

import { Button, Dropdown, Menu, Modal, Tag, Space } from 'antd';
import { ArrowsAltOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { remove } from 'model/SnippetModel';

import './styles.scss';

function CardDropdown({ snippet }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  function onDelete() {
    setIsModalVisible(true);
  }

  async function handleOk() {
    await remove(snippet.snippetID);
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function redirectPage() {
    history.push(`/snippet/view/${snippet.snippetID}`);
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to={`/snippet/edit/${snippet.snippetID}`}>Edit</Link>
      </Menu.Item>
      <Menu.Item key="2">Add to Folder</Menu.Item>
      <Menu.Item onClick={onDelete} key="3">
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Space className="dropdown">
      <Tag className="ant-tag">{snippet.language}</Tag>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
      <ArrowsAltOutlined onClick={redirectPage} />
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
