import { connectToDatabase } from "./connectToDB";

export const getWantedCollection = async(collectionName) => {

    const db = connectToDatabase()

    const wantedCollection = db.collection(collectionName);

    return wantedCollection
}