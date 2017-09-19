<template>
  <div id="app">
	<header class="site-header">
		<img class="site-brand" src="assets/maestro-m-icon.svg" width="40" aria-label="Maestro">
	</header>
    <router-view></router-view>
  </div>
</template>

<script>
		
		/*query.find({
			success: function(results) {
				
			},
			error: function(error) {

			}
		});*/

export default {
	name: 'app',
	data: {
		results: []
	},

}
</script>

<style>
@media screen and (min-width: 1000px) {
    body {
        background-color: #333;
				background-image: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
				url('assets/piano.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .table-of-contents {
        background: none;
    }
}
</style>