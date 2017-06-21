'use strict';
const express = require('express')
const app = express()
const path = require ('path')
const morgan = require('morgan')
const bodyParser = require ('body-parser')
const db = require('./db')

var port = process.env.PORT || 8080;
var server = app.listen(port, function (err) {
  if (err) throw err;
  console.log('HTTP server patiently listening on port', port);
  db.sync()
  .then(function () {
    console.log('Oh and btw the postgres server is totally connected, too');
  });
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname + '/../public')))

app.use('/api', require('./api'))

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname,'../index.html'))
})


module.exports = server;