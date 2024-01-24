// const { getWantedCollection } = require('./getActions');

// const putWantedCollection = async (collectionName, query, data, isMulti) => {
//     try {
//         const wantedCollection = await getWantedCollection(collectionName);

//         const updateFieldsAction = { $set: data}

//         if (isMulti) {

//             const result =  await wantedCollection.updateMany(query,updateFieldsAction );
//             if (result) {
//                 return true
//                 }
//             else {
//                 return false
//             }


//         } else {
//             const result =  await wantedCollection.updateOne(query, updateFieldsAction);
//             if (result) {
//                 return true
//                 }
//             else {
//                 return false
//             }

//         }
//     } 
//     catch (error) {
//         console.error("Error in putWantedCollection:", error)
//         throw error;
//     }
    
// };

// module.exports = { putWantedCollection };
