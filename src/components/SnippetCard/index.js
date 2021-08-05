import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Card, message, Typography } from 'antd';

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
  function onCopyText() {
    message.success('Copied!');
  }

  const textInput = 'Test Data';
  // replace with the data input by the user

  return (
    <div className="snippet-container">
      <Card actions={[tags]} className="snippet-card" extra={<CardDropdown />} title="Card Title">
        <CopyToClipboard text={textInput} onCopy={onCopyText}>
          <Text> {textInput} </Text>
        </CopyToClipboard>
      </Card>
    </div>
  );
}

export default SnippetCard;
