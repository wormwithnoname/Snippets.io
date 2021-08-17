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

async function createOwnerAccess(snippetId, userEmail) {
  try {
    return BaseModel.createAccess(collection, snippetId, userEmail);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

// todo: sets snippetID/editors/userID:true
async function updateEditorAccess(snippetId, userEmail) {
  try {
    return BaseModel.updateAccess(collection, snippetId, userEmail, 'editors');
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkEditorAccess(snippetId, userEmail) {
  try {
    return BaseModel.checkAccess(collection, snippetId, userEmail, 'editors');
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function updateViewerAccess(snippetId, userEmail) {
  try {
    return BaseModel.updateAccess(collection, snippetId, userEmail, 'viewers');
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkViewerAccess(snippetId, userEmail) {
  try {
    return BaseModel.checkAccess(collection, snippetId, userEmail, 'viewers');
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function deleteSnippetAccess(snippetId) {
  try {
    return BaseModel.remove(collection, snippetId);
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
