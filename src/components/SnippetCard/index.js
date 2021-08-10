import React, { useState } from 'react';
import AceEditor from 'react-ace';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Card, message, Modal, Typography } from 'antd';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';

// import CardDropdown from 'components/CardDropdown';

import './styles.scss';

const { Paragraph, Text } = Typography;
const tagNames = ['Frontend', 'Web'];

const tags = tagNames.map((tagName) => (
  <Button className="tag-button" shape="round">
    {tagName}
  </Button>
));

function SnippetCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const textInput = 'Test Data';
  // replace with the data input by the user

  function onCopyText() {
    message.success('Copied!');
  }
  function showModal() {
    setIsModalVisible(true);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
    <div className="snippet-container">
      <Card onClick={showModal} actions={[tags]} className="snippet-card" title="Card Title">
        <CopyToClipboard text={textInput} onCopy={onCopyText}>
          <Text>{textInput}</Text>
        </CopyToClipboard>
      </Card>
      <Modal
        className="snippet-view"
        centered
        title="This Snippet"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AceEditor
          editorProps={{ $blockScrolling: true }}
          fontSize={14}
          mode="css"
          name="code_snippet"
          theme="monokai"
          style={{ width: '100%' }}
          value={textInput}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            readOnly: true,
          }}
        />
        <br />
        <Paragraph>
          <pre>This is the description</pre>
        </Paragraph>
        <br />
        <Text className="snippet-tag"> Tags: </Text>
        <span clasName="tagButton"> {[tags]}</span>
      </Modal>
    </div>
  );
}

export default SnippetCard;
