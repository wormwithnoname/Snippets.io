import { strict as assert } from 'assert';
import { v4 as genKey } from 'uuid';
import { createUser, createUserInfo, createSnippet } from './queries/create';
import {
  fetchOwnedSnippetIDs,
  fetchOwnedSnippets,
  fetchViewSnippetIDs,
  fetchViewSnippets,
  fetchUserInfo,
  fetchUsers,
  fetchEditSnippetIDs,
  fetchEditSnippets,
  fetchSnippets,
} from './queries/fetch';

export const getAllSnippets = async () => {
  const snippets = fetchSnippets();
  console.log(snippets);
};
export const getAllUsers = async () => {
  const users = fetchUsers();
  console.log(users);
};

export const getOwnedSnippets = async (uid) => {
  const snippetIDs = await fetchOwnedSnippetIDs(uid);
  const ownedSnippets = await fetchOwnedSnippets(snippetIDs);
  console.log(ownedSnippets);

  return ownedSnippets;
};

export const getViewSnippets = async (uid) => {
  const snippetIDs = await fetchViewSnippetIDs(uid);
  const viewSnippets = await fetchViewSnippets(snippetIDs);
  console.log(viewSnippets);
  return viewSnippets;
};
export const getEditSnippets = async (uid) => {
  const snippetIDs = await fetchEditSnippetIDs(uid);
  const editSnippets = await fetchEditSnippets(snippetIDs);
  console.log(editSnippets);
  return editSnippets;
};

export const getUserInfo = async (uid) => {
  const userInfo = await fetchUserInfo(uid);
  console.log(userInfo);
  return userInfo;
};

export const createNewUser = async (uid, displayName, userName, photoID) => {
  assert.equal(typeof uid, 'string', 'Type Error: uid is not string');
  assert.equal(typeof displayName, 'string', 'Type Error: displayName is not string');
  assert.equal(typeof userName, 'string', 'Type Error: Uid is not string');
  assert.strictEqual(typeof photoID, 'number', 'Type Error: photoID is not number');

  const userJson = {
    editSnippetIDs: [],
    ownedSnippetIDs: [],
    uid: `${uid}`,
    viewSnippetIDs: [],
  };

  const userInfoJson = {
    displayName: `${displayName}`,
    photoID: `${photoID}`,
    uid: `${uid}`,
    userName: `${userName}`,
  };

  await createUser(userJson);
  await createUserInfo(userInfoJson);
};

export const createNewSnippet = async (title, ownerID, language, body) => {
  assert.equal(typeof title, 'string', 'Type Error: title is not string');
  assert.equal(typeof ownerID, 'string', 'Type Error: ownerID is not string');
  assert.equal(typeof language, 'string', 'Type Error: language is not string');
  assert.equal(typeof body, 'string', 'Type Error: body is not string');

  const snippetJson = {
    allowedEditors: [],
    allowedViewers: [],
    content: [{ language: `${language}`, body: `${body}` }],
    description: '',
    folder: '',
    ownerID: `${ownerID}`,
    snippetID: `snippet-${genKey()}`,
    tags: [],
    title: `${title}`,
  };

  await createSnippet(snippetJson);
};
