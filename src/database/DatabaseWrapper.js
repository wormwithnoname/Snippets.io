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

export const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
  return users;
};

export const getUserInfo = async (uid) => {
  const userInfo = await fetchUserInfo(uid);
  console.log(userInfo);
  return userInfo;
};
