import React from 'react';

import { Button, Layout } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

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
      <Button
        className="dashboard-add-button"
        icon={<PlusCircleFilled />}
        size="large"
        shape="round"
      />
    </div>
  );
}

export default DashboardPage;
