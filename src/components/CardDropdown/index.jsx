import React from 'react';

import { Dropdown, Menu, Select, Space } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';

import './styles.scss';

const { Option } = Select;

const menu = (
  <Menu>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Add to Folder</Menu.Item>
    <Menu.Item key="3">Delete</Menu.Item>
  </Menu>
);

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

function CardDropdown() {
  return (
    <Space>
      <Select
        showSearch
        style={{ width: 150 }}
        placeholder="Language"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        suffixIcon={<DownOutlined />}
        filterOption={(input, option) => option.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="C">C</Option>
        <Option value="C++">C++</Option>
        <Option value="Python">Python</Option>
      </Select>
      <Dropdown overlay={menu} placement="bottomCenter">
        <EllipsisOutlined />
      </Dropdown>
    </Space>
  );
}
export default CardDropdown;
