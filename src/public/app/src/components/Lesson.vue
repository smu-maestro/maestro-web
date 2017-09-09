<template>
  <div class="lesson">
    <h1 class="lesson-header">Lesson {{ num }}</h1>
    <p class="lesson-text"> {{ text }}</p>
    <button @click="next">Next</button>
  </div>
</template>

<script>
export default {
  name: 'lesson',
  data () {
    return {
      num: 1,
      words: '',
      text: 'In order to begin learning music, you need to learn the staff. Don\'t know what this is? You\'ve probably seen it. A staff is a set of 5 lines equally spaced together. Music notes are placed on these lines to form music. The position on the staff determines the pitch of the note.',
      wordLength: 0
    }
  },
  mounted () {
    words = text.slice(" ");
    wordLength = words.length; 
    console.log(words);
  },
  methods:{
    next() {
       this.$router.push({name: 'Quiz'});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
