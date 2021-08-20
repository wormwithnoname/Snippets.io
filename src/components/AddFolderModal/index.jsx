import React, { useState } from 'react';

import { Form, Input, message, Modal } from 'antd';

import { createFolder } from 'model/FolderModel';
import { useAuth } from 'hooks/useAuth';


import './styles.scss';

function AddFolderModal({ onCancel, isModalVisible }) {
  const { currentUser } = useAuth();
  const [folderName, setFolderName] = useState('');

  function addFolder() {
    try {
      const folder = {
        snippetIDs: [],
        folderName,
        ownerID: currentUser.uid,
      };
      createFolder({ ...folder }).then(() => {
        message.success('Folder created successfully');
      });
      onCancel();
    } catch (error) {
      console.log(error.messages);
    }
  }

  function onChangeText(fieldValue) {
    setFolderName(fieldValue.target.value);
  }
  return (
    <Modal
      className="modal"
      destroyOnClose
      okText="Add"
      onOk={addFolder}
      onCancel={onCancel}
      title="Add Folder"
      visible={isModalVisible}
      width={500}
    >
      <Form size="large">
        <Input bordered={false} placeholder="Folder Name" onChange={onChangeText} />
      </Form>
    </Modal>
  );
}

export default AddFolderModal;
