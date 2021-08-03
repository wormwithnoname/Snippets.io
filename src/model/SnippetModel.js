/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.SNIPPET;

function create(data) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    const etc = {};
    const customizedData = { ...data, ...etc };
    return BaseModel.create({ collection, data: customizedData });
  } catch (error) {
    throw new Error('There was an error creating a new Snippet.');
  }
}

function update(data, id) {
  try {
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error('There was an error updating the Snippet');
  }
}

async function getByIDs(ids) {
  try {
    return BaseModel.getSome({ collection, ids });
  } catch (error) {
    throw new Error('There was an error getting the Snippets');
  }
}

function remove(id) {
  try {
    return BaseModel.remove(collection, id);
  } catch (error) {
    throw new Error('There was an error removing the Snippet');
  }
}

export default { create, update, getByIDs, remove };

/* 
todo:
specialized function for adding snippet content with id
specialized function for adding snippet tag with id
specialized function for updating each field with id
*/
