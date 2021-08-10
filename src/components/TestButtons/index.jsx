import React from 'react';

import { Button } from 'antd';

import Grid from 'antd/lib/card/Grid';
import './styles.scss';
import SnippetAccessModel from '../../model/SnippetAccessModel';
import SnippetModel from '../../model/SnippetModel';
import UserInfoModel from '../../model/UserInfoModel';
import UserModel from '../../model/UserModel';
import Templates from '../../model/Objects/templates';

function TestButtons() {
  return (
    <Grid>
      <div>Snippet Access</div>
      <br />
      <Button
        onClick={() =>
          SnippetAccessModel.createSnippetAccess('snippetid1', Templates.SnippetAccess)
        }
      >
        create Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addEditorAccess('snippetid1', 'user32')}>
        add editor to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addViewerAccess('snippetid1', 'user32')}>
        add viewer to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addViewerAccess('snippetid1', 'user33')}>
        add viewer to Snippet2
      </Button>
      <Button onClick={() => SnippetAccessModel.removeEditorAccess('snippetid1', 'user32')}>
        remove editor from Snippet
      </Button>
      <Button
        onClick={async () => console.log(await SnippetAccessModel.getSnippetAccess('snippetid1'))}
      >
        get snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.removeViewerAccess('snippetid1', 'user32')}>
        remove viewer from Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.removeSnippetAccess('snippetid1')}>
        remove Snippet
      </Button>
      <div>User Info</div>
      <br />
      <Button onClick={() => UserInfoModel.createUserInfo('userid1', Templates.UserInfo)}>
        Create user info
      </Button>
      <Button onClick={() => UserInfoModel.removeUserInfo('userid1')}>Remove user info</Button>
      <Button onClick={() => UserInfoModel.updateUserInfo({ displayName: 'Jan Doe' }, 'userid1')}>
        Update user info
      </Button>
      <Button onClick={async () => console.log(await UserInfoModel.getUserInfo('userid1'))}>
        Get user info
      </Button>
      <div>User</div>
      <br />
      <Button onClick={() => UserModel.createUser('userid1', Templates.User)}>Create user</Button>
      <Button onClick={() => UserModel.updateUser({ id: 'trolololol' }, 'userid1')}>
        Update user
      </Button>
      <Button onClick={() => UserModel.removeUser('userid1')}>Remove user</Button>
      <Button onClick={async () => console.log(await UserModel.getUser('userid1'))}>
        get user
      </Button>
      <Button onClick={() => UserModel.addOwnedSnippetId('userid1', 'snippetid3')}>
        add owned snippet id
      </Button>
      <Button onClick={() => UserModel.addEditableSnippetId('userid1', 'snippetid3')}>
        aadd editable snippet id
      </Button>
      <Button onClick={() => UserModel.addViewableSnippetId('userid1', 'snippetid3')}>
        add viewable snippet id
      </Button>
      <Button onClick={() => UserModel.removeOwnedSnippetId('userid1', 'snippetid3')}>
        remove owned snippet id
      </Button>
      <Button onClick={() => UserModel.removeEditableSnippetId('userid1', 'snippetid3')}>
        remove editable snippet id
      </Button>
      <Button onClick={() => UserModel.removeViewableSnippetId('userid1', 'snippetid3')}>
        remove viewable snippet id
      </Button>

      <div>Snippets</div>
      <br />
      <Button onClick={() => SnippetModel.createSnippet('snippetid3', Templates.Snippet)}>
        create snippet
      </Button>
      <Button onClick={async () => console.log(await SnippetModel.getSnippet('snippetid3'))}>
        get snippet
      </Button>
      <Button
        onClick={async () => console.log(await SnippetModel.getSnippetsByIds(['snippetid3']))}
      >
        get snippets
      </Button>
      <Button onClick={async () => console.log(await SnippetModel.getAllSnippets())}>
        get all snippets
      </Button>
      <Button onClick={() => SnippetModel.updateSnippet({ title: 'snippet lolol' }, 'snippetid3')}>
        update snippet
      </Button>
      <Button onClick={() => SnippetModel.removeSnippet('snippetid3')}>remove snippet</Button>
      <Button onClick={() => SnippetModel.addSnippetTag('snippetid3', 'data structuresasdf')}>
        add tags
      </Button>
      <Button onClick={() => SnippetModel.removeSnippetTag('snippetid3', 'data structuresasdf')}>
        remove tag
      </Button>
      <Button onClick={() => SnippetModel.addSnippetCode('snippetid3', 'python', 'list.sort()')}>
        add code
      </Button>
      <Button onClick={() => SnippetModel.addSnippetCode('snippetid3', 'cpp', 'cpcodepadsfadf ')}>
        add code cpp
      </Button>
      <Button onClick={() => SnippetModel.removeSnippetCode('snippetid3', 'python')}>
        remove code
      </Button>
      <Button onClick={() => SnippetModel.removeSnippetsCode('snippetid3', 'cpp')}>
        remove code cpp
      </Button>
    </Grid>
  );
}
export default TestButtons;
