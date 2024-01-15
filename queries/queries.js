const { ObjectId } = require("mongodb")

const generateFilterKindQuery = (filterKind) => {
    switch (filterKind) {
        case 'normal':
                return {
                    'isDeleted': false
                }
        case 'delete':
            return {
                'isDeleted': true
            } 
        case 'choosen':
            return {
                'isChoosen': true, "isDeleted": false} 
    } 
}

const generateWantedDocuFromIDQuery = _id => {
    return {
        "_id": _id
    }
}


module.exports = {generateFilterKindQuery, generateWantedDocuFromIDQuery}