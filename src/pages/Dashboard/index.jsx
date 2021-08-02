import React from 'react';

import { Layout } from 'antd';

import NavBar from 'components/NavBar';
import TabsBar from 'components/TabsBar';
import AddButton from 'components/AddButton';
import SnippetCard from 'components/SnippetCard';

import './styles.scss';

function DashboardPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <TabsBar />
        <SnippetCard />
      </Layout>
      <AddButton />
    </div>
  );
}

export default DashboardPage;
