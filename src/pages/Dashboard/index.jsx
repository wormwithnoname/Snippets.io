import React from 'react';

import AddFolderButton from 'components/AddFolderButton';
import NavBar from 'components/NavBar';
import TabsBar from 'components/TabsBar';

import './styles.scss';
import Layout from 'antd/lib/layout/layout';
import AddButton from 'components/AddButton';
import { Space } from 'antd';

function DashboardPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <TabsBar />
      </Layout>
      <div className="dashboard-buttons">
        <Space>
          <AddButton />
          <AddFolderButton />
        </Space>
      </div>
    </div>
  );
}

export default DashboardPage;
