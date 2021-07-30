import firebase from 'firebase';
import { db } from '../../services/FirebaseService';

const Users = db.collection('user-test');
const Snippets = db.collection('snippets-test');
const UserInfos = db.collection('user-info-test');

export const updateUser = async (user) => Users.doc(user.uid).set(user);

export const updateSnippet = async (snippet) => Snippets.doc(snippet.snippetID).set(snippet);

export const updateUserInfo = async (userInfo) => UserInfos.doc(userInfo.uid).set(userInfo);

export const addUserEditSnippetID = async (uid, snippetID) =>
  Users.doc(uid).update({ editSnippetIDs: firebase.firestore.FieldValue.arrayUnion(snippetID) });

export const addUserOwnedSnippetID = async (uid, snippetID) =>
  Users.doc(uid).update({ ownedSnippetIDs: firebase.firestore.FieldValue.arrayUnion(snippetID) });

export const addUserViewSnippetID = async (uid, snippetID) =>
  Users.doc(uid).update({ viewSnippetIDs: firebase.firestore.FieldValue.arrayUnion(snippetID) });

export const updateUserInfoDisplayName = async (uid, newDisplayName) =>
  UserInfos.doc(uid).update({ displayName: newDisplayName });

export const updateUserInfoPhotoID = async (uid, newPhotoID) =>
  UserInfos.doc(uid).update({ photoID: newPhotoID });

export const updateUserInfoUserName = async (uid, newUserName) =>
  UserInfos.doc(uid).update({ userName: newUserName });

export const addSnippetAllowedEditorID = async (snippetID, editorID) =>
  Snippets.doc(snippetID).update({
    allowedEditors: firebase.firestore.FieldValue.arrayUnion(editorID),
  });

export const addSnippetAllowedViewerID = async (snippetID, viewerID) =>
  Snippets.doc(snippetID).update({
    allowedViewers: firebase.firestore.FieldValue.arrayUnion(viewerID),
  });

export const addSnippetTag = async (snippetID, newTag) =>
  Snippets.doc(snippetID).update({ tags: firebase.firestore.FieldValue.arrayUnion(newTag) });

export const updateSnippetDescription = async (snippetID, newDesc) =>
  Snippets.doc(snippetID).update({ description: newDesc });

export const updateSnippetFolder = async (snippetID, newFolder) =>
  Snippets.doc(snippetID).update({ folder: newFolder });

export const addSnippetContent = async (snippetID, newContent) =>
  Snippets.doc(snippetID).update({ content: firebase.firestore.FieldValue.arrayUnion(newContent) });
