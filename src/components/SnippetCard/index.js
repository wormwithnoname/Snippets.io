import React from 'react';

import { Card, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import './styles.scss';

const { Text } = Typography;

function SnippetCard() {
  return (
    <div className="snippet-container">
      <Card
        className="snippet-card"
        extra={<EllipsisOutlined />}
        hoverable="true"
        title="Card Title"
      >
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
      </Card>
    </div>
  );
}

export default SnippetCard;
