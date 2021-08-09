/* eslint-disable no-console */
import BaseModel from './BaseModel';
import collections from '../constants/collections';

const collection = collections.SNIPPET_ACCESS;

function create(data) {
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}
async function get(snippetId) {
  try {
    return await BaseModel.getOne({ collection, id: snippetId });
  } catch (error) {
    throw new Error(`There was an error getting User. ${error}`);
  }
}
// todo: sets snippetID/editors/userID:true
function addEditor(snippetId, userId) {
  try {
    const data = ['editors', { [userId]: true }];
    return BaseModel.update({ collection, data, id: snippetId });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

// todo: sets snippetID/viewers/userID:true
async function addViewer(snippetId, userId) {
  try {
    const data = ['viewers', { [userId]: true }];
    return BaseModel.update({ collection, data, id: snippetId });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}
function update(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error updating Snippet Access. ${error}`);
  }
}
// todo: removes snippetID/editors/userID
function removeEditor(snippetId, userId) {
  try {
    return BaseModel.deleteField({ collection, key: `editors.${userId}`, id: snippetId });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

// todo: removed snippetID/viewers/userID
function removeViewer(snippetId, userId) {
  try {
    return BaseModel.deleteField({ collection, key: `viewers.${userId}`, id: snippetId });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

function remove(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

export default { create, get, addEditor, addViewer, update, removeEditor, removeViewer, remove };
