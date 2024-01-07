
import { connectToDatabase } from "./connectToDB";


export const getWantedCollection = async(collectionName) => {

    const db = connectToDatabase()

    const wantedCollection = db.collection(collectionName);

    return wantedCollection
}

export const getWantedDocumentsFromCollec = async(collectionName,query) => {

    const collection = getWantedCollection(collectionName)
    
    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

