const Parse = require('parse/node');
const requireDir = require('require-dir');

Parse.initialize('maestroBackend');
Parse.serverURL = 'http://localhost:1337/parse';
Parse.masterKey = 'qwertyuiop';

var load = () => {
  const lessons = requireDir('./lessons/demo');
  Object.values(lessons).forEach((lesson) => {
    var parseLesson = Parse.Object.extend('lesson');
    console.log(lesson);
    var newLesson = new parseLesson();
    for(prop in lesson){
      newLesson.add(prop, lesson[prop]);
    }
    newLesson.save();
  });
}

load();