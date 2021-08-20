import collections from '../constants/firestore';
import BaseModel from './BaseModel';
import { createOwnerAccess, deleteSnippetAccess } from './SnippetAccessModel';

const collection = collections.SNIPPETS;
const searchFields = {
  dateUpdate: 'dateUpdated',
  owner: 'ownerID',
  snippet: 'snippetID',
  tags: 'tags',
  title: 'searchTitle',
};

async function createSnippet(data, ownerEmail) {
  try {
    await BaseModel.create(collection, data).then((docRef) => {
      BaseModel.update(collection, docRef.id, { snippetID: docRef.id });
      createOwnerAccess(docRef.id, ownerEmail);
    });
  } catch (error) {
    throw new Error('There was an error creating a new Snippet.');
  }
}

async function updateSnippet(data, id) {
  try {
    return BaseModel.update(collection, id, data);
  } catch (error) {
    throw new Error('There was an error updating the Snippet');
  }
}

async function getByRecent(ownerID) {
  try {
    return BaseModel.getByRecent(collection, ownerID, searchFields.owner, searchFields.dateUpdate);
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

async function getByIDs(ids, ownerID) {
  try {
    return BaseModel.getSome(collection, ids, ownerID, searchFields.snippet, searchFields.owner, searchFields.dateUpdate);
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

async function findSnippets(keyword, ownerID) {
  try {
    const results = await BaseModel.findFromField(collection, searchFields.title, keyword);
    const results2 = await BaseModel.findFromArrayField(collection, searchFields.tags, keyword);
    if (results.length > 0 || results2.length > 0) {
      const results3 = results.concat(results2);
      const nonDuplicateResults = [...new Set(results3)];
      const objResults = await getByIDs(nonDuplicateResults, ownerID);
      return objResults;
    }
    return [];
  } catch (error) {
    console.log(error.message);
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

export {
  createSnippet,
  updateSnippet,
  getByRecent,
  getByID,
  getByIDs,
  findSnippets,
  deleteSnippet,
};
