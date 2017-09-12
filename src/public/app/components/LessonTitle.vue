<template>
  <div class="lesson-title">
    <h1>Lesson {{ num }}</h1>
    <h3>{{ name }}</h3>
    <button @click="next">Next</button>

  </div>
</template>

<script>
export default {
  name: 'LessonTitle',
  data () {
    return {
      num: 1,
      name: 'Staff and Notes'
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

</style>
