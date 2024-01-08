const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const dbTODOS = require('./actions/DBInstance').dbConnection;

const app = express();
const port = 3000;

const internals ={}

exports.init = async () => {
    internals.server = app
    internals.db = await dbTODOS()
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');


app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  console.log(internals.db)
  if (dbTODOS) {
    console.log('DB is connected')
  }
  
});