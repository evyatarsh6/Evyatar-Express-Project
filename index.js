const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');
const updateAllTODOS = require('./routes/updateAllTODOS')
const updateWantedTODO = require('./routes/updateWantedTODO')
const getTODOByHoverID = require('./routes/getTODOByHoverID')
const deleteAllTODOS = require('./routes/deleteAllTODOS')
// const getTODOSLocation = require('./routes/getTODOSLocation')


const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)
app.use('/updateWantedTODO', updateWantedTODO)
app.use('/updateAllTODOS', updateAllTODOS)
app.use('/getTODOByHoverID', getTODOByHoverID)
// app.use('/getTODOSLocation', getTODOSLocation)



app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
})