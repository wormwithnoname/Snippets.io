import React from 'react';

import { Layout } from 'antd';

import NavBar from 'components/NavBar';

import TabsBar from 'components/TabsBar';

import './styles.scss';

function DashboardPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <TabsBar />
      </Layout>
    </div>
  );
}

export default DashboardPage;
