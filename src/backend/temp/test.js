const Parse = require('parse/node');
const requireDir = require('require-dir');

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

// fuck();

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

var ass = () => {
  var parseLesson = Parse.Object.extend('lesson');
  var parseQuiz = Parse.Object.extend('quiz');
  var lessons = requireDir('../lessons/demo');
  for (lessonName in lessons) {
    let lesson = lessons[lessonName];
    var newLesson = new parseLesson();
    for (prop in lesson) {
      newLesson.set(prop, lesson[prop]);
    }
    newLesson.save()
      .then((savedLesson) => {
        var quiz = require(`./quiz/${lessonName}.json`);
        var newQuiz = new parseQuiz();
        for (prop1 in quiz) {
          newQuiz.set(prop1, quiz[prop1]);
        }
        newQuiz.set('lessonId', savedLesson.id);
        return newQuiz.save();
      })
      .then((savedQuiz) => {
        console.log('saved quiz fam');
      })
      .catch((err) => {
        console.error('shits broke fam');
      });
  }
}

ass();