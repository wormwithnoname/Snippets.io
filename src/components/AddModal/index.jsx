import React from 'react';

import { Button, Divider, Form, Input, Modal, Select } from 'antd';

import Editor from 'components/Editor';

import './styles.scss';

const { TextArea } = Input;

function AddModal({ handleCancel, isModalVisible }) {
  function handleChange(tag) {
    console.log(`selected ${tag}`);
  }
  return (
    <Modal
      className="modal"
      destroyOnClose="true"
      footer={null}
      onCancel={handleCancel}
      visible={isModalVisible}
      width={800}
    >
      <Form size="large">
        <Input className="ant-input" bordered={false} placeholder="Title" />
      </Form>
      <Divider />
      <Editor />
      <br />
      <br />
      <TextArea
        autoSize={{ minRows: 5, maxRows: 5 }}
        className="ant-input ant-select-selector"
        placeholder="Type description"
      />
      <br />
      <br />
      <Select
        bordered={false}
        className="modal-tags"
        maxTagCount="responsive"
        mode="tags"
        onChange={handleChange}
        placeholder="Add #TAG"
        size="middle"
      />
      <br />
      <br />
      <Button className="ant-btn" size="large" type="primary">
        Submit
      </Button>
    </Modal>
  );
}

export default AddModal;
