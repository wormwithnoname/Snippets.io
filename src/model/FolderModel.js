import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.FOLDERS;
const fields = {
  contents: 'snippetIDs',
  dateUpdate: 'dateUpdated',
  folder: 'folderName',
  owner: 'ownerID',
};

async function createFolder(data) {
  try {
    return BaseModel.create(collection, data);
  } catch (error) {
    throw new Error('There was an error creating a new Folder');
  }
}

async function updateFolder(data, id) {
  try {
    return BaseModel.updateArray(collection, data, id, fields.contents);
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error updating the Folder');
  }
}

async function getByRecent(ownerID) {
  try {
    return BaseModel.getByRecent(collection, ownerID, fields.owner, fields.folder);
  } catch (error) {
    throw new Error('There was an error getting Folders');
  }
}

async function getByName(ownerID) {
  try {
    return BaseModel.getByName(collection, ownerID, fields.owner, fields.folder);
  } catch (error) {
    throw new Error('There was an error getting the Folder');
  }
}

async function getByID(snippetID) {
  try {
    return BaseModel.getOne(collection, snippetID);
  } catch (error) {
    throw new Error('There was an error getting the Folder');
  }
}

async function deleteSnippetFromFolder(snippetID, folderID) {
  try {
    BaseModel.removeFieldValue(collection, fields.contents, folderID, snippetID);
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error deleting the Folder');
  }
}

async function deleteFolder(id) {
  try {
    BaseModel.remove(collection, id);
  } catch (error) {
    throw new Error('There was an error deleting the Folder');
  }
}

export {
  createFolder,
  updateFolder,
  getByName,
  getByRecent,
  getByID,
  deleteSnippetFromFolder,
  deleteFolder,
};
