import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';

import SnippetCard from 'components/SnippetCard';

import './styles.scss';
import { getByRecent } from 'model/SnippetModel';
import { useAuth } from 'hooks/useAuth';

const { TabPane } = Tabs;

function TabsBar() {
  const { currentUser } = useAuth();
  const [snippetsArr, setSnippetArr] = useState();

  async function fetchData() {
    const data = await getByRecent(currentUser.uid);
    data.onSnapshot((querySnapshot) => {
      const snippets = [];
      querySnapshot.forEach((doc) => {
        snippets.push(doc.data());
      });
      setSnippetArr(snippets);
    });
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
          <Row>
            <Col Span={8} />
          </Row>
        </TabPane>
        <TabPane className="tabs-text" tab="Tags" key="3" />
      </Tabs>
    </div>
  );
}
export default TabsBar;
