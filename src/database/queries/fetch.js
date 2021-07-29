import { db } from '../../services/FirebaseService';
import { Snippet } from '../../classes/Snippet';
import { User } from '../../classes/User';
import { UserInfo } from '../../classes/UserInfo';

const users = db.collection('users-test');
const snippets = db.collection('snippets-test');
const userInfo = db.collection('user-info-test');

// Admin fetch all
export const fetchUsers = async () =>
  users
    .get()
    .then()
    .map((user) => User.from(user));

export const fetchSnippets = async () =>
  snippets
    .get()
    .then()
    .map((snip) => Snippet.from(snip));

// User Data-related
export const fetchOwnedSnippetIDs = async (uid) => {
  const ownedSnippetIDs = await (
    await db.collection('user-test').doc(uid).get()
  ).get('ownedSnippetIDs');
  console.log('snippetids');
  console.log(ownedSnippetIDs);
  return ownedSnippetIDs;
};

export const fetchOwnedSnippets = async (snippetIDs) => {
  const ownedSnippets = snippetIDs.map(async (sID) => {
    const snippet = Snippet.from((await snippets.doc(sID).get()).data());
    return snippet;
  });
  console.log(ownedSnippets);
  return ownedSnippets;
};

export const fetchEditSnippetIDs = async (uid) => {
  const editSnippetIDs = await (
    await db.collection('user-test').doc(uid).get()
  ).get('editSnippetIDs');
  console.log('snippetids');
  console.log(editSnippetIDs);
  return editSnippetIDs;
};

export const fetchEditSnippets = async (snippetIDs) => {
  const editSnippets = snippetIDs.map(async (sID) => {
    const snippet = Snippet.from((await snippets.doc(sID).get()).data());
    return snippet;
  });
  console.log(editSnippets);
  return editSnippets;
};

export const fetchViewSnippetIDs = async (uid) => {
  const viewSnippetIDs = await (
    await db.collection('user-test').doc(uid).get()
  ).get('viewSnippetIDs');
  console.log('snippetids');
  console.log(viewSnippetIDs);
  return viewSnippetIDs;
};

export const fetchViewSnippets = async (snippetIDs) => {
  const viewSnippets = snippetIDs.map(async (sID) => {
    const snippet = Snippet.from((await snippets.doc(sID).get()).data());
    return snippet;
  });
  console.log(viewSnippets);
  return viewSnippets;
};

// public
export const fetchUserInfo = async (uid) => {
  const data = (await userInfo.doc(uid).get()).data();
  console.log(UserInfo.from(data));
  return UserInfo.from(data);
};
