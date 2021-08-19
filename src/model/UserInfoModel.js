import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.USERINFO;

function createUserInfo(data) {
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error('There was an error creating a new UserInfo.');
  }
}

function updateUserInfo(data, id) {
  try {
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error('There was an error updating UserInfo.');
  }
}

function removeUserInfo(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error('There was an error removing UserInfo.');
  }
}

// returns a UserInfo object {uid:'',displayName:'', userName:'', photoURL:''}
async function getUserInfo(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error('There was an error getting UserInfo.');
  }
}

export default { createUserInfo, updateUserInfo, removeUserInfo, getUserInfo };
