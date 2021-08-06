import React from 'react';

import { Button, Card, Typography } from 'antd';

import CardDropdown from 'components/CardDropdown';

import './styles.scss';

const { Text } = Typography;

const tagNames = ['Frontend', 'Web'];

const tags = tagNames.map((tagName) => (
  <Button className="tagButton" shape="round">
    {tagName}
  </Button>
));

function SnippetCard() {
  return (
    <div className="snippet-container">
      <Card actions={[tags]} className="snippet-card" extra={<CardDropdown />} title="Card Title">
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
        <Text level={4}>content hereeee</Text>
      </Card>
    </div>
  );
}

export default SnippetCard;
