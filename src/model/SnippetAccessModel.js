/* eslint-disable no-console */
import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.SNIPPETACCESS;

const accessType = {
  viewer: 'viewers',
  editor: 'editors',
};

async function createOwnerAccess(snippetId, userEmail) {
  try {
    const accessObj = {
      viewers: { [userEmail]: true },
      editors: { [userEmail]: true },
    };
    return BaseModel.createOrUpdate(collection, snippetId, accessObj);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function updateEditorAccess(snippetId, userEmail) {
  try {
    const accessObj = {
      editors: { [userEmail]: true },
    };
    return BaseModel.updateMerge(collection, snippetId, accessObj);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkEditorAccess(snippetId, userEmail) {
  try {
    return BaseModel.checkAccess(collection, snippetId, userEmail, accessType.editor);
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function getEditors(snippetId) {
  try {
    return BaseModel.getByField(collection, snippetId, accessType.editor);
  } catch (error) {
    throw new Error('There was an error in getting viewers of snippet');
  }
}

async function updateViewerAccess(snippetId, userEmail) {
  try {
    const accessObj = {
      viewers: { [userEmail]: true },
    };
    return BaseModel.updateMerge(collection, snippetId, accessObj);
  } catch (error) {
    throw new Error('There was an error in adding permission to user.');
  }
}

async function checkViewerAccess(snippetId, userEmail) {
  try {
    return BaseModel.checkAccess(collection, snippetId, userEmail, accessType.viewer);
  } catch (error) {
    throw new Error('There was an error in checking permission of user.');
  }
}

async function getViewers(snippetId) {
  try {
    return BaseModel.getByField(collection, snippetId, accessType.viewer);
  } catch (error) {
    throw new Error('There was an error in getting viewers of snippet');
  }
}

async function deleteSnippetAccess(snippetId) {
  try {
    return BaseModel.remove(collection, snippetId);
  } catch (error) {
    throw new Error('There was an error in deleting permission object');
  }
}

export {
  checkEditorAccess,
  checkViewerAccess,
  createOwnerAccess,
  updateEditorAccess,
  updateViewerAccess,
  getEditors,
  getViewers,
  deleteSnippetAccess,
};
