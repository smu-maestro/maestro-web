<template>
  <div class="above-fold">
    	<header class="site-header">
				<img class="site-brand" src="../assets/maestro-m-icon.svg" width="40" aria-label="Maestro">
			</header>
      <section class="lesson">
        <div class="lesson-title-card">
          <h2 class="lesson-title-detail">Introduction · Lesson {{ lesson.num }}</h2>
          <h1 class="lesson-title-text">{{ lesson.title }}</h1>
          <div class="lesson-title-icon">
							<img src="../assets/quarter-note.png" width="128">
					</div>
          <div class="lesson-title-card-bar">
            <button class="button link-button big-button" @click="next">Next</button>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
var lesson = {
    content : {
      text:"Hello"
    },
    title: "Staff and ",
    icon: "",
    num: 1 
};

export default {
  name: 'LessonTitle',
  data () {
    return {
      lesson:lesson
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

.lesson {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 1rem 1rem;
}

.lesson-title-card {
	flex: 1;
	padding: 3rem 1rem 0;
	background-color: #F3F3F3;
	display: flex;
	flex-direction: column;
}

.lesson-title-card-content {
	flex: 1;
}

.lesson-title-card-bar {
	flex: 0;
	padding: 0 0 1rem;
	text-align: right;
}

.lesson-title-detail {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 400;
	opacity: 0.6;
	margin-bottom: 0.5rem;
}

.lesson-title-text {
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
