import React from 'react';

import { Space } from 'antd';

import Dashboard from 'components/Dashboard';

import './styles.scss';

function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="dashboard-page">
        <Space align="center" direction="vertical" size="large">
          <Dashboard />
        </Space>
      </div>
    </div>
  );
}

export default DashboardPage;
