/* eslint-disable no-console */
import BaseModel from './BaseModel';
import collections from '../constants/collections';
import UserModel from './UserModel';

const collection = collections.SNIPPET_ACCESS;

function createSnippetAccess(key, value) {
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}
async function getSnippetAccess(snippetId) {
  try {
    return await BaseModel.getOne({ collection, docId: snippetId });
  } catch (error) {
    throw new Error(`There was an error getting User. ${error}`);
  }
}
// todo: sets snippetID/editors/userID:true
export function addEditorAccess(snippetId, userId) {
  try {
    UserModel.addEditableSnippetId(userId, snippetId);
    return BaseModel.update({
      collection,
      docId: snippetId,
      key: 'editors',
      value: { [userId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error adding Editor access. ${error}`);
  }
}

// todo: sets snippetID/viewers/userID:true
export async function addViewerAccess(snippetId, userId) {
  try {
    UserModel.addViewableSnippetId(userId, snippetId);
    return BaseModel.update({
      collection,
      docId: snippetId,
      key: 'viewers',
      value: { [userId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}
export function updateSnippetAccess(data, docId) {
  try {
    return BaseModel.set({ collection, docId, data });
  } catch (error) {
    throw new Error(`There was an error updating Snippet Access. ${error}`);
  }
}
// todo: removes snippetID/editors/userID
export function removeEditorAccess(snippetId, userId) {
  try {
    UserModel.removeEditableSnippetId(userId, snippetId);
    return BaseModel.deleteField({ collection, docId: snippetId, key: `editors.${userId}` });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

// todo: removed snippetID/viewers/userID
export function removeViewerAccess(snippetId, userId) {
  try {
    UserModel.removeViewableSnippetId(userId, snippetId);
    return BaseModel.deleteField({ collection, docId: snippetId, key: `viewers.${userId}` });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

function removeSnippetAccess(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

export default {
  createSnippetAccess,
  getSnippetAccess,
  addEditorAccess,
  addViewerAccess,
  updateSnippetAccess,
  removeEditorAccess,
  removeViewerAccess,
  removeSnippetAccess,
};
