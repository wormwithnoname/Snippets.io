/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.USERS;

function createUser(key, value) {
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

function updateUser(data, docId) {
  try {
    return BaseModel.set({ collection, docId, data });
  } catch (error) {
    throw new Error(`There was an error updating User. ${error}`);
  }
}

function removeUser(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error removing User. ${error}`);
  }
}

// returns a user object {uid:'',editableSnippetIds:[], viewableSnippetIds:[], ownedSnippetIds:[]}
async function getUser(docId) {
  try {
    return await BaseModel.getOne({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error getting User. ${error}`);
  }
}
// todo: add items to viewable snippets

function addOwnedSnippetId(docId, snippetId) {
  try {
    // const dasta = ['ownedSnippets', { [snippetId]: true }];
    return BaseModel.update({
      collection,
      docId,
      key: 'ownedSnippets',
      value: { [snippetId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function addViewableSnippetId(docId, snippetId) {
  try {
    // const data = ['viewableSnippets', { [snippetId]: true }];
    return BaseModel.update({
      collection,
      docId,
      key: 'viewableSnippets',
      value: { [snippetId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function addEditableSnippetId(docId, snippetId) {
  try {
    // const data = ['editableSnippets', { [snippetId]: true }];
    return BaseModel.update({
      collection,
      docId,
      key: 'editableSnippets',
      value: { [snippetId]: true },
    });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}

function removeOwnedSnippetId(docId, snippetId) {
  try {
    return BaseModel.deleteField({ collection, docId, key: `ownedSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}

function removeViewableSnippetId(docId, snippetId) {
  try {
    return BaseModel.deleteField({ collection, docId, key: `viewableSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function removeEditableSnippetId(docId, snippetId) {
  try {
    return BaseModel.deleteField({ collection, docId, key: `editableSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
export default {
  createUser,
  updateUser,
  removeUser,
  getUser,
  addOwnedSnippetId,
  addViewableSnippetId,
  addEditableSnippetId,
  removeOwnedSnippetId,
  removeViewableSnippetId,
  removeEditableSnippetId,
};
