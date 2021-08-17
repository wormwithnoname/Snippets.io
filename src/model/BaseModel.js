import { db, timestamp } from 'services/FirebaseService';
import firebase from 'firebase';

function createAccess(collection, docID, fieldID) {
  return db
    .collection(collection)
    .doc(docID)
    .set({
      editors: { [fieldID]: true },
      viewers: { [fieldID]: true },
    });
}

async function checkAccess(collection, snippetID, userEmail, accessType) {
  const snippetAccessRef = await db.collection(collection).doc(snippetID).get();
  const accessorsList = await snippetAccessRef.get(accessType);
  if (accessorsList[userEmail]) return true;
  return false;
}

function updateAccess(collection, snippetID, userEmail, accessType) {
  return db
    .collection(collection)
    .doc(snippetID)
    .set(
      {
        [accessType]: { [userEmail]: true },
      },
      { merge: true },
    );
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

function updateArray(collection, data, id) {
  return db
    .collection(collection)
    .doc(id)
    .update({ snippetIDs: firebase.firestore.FieldValue.arrayUnion(data) });
}

function getByName(collection, ownerID) {
  return db.collection(collection).where('ownerID', '==', ownerID).orderBy('folderName', 'asc');
}

function getByRecent(collection, ownerID, limit) {
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

async function getSome(collection, ids, limit) {
  return db
    .collection(collection)
    .where('snippetID', 'in', ids)
    .orderBy('dateUpdated', 'desc')
    .limit(limit);
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
  getByName,
  getByRecent,
  getOne,
  getAll,
  getSome,
  remove,
  updateAccess,
  updateArray,
};
