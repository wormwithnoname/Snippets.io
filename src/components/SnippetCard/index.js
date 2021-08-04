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

  return (
    <div className="snippet-container">
      {isCopied && <small>copied</small>}
      <Card actions={[tags]} className="snippet-card" extra={<CardDropdown />} title="Card Title">
        <CopyToClipboard text={Text} onCopy={onCopyText}>
          <div value="input">
            <Text level={4}>content hereeee</Text>
          </div>
        </CopyToClipboard>
      </Card>
    </div>
  );
}

export default SnippetCard;
