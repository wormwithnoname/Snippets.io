/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.SNIPPETS;

function create(key, value) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    return BaseModel.create({ collection, key, value });
  } catch (error) {
    throw new Error(`There was an error creating a new Snippet. ${error}`);
  }
}

function update(data, docId) {
  try {
    return BaseModel.set({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error updating Snippet. ${error}`);
  }
}

async function getByIDs(docIds) {
  try {
    return await BaseModel.getSome({ collection, docIds });
  } catch (error) {
    throw new Error(`There was an error getting the Snippets. ${error}`);
  }
}

async function get(docId) {
  try {
    return await BaseModel.getOne({ collection, docId });
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

function remove(docId) {
  try {
    return BaseModel.remove({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

function addTag(docId, tag) {
  try {
    // const data = { a: 'tags', b: tag };
    return BaseModel.addToArray({ collection, docId, key: 'tags', value: tag });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function removeTag(docId, tag) {
  try {
    // const data = { a: 'tags', b: tag };
    return BaseModel.removeFromArray({ collection, docId, key: 'tags', value: tag });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function addCode(docId, language, body) {
  try {
    // const data = ['content', ];
    return BaseModel.update({
      collection,
      docId,
      key: 'content',
      value: { [language]: body },
    });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

function removeCode(docId, language) {
  try {
    return BaseModel.deleteField({ collection, docId, key: `content.${language}` });
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
specialized function for adding snippet content with docId
specialized function for adding snippet tag with docId
specialized function for updating each field with docId
*/
