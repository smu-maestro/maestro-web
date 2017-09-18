const Parse = require('parse/node');

Parse.initialize('maestroBackend');
Parse.masterKey = 'qwertyuiop';
Parse.serverURL = 'http://localhost:1337/parse';

var fuck = () => {
  var query1 = new Parse.Query('lesson');
  query1.find()
  .then((results) => {
    results.forEach((result) => {
      console.log(`Title: ${result.attributes.title}, ObjectId: ${result.id}`);
    });
  });
}

fuck();

var shit = () => {
  var query = new Parse.Query('lesson');
  query.find().then((results) => {
    console.log('inside promise 1');
    console.log(results[0].id);
    return query.get(results[0].id);
  }).then((result) => {
    console.log('inside promise 2');
    console.log(result.attributes);
  });
}

// shit();

// var ass = () => {

// }