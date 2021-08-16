import React, { useState } from 'react';

import { Dropdown, Menu, Modal, Tag, Space } from 'antd';
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

  function getLabel(language) {
    switch (language) {
      case 'c_cpp':
        return 'C/C++';
      case 'c#':
        return 'C#';
      case 'css':
        return 'CSS';
      case 'dart':
        return 'Dart';
      case 'html':
        return 'HTML';
      case 'java':
        return 'Java';
      case 'javascript':
        return 'Javascript';
      case 'json':
        return 'JSON';
      case 'php':
        return 'PHP';
      case 'python':
        return 'Python';
      case 'typescript':
        return 'Typescript';
      default:
        return 'Unknown';
    }
  }

  return (
    <Space className="dropdown">
      <Tag className="ant-tag">{getLabel(snippet.language)}</Tag>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
      <ArrowsAltOutlined onClick={redirectPage} />
      <Modal
        okText="Delete"
        onOk={handleOk}
        title="Delete code snippet"
        onCancel={handleCancel}
        visible={isModalVisible}
      >
        <p>Are you sure you want to delete this code snippet card?</p>
      </Modal>
    </Space>
  );
}
export default CardDropdown;
