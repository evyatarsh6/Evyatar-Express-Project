
const dbTODOS = require('./DBInstance').dbConnection;


const getWantedCollection = async (collectionName) => {

    const wantedCollection = await dbTODOS.collection(collectionName);

    return wantedCollection
}

const getWantedDocumentsFromCollec = async (collectionName,query) => {

    const collection = await getWantedCollection(collectionName)
    
    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

