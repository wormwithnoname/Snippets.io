import React from 'react';

import { Layout } from 'antd';

import './styles.scss';
import NavBar from 'components/NavBar';
import ErrorDisplay from 'components/ErrorDisplay';

const { Content } = Layout;

function ErrorPage() {
  return (
    <div className="error">
      <Layout>
        <NavBar />
        <Content className="error-bg">
          <ErrorDisplay />
        </Content>
      </Layout>
    </div>
  );
}

export default ErrorPage;
