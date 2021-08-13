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

async function createOwnerAccess(snippetId, userId) {
  try {
    return BaseModel.createAccess('snippets-access', snippetId, userId);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

// todo: sets snippetID/editors/userID:true
async function updateEditorAccess(snippetId, userId) {
  try {
    return BaseModel.updateAccess('snippets-access', snippetId, userId, 'editors');
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkEditorAccess(snippetId, userId) {
  try {
    return BaseModel.checkAccess('snippets-access', snippetId, userId, 'editors');
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function updateViewerAccess(snippetId, userId) {
  try {
    return BaseModel.updateAccess('snippets-access', snippetId, userId, 'viewers');
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkViewerAccess(snippetId, userId) {
  try {
    return BaseModel.checkAccess('snippets-access', snippetId, userId, 'viewers');
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function deleteSnippetAccess(snippetId) {
  try {
    return BaseModel.remove('snippets-access', snippetId);
  } catch (error) {
    throw new Error('There was an error in granting permission to user.');
  }
}

export {
  checkEditorAccess,
  checkViewerAccess,
  create,
  createOwnerAccess,
  deleteSnippetAccess,
  updateEditorAccess,
  updateViewerAccess,
};
