var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/category', function (req, res) {

  res.send([
    { title: "TVshows", desc: "ingresar imagen" },
    { title: "Peliculas", desc: "ingresar imagen1" },
    { title: "TVshows", desc: "ingresar imagen" },
    { title: "JAQUIShoes", desc: "ingrasdasesar imagen" }
  ]);
});

app.use(express.static('public'));

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ');
});

