

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const { getWantedDocumentsFromCollec } = require('../actions/getActions');
const { postWantedCollection } = require('../actions/postActions');
const { error } = require('console');
const {fromDBObjToArray} = require('../utils/generalUtils')


const changeLog = async (req,res,next) => {
    const allowedMethods = ['PATCH', 'PUT', 'POST', 'Delete'];
    const changeTimeStamp = new Date()
    const changeLogID = Date.now()

    if (allowedMethods.includes(req.method)) {
        
        if (req.method === 'POST') {
            const {_id, kind} =  req.body
            const updateChangeLog = await postWantedCollection(
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

            const {_id} =  req.body
            const updateChangeLog = await postWantedCollection(
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

            const {_id, wantedField, wantedFieldUpdateVal} =  req.body

            const WantedDocuQuery = {
            _id: _id
            }
            const prevValueProjection = {
            [wantedField]: 1
            }

            const prevValueDBObj = await getWantedDocumentsFromCollec
            (
                'TODOS', WantedDocuQuery, prevValueProjection
            )

            const prevValue = await fromDBObjToArray(prevValueDBObj)
            const updateChangeLog = await postWantedCollection(
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
                
            })

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