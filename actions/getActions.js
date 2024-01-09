
const getDB =  require('../getDB')



const getWantedCollection = async (collectionName) => {
    
    const database = await getDB();

    const wantedCollection = await database.collection(collectionName);

    return wantedCollection
}

const getWantedDocumentsFromCollec = async (collectionName,query) => {

    const collection = await getWantedCollection(collectionName)
    
    const wantedDocuments = await collection.find(query) 

    return wantedDocuments
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

