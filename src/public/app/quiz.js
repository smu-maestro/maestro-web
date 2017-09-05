//Used this to learn Vuejs since I'm new to Vue
//https://medium.com/@rap2h/create-a-quiz-with-vue-js-ed1e8e0e8294

var quiz = {
    title: 'Lesson 1',
    questions: [
        {
            text: "Multiple choice question 1",
            answers: [
                {text: 'correctm choice answer 1', correct: true},
                {text: 'multiple choice answer 2'},
                {text: 'multiple choice answer 3'},
                {text: 'multiple choice answer 4'},

            ]
        },
        {
            text: "Multiple choice question 2",
            answers: [
                {text: 'multiple choice answer 1'},
                {text: 'correctm choice answer 2', correct: true},
                {text: 'multiple choice answer 3'},
                {text: 'multiple choice answer 4'},

            ]
        },
        {
            text: "Multiple choice question 3",
            answers: [
                {text: 'multiple choice answer 1'},
                {text: 'multiple choice answer 2'},
                {text: 'correctm choice answer 3', correct: true},
                {text: 'multiple choice answer 4'},

            ]
        }
    ]
};

var app = new Vue({
    el: '#quiz',
    data: {
        quiz: quiz,
        questionIndex: 0,
        userAnswers: Array(quiz.questions.length).fill(false)
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
        }
    }
});