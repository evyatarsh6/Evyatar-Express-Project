const { getWantedCollection } = require('./getActions');

const patchWantedCollection = async (collectionName, query, data, isMulti) => {
    try {
        const wantedCollection = await getWantedCollection(collectionName);
        const updateFieldsAction = { $set: {[data.wantedField]: data.wantedFieldUpdateVal}}

        if (isMulti) {

            const result =  await wantedCollection.updateMany(query,updateFieldsAction );
            // if (result.acknowledged) {
            //     return true
            // }
            if (result) {
                res.send('update successful');
                }
            else {
                res.status(404).send('No document found for update');
            }


        } else {
            const result =  await wantedCollection.updateOne(query, updateFieldsAction);
            // if (result.acknowledged) {
            //     return true
            // }
            if (result) {
                res.send('update successful');
                }
            else {
                res.status(404).send('No document found for update');
            }

        }
    } 
    catch (error) {
        if (error instanceof MongoError) {
            // Handle MongoDB-related errors
            console.error("MongoDB Error in patchWantedCollection:", error);
        } else {
            // Handle other errors
            console.error("Error in patchWantedCollection:", error);
        }
        throw error;
    }
    
};

module.exports = { patchWantedCollection };
