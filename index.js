const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const getDB =  require('./getDB')
const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())




app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)


// app.use('/addTODO',(req, res) => {
//   res.send('avi').status(200);
// })

app.use('/shownTODOS/:filterKind', async (req, res) => {
  const filterKind = req.params.filterKind
  const database = await getDB();
  console.log('Collection exists:', collectionExists);
  // res.send(database).status(200);
});



app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
})