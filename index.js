const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./createDB');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');


app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  if (db) {
    console.log(db)
  }
  
});