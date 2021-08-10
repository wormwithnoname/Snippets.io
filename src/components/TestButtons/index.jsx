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
      <Button onClick={() => SnippetAccessModel.create('snippetid1', Templates.SnippetAccess)}>
        create Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addEditor('snippetid1', 'user32')}>
        add editor to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addViewer('snippetid1', 'user32')}>
        add viewer to Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.addViewer('snippetid1', 'user33')}>
        add viewer to Snippet2
      </Button>
      <Button onClick={() => SnippetAccessModel.removeEditor('snippetid1', 'user32')}>
        remove editor from Snippet
      </Button>
      <Button onClick={async () => console.log(await SnippetAccessModel.get('snippetid1'))}>
        get snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.removeViewer('snippetid1', 'user32')}>
        remove viewer from Snippet
      </Button>
      <Button onClick={() => SnippetAccessModel.remove('snippetid1')}>remove Snippet</Button>
      <div>User Info</div>
      <br />
      <Button onClick={() => UserInfoModel.create('userid1', Templates.UserInfo)}>
        Create user info
      </Button>
      <Button onClick={() => UserInfoModel.remove('userid1')}>Remove user info</Button>
      <Button onClick={() => UserInfoModel.update({ displayName: 'Jan Doe' }, 'userid1')}>
        Update user info
      </Button>
      <Button onClick={async () => console.log(await UserInfoModel.get('userid1'))}>
        Get user info
      </Button>
      <div>User</div>
      <br />
      <Button onClick={() => UserModel.create('userid1', Templates.User)}>Create user</Button>
      <Button onClick={() => UserModel.update({ id: 'trolololol' }, 'userid1')}>Update user</Button>
      <Button onClick={() => UserModel.remove('userid1')}>Remove user</Button>
      <Button onClick={async () => console.log(await UserModel.get('userid1'))}>get user</Button>
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
      <Button onClick={() => SnippetModel.create('snippetid3', Templates.Snippet)}>
        create snippet
      </Button>
      <Button onClick={async () => console.log(await SnippetModel.get('snippetid3'))}>
        get snippet
      </Button>
      <Button onClick={async () => console.log(await SnippetModel.getByIDs(['snippetid3']))}>
        get snippets
      </Button>
      <Button onClick={async () => console.log(await SnippetModel.getAll())}>
        get all snippets
      </Button>
      <Button onClick={() => SnippetModel.update({ title: 'snippet lolol' }, 'snippetid3')}>
        update snippet
      </Button>
      <Button onClick={() => SnippetModel.remove('snippetid3')}>remove snippet</Button>
      <Button onClick={() => SnippetModel.addTag('snippetid3', 'data structuresasdf')}>
        add tags
      </Button>
      <Button onClick={() => SnippetModel.removeTag('snippetid3', 'data structuresasdf')}>
        remove tag
      </Button>
      <Button onClick={() => SnippetModel.addCode('snippetid3', 'python', 'list.sort()')}>
        add code
      </Button>
      <Button onClick={() => SnippetModel.addCode('snippetid3', 'cpp', 'cpcodepadsfadf ')}>
        add code cpp
      </Button>
      <Button onClick={() => SnippetModel.removeCode('snippetid3', 'python')}>remove code</Button>
      <Button onClick={() => SnippetModel.removeCode('snippetid3', 'cpp')}>remove code cpp</Button>
    </Grid>
  );
}
export default TestButtons;
