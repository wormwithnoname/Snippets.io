import firebase from 'firebase';
import { db } from '../services/FirebaseService';

function timestamp() {
  return firebase.firestore.FieldValue.serverTimestamp();
}
function create({ collection, data }) {
  const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(key)
    .set({ ...value, dateUpdated: timestamp(), dateCreated: timestamp() });
}

function createOrUpdate({ collection, id, data }) {
  return db.collection(collection).doc(id).set({ data });
}

function set({ collection, data, id }) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateUpdated: timestamp() }, { merge: true });
}

async function update({ collection, data, id }) {
  const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(id)
    .set({ [key]: value }, { merge: true });
}

async function deleteField({ collection, key, id }) {
  return db
    .collection(collection)
    .doc(id)
    .update({ [key]: firebase.firestore.FieldValue.delete() });
}

function add({ collection, id, data }) {
  const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(id)
    .update({ [key]: firebase.firestore.FieldValue.arrayUnion(value) });
}

function subtract({ collection, id, data }) {
  const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(id)
    .update({ [key]: firebase.firestore.FieldValue.arrayRemove(value) });
}

async function getOne({ collection, id }) {
  return db.collection(collection).doc(id).get();
}

async function getAll({ collection }) {
  return db.collection(collection).get();
}

async function getSome({ collection, ids }) {
  return db.collection(collection).whereIn('id', ids).get();
}

function remove({ collection, id }) {
  return db.collection(collection).doc(id).delete();
}

export default {
  create,
  createOrUpdate,
  set,
  update,
  deleteField,
  add,
  subtract,
  getOne,
  getAll,
  getSome,
  remove,
};
