import React from 'react';

import { Button } from 'antd';

import Grid from 'antd/lib/card/Grid';
import './styles.scss';
// import SnippetAccessModel from '../../model/SnippetAccessModel';
// import SnippetModel from '../../model/SnippetModel';
// import UserInfoModel from '../../model/UserInfoModel';
import Templates from '../../model/Objects/templates';
import { createUser, removeUser } from '../../model/UserModel';
import { updateUserInfo, getUserInfo } from '../../model/UserInfoModel';
import {
  createSnippet,
  addSnippetTag,
  removeSnippetTag,
  addSnippetCode,
  removeSnippetCode,
  removeSnippet,
  getSnippetsByIds,
  getSnippetsByRecent,
  getSnippet,
} from '../../model/SnippetModel';
import {
  addEditorAccess,
  addViewerAccess,
  removeEditorAccess,
  removeViewerAccess,
} from '../../model/SnippetAccessModel';

const userId = `'uid147dd1dfaUa97a'`;
const snippetId = `'snippet31780sdaf'`;
const user2Id = `'uid981547dd1df314851'`;
const userObject = {
  ...Templates.User,
  id: userId,
};
const userInfoObject = {
  ...Templates.UserInfo,
  id: userId,
  displayName: `'Cardio Dalisay'`,
  userName: `'cardioDalisay#124'`,
};
const user2Object = {
  ...Templates.User,
  id: user2Id,
};
const user2InfoObject = {
  ...Templates.UserInfo,
  id: user2Id,
  displayName: `'John Delacroix'`,
  userName: `'johndela#224'`,
};
const tag1 = `'data structures'`;
const language1 = `'Python'`;
const body1 = `'list.sort()'`;
const user1SnippetIds = [snippetId];

function TestButtons() {
  return (
    <Grid>
      <div>Functions the user will actually use</div>
      <div>User related</div>
      <br />
      <Button onClick={() => createUser(userId, userObject, userInfoObject)}>
        Create/Sign up user
      </Button>
      <Button onClick={() => createUser(user2Id, user2Object, user2InfoObject)}>
        Create/Sign up user2
      </Button>
      <Button onClick={() => updateUserInfo(userId, userInfoObject)}>Update User info</Button>
      <Button onClick={() => removeUser(userId)}>Remove user</Button>
      <Button
        onClick={async () => {
          console.log(await getUserInfo(userId));
        }}
      >
        Get UserInfo
      </Button>
      <div>Snippets related</div>
      <br />
      <Button onClick={() => createSnippet(userId, snippetId, Templates.Snippet)}>
        Create Snippet
      </Button>
      <Button
        onClick={async () => {
          console.log(await getSnippet(snippetId));
        }}
      >
        Get snippet
      </Button>
      <Button
        onClick={async () => {
          console.log(await getSnippetsByIds(user1SnippetIds));
        }}
      >
        Get snippets of user given ids
      </Button>
      <Button
        onClick={async () => {
          console.log(await getSnippetsByRecent(user1SnippetIds));
        }}
      >
        Get snippets of user given ids sorted in recent
      </Button>
      <Button onClick={() => addViewerAccess(snippetId, user2Id)}>
        Add viewer access to user2
      </Button>
      <Button onClick={() => removeViewerAccess(snippetId, user2Id)}>
        Remove viewer access for user2
      </Button>
      <Button onClick={() => addEditorAccess(snippetId, user2Id)}>
        Add editor access to user2
      </Button>
      <Button onClick={() => removeEditorAccess(snippetId, user2Id)}>
        Remove editor access for user2
      </Button>
      <Button onClick={() => addSnippetTag(snippetId, tag1)}>add snippet tag</Button>
      <Button onClick={() => removeSnippetTag(snippetId, tag1)}>Remove snippet tag</Button>
      <Button onClick={() => addSnippetCode(snippetId, language1, body1)}>
        Add snippet code snippet
      </Button>
      <Button onClick={() => removeSnippetCode(snippetId, language1)}>
        Remove snippet code snippet
      </Button>
      <Button onClick={() => removeSnippet(snippetId)}>Delete snippet</Button>
    </Grid>
  );
}
export default TestButtons;
