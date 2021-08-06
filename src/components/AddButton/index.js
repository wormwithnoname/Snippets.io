import React from 'react';

import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import AddModal from 'components/AddModal';

import './styles.scss';

function AddButton() {
  return (
    <div className="add-button">
      <Button
        className="dashboard-add-button"
        icon={<PlusCircleFilled />}
        size="large"
        shape="round"
        // onClick={showModal}
      />
      <AddModal />
    </div>
  );
}

export default AddButton;
