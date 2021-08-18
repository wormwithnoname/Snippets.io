import React from 'react';

import { Layout } from 'antd';

import './styles.scss';

import NavBar from 'components/NavBar';
import DisplaySearch from 'components/SearchDisplay';
// import SnippetCard from 'components/SnippetCard';

const { Content } = Layout;

function SearchResultsPage() {
  return (
    <div className="search">
      <Layout>
        <NavBar />
        <Content className="search-bg">
          <DisplaySearch />
        </Content>
        {/* <SnippetCard /> */}
      </Layout>
    </div>
  );
}

export default SearchResultsPage;
