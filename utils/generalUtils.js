const fromDBObjToArray = async (DBObj) =>{
    const arr = await DBObj.toArray()
    return arr
}

module.exports = {fromDBObjToArray}