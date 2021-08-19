import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.USERS;

async function createUser(data) {
  try {
    return BaseModel.createOrUpdate(collection, data.uid, data);
  } catch (error) {
    throw new Error('There was an error updating a User');
  }
}

async function updateUser(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error('There was an error updating a User');
  }
}

async function removeUser(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error('There was an error removing a User');
  }
}

async function getUser(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error('There was an error getting a User.');
  }
}

export { createUser, getUser, updateUser, removeUser };
