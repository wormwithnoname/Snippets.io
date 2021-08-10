import React from 'react';

import { Layout } from 'antd';

import './styles.scss';
import NavBar from 'components/NavBar';
import AddSnippet from 'components/AddSnippet';

const { Content } = Layout;

function AddSnippetPage() {
  return (
    <div className="dashboard">
      <Layout>
        <NavBar />
        <Content>
          <AddSnippet />
        </Content>
      </Layout>
    </div>
  );
}

export default AddSnippetPage;
