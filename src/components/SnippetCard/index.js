import React from 'react';

import { Card, Typography } from 'antd';

const { Text } = Typography;

function SnippetCard() {
  return (
    <Card title="Default size card" style={{ width: 300, height: 300 }}>
      <Text>Card content</Text>
      <Text>Card content</Text>
      <Text>Card content</Text>
    </Card>
  );
}

export default SnippetCard;
