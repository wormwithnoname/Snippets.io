/* eslint-disable no-console */
import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.SNIPPETACCESS;

async function create(data) {
  try {
    const etc = {};
    const customizedData = { ...data, ...etc };
    return BaseModel.create(collection, customizedData);
  } catch (error) {
    throw new Error('There was an error creating a new User.');
  }
}

// todo: sets snippetID/editors/userID:true
async function addEditorAccess(snippetId, userId) {
  try {
    return BaseModel.updateEditorAccess('snippets-access', snippetId, userId);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkEditorAccess(snippetId, userId) {
  try {
    return BaseModel.checkEditorAccess('snippets-access', snippetId, userId);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

export { checkEditorAccess, create, addEditorAccess };
