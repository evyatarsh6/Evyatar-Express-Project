
import { connectToDatabase } from "./connectToDB";


export const getWantedCollection = async(collectionName) => {

    const db = connectToDatabase()

    const wantedCollection = db.collection(collectionName);

    return wantedCollection
}

export const getWantedDocumentsFromCollec = async(collectionName, fieldName, fieldValue) => {

    const collection =  getWantedCollection(collectionName)

    const query = {
        [fieldName]: fieldValue
    }

    const wantedDocuments = collection.find(query) 

    return wantedDocuments
}

