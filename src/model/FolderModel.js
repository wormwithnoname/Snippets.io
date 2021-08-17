import { message } from 'antd';
import collections from '../constants/firestore';
import BaseModel from './BaseModel';

const collection = collections.FOLDERS;

async function createFolder(data) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    return BaseModel.create(collection, data);
  } catch (error) {
    return message.error('There was an error creating a new folder.');
  }
}

async function updateFolder(data, id) {
  try {
    return BaseModel.updateArray(collection, data, id);
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error updating the Snippet');
  }
}

async function getByRecent(ownerID) {
  try {
    return BaseModel.getByRecent(collection, ownerID);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function getByName(ownerID) {
  try {
    return BaseModel.getByName(collection, ownerID);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function getByID(snippetID) {
  try {
    return BaseModel.getOne(collection, snippetID);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function getByIDs(ids) {
  try {
    return BaseModel.getSome(collection, ids);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

function remove(id) {
  try {
    BaseModel.remove(collection, id);
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error removing the Snippet');
  }
}

export { createFolder, getByName, getByRecent, getByID, getByIDs, remove, updateFolder };

/* 
todo:
specialized function for adding snippet content with id
specialized function for adding snippet tag with id
specialized function for updating each field with id
*/
