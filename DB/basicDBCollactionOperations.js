

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

const fromDBObjToArray = async (DBObj) =>{
    const arr = await DBObj.toArray()
    return arr
}

const basicDBCollactionOperations = async (collactionName) =>  {

    const getDBCollection = async () => await getWantedCollection(collactionName)
    const collection = await getDBCollection()

    const operations = {

        countDocuments: async (...attr) => collection.countDocuments(...attr),
        findOne: async (...attr) => {
            const [queryObj, projectionObj] = [ ...attr ]

            const DBObj = collection.findOne(queryObj,{projection:projectionObj})
            // const DBObj = collection.findOne(attr[0], {projection:(attr)[1]})
            return DBObj
            // const resultArr = await fromDBObjToArray(DBObj)
            // return resultArr
        },
        find: async (...attr) => {
            const DBObj = collection.find(...attr)
            const resultArr = await fromDBObjToArray(DBObj)
            return resultArr
        },
        deleteOne: async (...attr) => collection.deleteOne(...attr),
        deleteMany: async (...attr) => collection.deleteMany(...attr),
        insertOne: async (...attr) => collection.insertOne(...attr),
        insertMany: async (...attr) => collection.insertMany(...attr),
        remove: async (...attr) => collection.remove(...attr),
        renameCollection:  async (...attr) => collection.renameCollection(...attr),
        updateOne: async (...attr) => collection.updateOne(...attr),
        updateMany: async (...attr) => collection.updateMany(...attr),
        findOneAndDelete: async (...attr) => collection.findOneAndDelete(...attr),
        findOneAndReplace: async (...attr) => collection.findOneAndReplace(...attr),
        findOneAndUpdate: async (...attr) => collection.findOneAndUpdate(...attr),

    }
    return operations 
}


module.exports = {basicDBCollactionOperations, generateDBOperation};