import { db, timestamp } from 'services/FirebaseService';

function addEditorAccess(collection, snippetID, userID) {
  return db
    .collection(collection)
    .doc(snippetID)
    .set({
      editors: { [userID]: 'true' },
    });
}

async function checkEditorAccess(collection, snippetID, userID) {
  const snippetAccessRef = await db.collection(collection).doc(snippetID).get();
  const editorsList = await snippetAccessRef.get('editors');
  if (editorsList[userID]) return true;
  return false;
}

function updateEditorAccess(collection, snippetID, userID) {
  return db
    .collection(collection)
    .doc(snippetID)
    .update({
      editors: { [userID]: 'true' },
    });
}

function create(collection, data) {
  return db
    .collection(collection)
    .add({
      ...data,
      dateCreated: timestamp(),
      dateUpdated: timestamp(),
    })
    .then((docRef) => {
      docRef.update({ snippetID: docRef.id });
      addEditorAccess('snippets-access', docRef.id, data.ownerID);
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

async function getByRecent(collection, ownerID) {
  return db
    .collection(collection)
    .where('ownerID', '==', ownerID)
    .orderBy('dateUpdated', 'desc')
    .limit(10);
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
  addEditorAccess,
  checkEditorAccess,
  create,
  createOrUpdate,
  update,
  getByRecent,
  getOne,
  getAll,
  getSome,
  remove,
  updateEditorAccess,
};
