import React from 'react';
import AceEditor from 'react-ace';

import { Button, Divider, Form, Input, Modal, Select } from 'antd';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

import './styles.scss';

const { TextArea } = Input;

function AddModal({ handleCancel, isModalVisible }) {
  function handleChange(tag) {
    console.log(`selected ${tag}`);
  }
  function onChange(value) {
    console.log(`selected ${value}`);
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
      <br />
      <AceEditor
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        mode="css"
        name="code_snippet"
        placeholder="Type your code snippet here"
        theme="monokai"
        onChange={onChange}
        style={{ width: '100%' }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
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
