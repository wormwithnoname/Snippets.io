import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Card, message, Typography } from 'antd';

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

  function onCopyText() {
    message.success('Copied code snippet!');
  }

  return (
    <div className="snippet-container">
      <Card
        actions={[tags]}
        className="snippet-card"
        extra={<CardDropdown snippet={snippet} />}
        title={snippet.title}
      >
        <div value="input">
          <CopyToClipboard text={snippet.body} onCopy={onCopyText}>
            <Text level={4}>{snippet.description}</Text>
          </CopyToClipboard>
        </div>
      </Card>
    </div>
  );
}

export default SnippetCard;
