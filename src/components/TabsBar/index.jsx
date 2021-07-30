import React from 'react';

import { Tabs } from 'antd';

import './styles.scss';

const { TabPane } = Tabs;

function TabsBar() {
  return (
    <div className="dashboard">
      <Tabs className="dashboard-text" defaultActiveKey="1" centered>
        <TabPane className="dashboard-text" tab="Dashboard" key="1" />
        <TabPane className="dashboard-text" tab="Folder" key="2" />
        <TabPane className="dashboard-text" tab="Tags" key="3" />
      </Tabs>
    </div>
  );
}
export default TabsBar;
