<template>
  <div class="above-fold">
    	<header class="site-header">
				<progress-bar></progress-bar>
			</header>
      <section class="lesson">
        <div class="lesson-content-card">
          <h2 class="lesson-content-detail">Introduction · Lesson {{ lesson.num }}</h2>
          <h1 class="lesson-content-title">{{ lesson.title }}</h1>
          <div class="lesson-content-image">
							<img v-if="lesson.content.img"  :src= "lesson.content.img" class="lesson-img">
					</div>
          <div class="lesson-body">
            <p class="lesson-content-text"> {{ lesson.content.text }}</p>
            <audio class="lesson-content-audio" v-if="lesson.content.audio" id="player" controls>
              <source :src="lesson.content.audio" type="audio.mp3">
            </audio>
          </div>
          <div class="lesson-content-card-bar">
            <button class="button link-button big-button" @click="next">Next</button>
          </div>
        </div>
    </section>
  </div>
</template>



<script>
import ProgressBar from './ProgressBar.vue';

var lesson = {
    content : {
      text:"Hello this is our lesson text.",
    },
    title: "Staff and ",
    icon: "",
    num: 1 
};
export default {
  name: 'lesson',
  data: function () {
    return {
      lesson:lesson
    }
  },

  methods:{
    next() {
       this.$router.push({name: 'Quiz'});
    }
  },
  components: {
    'progress-bar': ProgressBar
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

.lesson-content-card {
	flex: 1;
	padding: 3rem 1rem 0;
	background-color: #F3F3F3;
	display: flex;
	flex-direction: column;
}

.lesson-content-card-content {
	flex: 1;
}

.lesson-content-card-bar {
	flex: 0;
	padding: 0 0 1rem;
	text-align: right;
}

.lesson-content-detail {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 400;
	opacity: 0.6;
	margin-bottom: 0.5rem;
}

.lesson-content-title {
	font-family: 'Montserrat', sans-serif;
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 0;
}

.button {
  background-color:transparent;
}
</style>
