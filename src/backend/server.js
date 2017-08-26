const express = require('express')
const ParseServer = require('parse-server').ParseServer;
const app = express()
const PORT = 3308
const HOST = 'maestro.dev'

app.get('/', function (req, res) {
    res.send('Hello ParseServer!')
})

var api = new ParseServer({
    databaseURI: 'mongodb://mongo-db:27017/dev', // Connection string for your MongoDB database
    // cloud: '/home/src/app/cloud/main.js', // Absolute path to your Cloud Code
    appId: 'maestro',
    masterKey: 'orange', // Keep this key secret!
    // fileKey: 'optionalFileKey',
    serverURL: `http://${HOST}:${PORT}/parse` // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(PORT, function() {
    console.log('parse-server-example running on port 3308.');
});
