const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const changLogMiddleware = require('./middlewares/changeLogMiddleware')

const getVisibleTODOS = require('./routes/getvisibleTODOS');
const getTODOByHoverID = require('./routes/getTODOByHoverID')
const getAllTODOS = require('./routes/getAllTODOS')
const getDeltas = require('./routes/getDeltas')
const postTODO = require('./routes/postTODO');
const patchFieldWantedTODO = require('./routes/patchFieldWantedTODO')
const putWantedTODO = require('./routes/putWantedTODO')

// const patchFieldAllTODOS = require('./routes/patchFieldAllTODOS')
// const { postWantedCollection } = require('../Evyatar-Express-Project/actions/postActions');
// const { error } = require('console');
// const deleteAllTODOS = require('./routes/deleteAllTODOS')


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use(async (req, res, next) => changLogMiddleware(req, res, next));


app.use('/postTODO', postTODO)
app.use('/patchFieldWantedTODO', patchFieldWantedTODO)
app.use('/putWantedTODO', putWantedTODO )
app.use('/getShownTODOS', getVisibleTODOS)
app.use('/getAllTODOS', getAllTODOS)
app.use('/getTODOByHoverID', getTODOByHoverID)
// app.use('/patchFieldAllTODOS', patchFieldAllTODOS)
// app.use('/deleteAllTODOS', deleteAllTODOS)



app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
})