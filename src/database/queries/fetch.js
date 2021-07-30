import { db } from '../../services/FirebaseService';
import { Snippet } from '../../classes/Snippet';
// import { User } from '../../classes/User';
import { UserInfo } from '../../classes/UserInfo';

const Users = db.collection('user-test');
const Snippets = db.collection('snippets-test');
const UserInfos = db.collection('user-info-test');

// Admin fetch all
export const fetchUsers = async () => Users.get();
// Users.get().then((users) => users.map((u) => User.from(u)));

export const fetchSnippets = async () => Snippets.get();

// User Data-related
export const fetchOwnedSnippetIDs = async (uid) =>
  (await Users.doc(uid).get()).get('ownedSnippetIDs');

export const fetchOwnedSnippets = async (snippetIDs) =>
  snippetIDs.map(async (sID) => Snippet.from((await Snippets.doc(sID).get()).data()));

export const fetchEditSnippetIDs = async (uid) =>
  (await Users.doc(uid).get()).get('editSnippetIDs');

export const fetchEditSnippets = async (snippetIDs) =>
  snippetIDs.map(async (sID) => Snippet.from((await Snippets.doc(sID).get()).data()));

export const fetchViewSnippetIDs = async (uid) =>
  (await Users.doc(uid).get()).get('viewSnippetIDs');

export const fetchViewSnippets = async (snippetIDs) =>
  snippetIDs.map(async (sID) => Snippet.from((await Snippets.doc(sID).get()).data()));

// public
export const fetchUserInfo = async (uid) => {
  const data = (await UserInfos.doc(uid).get()).data();
  return UserInfo.from(data);
};
