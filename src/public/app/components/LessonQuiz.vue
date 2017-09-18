<template>
  <div class="quiz">
    <h1>{{ quiz.title }}</h1>
        <div v-show="counter === 0">
        <div v-for="(question, i) in quiz.questions">
            <h2>{{ question.text }}</h2>
            <ol>
                <li v-for="answer in question.answers">
                        <input name="lessquiz" id="i" type="radio" 
                                v-bind:value="answer.correct" 
                                v-model="userAnswer" >
                        <label> {{ answer.text }} </label> 
                            
                </li>
            </ol>
            <button v-on:click="counter += 1">Submit</button>
        </div>
        </div>
        <div v-show="counter === 1">
            <h2> You finished the quiz </h2>
            <div v-show="userAnswer == true">
                <h3> Correct! </h3>
                <button @click="finish">Finish</button>
            </div>
            <div v-show="userAnswer == false">
                <h3> Try Again! </h3>
                <button v-on:click="counter -= 1">Go Back</button>
            </div>
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
                {text: 'multiple choice answer 4', correct: false}

            ]
        }
    ]
};

export default {
  name: 'LessonQuiz',
  data () {
    return {
        counter: 0,
        quiz: quiz,
        questionIndex: 0,
        userAnswer: false
    }
  },
  methods: {
    score: function() {
            return this.userAnswer;
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
