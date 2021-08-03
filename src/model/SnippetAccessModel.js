/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.SNIPPETACCESS;

async function create(data) {
  try {
    const etc = {};
    const customizedData = { ...data, ...etc };
    return BaseModel.create({ collection, data: customizedData });
  } catch (error) {
    throw new Error('There was an error creating a new User.');
  }
}
async function addEditor(snippetId, userId) {
  // todo: sets snippetID/editors/userID:true
}
async function addViewer(snippetId, userId) {
  // todo: sets snippetID/viewers/userID:true
}
async function removeEditor(snippetId, userId) {
  // todo: removes snippetID/editors/userID
}
async function removeViewer(snippetId, userId) {
  // todo: removed snippetID/viewers/userID
}

export default { create, addEditor, addViewer, removeEditor, removeViewer };
