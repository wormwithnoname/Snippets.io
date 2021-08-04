import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const textInput = 'hakdog';
  // replace with the data input by the user

  return (
    <div className="snippet-container">
      {isCopied && <small>copied</small>}
      <Card actions={[tags]} className="snippet-card" extra={<CardDropdown />} title="Card Title">
        <CopyToClipboard text={textInput} onCopy={onCopyText}>
          <Text> {textInput} </Text>
        </CopyToClipboard>
      </Card>
    </div>
  );
}

export default SnippetCard;
