import React from 'react';

import { Select, Typography } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';

import './styles.scss';

const { Link } = Typography;
const { Option } = Select;

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
    <>
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
      <Link classname="snippet-ellipsis" href="/">
        <EllipsisOutlined />
      </Link>
    </>
  );
}
export default CardDropdown;
