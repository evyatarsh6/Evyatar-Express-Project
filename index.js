const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const getVisibleTODOS = require('./routes/getvisibleTODOS');
const getTODOByHoverID = require('./routes/getTODOByHoverID')
const postTODO = require('./routes/postTODO');
const patchFieldAllTODOS = require('./routes/patchFieldAllTODOS')
const patchFieldWantedTODO = require('./routes/patchFieldWantedTODO')
const putWantedTODO = require('./routes/putWantedTODO')
// const deleteAllTODOS = require('./routes/deleteAllTODOS')


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/postTODO', postTODO)
app.use('/getShownTODOS', getVisibleTODOS)
app.use('/patchFieldWantedTODO', patchFieldWantedTODO)
app.use('/patchFieldAllTODOS', patchFieldAllTODOS)
app.use('/getTODOByHoverID', getTODOByHoverID)
app.use('/putWantedTODO', putWantedTODO )
// app.use('/deleteAllTODOS', deleteAllTODOS)



app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
})