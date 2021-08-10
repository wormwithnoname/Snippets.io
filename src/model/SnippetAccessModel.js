/* eslint-disable no-console */
import BaseModel from './BaseModel';
import collections from '../constants/collections';

const collection = collections.SNIPPET_ACCESS;

function create(key, value) {
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}
async function get(snippetId) {
  try {
    return await BaseModel.getOne({ collection, docId: snippetId });
  } catch (error) {
    throw new Error(`There was an error getting User. ${error}`);
  }
}
// todo: sets snippetID/editors/userID:true
function addEditor(snippetId, userId) {
  try {
    // const data = ['editors', { [userId]: true }];
    return BaseModel.update({
      collection,
      docId: snippetId,
      key: 'editors',
      value: { [userId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

// todo: sets snippetID/viewers/userID:true
async function addViewer(snippetId, userId) {
  try {
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
function update(data, docId) {
  try {
    return BaseModel.set({ collection, docId, data });
  } catch (error) {
    throw new Error(`There was an error updating Snippet Access. ${error}`);
  }
}
// todo: removes snippetID/editors/userID
function removeEditor(snippetId, userId) {
  try {
    return BaseModel.deleteField({ collection, docId: snippetId, key: `editors.${userId}` });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

// todo: removed snippetID/viewers/userID
function removeViewer(snippetId, userId) {
  try {
    return BaseModel.deleteField({ collection, docId: snippetId, key: `viewers.${userId}` });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

function remove(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

export default { create, get, addEditor, addViewer, update, removeEditor, removeViewer, remove };
