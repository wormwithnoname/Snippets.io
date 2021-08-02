import React from 'react';

import { Layout } from 'antd';

import NavBar from 'components/NavBar';
import TabsBar from 'components/TabsBar';
import AddButton from 'components/AddButton';

import './styles.scss';

const { Content } = Layout;

function DashboardPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <Content>
          <TabsBar />
        </Content>
      </Layout>
      <AddButton />
    </div>
  );
}

export default DashboardPage;
