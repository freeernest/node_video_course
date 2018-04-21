var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const data = 'hi';

app.get('/', function (req, res) {
  res.render('index', {data: data});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
