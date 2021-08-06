import React from 'react';

import { Button, Divider, Form, Input, Modal, Select } from 'antd';

import './styles.scss';

const { Option } = Select;
const { TextArea } = Input;

function AddModal({ handleCancel, isModalVisible }) {
  function handleChange(value) {
    console.log(`selected ${value}`);
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
      footer={null}
      onCancel={handleCancel}
      visible={isModalVisible}
      width={800}
    >
      <Form size="large">
        <Input bordered={false} placeholder="Title" />
      </Form>
      <Divider />
      <Select
        bordered={false}
        filterOption={(input, option) => option.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        optionFilterProp="children"
        placeholder="Select Language"
        showSearch
        style={{ width: 200 }}
      >
        <Option value="C">C</Option>
        <Option value="C++">C++</Option>
        <Option value="Python">Python</Option>
      </Select>
      <br />
      <br />
      <TextArea autoSize={{ minRows: 10, maxRows: 10 }} placeholder="Type your code snippet here" />
      <br />
      <br />
      <TextArea autoSize={{ minRows: 5, maxRows: 5 }} placeholder="Type description" />
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
      <Button className="modal-button" size="large" type="primary">
        Submit
      </Button>
    </Modal>
  );
}

export default AddModal;
