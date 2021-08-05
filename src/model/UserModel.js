/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.USERS;

function create(data) {
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error(`There was an error creating a new User. ${error}`);
  }
}

function update(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error updating User. ${error}`);
  }
}

function remove(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error(`There was an error removing User. ${error}`);
  }
}

// returns a user object {uid:'',editableSnippetIds:[], viewableSnippetIds:[], ownedSnippetIds:[]}
async function get(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error(`There was an error getting User. ${error}`);
  }
}
// todo: add items to viewable snippets

function addOwnedSnippetId(id, snippetId) {
  try {
    const data = ['ownedSnippets', { [snippetId]: true }];
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function addViewableSnippetId(id, snippetId) {
  try {
    const data = ['viewableSnippets', { [snippetId]: true }];
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function addEditableSnippetId(id, snippetId) {
  try {
    const data = ['editableSnippets', { [snippetId]: true }];
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}

function removeOwnedSnippetId(id, snippetId) {
  try {
    return BaseModel.deleteField({ collection, id, key: `ownedSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}

function removeViewableSnippetId(id, snippetId) {
  try {
    return BaseModel.deleteField({ collection, id, key: `viewableSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
function removeEditableSnippetId(id, snippetId) {
  try {
    return BaseModel.deleteField({ collection, id, key: `editableSnippets.${snippetId}` });
  } catch (error) {
    throw new Error(`There was an error getting adding snippet ID. ${error}`);
  }
}
export default {
  create,
  update,
  remove,
  get,
  addOwnedSnippetId,
  addViewableSnippetId,
  addEditableSnippetId,
  removeOwnedSnippetId,
  removeViewableSnippetId,
  removeEditableSnippetId,
};
