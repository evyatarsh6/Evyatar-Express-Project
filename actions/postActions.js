const getWantedCollection = require("./getActions") 

 const postWantedCollection = async (collectionName, data, numItems = 1 ) => {

    const wantedCollection = await getWantedCollection(collectionName)
    
    if (numItems!==1) {
        wantedCollection.insert(data) 
    }
    else{
        wantedCollection.insertOne(data)
    }
}


module.exports = {postWantedCollection}