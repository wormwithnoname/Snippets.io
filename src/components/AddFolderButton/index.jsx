import React, { useState } from 'react';

import { Button } from 'antd';
import { FolderAddFilled } from '@ant-design/icons';

import AddFolderModal from 'components/AddFolderModal';

import './styles.scss';

function AddFolderButton() {
  const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);

  return (
    <>
      <AddFolderModal
        handleCancel={() => setIsAddFolderModalVisible(false)}
        isModalVisible={isAddFolderModalVisible}
      />
      <Button
        className="dashboard-folder-button"
        icon={<FolderAddFilled />}
        size="large"
        shape="round"
        onClick={() => setIsAddFolderModalVisible(true)}
      />
    </>
  );
}

export default AddFolderButton;
