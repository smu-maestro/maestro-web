const express = require('express');
const ParseServer = require('parse-server').ParseServer;
var app = express();

const dbURI = process.env.PARSE_SERVER_DATABASE_URI || 'mongodb://mongo-db:27017/dev';
const master = process.env.PARSE_SERVER_MASTER_KEY || 'orange';
const serverUrl = process.env.PARSE_SERVER_URL || 'http://localhost:3308/parse';
const appID = process.env.PARSE_SERVER_APPLICATION_ID || 'maestro';
const port = process.env.PORT || 3308;

var api = new ParseServer({
  databaseURI: dbURI,
  cloud: './cloud/main.js',
  appId: appID,
  masterKey: master, // Keep this key secret!
  serverURL: serverUrl
});

app.use('/static', express.static('public'));
app.use('/parse', api);

app.listen(port, () => {
  console.log('shits running fam');
});
