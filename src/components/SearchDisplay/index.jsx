import React, { useEffect, useState } from 'react';

import { Col, message, Row, Spin, Typography } from 'antd';

import './styles.scss';
import { useLocation } from 'react-router-dom';
import { findSnippets } from 'model/SnippetModel';
import SnippetCard from 'components/SnippetCard';
import { useAuth } from 'hooks/useAuth';

const { Text } = Typography;

function DisplaySearch() {
  const { currentUser } = useAuth();
  const location = useLocation();
  const [isFetchingResults, setIsFetchingResults] = useState(true);
  const [searchResults, setSearchResults] = useState();
  const [noResults, setNoResults] = useState(false);

  async function fetchSearchResults() {
    try {
      const keyword = location.state.toLocaleUpperCase();
      const results = await findSnippets(keyword, currentUser.uid);
      results.onSnapshot((querySnapshot) => {
        const snippets = [];
        querySnapshot.forEach((doc) => {
          snippets.push(doc.data());
        });
        setSearchResults(snippets);
      });
      setIsFetchingResults(false);
    } catch (error) {
      setNoResults(true);
      setIsFetchingResults(false);
      message.error('No search results retrieved');
    }
  }

  useEffect(async () => {
    fetchSearchResults();
  }, []);

  if (isFetchingResults) {
    return (
      <div>
        <Spin className="spinner-div" />
      </div>
    );
  }

  return (
    <div className="tabs">
      <div className="search-results">
        <Text className="search-text">Search results:</Text>
      </div>
      {noResults ? (
        <div className="search-results">
          <Text className="result-text">None found :(</Text>
        </div>
      ) : null}
      <div>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className="tabs-row">
          {searchResults &&
            searchResults.map((snippet) => (
              <Col Span={8}>
                <SnippetCard snippet={snippet} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default DisplaySearch;
