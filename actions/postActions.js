const getWantedCollection = require("./getActions") 

 const postWantedCollection = async(collectionName, data, numItems = 1 ) => {

    const wantedCollection = getWantedCollection(collectionName)
    
    if (numItems!==1) {
        wantedCollection.insert(data)
    }
    else{
        wantedCollection.insertOne(data)
    }

    // return wantedCollection
}


module.exports = {postWantedCollection}