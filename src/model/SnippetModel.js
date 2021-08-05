/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.SNIPPETS;

function create(data) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    return BaseModel.create({ collection, data });
  } catch (error) {
    throw new Error(`There was an error creating a new Snippet. ${error}`);
  }
}

function update(data, id) {
  try {
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error updating Snippet. ${error}`);
  }
}

async function getByIDs(ids) {
  try {
    return BaseModel.getSome({ collection, ids });
  } catch (error) {
    throw new Error(`There was an error getting the Snippets. ${error}`);
  }
}

function remove(id) {
  try {
    return BaseModel.remove(collection, id);
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

function addTag(id, tag) {
  try {
    return BaseModel.add(collection, id, ['tags', tag]);
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function removeTag(id, tag) {
  try {
    return BaseModel.subtract(collection, id, ['tags', tag]);
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function addCode(id, language, body) {
  try {
    const data = ['content', { [language]: body }];
    return BaseModel.update({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function removeCode(id, language) {
  try {
    return BaseModel.deleteField({ collection, id, key: `content.${language}` });
  } catch (error) {
    throw new Error(`There was an error removing the code. ${error}`);
  }
}

export default {
  create,
  update,
  getByIDs,
  remove,
  addTag,
  removeTag,
  addCode,
  removeCode,
};

/* 
todo:
specialized function for adding snippet content with id
specialized function for adding snippet tag with id
specialized function for updating each field with id
*/
