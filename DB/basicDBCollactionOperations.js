

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const getDB = require('./getDB');


const getWantedCollection = async (collectionName) => {

    let db = null;
    try {
        db = await getDB()
        const wantedCollection = await db.collection(collectionName) 
        return wantedCollection
    } catch (error) {
        console.error(`Error in the ${operationType} operation in ${collectionName} collection:`, error);
        throw error;
    }
};



const generateDBOperation = async (operationType, collectionName, ...attr) => {
    try {
        const operationsCollection =  await basicDBCollactionOperations(collectionName);
        const wantedAction = operationsCollection[operationType];
        return await wantedAction(...attr);
    } catch (error) {
        console.error(`Error in the ${operationType} operation in ${collectionName} collection:`, error);
        throw error;
    }
};

const basicDBCollactionOperations = async (collactionName) =>  {

    const getDBCollection = async () => await getWantedCollection(collactionName)
    
    const operations = {

        countDocuments: async (...attr) => await getDBCollection().countDocuments(...attr),
        findOne: async (...attr) => await getDBCollection().findOne(...attr).toArray(),
        find: async (...attr) => await getDBCollection().find(...attr).toArray(),
        deleteOne: async (...attr) => await getDBCollection().deleteOne(...attr),
        deleteMany: async (...attr) => await getDBCollection().deleteMany(...attr),
        insertOne: async (...attr) => await getDBCollection().insertOne(...attr),
        insertMany: async (...attr) => await getDBCollection().insertMany(...attr),
        remove: async (...attr) => await getDBCollection().remove(...attr),
        renameCollection:  async (...attr) => await getDBCollection().renameCollection(...attr),
        updateOne: async (...attr) => await getDBCollection().updateOne(...attr),
        updateMany: async (...attr) => await getDBCollection().updateMany(...attr),
        findOneAndDelete: async (...attr) => await getDBCollection().findOneAndDelete(...attr),
        findOneAndReplace: async (...attr) => await getDBCollection().findOneAndReplace(...attr),
        findOneAndUpdate: async (...attr) => await getDBCollection().findOneAndUpdate(...attr),

    }
    return operations 
}


module.exports = {basicDBCollactionOperations, generateDBOperation};