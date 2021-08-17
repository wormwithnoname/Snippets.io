import React from 'react';

import { Layout } from 'antd';

// import './styles.scss';
import NavBar from 'components/NavBar';
import ErrorDisplay from 'components/ErrorDisplay';

const { Content } = Layout;

function ErrorPage() {
  return (
    <div className="add-snippet">
      <Layout>
        <NavBar />
        <Content>
          <ErrorDisplay />
        </Content>
      </Layout>
    </div>
  );
}

export default ErrorPage;
