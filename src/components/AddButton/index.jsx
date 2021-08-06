import React, { useState } from 'react';

import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import AddModal from 'components/AddModal';

import './styles.scss';

function AddButton() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  return (
    <>
      <AddModal
        isModalVisible={isAddModalVisible}
        handleCancel={() => setIsAddModalVisible(false)}
      />
      <div className="add-button">
        <Button
          className="dashboard-add-button"
          icon={<PlusCircleFilled />}
          size="large"
          shape="round"
          onClick={setIsAddModalVisible}
        />
      </div>
    </>
  );
}

export default AddButton;
