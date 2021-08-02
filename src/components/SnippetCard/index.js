import React from 'react';

import { Card, Typography } from 'antd';

import './styles.scss';

const { Text } = Typography;

function SnippetCard() {
  return (
    <div className="snippet-container">
      <Card className="snippet-card" title="Default size card">
        <Text>content hereeee</Text>
      </Card>
    </div>
  );
}

export default SnippetCard;
