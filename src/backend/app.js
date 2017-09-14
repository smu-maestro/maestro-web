const express = require('express');
const ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  cloud: './cloud/main.js',
  appId: 'maestroBackend',
  masterKey: 'qwertyuiop', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse'
});

app.use('/static', express.static('public'));
app.use('/parse', api);

app.listen(1337, () => {
  console.log('shits running fam');
});
