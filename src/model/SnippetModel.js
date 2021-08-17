import collections from '../constants/firestore';
import BaseModel from './BaseModel';
import { createOwnerAccess, deleteSnippetAccess } from './SnippetAccessModel';

const collection = collections.SNIPPETS;

async function create(data, ownerEmail) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    await BaseModel.create(collection, data).then((docRef) => {
      BaseModel.update(collection, { snippetID: docRef.id }, docRef.id);
      createOwnerAccess(docRef.id, ownerEmail);
    });
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error creating a new Snippet.');
  }
}

function update(data, id) {
  try {
    return BaseModel.update(collection, data, id);
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

async function getByID(snippetID) {
  try {
    return BaseModel.getOne(collection, snippetID);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function getByIDs(ids) {
  try {
    console.log(collection);
    return BaseModel.getSome(collection, ids);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function remove(id) {
  try {
    BaseModel.remove(collection, id);
    deleteSnippetAccess(id);
  } catch (error) {
    console.log(error.message);
    throw new Error('There was an error removing the Snippet');
  }
}

export { create, getByRecent, getByID, getByIDs, remove, update };

/* 
todo:
specialized function for adding snippet content with id
specialized function for adding snippet tag with id
specialized function for updating each field with id
*/
