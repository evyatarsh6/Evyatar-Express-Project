const { getWantedCollection } = require('./getActions');

const patchWantedCollection = async (collectionName, query, data, isMulti) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);
        const updateFieldsAction = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

        if (isMulti) {
            await wantedCollection.updateMany(query,updateFieldsAction );
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
