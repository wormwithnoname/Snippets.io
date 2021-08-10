import { db, timestamp } from 'services/FirebaseService';

function create(collection, data) {
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

function update({ collection, data, id }) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateUpdated: timestamp() });
}

async function getByRecent(collection, ownerID) {
  return db
    .collection(collection)
    .where('ownerID', '==', ownerID)
    .orderBy('dateUpdated', 'desc')
    .limit(10);
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
  return db.collection(collection).doc(id).set(null);
}

export default {
  create,
  createOrUpdate,
  update,
  getByRecent,
  getOne,
  getAll,
  getSome,
  remove,
};
