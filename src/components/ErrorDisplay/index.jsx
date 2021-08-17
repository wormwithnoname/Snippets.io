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
      <img src={errorlogo} alt="errorlogo" />
      <Text className="text">You don&apos;t have access to this snippet.</Text>
      <Button className="link" onClick={redirectHome}>
        Back
      </Button>
    </div>
  );
}

export default DisplayError;
