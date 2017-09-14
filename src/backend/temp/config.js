const Parse = require('parse/node');
const requireDir = require('require-dir');
const _ = require('lodash');

class Lesson extends Parse.Object{
  constructor() {
    super('Lesson');
  }
}

class Quiz extends Parse.Object{
  constructor() {
    super('Quiz');
    this.type = 'quiz';
  }
}

class Content extends Parse.Object{
  constructor() {
    super('Content');
    this.type = 'content';
  }
}

class Persistence extends Parse.Object{
  constructor() {
    super('Persistence');
  }
}

class Profile extends Parse.Object{
  constructor() {
    super('Progress');
  }
}


var loadData = () => {
  var lesson = require('./lessons/lesson_1');
  var content = _.omit(lesson, 'quiz');
  var quiz = lesson.quiz;
  var newQuiz = new Quiz();

  for(var i = 0; i < quiz.length; i++){
    quiz[i].lessonNumber = content.number;
    for(prop in quiz[i]){
      newQuiz.add(prop, quiz[i].prop);
    }
  }
console.log(newQuiz);
  newQuiz.save();

  var newLesson = new Lesson();
  for(prop in content){
    newLesson.add(prop, content[prop]);
  }
  newLesson.save();
  
}

Parse.initialize('maestroBackend');
Parse.masterKey = 'qwertyuiop';
Parse.serverURL = 'http://localhost:1337/parse';
loadData();

