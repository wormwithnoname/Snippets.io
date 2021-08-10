import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Card, message, Modal, Typography } from 'antd';

// import CardDropdown from 'components/CardDropdown';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const textInput = 'Test Data';
  // replace with the data input by the user

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="snippet-container">
      <Card onClick={showModal} actions={[tags]} className="snippet-card" title="Card Title">
        <Text>{textInput}</Text>
      </Card>
      <Modal
        className="snippet-view"
        centered
        title="This Snippet"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="snippet-view">
          <div>
            <CopyToClipboard text={textInput} onCopy={onCopyText}>
              <Text> {textInput} </Text>
            </CopyToClipboard>
          </div>
          <br />
          <Text className="snippet-tag"> Tags </Text>
          <br />
          {[tags]}
        </div>
      </Modal>
    </div>
  );
}

export default SnippetCard;
