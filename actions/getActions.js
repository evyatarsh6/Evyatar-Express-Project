
const connectToDatabase = require("./connectToDB") 

const getWantedCollection = async(collectionName) => {

    const db = connectToDatabase()

    const wantedCollection = db.collection(collectionName);

    return wantedCollection
}

const getWantedDocumentsFromCollec = async(collectionName,query) => {

    const collection = getWantedCollection(collectionName)
    
    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

module.exports = {getWantedCollection,  getWantedDocumentsFromCollec}

