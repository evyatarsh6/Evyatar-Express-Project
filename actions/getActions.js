const connectToMongo = require('../initDB');

let db = null;

const getWantedCollection = async (collectionName) => {
    try {
        if (!db) {
            db = await connectToMongo();
        }
        return db.collection(collectionName).toArray();
    } catch (error) {
        console.error("Error in getWantedCollection:", error);
        throw error;
    }
};

const getWantedDocumentsFromCollec = async (collectionName,query) => {
    try {
        const collection = await getWantedCollection(collectionName)
        const wantedDocuments = await collection.find(query).toArray() 
    
        return wantedDocuments
        
    } catch (error) {

        console.error("Error in getWantedDocumentsFromCollec:", error);
        throw error;
    }
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

