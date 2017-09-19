<template>
  <div class="completion">
      <section class="lesson">
        <div class="lesson-content-card">
          <div class="lesson-content">
            <img src="../assets/noun_954148.png" width="200" aria-label="Maestro" class="lesson-img">
            <h2 class="lesson-content-title">Congrats!<br>You completed<br>Lesson {{ num }} </h2>
          </div>
          <div class="lesson-content-card-bar">
                <button class="button link-button big-button" @click="finish">Done</button>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Completion',
  data:function () {
    return {
    }
  },
  props: ['num'],
  methods:{
    finish() {
       this.$router.push({name: 'Home'});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lesson {
  text-align:center;
}
</style>
