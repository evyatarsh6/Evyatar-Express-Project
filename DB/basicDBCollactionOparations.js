

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const getDB = require('../DB/getDB');

let db = null;

const getWantedCollection = async (collectionName) => {
    try {
        db = await getDB()
        const wantedCollection = await db.collection(collectionName) 
        return wantedCollection
    } catch (error) {
        console.error("Error in getWantedCollection:", error);
        throw error;
    }
};



const generateDBOperation = async (operationType, collectionName, ...attr) => {
    try {
        const action =  basicDBCollactionOperations(collectionName)[operationType](...attr)
        return action
    } catch (error) {
        console.error(`error in the ${operationType} operation in ${collectionName} collection`)
        throw error
    }
};



const basicDBCollactionOperations = (collactionName) =>  {

    const getDBCollection = async () => await getWantedCollection(collactionName)
    
    const operations = {
        countDocuments: async (...attr) => await getDBCollection().countDocuments(...attr),
        findOpatations: {
            findOne: async (...attr) => await getDBCollection().findOne(...attr).toArray(),
            find: async (...attr) => await getDBCollection().find(...attr).toArray(),
        },
        deleteOpatations: {
            deleteOne: async (...attr) => await getDBCollection().deleteOne(...attr),
            deleteMany: async (...attr) => await getDBCollection().deleteMany(...attr),
        },
        insertOpatarions: {
            insertOne: async (...attr) => await getDBCollection().insertOne(...attr),
            insertMany: async (...attr) => await getDBCollection().insertMany(...attr),
        },
        remove: async (...attr) => await getDBCollection().remove(...attr),
        renameCollection:  async (...attr) => await getDBCollection().renameCollection(...attr),
        updateOperations: {
            updateOne: async (...attr) => await getDBCollection().updateOne(...attr),
            updateMany: async (...attr) => await getDBCollection().updateMany(...attr),
        },
        findOneAndOperations: {
            findOneAndDelete: async (...attr) => await getDBCollection().findOneAndDelete(...attr),
            findOneAndReplace: async (...attr) => await getDBCollection().findOneAndReplace(...attr),
            findOneAndUpdate: async (...attr) => await getDBCollection().findOneAndUpdate(...attr),
        }

    }
    return operations 
}


module.exports = {basicDBCollactionOperations, generateDBOperation};