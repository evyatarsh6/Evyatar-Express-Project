const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const getVisibleTODOS = require('./routes/getvisibleTODOS');
const getTODOByHoverID = require('./routes/getTODOByHoverID')
const getAllTODOS = require('./routes/getAllTODOS')
const getDeltas = require('./routes/getDeltas')
// const patchFieldAllTODOS = require('./routes/patchFieldAllTODOS')
const postTODO = require('./routes/postTODO');
const patchFieldWantedTODO = require('./routes/patchFieldWantedTODO')
const putWantedTODO = require('./routes/putWantedTODO')
const { postWantedCollection } = require('../Evyatar-Express-Project/actions/postActions');
// const deleteAllTODOS = require('./routes/deleteAllTODOS')


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/changeLog', async (req, res, next) => {

  const allowedMethods = ['PATCH', 'PUT', 'POST', 'Delete'];
  const chnageLogID = new Date()
  if (req.method === 'Post') {

    const {_id} =  req.body

    const updateChangeLog = await postWantedCollection(
      'changeLog',
      {
        changeID :chnageLogID,
        TODOID : _id,
        // changedField: wantedField,
        // values: {
        //   prevValue : null,
        //   newValue : wantedFieldUpdateVal
        // },
        timeStanp :chnageLogID
        
      }
    )
  }




  // if (allowedMethods.includes(req.method)) {
  
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
    next();
  // }
  // else{
  //   next()
  // }
});


app.use('/postTODO', postTODO)
app.use('/patchFieldWantedTODO', patchFieldWantedTODO)
// app.use('/patchFieldAllTODOS', patchFieldAllTODOS)
app.use('/putWantedTODO', putWantedTODO )
app.use('/getShownTODOS', getVisibleTODOS)
app.use('/getAllTODOS', getAllTODOS)
app.use('/getTODOByHoverID', getTODOByHoverID)
// app.use('/deleteAllTODOS', deleteAllTODOS)



app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
})