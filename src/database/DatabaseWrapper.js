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

export const getAllSnippets = async () => fetchSnippets();
export const getAllUsers = async () => fetchUsers();

export const getOwnedSnippets = async (uid) => {
  const snippetIDs = await fetchOwnedSnippetIDs(uid);
  const ownedSnippets = await fetchOwnedSnippets(snippetIDs);
  return ownedSnippets;
};

export const getViewSnippets = async (uid) => {
  const snippetIDs = await fetchViewSnippetIDs(uid);
  const ownedSnippets = await fetchViewSnippets(snippetIDs);
  return ownedSnippets;
};
export const getEditSnippets = async (uid) => {
  const snippetIDs = await fetchEditSnippetIDs(uid);
  const ownedSnippets = await fetchEditSnippets(snippetIDs);
  return ownedSnippets;
};

export const getUsers = async () => {
  console.log('lol');
  const res = await fetchUsers();
  return res;
};

export const getUserInfo = async (uid) => {
  console.log('lol');
  const res = await fetchUserInfo(uid);
  return res;
};
