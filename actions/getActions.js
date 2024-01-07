
const DataBase = require("./DBInstance").DBInstance

const getWantedCollection = async (collectionName) => {

    const wantedCollection = await DataBase.collection(collectionName);

    return wantedCollection
}

const getWantedDocumentsFromCollec = async (collectionName,query) => {

    const collection = await getWantedCollection(collectionName)
    
    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

