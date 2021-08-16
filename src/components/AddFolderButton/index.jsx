import React, { useState } from 'react';

import { Button } from 'antd';
import { FolderAddFilled } from '@ant-design/icons';

import AddFolderModal from 'components/AddFolderModal';

import './styles.scss';

function AddFolderButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
    <>
      <AddFolderModal onCancel={handleCancel} isModalVisible={isModalVisible} />
      <Button
        className="dashboard-folder-button"
        icon={<FolderAddFilled />}
        onClick={handleOpenModal}
        size="large"
        shape="round"
      />
    </>
  );
}

export default AddFolderButton;
