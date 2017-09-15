<template>
  <div class="site-header">
    <div id="progressBar">
        <circle></circle>
        <div id="bar" @click="move">
            <img class="site-brand" src="../assets/maestro-m-icon.svg" width="40" aria-label="Maestro">
        </div>
    </div>
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
  name: 'ProgressBar',
  props: ['num', 'total'],
  data () {
    return {
      lesson:lesson
    }
  },
  watch: { 
    num: function() {
        console.log(this.num/this.total);
        var progress = document.getElementById("bar");
        //progress.style.width= ((this.num/this.total)*100) + "%"; 
        var stop = this.num/this.total*100;
        console.log("stuff" + progress.style.width);
        var width = ((this.num/this.total)-(1/this.total)*100); 
        var id = setInterval(frame,10);
        function frame() {
             console.log("width: " + width);
             console.log("other: " + stop);
           if (width >= stop) {
               clearInterval(id);
           } else {
               width++;
               progress.style.width = width + '%';
           }
       }
  }},
  methods: {
    move() {
       var elem = document.getElementById("bar");
       var width = 1; 
       var id = setInterval(frame,10);
                 
       function frame() {
           if (width >= 100) {
               clearInterval(id);
           } else {
               width++;
               elem.style.width = width + '%';
           }
       }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#progressBar {
    width:100%;
    background-color:grey;

}

#bar {
    width:1%;
    height: 40px;
    background-color:green;
}

.site-header {
    padding: 1rem 1rem 0 1rem;
}

.site-brand {
    padding:0.5rem;
}


</style>
