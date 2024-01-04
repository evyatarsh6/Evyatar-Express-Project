const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())
const visibleTODOS = require('./routes/visibleTODOS');
const addTODO = require('./routes/addTODO');



app.use('/addTODO', addTODO)
app.use('/shownTODOS', visibleTODOS)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


















// app.get('/', (req, res) => {
//   res.send('Got a GET request');
// });

// app.post('/', (req, res) => {
//   res.send('Got a POST request');
// });

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user');
// });

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user');
// });