import React, { useState } from 'react';
import AceEditor from 'react-ace';

import { Select } from 'antd';

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

import './styles.scss';

const { Option } = Select;

function Editor() {
  const [isLanguage, setIsLanguage] = useState('');

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  function onLanguageChange(value) {
    setIsLanguage(value);
    console.log(`selected ${value}`);
  }
  return (
    <div className="editor">
      <Select
        className="ant-select"
        bordered={false}
        onChange={onLanguageChange}
        optionFilterProp="children"
        placeholder="Select Language"
        showSearch
      >
        <Option value="c">C/C++</Option>
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
      <AceEditor
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        mode={isLanguage}
        name="code_snippet"
        placeholder="Type your code snippet here"
        theme="monokai"
        onChange={onChange}
        style={{ width: '100%' }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default Editor;
