import { db } from '../../services/FirebaseService';
import { Snippet } from '../../classes/Snippet';
import { User } from '../../classes/User';
import { UserInfo } from '../../classes/UserInfo';

export const fetchUsers = async () => {
  const doc = await db.collection('users-test').doc('user1').get();
  const user = User.from(doc.data());
  console.log(user.data());
};

export const fetchSnippets = async () => {
  const doc = await db.collection('snippets').get();
  const snippet = Snippet.from(doc.data());
  console.log(snippet);
};

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
    const snippet = Snippet.from((await db.collection('snippets-test').doc(sID).get()).data());
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
    const snippet = Snippet.from((await db.collection('snippets-test').doc(sID).get()).data());
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
    const snippet = Snippet.from((await db.collection('snippets-test').doc(sID).get()).data());
    return snippet;
  });
  console.log(viewSnippets);
  return viewSnippets;
};

// public
export const fetchUserInfo = async (uid) => {
  const data = (await db.collection('user-info-test').doc(uid).get()).data();
  console.log(UserInfo.from(data));
  return UserInfo.from(data);
};
