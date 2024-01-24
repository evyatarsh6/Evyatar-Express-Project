const { error } = require('console');
const {generateDBOperation} = require('../DB/basicDBCollactionOperations');
const { fromDBObjToArray } = require('../utils/generalUtils');



const changeLog = async (req,res,next) => {
    const allowedMethods = ['PATCH', 'PUT', 'POST', 'DELETE'];

    const changeTimeStamp = new Date()
    const changeLogID = Date.now()

    if (allowedMethods.includes(req.method)) {
        
        if (req.method === 'POST') {
            const { _id, kind } = req.body || {};
            const updateChangeLog = await generateDBOperation(
                'insertOne',
                'changeLog',
                {
                _id :changeLogID,
                changeType : 'POST',
                TODOID : _id,
                TODOKind:  kind,
                timeStanp :changeTimeStamp
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

            const {_id} =  req.body || {}

            const updateChangeLog = await generateDBOperation(
                'insertOne',
                'changeLog',
                {
                    _id :changeLogID,
                    changeType : 'PUT',
                    TODOID : _id,
                    timeStanp :changeTimeStamp
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

        else if (req.method == 'PATCH') {

            const {_id, wantedField, wantedFieldUpdateVal} =  req.body || {}

            const WantedDocuQuery = {
            _id: _id
            }
            const prevValueProjection = {
            [wantedField]: 1, 
            _id:0
            }

            const prevWantedValueObj = await generateDBOperation(
                'findOne',
                'TODOS',               
                WantedDocuQuery,
                prevValueProjection
            )

            console.log(prevWantedValueObj)
            const prevValue = prevWantedValueObj[wantedField]

            const updateChangeLog = await generateDBOperation(
                'insertOne',
                'changeLog',
                {
                    _id :changeLogID,
                    changeType : 'PATCH',
                    TODOID : _id,
                    changedField: wantedField,
                    values: {
                    prevValue : prevValue,
                    newValue : wantedFieldUpdateVal
                    },
                    timeStanp :changeTimeStamp
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