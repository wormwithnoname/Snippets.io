import React from 'react';

import { Layout } from 'antd';

import './styles.scss';
import NavBar from 'components/NavBar';
import ErrorDisplay from 'components/ErrorDisplay';
import { useAuth } from 'hooks/useAuth';

const { Content } = Layout;

function ErrorPage() {
  const { currentUser } = useAuth();
  if (currentUser) {
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
  return (
    <div className="error">
      <Layout>
        <Content className="error-bg">
          <ErrorDisplay />
        </Content>
      </Layout>
    </div>
  );
}

export default ErrorPage;
