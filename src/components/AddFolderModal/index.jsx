import React from 'react';

import { Button, Form, Input, Modal } from 'antd';

import './styles.scss';

function AddFolderModal({ handleCancel, isModalVisible }) {
  return (
    <Modal
      className="modal"
      destroyOnClose="true"
      footer={null}
      onCancel={handleCancel}
      title="Add Folder"
      visible={isModalVisible}
      width={500}
    >
      <Form size="large">
        <Input bordered={false} placeholder="Folder Name" />
      </Form>
      <br />
      <Button className="modal-button" size="large" type="primary">
        Add
      </Button>
    </Modal>
  );
}

export default AddFolderModal;
