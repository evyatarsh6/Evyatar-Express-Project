
const DataBase = require("./DBInstance")

const getWantedCollection = async (collectionName) => {

    const wantedCollection = DataBase.collection(collectionName);

    return wantedCollection
}

const getWantedDocumentsFromCollec = async (collectionName,query) => {

    const collection = await getWantedCollection(collectionName)
    
    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

