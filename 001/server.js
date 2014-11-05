var debug = require('debug')('001');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);

debug('Server started: http://localhost:3000/');
