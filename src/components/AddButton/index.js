import React, { useState } from 'react';

import { Button, Form, Input, Modal, Select } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import './styles.scss';

const { Option } = Select;
const { TextArea } = Input;

function AddButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function showModal() {
    setIsModalVisible(true);
  }

  function handleCancel() {
    setIsModalVisible(false);
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
    <div className="add-button">
      <Button
        className="dashboard-add-button"
        icon={<PlusCircleFilled />}
        size="large"
        shape="round"
        onClick={showModal}
      />
      <Modal
        className="modal-color"
        bodyStyle={{ height: 650 }}
        width={800}
        title="Add code snippet"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form size="large">
          <Input placeholder="Title" bordered={false} />
        </Form>
        <br />
        <Select
          showSearch
          bordered={false}
          style={{ width: 200 }}
          placeholder="Select Language"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) => option.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="C">C</Option>
          <Option value="C++">C++</Option>
          <Option value="Python">Python</Option>
        </Select>
        <br />
        <br />
        <TextArea
          placeholder="Type your code snippet here"
          autoSize={{ minRows: 10, maxRows: 10 }}
        />
        <br />
        <br />
        <TextArea placeholder="Type description" autoSize={{ minRows: 5, maxRows: 5 }} />
        <br />
        <br />
        <Select
          bordered={false}
          mode="tags"
          placeholder="Add #TAG"
          onChange={handleChange}
          style={{ width: 200 }}
          maxTagCount="responsive"
        >
          <Option value="1">Tag 1</Option>
          <Option value="2">Tag 2</Option>
          <Option value="3">Tag 3</Option>
        </Select>
        <br />
        <br />
        <Button type="primary">Submit</Button>
      </Modal>
    </div>
  );
}

export default AddButton;
