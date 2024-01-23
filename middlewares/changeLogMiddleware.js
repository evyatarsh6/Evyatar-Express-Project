
const changeLog = async (req,res,next) => {
    const allowedMethods = ['PATCH', 'PUT', 'POST', 'Delete'];
    const chnageLogID = new Date()

    if (allowedMethods.includes(req.method)) {
        
        if (req.method === 'Post') {
            const {_id, kind} =  req.body
            const updateChangeLog = await postWantedCollection(
            'changeLog',
            {
                changeID :chnageLogID,
                changeType : 'Post',
                TODOID : _id,
                TODOKind:  kind,
                timeStanp :chnageLogID
                
            }
            )

            if (updateChangeLog) {
            console.log('update changeLog succeed')
            }
            else{
            console.error('update changeLog faild')
            throw error
            }
        }

        else if (req.method === 'PUT') {

            const {_id} =  req.body
            const updateChangeLog = await postWantedCollection(
            'changeLog',
            {
                changeID :chnageLogID,
                changeType : 'Post',
                TODOID : _id,
                timeStanp :chnageLogID
                
            }
            )

            if (updateChangeLog) {
            console.log('update changeLog succeed')
            }
            else{
            console.error('update changeLog faild')
            throw error
            }
        }

        else if (req.method === 'Patch') {

            const {_id, wantedField, wantedFieldUpdateVal} =  req.body

            const WantedDocuQuery = {
            _id: _id
            }
            const prevValueProjection = {
            [wantedField]: 1
            }

            const prevValue = await getWantedDocumentsFromCollec('TODOS', WantedDocuQuery, prevValueProjection)
            
            const updateChangeLog = await postWantedCollection(
            'changeLog',
            {
                changeID :chnageLogID,
                TODOID : _id,
                changedField: wantedField,
                values: {
                prevValue : prevValue,
                newValue : wantedFieldUpdateVal
                },
                timeStanp :chnageLogID
                
            }
            )

            if (updateChangeLog) {
            console.log('update changeLog succeed')
            }
            else{
            console.error('update changeLog faild')
            throw error
            }
        }
    }
    next()
}


module.exports = changeLog;