const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const changLogMiddleware = require('./middlewares/changeLogMiddleware')

const getTODOByHoverID = require('./routes/getTODOByHoverID')
const getCurrDeltas = require('./routes/getCurrDeltas')
const getAllTODOS = require('./routes/getAllTODOS')
const postTODO = require('./routes/postTODO');
const patchFieldWantedTODO = require('./routes/patchFieldWantedTODO')
const deleteAllDocuWantedCollection = require('./routes/deleteAllDocuWantedCollection')


// const putWantedTODO = require('./routes/putWantedTODO')
// const getVisibleTODOS = require('./routes/getvisibleTODOS');


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use(async (req, res, next) => await changLogMiddleware(req, res, next));


app.use('/postTODO', postTODO)
app.use('/getCurrDeltas', getCurrDeltas)
app.use('/getAllTODOS', getAllTODOS)
app.use('/getTODOByHoverID', getTODOByHoverID)
app.use('/deleteAllDocuWantedCollection', deleteAllDocuWantedCollection)
app.use('/patchFieldWantedTODO', patchFieldWantedTODO)


// app.use('/putWantedTODO', putWantedTODO)
// app.use('/getShownTODOS', getVisibleTODOS)



app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
})