import React from 'react';

import { Layout } from 'antd';

import './styles.scss';
import NavBar from 'components/NavBar';
import Snippet from 'components/Snippet';

const { Content } = Layout;

function SnippetPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <Content>
          <Snippet />
        </Content>
      </Layout>
    </div>
  );
}

export default SnippetPage;
