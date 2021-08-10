import React from 'react';

import { Button, Layout } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import AddFolderButton from 'components/AddFolderButton';
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
      <div className="dashboard-buttons">
        <Button
          className="dashboard-add-button"
          icon={<PlusCircleFilled />}
          size="large"
          shape="round"
        />
        <AddFolderButton />
      </div>
    </div>
  );
}

export default DashboardPage;
