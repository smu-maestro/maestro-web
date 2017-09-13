<template>
  <div class="home">
    <div class="lesson-title-card">
      <h1 class="title">Maestro</h1>
      <h3>Music. Simplified.</h3>
      <div>
        <img width="200" src="../assets/piano.jpg">
      </div>
      <button class="invert default-button" @click="next"><h1>Begin</h1></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    next() {
       this.$router.push({name: 'LessonTitle'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
	font-family: 'Montserrat', sans-serif;
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 0;
}
.home {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 1rem 1rem;
}

.lesson-title-card {
	flex: 1;
	padding: 3rem 1rem 0;
	background-color: #F3F3F3;
	display: flex;
	flex-direction: column;
}
</style>