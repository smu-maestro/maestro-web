<template>
  <div>
      <section class="lesson">
        <div class="lesson-title-card">
          <div class="lesson-content">
            <h2 class="lesson-title-detail">Introduction · Lesson {{ lesson.number }}</h2>
            <h1 class="lesson-title-text">{{ lesson.title }}</h1>
            <div class="lesson-title-icon">
                <img src="../assets/quarter-note.png" width="128">
            </div>
          </div>
          <div class="lesson-title-card-bar">
            <button class="button link-button big-button" @click="next">Start</button>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
var lesson = { 
  title: 'Lesson 1',
  number: '1',
  content: 
   [ { type: 'content',
       text: 'Rhythm in music is defined by beat values. These symbols represent different proportions of duration. A whole note is divided into half notes, which are then divided into quarter notes, etc. Each level in the beat tree is exactly half the duration of the note it stems from.',
       image: 'http://localhost:1337/static/lesson_2/card0.jpg' },
     { type: 'content',
       text: 'A slight addition to the note tree is the concept of “dotting.” When you put a dot after a note, you add half its duration to the beat value. Therefore, dotting a quarter note adds an eighth note to it. A dotted whole note is a whole note plus a half note. You take the value of the next beat down on the beat tree and add it.',
       image: 'http://localhost:1337/static/lesson_2/card1.png' },
     { type: 'content',
       text: 'Just as there are beats to denote the sound of a note, there must be a symbol for the absence of music, or a “rest.” A rest means no notes are played, and it follows its own tree. A good way to remember a whole rest versus a half rest is “a whole (full) gentleman takes his hat off, whereas only half a gentleman keeps his hat on his head.” Or a hole goes in the ground (the whole rest block goes below the line).',
       image: 'http://localhost:1337/static/lesson_2/card2.png' },
     { type: 'content',
       text: 'Another annotation to music that does not affect how it is read, but you will see in music is “barring.” With beat values of 8th and below, one can group the notes using a bar, as seen above. With barred 16th notes, there is merely another line in the bar. ',
       image: 'http://localhost:1337/static/lesson_2/card3.jpg' },
     { type: 'quiz',
       question: 'What is this beat?',
       image: 'http://localhost:1337/static/lesson_2/quiz0.png',
       answers: [  
         { answer: 'Whole note', correct: false },
         { answer: 'Half note', correct: false },
         { answer: 'Quarter note', correct: true },
         { answer: 'Eighth note', correct: false    } 
        ],
     },
     { type: 'quiz',
       question: 'What is this rest?',
       image: 'http://localhost:1337/static/lesson_2/quiz1.gif',
       answers: [Array] },
     { type: 'quiz',
       question: 'How many eighth notes are in this beat?',
       image: 'http://localhost:1337/static/lesson_2/quiz2.gif',
       answers: [Array] } ],
};

export default {
  name: 'LessonTitle',
  data () {
    return {
      lesson:lesson,
      current:0,
      card:0
    }
  },
  props: [ 'num' ],
  mounted() {
    this.current = this.num;
    var query = new Parse.Query('lesson');
    query.equalTo('number',`${this.current}`);
		query.first().then( result => {
        this.lesson = result.attributes;
    }).catch((err) => {
      console.error(err);
    })
  },
  methods: {
    next() {
       this.$router.push({name: 'Lesson', num:this.current});
    }

  }
}
</script>

