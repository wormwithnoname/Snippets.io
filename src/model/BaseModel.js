import { db, timestamp } from 'services/FirebaseService';

function createAccess(collection, snippetID, userID) {
  return db
    .collection(collection)
    .doc(snippetID)
    .set({
      editors: { [userID]: true },
      viewers: { [userID]: true },
    });
}

async function checkAccess(collection, snippetID, userID, accessType) {
  const snippetAccessRef = await db.collection(collection).doc(snippetID).get();
  const accessorsList = await snippetAccessRef.get(accessType);
  if (accessorsList[userID]) return true;
  return false;
}

function updateAccess(collection, snippetID, userID, accessType) {
  return db
    .collection(collection)
    .doc(snippetID)
    .update({
      [accessType]: { [userID]: true },
    });
}

function create(collection, data) {
  return db.collection(collection).add({
    ...data,
    dateCreated: timestamp(),
    dateUpdated: timestamp(),
  });
}

function createOrUpdate(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateCreated: timestamp(), dateUpdated: timestamp() });
}

function update(collection, data, id) {
  return db
    .collection(collection)
    .doc(id)
    .update({ ...data, dateUpdated: timestamp() });
}

async function getByRecent(collection, ownerID, limit) {
  return db
    .collection(collection)
    .where('ownerID', '==', ownerID)
    .orderBy('dateUpdated', 'desc')
    .limit(limit);
}

async function getOne(collection, id) {
  const docRef = db.collection(collection).doc(id);
  const snippetObj = (await docRef.get()).data();
  return snippetObj;
}

async function getAll({ collection }) {
  return db.collection(collection).get();
}

async function getSome({ collection, ids }) {
  return db.collection(collection).whereIn('id', ids).get();
}

function remove(collection, id) {
  return db.collection(collection).doc(id).delete();
}

export default {
  checkAccess,
  create,
  createAccess,
  createOrUpdate,
  update,
  getByRecent,
  getOne,
  getAll,
  getSome,
  remove,
  updateAccess,
};
