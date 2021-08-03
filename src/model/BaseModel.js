import { db, timestamp } from '../services/FirebaseService';

function create({ collection, data }) {
  return db.collection(collection).add({
    ...data,
    dateCreated: timestamp(),
    dateUpdated: timestamp(),
  });
}

function createOrUpdate({ collection, id, data }) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateCreated: timestamp(), dateUpdated: timestamp() });
}

function set({ collection, data, id }) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateUpdated: timestamp() });
}

function update({ collection, data, id }) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateUpdated: timestamp() });
}

function getOne({ collection, id }) {
  return db.collection(collection).doc(id).get();
}

function getAll({ collection }) {
  return db.collection(collection).get();
}

function getSome({ collection, ids }) {
  return db.collection(collection).whereIn('id', ids).get();
}

function remove({ collection, id }) {
  return db.collection(collection).doc(id).set(null);
}

export default { create, createOrUpdate, set, update, getOne, getAll, getSome, remove };
