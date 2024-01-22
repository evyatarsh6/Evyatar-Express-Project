const { getWantedCollection } = require('./getActions');

const patchWantedCollection = async (collectionName, query, data, isMulti) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);
        const updateFieldsAction = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

        if (isMulti) {

            const result =  await wantedCollection.updateMany(query,updateFieldsAction );
            if (result) {
                return true
                }
            else {
                return false
            }


        } else {
            const result =  await wantedCollection.updateOne(query, updateFieldsAction);
            if (result) {
                return true
                }
            else {
                return false
            }

        }
    } 
    catch (error) {
        console.error("Error in patchWantedCollection:", error)
        throw error;
    }
    
};

module.exports = { patchWantedCollection };
