/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.USER_INFO;

function create(key, value) {
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error('There was an error creating a new UserInfo.');
  }
}

function update(data, docId) {
  try {
    return BaseModel.set({ collection, docId, data });
  } catch (error) {
    throw new Error('There was an error updating UserInfo.');
  }
}

function remove(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error('There was an error removing UserInfo.');
  }
}

// returns a UserInfo object {uid:'',displayName:'', userName:'', photoURL:''}
async function get(docId) {
  try {
    return await BaseModel.getOne({ collection, docId });
  } catch (error) {
    throw new Error('There was an error getting UserInfo.');
  }
}

export default { create, update, remove, get };
