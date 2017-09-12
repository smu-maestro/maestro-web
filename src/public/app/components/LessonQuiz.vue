<template>
  <div class="quiz">
    <h1>{{ quiz.title }}</h1>
        <div v-for="(question, i) in quiz.questions">
            <div v-show="i === questionIndex">
                <h2>{{ question.text }}</h2>
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
                <button v-if="questionIndex > 0" v-on:click="prev"> prev </button>
                <button v-on:click="next"> next </button>
            </div>
        </div>
        <div v-show="questionIndex ===  quiz.questions.length">
            <h2> You finished the quiz </h2>
            <p> Your score is {{ score() }}/{{quiz.questions.length}} </p>
            <button @click="finish">Finish</button>
        </div>
  </div>
</template>

<script>

var quiz = {
    title: 'Lesson 1',
    questions: [
        {
            text: "Multiple choice question 1",
            answers: [
                {text: 'correct choice answer 1', correct: true},
                {text: 'multiple choice answer 2', correct: false},
                {text: 'multiple choice answer 3', correct: false},
                {text: 'multiple choice answer 4', correct: false},

            ]
        },
        {
            text: "Multiple choice question 2",
            answers: [
                {text: 'multiple choice answer 1', correct: false},
                {text: 'correct choice answer 2', correct: true},
                {text: 'multiple choice answer 3', correct: false},
                {text: 'multiple choice answer 4', correct: false},

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
       this.$router.push({name: 'Home'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
    list-style-type:none;
}
</style>
