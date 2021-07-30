import { db } from '../../services/FirebaseService';

const Users = db.collection('user-test');
const Snippets = db.collection('snippets-test');
const UserInfos = db.collection('user-info-test');

export const createUser = async (user) => Users.doc(user.uid).set(user);

export const createSnippet = async (snippet) => Snippets.doc(snippet.snippetID).set(snippet);

export const createUserInfo = async (userInfo) => UserInfos.doc(userInfo.uid).set(userInfo);
