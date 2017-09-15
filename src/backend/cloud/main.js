// https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

Parse.Cloud.define('loadLesson', (req, res) => {
  if(!req.params.persistenceID) res.error('No persistenceID sent');
  if(!req.params.lessonNumber) res.error('No lessonNumber sent');

  var persistenceQuery = new Parse.Query('Persistence');
  persistenceQuery.equalTo('id', req.params.persistenceID)
    .first()
    .then((results) => {
      var profileQuery = new Parse.Query('Profile');
      return profileQuery.equalsTo('id', results.profile).first()
    })
    .then((profile) => {
      //if(!profile.quizzes || !profile.quizzes[lessonNumber]){
        var quizQuery = new Parse.Query('Quiz');
        quizQuery.equalsTo('lessonNumber', req.params.lessonNumber)
          .find()
          .then((quizzes) => {
            var lessonQuery = new Parse.Query('Lesson');
            lessonQuery.equalsTo('number', req.params.lessonNumber)
            .first()
            .then((lesson) => {
              var tempLesson = lesson;
              var quizCount = 0;
              for(prop in lesson.content) {
                if(lesson['type'] === 'quiz') quizCount++;
              }
              var randQuizzes = getRandomSubarray(quizzes, quizCount);
              for(prop in tempLesson.content || quizCount) {
                if(tempLesson.content['type'] === 'quiz'){
                  tempLesson.content[prop] = quizzes[quizCount];
                  quizCount--;
                }
              }
              res.success(tempLesson);
            })
            .catch(() => {
              res.error('shits broke');
            })
          })
          .catch(() => {
            res.error('shits broke famerino');
          })

      //} else {
        
        
      //}
    })
    .catch(() => {
      res.error('shits broke fam');
    });  
});

// creates a new persistence object, returns the ID to save in local storage
Parse.Cloud.define('initialize', (req, res) => {
  var Profile = Parse.Object.extend('Profile');
  var profile = new Profile();
  profile.save(null, {
    success: (savedProfile) => {
      const profileID = savedProfile.id;
      var Persistence = Parse.Object.extend('Persistence');
      var persistence = new Persistence();
      persistence.set('profileID', {'__type': 'Pointer', 'className': 'Profile', 'objectId': savedProfile.id});
      persistence.save(null, {
        success: (savedPers) => {
          res.success(savedPers.id); // the ID in question
        },
        error: (savedPers, err) => {
          res.error(err);
        }
      });
    },
    error: (savedProfile, err) => {
      res.error(err);
    }
  });
});