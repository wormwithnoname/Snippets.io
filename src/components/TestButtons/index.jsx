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
      <Button onClick={() => SnippetAccessModel.create(['snippetid1', Templates.SnippetAccess])}>
        create Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addEditor('snippetid1', 'user32')}>
        add editor to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addViewer('snippetid1', 'user32')}>
        add viewer to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.removeEditor('snippetid1', 'user32')}>
        remove editor from Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.removeViewer('snippetid1', 'user32')}>
        remove viewer from Snippet
      </Button>
      UserInfo
      <Button onClick={() => UserInfoModel.create(['userid1', Templates.UserInfo])}>
        Create user info
      </Button>
      <Button onClick={() => UserInfoModel.remove('userid1')}>Remove user info</Button>
      <Button
        onClick={() =>
          UserInfoModel.update(
            ['userid1', { ...Templates.UserInfo, displayName: 'Jan Doe' }],
            'userid1',
          )
        }
      >
        Update user info
      </Button>
      <Button onClick={() => console.log(UserInfoModel.get('userid1'))}>Get user info</Button>
      User
      <Button onClick={() => UserModel.create(['userid1', Templates.User])}>Create user</Button>
      <Button
        onClick={() =>
          UserModel.update(['userid1', { ...Templates.User, id: 'trolololol' }], 'userid1')
        }
      >
        Update user
      </Button>
      <Button onClick={() => UserModel.remove('userid1')}>Remove user</Button>
      <Button onClick={() => console.log(UserModel.get('userid1'))}>get user</Button>
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
      Snippets
      <Button onClick={() => SnippetModel.create(['snippetid3', Templates.Snippet])}>
        create snippet
      </Button>
      <Button
        onClick={() =>
          SnippetModel.update(
            ['snippetid3', { ...Templates.Snippet, title: 'snippet lolol' }],
            'snippetid3',
          )
        }
      >
        update snippet
      </Button>
      <Button onClick={() => SnippetModel.getByIDs(['snippetid1'])}>get snippets by id</Button>
      <Button onClick={() => SnippetModel.remove('snippetid1')}>remove snippet</Button>
      <Button onClick={() => SnippetModel.addTag('snippetid3', 'data structures')}>add tags</Button>
      <Button onClick={() => SnippetModel.removeTag('userid1', 'data structures')}>
        remove tag
      </Button>
      <Button onClick={() => SnippetModel.addCode('snippetid3', 'python', 'list.sort()')}>
        add code
      </Button>
      <Button onClick={() => SnippetModel.removeCode('snippetid3', 'python3')}>remove code</Button>
    </Grid>
  );
}
export default TestButtons;
