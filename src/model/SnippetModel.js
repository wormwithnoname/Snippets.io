/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';
import templates from './Objects/templates';
import SnippetAccessModel from './SnippetAccessModel';
import UserModel from './UserModel';

const collection = collections.SNIPPETS;

export function createSnippet(userId, snippetId, snippet) {
  /* todo: call functions to add snippetID to SnippetAccessModel and to UserModel */
  try {
    UserModel.addOwnedSnippetId(userId, snippetId);
    UserModel.addEditableSnippetId(userId, snippetId);
    UserModel.addViewableSnippetId(userId, snippetId);
    SnippetAccessModel.createSnippetAccess(snippetId, {
      ...templates.SnippetAccess,
      editors: { [userId]: true },
      viewers: { [userId]: true },
    });
    return BaseModel.create({
      collection,
      key: snippetId,
      value: { ...snippet, owner: userId, id: snippetId },
    });
  } catch (error) {
    throw new Error(`There was an error creating a new Snippet. ${error}`);
  }
}

function updateSnippet(data, docId) {
  try {
    return BaseModel.set({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error updating Snippet. ${error}`);
  }
}

export async function getSnippetsByIds(docIds) {
  try {
    return await BaseModel.getSome({ collection, docIds });
  } catch (error) {
    throw new Error(`There was an error getting the Snippets. ${error}`);
  }
}

export async function getSnippetsByRecent(docIds) {
  try {
    return await BaseModel.getSomeByTime({ collection, docIds });
  } catch (error) {
    throw new Error(`There was an error getting the Snippets. ${error}`);
  }
}

export async function getSnippet(docId) {
  try {
    return await BaseModel.getOne({ collection, docId });
  } catch (error) {
    throw new Error(`There was an error getting the Snippet. ${error}`);
  }
}

async function getAllSnippets() {
  try {
    return await BaseModel.getAll({ collection });
  } catch (error) {
    throw new Error(`There was an error getting the Snippet. ${error}`);
  }
}

export async function removeSnippet(snippetId) {
  try {
    const snippetAccess = await SnippetAccessModel.getSnippetAccess(snippetId);
    const snippet = await getSnippet(snippetId);
    console.log(snippet);
    console.log(snippetAccess);
    UserModel.removeOwnedSnippetId(snippet.owner, snippetId);
    for (let i = 0; i < snippetAccess.editors.length; i += 1) {
      const editor = snippetAccess.editors[i];
      UserModel.removeEditableSnippetId(editor, snippetId);
    }
    for (let i = 0; i < snippetAccess.viewers.length; i += 1) {
      const viewer = snippetAccess.viewers[i];
      UserModel.removeEditableSnippetId(viewer, snippetId);
    }
    SnippetAccessModel.removeSnippetAccess(snippetId);
    return BaseModel.remove({ collection, snippetId });
  } catch (error) {
    throw new Error(`There was an error deleting the Snippet. ${error}`);
  }
}

export function addSnippetTag(snippetId, tag) {
  try {
    // const data = { a: 'tags', b: tag };
    return BaseModel.addToArray({
      collection,
      docId: snippetId,
      key: 'tags',
      value: tag,
    });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

export function removeSnippetTag(snippetId, tag) {
  try {
    // const data = { a: 'tags', b: tag };
    return BaseModel.removeFromArray({
      collection,
      docId: snippetId,
      key: 'tags',
      value: tag,
    });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

export function addSnippetCode(snippetId, language, body) {
  try {
    // const data = ['content', ];
    return BaseModel.update({
      collection,
      docId: snippetId,
      key: 'content',
      value: { [language]: body },
    });
  } catch (error) {
    throw new Error(`There was an error adding the tag. ${error}`);
  }
}

export function removeSnippetCode(snippetId, language) {
  try {
    return BaseModel.deleteField({ collection, docId: snippetId, key: `content.${language}` });
  } catch (error) {
    throw new Error(`There was an error removing the code. ${error}`);
  }
}

export default {
  createSnippet,
  updateSnippet,
  getSnippet,
  getSnippetsByIds,
  getAllSnippets,
  removeSnippet,
  addSnippetTag,
  removeSnippetTag,
  getSnippetsByRecent,
  addSnippetCode,
  removeSnippetCode,
};

/*
todo:
specialized function for adding snippet content with docId
specialized function for adding snippet tag with docId
specialized function for updating each field with docId
*/
