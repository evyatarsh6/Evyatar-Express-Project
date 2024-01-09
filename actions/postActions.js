const { getWantedCollection } = require('./getActions');

const postWantedCollection = async (collectionName, data, numItems = 1) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);

        if (numItems !== 1) {
            await wantedCollection.insert(data);
        } else {
            await wantedCollection.insertOne(data);
        }

    } catch (error) {
        console.error("Error in postWantedCollection:", error);
        throw error;
    }
};

module.exports = { postWantedCollection };
