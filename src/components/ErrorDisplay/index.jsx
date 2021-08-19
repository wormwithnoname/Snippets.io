import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Typography } from 'antd';

import './styles.scss';

import errorlogo from 'assets/img/jett.png';

import routes from 'constants/routes';

const { Text } = Typography;

function DisplayError() {
  const history = useHistory();
  function redirectHome() {
    history.push(routes.ROOT);
  }
  return (
    <div className="layout">
      <div className="image-container">
        <img alt="errorlogo" className="error-pic" src={errorlogo} />
      </div>
      <Text className="text">
        Oops! Sorry, this doesn&apos;t exist
        <br />
        or you don&apos;t have access.
      </Text>
      <Button className="link" onClick={redirectHome}>
        Back
      </Button>
    </div>
  );
}

export default DisplayError;
