import React from 'react';

import { Typography } from 'antd';
import { FolderOutlined } from '@ant-design/icons';

import './styles.scss';

const { Text } = Typography;

function Folder({ folderObj }) {
  return (
    <div className="folder">
      <FolderOutlined className="folderIcon" />
      <Text className="folderName">{folderObj.folderName}</Text>
    </div>
  );
}

export default Folder;
