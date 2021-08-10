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
    return BaseModel.set({ collection, data, id });
  } catch (error) {
    throw new Error(`There was an error updating Snippet. ${error}`);
  }
}

async function getByIDs(ids) {
  try {
    return await BaseModel.getSome({ collection, ids });
  } catch (error) {
    throw new Error(`There was an error getting the Snippets. ${error}`);
  }
}

async function get(id) {
  try {
    return await BaseModel.getOne({ collection, id });
  } catch (error) {
    throw new Error(`There was an error getting the Snippet. ${error}`);
  }
}

async function getAll() {
  try {
    return await BaseModel.getAll({ collection });
  } catch (error) {
    throw new Error(`There was an error getting the Snippet. ${error}`);
  }
}

function remove(id) {
  try {
    return BaseModel.remove({ collection, id });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

function addTag(id, tag) {
  try {
    const data = { a: 'tags', b: tag };
    return BaseModel.addToArray({ collection, id, data });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function removeTag(id, tag) {
  try {
    const data = { a: 'tags', b: tag };
    return BaseModel.removeFromArray({ collection, id, data });
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
  get,
  getByIDs,
  getAll,
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
