import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Divider, Modal, Row, Typography } from 'antd';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';

import './styles.scss';
import routes from 'constants/routes';

const { Text } = Typography;

function Folder({ folderObj }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  async function redirectPage() {
    history.push(routes.FOLDER, folderObj);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
    <div className="folder">
      <Card bordered={false}>
        <div className="folder-body">
          <FolderOutlined className="folderIcon" onClick={redirectPage} />
          <Text className="folderName">{folderObj.folderName}</Text>
        </div>
        <Divider />
        <Row>
          <DeleteOutlined onClick={showModal} />
        </Row>
      </Card>
      <Modal
        okText="Delete"
        onOk={handleOk}
        title="Delete folder"
        onCancel={handleCancel}
        visible={isModalVisible}
      >
        <p>Are you sure you want to delete this folder?</p>
      </Modal>
    </div>
  );
}

export default Folder;
