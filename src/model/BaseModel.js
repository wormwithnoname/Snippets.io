import firebase from 'firebase';
// eslint-disable-next-line import/named
import { db, timestamp } from '../services/FirebaseService';

function create({ collection, key, value }) {
  // const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(key)
    .set({ ...value, dateUpdated: timestamp(), dateCreated: timestamp() });
}

function createOrUpdate({ collection, docId, data }) {
  return db.collection(collection).doc(docId).set({ data });
}

function set({ collection, docId, data }) {
  return db
    .collection(collection)
    .doc(docId)
    .set({ ...data, dateUpdated: timestamp() }, { merge: true });
}

async function update({ collection, docId, key, value }) {
  // const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(docId)
    .set({ [key]: value }, { merge: true });
}

async function deleteField({ collection, docId, key }) {
  return db
    .collection(collection)
    .doc(docId)
    .update({ [key]: firebase.firestore.FieldValue.delete() });
}

function addToArray({ collection, docId, key, value }) {
  // const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(docId)
    .update({ [key]: firebase.firestore.FieldValue.arrayUnion(value) });
}

function removeFromArray({ collection, docId, key, value }) {
  // const [key, value] = Object.values(data);
  return db
    .collection(collection)
    .doc(docId)
    .update({ [key]: firebase.firestore.FieldValue.arrayRemove(value) });
}

async function getOne({ collection, docId }) {
  return (await db.collection(collection).doc(docId).get()).data();
}

async function getAll({ collection }) {
  return db.collection(collection).doc().get();
}

async function getSome({ collection, docIds }) {
  return Promise.all(docIds.map((docId) => getOne({ collection, docId })));
}
async function getSomeByTime({ collection, docIds }) {
  return (await Promise.all(docIds.map((docId) => getOne({ collection, docId })))).sort(
    (date1, date2) => date2 - date1,
  );
}
function remove({ collection, docId }) {
  return db.collection(collection).doc(docId).delete();
}

export default {
  create,
  createOrUpdate,
  set,
  update,
  deleteField,
  addToArray,
  removeFromArray,
  getOne,
  getSomeByTime,
  getAll,
  getSome,
  remove,
};
