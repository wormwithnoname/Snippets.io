import React from 'react';
import AceEditor from 'react-ace';

import { Button, Divider, Form, Input, Modal, Select } from 'antd';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

import './styles.scss';

const { Option } = Select;
const { TextArea } = Input;

function AddModal({ handleCancel, isModalVisible }) {
  function handleChange(tag) {
    console.log(`selected ${tag}`);
  }
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
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
      <Select
        className="ant-select"
        bordered={false}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        optionFilterProp="children"
        placeholder="Select Language"
        showSearch
      >
        <Option value="c">C</Option>
        <Option value="c++">C++</Option>
        <Option value="c#">C#</Option>
        <Option value="css">CSS</Option>
        <Option value="java">Java</Option>
        <Option value="javascript">Javascript</Option>
        <Option value="php">PHP</Option>
        <Option value="python">Python</Option>
        <Option value="typescript">Typescript</Option>
      </Select>
      <br />
      <br />
      <AceEditor
        placeholder="Type your code snippet here"
        mode="css"
        theme="monokai"
        onChange={onChange}
        name="code_snippet"
        fontSize={14}
        editorProps={{ $blockScrolling: true }}
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
        className="ant-input ant-select-selector"
        autoSize={{ minRows: 5, maxRows: 5 }}
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
        style={{ width: 200 }}
      >
        {/* <Option value="1">Tag 1</Option>
        <Option value="2">Tag 2</Option>
        <Option value="3">Tag 3</Option> */}
      </Select>
      <br />
      <br />
      <Button className="ant-btn" size="large" type="primary">
        Submit
      </Button>
    </Modal>
  );
}

export default AddModal;
