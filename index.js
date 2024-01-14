const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const getDB =  require('./getDB')
const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');
const updateAllTODOS = require('./routes/updateAllTODOS')
const updateWantedTODO = require('./routes/updateWantedTODO')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)
app.use('/updateWantedTODO', updateWantedTODO)
app.use('/updateAllTODOS', updateAllTODOS)



app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
})