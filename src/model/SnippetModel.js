import collections from '../constants/firestore';
import BaseModel from './BaseModel';
import { createOwnerAccess, deleteSnippetAccess } from './SnippetAccessModel';

const collection = collections.SNIPPETS;

async function createSnippet(data, ownerEmail) {
  try {
    await BaseModel.create(collection, data).then((docRef) => {
      BaseModel.update(collection, { snippetID: docRef.id }, docRef.id);
      createOwnerAccess(docRef.id, ownerEmail);
    });
  } catch (error) {
    throw new Error('There was an error creating a new Snippet.');
  }
}

async function updateSnippet(data, id) {
  try {
    return BaseModel.update(collection, data, id);
  } catch (error) {
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
    throw new Error('There was an error getting the Snippet');
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

async function deleteSnippet(id) {
  try {
    BaseModel.remove(collection, id);
    deleteSnippetAccess(id);
  } catch (error) {
    throw new Error('There was an error removing the Snippet');
  }
}

export { createSnippet, updateSnippet, getByRecent, getByID, getByIDs, deleteSnippet };
