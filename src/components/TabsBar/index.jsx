import React from 'react';

import { Col, Row, Tabs } from 'antd';

import SnippetCard from 'components/SnippetCard';

import './styles.scss';

const { TabPane } = Tabs;

function TabsBar() {
  return (
    <div className="tabs">
      <Tabs className="tabs-head tabs-text" defaultActiveKey="1" centered>
        <TabPane className="tabs-text" tab="Dashboard" key="1">
          <div>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className="tabs-row">
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
              <Col Span={8}>
                <SnippetCard />
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane className="tabs-text" tab="Folder" key="2">
          <Row>
            <Col Span={8}>
              <SnippetCard />
            </Col>
          </Row>
        </TabPane>
        <TabPane className="tabs-text" tab="Tags" key="3" />
      </Tabs>
    </div>
  );
}
export default TabsBar;
