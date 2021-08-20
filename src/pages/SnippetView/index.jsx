import React from 'react';

import { Layout } from 'antd';

import './styles.scss';
import NavBar from 'components/NavBar';
import SnippetView from 'components/SnippetView';

const { Content } = Layout;

function SnippetPage() {
  return (
    <div className="snippet-view">
      <Layout>
        <NavBar />
        <Content>
          <SnippetView />
        </Content>
      </Layout>
    </div>
  );
}

export default SnippetPage;
