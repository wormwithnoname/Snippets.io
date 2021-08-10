import React from 'react';

import { Button, Card, Typography } from 'antd';

import CardDropdown from 'components/CardDropdown';

import './styles.scss';

const { Text } = Typography;

function SnippetCard({ snippet }) {
  // eslint-disable-next-line dot-notation
  const tags = snippet['tags'].map((tagName) => (
    <Button className="tagButton" shape="round">
      {tagName}
    </Button>
  ));

  return (
    <div className="snippet-container">
      <Card
        actions={[tags]}
        className="snippet-card"
        extra={<CardDropdown snippet={snippet} />}
        title={snippet.title}
      >
        <div value="input">
          <Text level={4}>{snippet.description}</Text>
        </div>
      </Card>
    </div>
  );
}

export default SnippetCard;
