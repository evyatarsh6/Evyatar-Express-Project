const { getWantedCollection } = require('./getActions');

const patchWantedCollection = async (collectionName, query, data, numItems = 1) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);
        const updateFieldsAction = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

        if (numItems !== 1) {
            await wantedCollection.update(query,updateFieldsAction );
        } else {
            await wantedCollection.updateOne(query, updateFieldsAction);
        }
        return true
    } 
    catch (error) {
        console.error("Error in patchWantedCollection:", error);
        throw error;
    }
};

module.exports = { patchWantedCollection };
