const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const getDB =  require('./getDB')
const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');
const { generateFilterKindQuery } = require('./queries/queries');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())




app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)

// app.use('/shownTODOS/:filterKind', async (req, res) => {
//   const database = await getDB();
//   console.log('Collection exists:', database);

//   const filterKind = req.params.filterKind
//   const query = generateFilterKindQuery(filterKind)
//   const updateData = database.collection
//   res.send(database).status(200);
// });



app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
})