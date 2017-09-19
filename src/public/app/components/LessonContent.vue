<template>
        <div class="lesson-content-card">
          <div class="lesson-content-image">
							<img v-if="card.image"  :src= "card.image" class="lesson-img">
					</div>
          <div class="lesson-body">
            <p class="lesson-content-text"> {{ card.text }}</p>
            <audio class="lesson-content-audio" v-if="card.audio" id="player" controls>
              <source :src="card.audio" type="audio.mp3">
            </audio>
          </div>
        </div>
</template>



<script>
import ProgressBar from './ProgressBar.vue';

var lesson = { 
  title: 'Lesson 1',
  number: '1',
  content: 
   [ { type: 'content',
       text: 'The staff is a tool to graphically represent music. It consists of 5 lines and 4 spaces on which to plot notes. Each line or space represents a letter in the musical alphabet',
       image: 'assets/lesson1/staff.png' },
     { type: 'content',
       text: 'There are 7 letters that make up the musical alphabet: A, B, C, D, E, F, G. Progressing through all 7 notes in order makes a scale. The letters restart after G, so the note after G is always A. The simplest scale is the C Major Scale: C, D, E, F, G, A, B, C',
       image: 'assets/lesson1/scale.jpg' },
     { type: 'content',
       text: 'Just as there are beats to denote the sound of a note, there must be a symbol for the absence of music, or a “rest.” A rest means no notes are played, and it follows its own tree. A good way to remember a whole rest versus a half rest is “a whole (full) gentleman takes his hat off, whereas only half a gentleman keeps his hat on his head.” Or a hole goes in the ground (the whole rest block goes below the line).',
       image: 'assets/lesson1/clefs.png' },
     { type: 'content',
       text: 'Another annotation to music that does not affect how it is read, but you will see in music is “barring.” With beat values of 8th and below, one can group the notes using a bar, as seen above. With barred 16th notes, there is merely another line in the bar. ',
       image: 'assets/lesson1/ledger.jpg' },
    { type: 'content',
       text: 'Sharps and flats are notations in music that modify the note’s pitch by a half-step. Sharp means a half-step higher and flat means a half-step lower. Accidentals are the small symbols that appear before note-heads in the piece. Sharps and flats also appear in the key signature at the beginning of a piece. ',
       image: 'assets/lesson1/accidentals.jpg' },
    { type: 'content',
       text: 'Sharps and flats are notations in music that modify the note’s pitch by a half-step. Sharp means a half-step higher and flat means a half-step lower. Accidentals are the small symbols that appear before note-heads in the piece. Sharps and flats also appear in the key signature at the beginning of a piece. ',
       image: 'assets/lesson1/amajor.png' },
     { type: 'quiz',
       question: 'What is this beat?',
       image: 'http://localhost:1337/static/lesson_2/quiz0.png',
       answers: [Array] },
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
  name: 'LessonContent',
  data: function () {
    return {
      lesson:lesson,
      cardNum:0
    }
  },
  props: ['card'],
  mounted: function(){
    console.log("text: " + this.card.text);
  },
  methods:{
    next() {
      console.log(this.card.length);
      console.log(this.card.content[(this.cardNum+1)].type);
      if( (this.cardNum+1) < this.card.length && this.card.type=='content' ) {
        console.log("in cardhi");
        this.cardNum = this.cardNum+1; 

      } else {
        this.$router.push({name: 'Quiz'});
        console.log("ine lse");
      }
    }
  },
  components: {
    'progress-bar': ProgressBar
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  display:block;
  margin:auto;
  width:400px;
}
.lesson {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 1rem 1rem;
}

.lesson-content-card {
	flex: 1;
	padding: 3rem 1rem 0;
	background-color: #F3F3F3;
	display: flex;
	flex-direction: column;
}

.lesson-content-card-content {
	flex: 1;
}

.lesson-content-card-bar {
	flex: 0;
	padding: 0 0 1rem;
	text-align: right;
}

.lesson-content-detail {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 400;
	opacity: 0.6;
	margin-bottom: 0.5rem;
}

.lesson-content-title {
	font-family: 'Montserrat', sans-serif;
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 0;
}

.button {
  background-color:transparent;
}
</style>
