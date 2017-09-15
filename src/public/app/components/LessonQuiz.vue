<template>
    <div class="lesson-content-card">
        <h1 class="lesson-content-title">{{ quiz.title }}</h1>
        <div v-for="(question, i) in quiz.questions">
                <div class="lesson-body">
                    <div class="lesson-content-image">
						<img v-if="question.image"  :src= "question.image" class="lesson-img">
					</div>
                    <audio class="lesson-content-audio" v-if="question.audio" id="player" controls>
                        <source :src="question.audio" type="audio.mp3">
                     </audio>
                </div>
                <div v-show="i === questionIndex">
                    <h2 class="lesson-content-text">{{ question.text }}</h2>
                    <ol>
                        <li v-for="answer in question.answers">
                            <label>
                                <input type="radio" 
                                        v-bind:value="answer.correct" 
                                        v-bind:name="i" 
                                        v-model="userAnswers[i]" > {{answer.text}}
                            </label>
                        </li>
                    </ol>
                     <div class="lesson-title-card-bar">
                        <button class="button link-button big-button" v-if="questionIndex > 0" v-on:click="prev"> prev </button>
                        <button class="button link-button big-button" v-on:click="next"> next </button>
                    </div>
                </div>
            </div>
            <div v-show="questionIndex ===  quiz.questions.length">
                <h2> You finished the quiz </h2>
                <p> Your score is {{ score() }}/{{quiz.questions.length}} </p>
                <button class="button link-button big-button" @click="finish">Finish</button>
            </div>
        </div>
</template>

<script>

var quiz = {
    title: 'Lesson 1',
    questions: [
        {
            text: "What note is this?",
            image: "assets/lesson1/b4_sharp.png",
            answers: [
                {text: 'B4 Sharp', correct: true},
                {text: 'A3 Flat', correct: false},
                {text: 'B4 Flat', correct: false},
                {text: 'None of the above', correct: false},

            ]
        },
        {
            text: "What note is this?",
            image: "assets/lesson1/b4_sharp.png",
            answers: [
                {text: 'C4 Sharp', correct: false},
                {text: 'C4 Flat', correct: true},
                {text: 'A Flat', correct: false},
                {text: 'B Flat', correct: false},

            ]
        },
        {
            text: "Multiple choice question 3",
            answers: [
                {text: 'multiple choice answer 1', correct: false},
                {text: 'multiple choice answer 2', correct: false},
                {text: 'correct choice answer 3', correct: true},
                {text: 'multiple choice answer 4', correct: false},

            ]
        }
    ]
};

export default {
  name: 'LessonQuiz',
  data () {
    return {
        quiz: quiz,
        questionIndex: 0,
        userAnswers: Array(quiz.questions.length).fill(false)
    }
  },
  props: ['card'],
  methods: {
    next: function() {
            this.questionIndex++;
    },
    prev: function() {
            this.questionIndex--;
    },
    score: function() {
            return this.userAnswers.filter(function(v) { return v }).length;
    },
    finish() {
       this.$router.push({name: 'LessonTitle'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
    list-style-type:none;
}

img .lesson{
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

.site-header {
  	padding: 1rem 1rem 1rem;
}
</style>
