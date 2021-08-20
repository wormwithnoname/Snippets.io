/* eslint-disable dot-notation */
import React, { useEffect, useState } from 'react';

import AceEditor from 'react-ace';

import { Button, Card, Divider, Form, Input, Select, Space } from 'antd';

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

import { getByID, updateSnippet } from 'model/SnippetModel';
import routes from 'constants/routes';
import { useAuth } from 'hooks/useAuth';
import { useHistory, useParams } from 'react-router-dom';

import './styles.scss';

const { Option } = Select;
const { TextArea } = Input;

function Snippet() {
  const { currentUser } = useAuth();
  const [descriptionText, setDescriptionText] = useState('');
  const [language, setLanguage] = useState('');
  const [snippetText, setSnippetText] = useState('');
  const [tags, setTags] = useState();
  const [titleText, setTitleText] = useState('');
  const history = useHistory();
  const { id } = useParams();

  async function fetchData() {
    await getByID(id).then((fetchedData) => {
      setTitleText(fetchedData['title']);
      setDescriptionText(fetchedData['description']);
      setLanguage(fetchedData['language']);
      setSnippetText(fetchedData['body']);
      setTags(fetchedData['tags']);
    });
  }
  useEffect(async () => {
    fetchData();
  }, []);

  async function addSnippet() {
    try {
      const storeTags = [];
      await tags.forEach((tag) => {
        storeTags.push(tag.toLocaleUpperCase());
      });
      const newSnippet = {
        title: titleText,
        searchTitle: titleText.toLowerCase(),
        description: descriptionText,
        ownerID: currentUser.uid,
        tags,
        body: snippetText,
        language,
      };
      await updateSnippet({ ...newSnippet }, id);
      history.push(routes.ROOT);
    } catch (error) {
      console.log(error.message);
    }
  }

  function onChangeLanguage(fieldValue) {
    setLanguage(fieldValue);
  }

  function onChangeSnippet(fieldValue) {
    setSnippetText(fieldValue);
  }

  function onChangeTags(fieldValue) {
    setTags(fieldValue);
  }

  function onChangeText(fieldValue) {
    switch (fieldValue.target.name) {
      case 'title':
        setTitleText(fieldValue.target.value);
        break;
      case 'description':
        setDescriptionText(fieldValue.target.value);
        break;
      default:
    }
  }

  function onCancel() {
    history.push(routes.ROOT);
  }

  return (
    <div className="form-page">
      <Card className="add-snippet-card">
        <div className="add-snippet-form">
          <Form size="large">
            <Input
              className="ant-input"
              name="title"
              onChange={onChangeText}
              placeholder="Title"
              value={titleText}
            />
          </Form>
          <Divider />
          <div className="editor">
            <Select
              className="ant-select"
              onChange={onChangeLanguage}
              placeholder="Select Language"
              showSearch
              value={language}
            >
              <Option value="c_cpp">C/C++</Option>
              <Option value="c#">C#</Option>
              <Option value="css">CSS</Option>
              <Option value="dart">Dart</Option>
              <Option value="html">HTML</Option>
              <Option value="java">Java</Option>
              <Option value="javascript">Javascript</Option>
              <Option value="json">JSON</Option>
              <Option value="php">PHP</Option>
              <Option value="python">Python</Option>
              <Option value="typescript">Typescript</Option>
            </Select>
            <br />
            <br />
            <Card className="ace-editor-card">
              <AceEditor
                editorProps={{ $blockScrolling: true }}
                fontSize={18}
                mode={language}
                name="code_snippet"
                placeholder="Type your code snippet here"
                theme="monokai"
                onChange={onChangeSnippet}
                onPaste={onChangeSnippet}
                showPrintMargin={false}
                style={{ border: 'none', width: '100%' }}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
                value={snippetText}
              />
            </Card>
          </div>
          <br />
          <br />
          <TextArea
            autoSize={{ minRows: 5, maxRows: 5 }}
            className="ant-input ant-select-selector"
            name="description"
            onChange={onChangeText}
            placeholder="Type description"
            value={descriptionText}
          />
          <br />
          <br />
          <Select
            autoFocus="true"
            className="form-tags"
            maxTagCount="responsive"
            mode="tags"
            onChange={onChangeTags}
            placeholder="Add #TAG"
            size="middle"
            value={tags}
          />
          <br />
          <br />
          <Space>
            <Button className="ant-btn" onClick={addSnippet} size="large" type="primary">
              Save Changes
            </Button>
            <Button className="ant-btn" onClick={onCancel} size="large" type="primary">
              Cancel
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default Snippet;
