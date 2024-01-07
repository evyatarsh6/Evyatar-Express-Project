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
                // $and: [{"isDeleted": false}]
    } 
}


module.exports = {generateFilterKindQuery}