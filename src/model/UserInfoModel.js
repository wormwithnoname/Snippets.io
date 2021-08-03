/* eslint-disable no-console */
import collections from '../constants/collections';
import BaseModel from './BaseModel';

const collection = collections.USERINFO;

async  function create(data) {
  try {
      const etc = {};
      const customizedData = { ..data, ..etc};
      return BaseModel.create({collection, data:customizedData});
  } catch (error) {
    throw new Error('There was an error creating a new User info.');
  }
}
