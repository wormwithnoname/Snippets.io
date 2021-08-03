import { db, timestamp } from '/services/FirebaseService';

function create({collection, data}){
    return db.collection(collection).add({
        ..data, 
        dateCreated:timestamp(),
        dateUpdated: timestamp(),
    });
}

function createOrUpdate({collection,id,data}){
    return db.collection(collection).

}

function set({collection, data, id}){

}

function update({collection,data,id}){

}

function getOne({collection, id}){

}

function getAll({collection}){

}

function remove({collection, id}){

}

export default {create, createOrUpdate, set, update, getOne, getAll, remove
    
  }