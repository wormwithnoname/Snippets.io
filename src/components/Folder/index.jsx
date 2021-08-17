import React from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from 'antd';
import { FolderOutlined } from '@ant-design/icons';

import './styles.scss';
import routes from 'constants/routes';

const { Text } = Typography;

function Folder({ folderObj }) {
  const history = useHistory();

  async function redirectPage() {
    history.push(routes.FOLDER, folderObj);
  }
  return (
    <div className="folder">
      <FolderOutlined className="folderIcon" onClick={redirectPage} />
      <Text className="folderName">{folderObj.folderName}</Text>
    </div>
  );
}

export default Folder;
