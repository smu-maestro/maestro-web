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

export default {
  name: 'LessonQuiz',
  data: function () {
    return {
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
input[type="radio"] {
    checked:false; 
}
</style>
