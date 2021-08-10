/* eslint-disable no-console */
import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.USER;

function create(data) {
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error('There was an error creating a new User.');
  }
}

function update(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error('There was an error updating a new User.');
  }
}

function remove(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error('There was an error removing a new User.');
  }
}

// returns a user object {uid:'',editableSnippetIds:[], viewableSnippetIds:[], ownedSnippetIds:[]}
async function get(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error('There was an error getting  new User.');
  }
}

export default { create, update, remove, get };
