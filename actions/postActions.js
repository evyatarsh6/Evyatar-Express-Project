const { getWantedCollection } = require('./getActions');

const postWantedCollection = async (collectionName, data, numItems = 1) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);

        if (numItems !== 1) {
            const result = await wantedCollection.insert(data);
            if (result ) {
                return true
            }
            else{
                return false
            }

        } else {
            const result = await wantedCollection.insertOne(data);
            if (result) {
                return true
            }
            else{
                return false
            }
        }
    } 
    catch (error) {
        console.error("Error in postWantedCollection:", error);
        throw error;
    }
};

module.exports = { postWantedCollection };
