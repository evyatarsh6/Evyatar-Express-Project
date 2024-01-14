const getDB = require('../getDB');

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

const getWantedDocumentsFromCollec = async (collectionName,query) => {
    try {
        const collection = await getWantedCollection(collectionName)
        const wantedDocuments = await collection.find(query)
    
        return wantedDocuments
        
    } catch (error) {

        console.error("Error in getWantedDocumentsFromCollec:", error);
        throw error;
    }
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

