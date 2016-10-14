const http = require('http');
const path = require('path');

const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  res.render('index.ejs', { names: ['Dorian', ' Penaloza'] });
});

// app.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
