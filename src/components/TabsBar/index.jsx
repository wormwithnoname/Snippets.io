import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';

import SnippetCard from 'components/SnippetCard';
import Folder from 'components/Folder';

import './styles.scss';
import { getByName } from 'model/FolderModel';
import { getByRecent } from 'model/SnippetModel';
import { useAuth } from 'hooks/useAuth';

const { TabPane } = Tabs;

function TabsBar() {
  const { currentUser } = useAuth();
  const [snippetsArr, setSnippetArr] = useState();
  const [foldersArr, setFoldersArr] = useState();

  async function fetchData() {
    try {
      const snippetsData = await getByRecent(currentUser.uid);
      const foldersData = await getByName(currentUser.uid);
      snippetsData.onSnapshot((querySnapshot) => {
        const snippets = [];
        querySnapshot.forEach((doc) => {
          snippets.push(doc.data());
        });
        setSnippetArr(snippets);
      });
      foldersData.onSnapshot((querySnapshot) => {
        const folders = [];
        querySnapshot.forEach((doc) => {
          folders.push(doc.data());
        });
        setFoldersArr(folders);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(async () => {
    fetchData();
  }, []);

  return (
    <div className="tabs">
      <Tabs className="tabs-head tabs-text" defaultActiveKey="1" centered>
        <TabPane className="tabs-text" tab="Dashboard" key="1">
          <div>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className="tabs-row">
              {snippetsArr &&
                snippetsArr.map((snippet) => (
                  <Col Span={8}>
                    <SnippetCard snippet={snippet} />
                  </Col>
                ))}
            </Row>
          </div>
        </TabPane>
        <TabPane className="tabs-text" tab="Folder" key="2">
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className="tabs-row">
            {foldersArr &&
              foldersArr.map((folder) => (
                <Col Span={8}>
                  <Folder folderObj={folder} />
                </Col>
              ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default TabsBar;
