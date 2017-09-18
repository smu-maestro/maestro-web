<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const Parse = require('parse');
Parse.initialize('maestro', 'orange');
Parse.serverURL = 'http://maestro.dev:3308/parse';

var query = new Parse.Query('lesson');
query.find().then((results) => {
	results.forEach((result)=> {
		console.log(result.id);
	});
});
export default {
	name: 'app',
	data: {
		message: 'Vue Works!'
	},
}
</script>

<style>
@import './assets/normalize.css';
html {
	height: 100%;
}

body {
	min-height: 100%;
	font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6, p, ul, ol {
	margin: 1rem 0;
}

a:link, a:active, a:visited {
	color: #000;
}

.invert a:link, .invert a:active, .invert a:visited {
	color: #fff;
}

.inline li {
    display: inline;
}

.invert {
	background-color: #000;
	color: #fff;
}

.abovefold {
	height: 100vh;
	display: flex;
	flex-direction: column;
  padding: 0 1rem 1rem;
}

.button {
	font-family: 'Montserrat', sans-serif;
	display: inline-block;
	border: none;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
}

.default-button, a.default-button {
	text-transform: uppercase;
	background: #000;
	color: #fff;
	padding: 0.5rem;
}

.invert .default-button, .invert a.default-button {
	background: #fff;
	color: #000;
}

.link-button {
	display: inline;
	border-bottom: 3px solid rgba(0,0,0,0.2);
}

.big-button {
	font-size: 1.15rem;
}

.default-button.big-button {
	padding: 1rem;
}

.block-button {
	display: block;
	margin: 1rem 0;
}

.button[disabled] {
	cursor: default;
}
</style>