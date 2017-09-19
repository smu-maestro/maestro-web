<template>
  <div class="above-fold">
    	<header class="site-header">
				<img class="site-brand" src="../assets/maestro-m-icon.svg" width="40" aria-label="Maestro">
			</header>
      <section class="lesson">
        <div class="lesson-title-card">
          <h2 class="lesson-title-detail">Introduction · Lesson {{ lesson.number }}</h2>
          <h1 class="lesson-title-text">{{ lesson.title }}</h1>
          <div class="lesson-title-icon">
							<img src="../assets/quarter-note.png" width="128">
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
      card:0
    }
  },
  methods: {
    next() {
       this.$router.push({name: 'Lesson'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lesson {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 1rem 1rem;
}

.lesson-title-card {
	flex: 1;
	padding: 3rem 1rem 0;
	background-color: #F3F3F3;
	display: flex;
	flex-direction: column;
}

.lesson-title-card-content {
	flex: 1;
}

.lesson-title-card-bar {
	flex: 0;
	padding: 0 0 1rem;
	text-align: right;
}

.lesson-title-detail {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 400;
	opacity: 0.6;
	margin-bottom: 0.5rem;
}

.lesson-title-text {
	font-family: 'Montserrat', sans-serif;
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 0;
}

.button {
  background-color:transparent;
}

.site-header {
  	padding: 1rem 1rem 1rem;
}
</style>
