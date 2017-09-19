<template>
    <div class="lesson-content">
            <div class="lesson-body">
                <div class="lesson-content-image">
					<img v-if="this.card.image"  :src= "this.card.image" class="lesson-img">
				</div>
                <audio class="lesson-content-audio" v-if="card.audio" id="player" controls>
                        <source :src="card.audio" type="audio.mp3">
                </audio>
                </div>
                <h2 class="lesson-quiz-question">{{ card.question }}</h2>
                <div v-for="answer in card.answers" class="lesson-quiz-answer">
                <label @click="check" v-bind:for="card.question">
                    <input type="radio"
                    v-bind:name="card.question"
                    v-bind:value="answer.correct"
                    v-model="this.correct"> 
                    {{answer.answer}}
                </label>
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
  data: function () {
    return {
        quiz: quiz,
        correct: false
    }
  },
  props: ['card'],
  mounted() {
      console.log("hi");
      this.$emit('readyToSwipe', false);
      document.getElementBy
  },
  watch: {
    card: function() {
        console.log(this.card);
    }
  },
  methods: {
    finish() {
       this.$router.push({name: 'LessonTitle'});
    },
    check() {
        this.$emit('readyToSwipe', this.correct);
    }

  }
}
</script>
<style>

</style>
