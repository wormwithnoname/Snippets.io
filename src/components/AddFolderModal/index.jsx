import React from 'react';

import { Form, Input, Modal } from 'antd';

import './styles.scss';

function AddFolderModal({ onCancel, isModalVisible }) {
  return (
    <Modal
      className="modal"
      destroyOnClose
      okText="Add"
      onCancel={onCancel}
      title="Add Folder"
      visible={isModalVisible}
      width={500}
    >
      <Form size="large">
        <Input bordered={false} placeholder="Folder Name" />
      </Form>
    </Modal>
  );
}

export default AddFolderModal;
