const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('<h1 style="color: orange; text-align:center">Tyler Nguyen - V2<h1>');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});