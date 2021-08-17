import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Col, Row, Typography } from 'antd';
import { CloseCircleOutlined, FolderFilled } from '@ant-design/icons';

import './styles.scss';
import NavBar from 'components/NavBar';
import SnippetCard from 'components/SnippetCard';
import routes from 'constants/routes';
import { getByRecent } from 'model/SnippetModel';
import { useAuth } from 'hooks/useAuth';

const { Text } = Typography;

function OpenFolder() {
  const history = useHistory();
  const { currentUser } = useAuth();
  const [snippetsArr, setSnippetArr] = useState();

  async function fetchData() {
    try {
      const snippetsData = await getByRecent(currentUser.uid);
      snippetsData.onSnapshot((querySnapshot) => {
        const snippets = [];
        querySnapshot.forEach((doc) => {
          snippets.push(doc.data());
        });
        setSnippetArr(snippets);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(async () => {
    fetchData();
  }, []);

  async function redirectPage() {
    history.push(routes.ROOT);
  }
  return (
    <>
      <NavBar />
      <div className="open-folder">
        <div className="folder-container">
          <CloseCircleOutlined className="close-icon" onClick={redirectPage} />
          <div className="folder-content">
            <div className="folder-header">
              <FolderFilled className="folder-icon" />
              <Text className="folder-name">Folder Name</Text>
            </div>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {snippetsArr &&
                snippetsArr.map((snippet) => (
                  <Col Span={8}>
                    <SnippetCard snippet={snippet} />
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenFolder;
