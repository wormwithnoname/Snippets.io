import React from 'react';

import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import './styles.scss';
import routes from 'constants/routes';
import { useHistory } from 'react-router-dom';

function AddButton() {
  const history = useHistory();
  async function redirectPage() {
    history.push(routes.ADDSNIPPET);
  }

  return (
    <>
      <div className="add-button">
        <Button
          className="dashboard-add-button"
          icon={<PlusCircleFilled />}
          size="large"
          shape="round"
          onClick={redirectPage}
        />
      </div>
    </>
  );
}

export default AddButton;
