import { db, timestamp } from 'services/FirebaseService';
import firebase from 'firebase';

async function checkAccess(collection, snippetID, userEmail, accessType) {
  try {
    const snippetAccessRef = await db.collection(collection).doc(snippetID).get();
    const accessorsList = await snippetAccessRef.get(accessType);
    if (accessorsList[userEmail]) return true;
    return false;
  } catch (error) {
    throw new Error('There was an error updating access.');
  }
}

async function create(collection, data) {
  return db.collection(collection).add({
    ...data,
    dateCreated: timestamp(),
    dateUpdated: timestamp(),
  });
}

async function createOrUpdate(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .set({ ...data, dateCreated: timestamp(), dateUpdated: timestamp() });
}

async function update(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .update({ ...data, dateUpdated: timestamp() });
}

async function updateArray(collection, data, id, field) {
  return db
    .collection(collection)
    .doc(id)
    .update({ [field]: firebase.firestore.FieldValue.arrayUnion(data) });
}

async function updateMerge(collection, id, data) {
  return db
    .collection(collection)
    .doc(id)
    .set(
      {
        ...data,
        dateUpdated: timestamp(),
      },
      { merge: true },
    );
}

async function getByField(collection, id, field) {
  const docRef = await db.collection(collection).doc(id).get();
  return docRef.get(field);
}

async function getByName(collection, id) {
  return db.collection(collection).where('ownerID', '==', id).orderBy('folderName', 'asc');
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

async function getSome(collection, ids, ownerID, limit) {
  return db
    .collection(collection)
    .where('snippetID', 'in', ids)
    .where('ownerID', '==', ownerID)
    .orderBy('dateUpdated', 'desc')
    .limit(limit);
}

async function findFromArrayField(collection, field, keyword) {
  try {
    const result = [];
    const docsRef = await db.collection(collection).where(field, 'array-contains', keyword).get();
    if (!docsRef.empty) docsRef.docs.map((doc) => result.push(doc.id));
    return result;
  } catch (error) {
    return console.log(error.message);
  }
}

async function findFromField(collection, field, keyword) {
  const result = [];
  const lowkey = keyword.toLocaleLowerCase();
  const docsRef = await db
    .collection(collection)
    .where(field, '>=', lowkey)
    .where(field, '<=', `${lowkey}~`)
    .get();
  if (!docsRef.empty) docsRef.docs.map((doc) => result.push(doc.id));
  return result;
}

async function removeFieldValue(collection, field, docID, fieldValue) {
  return db
    .collection(collection)
    .doc(docID)
    .update({
      [field]: firebase.firestore.FieldValue.arrayRemove(fieldValue),
    });
}

async function remove(collection, id) {
  return db.collection(collection).doc(id).delete();
}

export default {
  checkAccess,
  create,
  createOrUpdate,
  update,
  updateArray,
  updateMerge,
  getByField,
  getByName,
  getByRecent,
  getOne,
  getSome,
  getAll,
  findFromArrayField,
  findFromField,
  removeFieldValue,
  remove,
};
