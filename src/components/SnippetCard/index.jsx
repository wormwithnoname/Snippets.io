import React, { useEffect } from 'react';

import { Button, Card, Typography } from 'antd';

import './styles.scss';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Text } = Typography;

function SnippetCard({ snippet }) {
  // eslint-disable-next-line dot-notation
  const tags = snippet['tags'].map((tagName) => (
    <Button className="tagButton" shape="round">
      {tagName}
    </Button>
  ));

  useEffect(async () => {
    console.log(snippet.body);
  }, []);

  return (
    <div className="snippet-container">
      <Card
        actions={[tags]}
        className="snippet-card"
        extra={
          <>
            <Button shape="round" className="extra-button">
              {snippet.language}
            </Button>
            <Link classname="snippet-ellipsis" href="/">
              <EllipsisOutlined />
            </Link>
          </>
        }
        title={snippet.title}
      >
        <div value="input">
          <Text level={4}>{snippet.body}</Text>
        </div>
      </Card>
    </div>
  );
}

export default SnippetCard;
