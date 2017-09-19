<template>
  <div class="lesson-completion">
        <h1>Congrats!</h1>
        <h2>You've finished the lesson.</h2>
        <button @click="finish">Done</button>
  </div>
</template>

<script>
export default {
  name: 'Completion',
  data () {
    return {
    }
  },
  methods:{
    finish() {
       this.$router.push({name: 'Home'});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
