<template>
    <div class="progress-bar" v-bind:style="{ width: width+'%' }"></div>
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
  name: 'ProgressBar',
  props: ['num', 'total'],
  data:function () {
    return {
      lesson: lesson,
      width: 0
    }
  },
watch: { 
  num: function() {
    this.width = (this.num/this.total*100);
  }
},
methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-bar {
    background-color:black;
    height:3px;
    position:fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out width;
}
</style>
