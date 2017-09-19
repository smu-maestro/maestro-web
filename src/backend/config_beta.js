const Parse = require('parse/node');
const requireDir = require('require-dir');

Parse.initialize('maestro');
Parse.serverURL = 'http://maestro-backend:3308/parse';
Parse.masterKey = 'orange';

var load = () => {
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

load();