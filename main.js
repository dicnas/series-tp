var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('public'));

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ');
});

