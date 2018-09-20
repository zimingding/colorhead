const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const convert = require('./convert');

app.use(express.static('public'));
app.use(bodyParser.text())

app.get('/', (req, res) => res.sendFile('index.html'));
app.post('/', (req, res) => {
  var output = convert(req.body);
  console.log(output);
  res.json(JSON.stringify({foo: 1}));
});

app.listen(8080, () => console.log('Http server listening at http://localhost:8080/'));