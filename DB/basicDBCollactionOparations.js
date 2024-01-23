

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const { getWantedCollection } = require('../actions/getActions');



const generateOparation = async (operationType, collectionName, ...attr) => {
    return await getWantedCollection(collectionName)[operationType](...attr)
    .toArray();
};



const basicDBCollactionOparations = (collactionName) =>  {
    const oparations = {
        
        // countDocuments: generateOparation('countDocuments',collactionName,...attr)
        countDocuments: async (...attr) => await getWantedCollection(collactionName).countDocuments(...attr),
        findOpatations: {
            findOne: async (...attr) => await getWantedCollection(collactionName).findOne(...attr).toArray(),
            find: async (...attr) => await getWantedCollection(collactionName).find(...attr).toArray(),
        },
        deleteOpatations: {
            deleteOne: async (...attr) => await getWantedCollection(collactionName).deleteOne(...attr),
            deleteMany: async (...attr) => await getWantedCollection(collactionName).deleteMany(...attr),
        },
        insertOpatarions: {
            insertOne: async (...attr) => await getWantedCollection(collactionName).insertOne(...attr),
            insertMany: async (...attr) => await getWantedCollection(collactionName).insertMany(...attr),
        },
        remove: async (...attr) => await getWantedCollection(collactionName).remove(...attr),
        renameCollection:  async (...attr) => await getWantedCollection(collactionName).renameCollection(...attr),
        updateOparations: {
            updateOne: async (...attr) => await getWantedCollection(collactionName).updateOne(...attr),
            updateMany: async (...attr) => await getWantedCollection(collactionName).updateMany(...attr),
        },
        findOneAndOparations: {
            findOneAndDelete: async (...attr) => await getWantedCollection(collactionName).findOneAndDelete(...attr),
            findOneAndReplace: async (...attr) => await getWantedCollection(collactionName).findOneAndReplace(...attr),
            findOneAndUpdate: async (...attr) => await getWantedCollection(collactionName).findOneAndUpdate(...attr),
        }

    }
    return oparations
    
}


module.exports = basicDBCollactionOparations;