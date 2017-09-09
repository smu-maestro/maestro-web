<template>
  <div class="home">
    <h1>Maestro</h1>
    <button @click="next"><h1 id="titlerino">GET STARTED!</h1></button>

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
#foot{
	position: fixed;
	bottom: 2%;
	width: 100%;
}

#cent{
	width: 50%;
	margin: 0 auto;
}

#titlerino{
	font-family: 'Montserrat', sans-serif;
}

.home{
	background-size: 100%;
}




.btn-outline{
	background-color: white;
	transition: .5s;
}

.btn-primary.btn-outline {
	color: #000000;
}

.btn.btn-primary.btn-outline:hover{
	background-color: black;
	color: #ffffff;
}
/*
#myDIV {
    margin: auto;
    -webkit-animation: mymove 5s infinite;
    animation: mymove 6s infinite;
}
*/

/* Chrome, Safari, Opera */
@-webkit-keyframes mymove {
    50% {-webkit-transform: scale(1.2,1.2);}
}


@keyframes mymove {
    50% {transform: scale(1.2,1.2);}
}

#title1{
	padding-top: 0.1em;
}

#intro{
	margin:auto;
	padding-top: 15%;
	text-align: center;
}
</style>
