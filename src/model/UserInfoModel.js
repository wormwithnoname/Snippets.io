/* eslint-disable no-console */
import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.USERINFO;

async function checkUserExistence(data) {
  try {
    return BaseModel.checkUser(data);
  } catch (error) {
    throw new Error('There was an error creating a new UserInfo.');
  }
}

function create(data) {
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error('There was an error creating a new UserInfo.');
  }
}

function update(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error('There was an error updating UserInfo.');
  }
}

function remove(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error('There was an error removing UserInfo.');
  }
}

// returns a UserInfo object {uid:'',displayName:'', userName:'', photoURL:''}
async function get(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error('There was an error getting UserInfo.');
  }
}

export default { checkUserExistence, create, update, remove, get };
