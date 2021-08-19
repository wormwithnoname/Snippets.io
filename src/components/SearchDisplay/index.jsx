import React from 'react';

import { Typography } from 'antd';

import './styles.scss';

const { Text } = Typography;

function DisplaySearch() {
  return (
    <div className="search-results">
      <Text className="search-text">Search results:</Text>
    </div>
  );
}

export default DisplaySearch;
