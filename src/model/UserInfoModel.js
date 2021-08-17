/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.USER_INFO;

function createUserInfo(key, value) {
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error('There was an error creating a new UserInfo.');
  }
}

export function updateUserInfo(userId, userInfoObject) {
  try {
    return BaseModel.set({ collection, data: userInfoObject, docId: userId });
  } catch (error) {
    throw new Error('There was an error updating UserInfo.');
  }
}

function removeUserInfo(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error('There was an error removing UserInfo.');
  }
}

// returns a UserInfo object {uid:'',displayName:'', userName:'', photoURL:''}
export async function getUserInfo(docId) {
  try {
    return await BaseModel.getOne({ collection, docId });
  } catch (error) {
    throw new Error('There was an error getting UserInfo.');
  }
}

export default { createUserInfo, updateUserInfo, removeUserInfo, getUserInfo };
