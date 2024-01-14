const { getWantedDocumentsFromCollec } = require('./getActions');

const patchWantedCollection = async (collectionName, query, data, numItems = 1) => {
    try {
        const wantedDocuments = await getWantedDocumentsFromCollec(collectionName, query);

        if (numItems !== 1) {
            await wantedDocuments.update({ $set: {[data.wantedField]: data.wantedFieldUpdateVal }});
        } else {
            await wantedDocuments.updateOne({ $set: {[data.wantedField]: data.wantedFieldUpdateVal }});
        }
        return true
    } 
    catch (error) {
        console.error("Error in patchWantedCollection:", error);
        throw error;
    }
};

module.exports = { patchWantedCollection };
